import { mkdir, readFile, writeFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname, relative } from "node:path";

import { loadModel, ROOT } from "./lib/parse.mjs";
import { bundleFiles } from "./lib/build-css.mjs";
import { buildManifest } from "./lib/manifest.mjs";
import {
  buildLlmsTxt,
  buildLlmsFull,
  buildClassReference,
  buildComponentReference,
  buildManifestReference,
} from "./lib/docs.mjs";
import { validateContent } from "./lib/validate-markup.mjs";

const checkOnly = process.argv.includes("--check");
const problems = [];
const fail = (msg) => problems.push(msg);

const REQUIRED_SECTIONS = [
  "Container System",
  "Grid System",
  "Buttons",
  "Forms",
  "Intrinsic Layouts",
  "Content & Prose",
  "Extended Components",
  "State Utilities",
  "Themes & Density",
  "Accessibility & Print",
  "Dark Mode",
];
const REQUIRED_LAYERS = ["reset", "tokens", "base", "layout", "components", "utilities", "states", "themes"];

async function walk(dir, exts) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry);
    const info = await stat(full);
    if (info.isDirectory()) out.push(...(await walk(full, exts)));
    else if (exts.some((e) => entry.endsWith(e))) out.push(full);
  }
  return out;
}

async function main() {
  const pkg = JSON.parse(await readFile(join(ROOT, "package.json"), "utf8"));
  const version = pkg.version;
  const model = await loadModel();

  // --- Structural checks on the source ---
  const openCount = (model.source.match(/{/g) || []).length;
  const closeCount = (model.source.match(/}/g) || []).length;
  if (openCount !== closeCount) fail(`CSS braces unbalanced (${openCount} { vs ${closeCount} })`);
  for (const section of REQUIRED_SECTIONS) {
    if (!model.source.includes(section)) fail(`Missing CSS section: ${section}`);
  }
  if (model.classes.length < 580) fail(`Expected ≥580 classes, found ${model.classes.length}`);
  if (model.tokens.length < 76) fail(`Expected ≥76 tokens, found ${model.tokens.length}`);
  if (JSON.stringify(model.layers) !== JSON.stringify(REQUIRED_LAYERS)) {
    fail(`Cascade layer order must be: ${REQUIRED_LAYERS.join(", ")}`);
  }
  for (const section of model.sections) {
    if (section.layers.length === 0) fail(`CSS section ${section.num} (${section.title}) is not assigned to a cascade layer`);
  }
  if (model.layers.indexOf("utilities") < model.layers.indexOf("components")) {
    fail("Utilities must have higher cascade priority than components");
  }

  // --- Manifest (also validates curated classes exist) ---
  const { manifest, errors } = buildManifest(model, version);
  for (const e of errors) fail(e);

  const known = new Set(model.classes);

  // --- Component examples must use only real classes ---
  for (const c of manifest.components) {
    for (const f of validateContent(c.example, known)) {
      fail(`Component "${c.name}" example uses undefined .${f.className}`);
    }
  }

  // --- Assemble every output ---
  const outputs = new Map();
  const bundles = bundleFiles(model, version);
  for (const [name, content] of Object.entries(bundles)) {
    outputs.set(`dist/${name}`, content);
  }
  const manifestJson = JSON.stringify(manifest, null, 2) + "\n";
  const llmsTxt = buildLlmsTxt(manifest);
  const llmsFull = buildLlmsFull(manifest);
  const classReference = buildClassReference(manifest);
  const componentReference = buildComponentReference(manifest);
  const manifestReference = buildManifestReference(manifest);

  outputs.set("dist/nucleus.manifest.json", manifestJson);
  outputs.set("demo/nucleus.css", bundles["nucleus.css"]);
  outputs.set("llms.txt", llmsTxt);
  outputs.set("llms-full.txt", llmsFull);
  outputs.set("CLASS_REFERENCE.md", classReference);
  outputs.set("COMPONENT_REFERENCE.md", componentReference);
  outputs.set("MANIFEST.md", manifestReference);
  outputs.set("demo/nucleus.manifest.json", manifestJson);
  outputs.set("demo/llms.txt", llmsTxt);
  outputs.set("demo/llms-full.txt", llmsFull);
  outputs.set("demo/CLASS_REFERENCE.md", classReference);
  outputs.set("demo/COMPONENT_REFERENCE.md", componentReference);
  outputs.set("demo/MANIFEST.md", manifestReference);

  // --- Modules must partition the source (no class lost or duplicated) ---
  const moduleClassUnion = new Set();
  for (const moduleName of ["reset", "utilities", "components", "themes"]) {
    const css = bundles[`${moduleName}.css`];
    for (const m of css.matchAll(/\.(n-[A-Za-z0-9_-]+)/g)) moduleClassUnion.add(m[1]);
  }
  for (const cls of model.classes) {
    if (!moduleClassUnion.has(cls)) fail(`Class .${cls} is not in any module bundle`);
  }

  // --- Handwritten claims and repository identity must not drift ---
  const canonicalRepository = manifest.repository;
  const packageRepository = String(pkg.repository?.url || "")
    .replace(/^git\+/, "")
    .replace(/\.git$/, "");
  if (packageRepository !== canonicalRepository) {
    fail(`package.json repository must be ${canonicalRepository}`);
  }
  if (pkg.homepage !== `${canonicalRepository}#readme`) fail(`package.json homepage must be ${canonicalRepository}#readme`);
  if (pkg.bugs?.url !== `${canonicalRepository}/issues`) fail(`package.json bugs URL must be ${canonicalRepository}/issues`);

  const publicClaimFiles = [
    "README.md",
    "AI_USAGE.md",
    "CHANGELOG.md",
    "RELEASE.md",
    "CONTRIBUTING.md",
    "ARCHITECTURE.md",
    "NAMING.md",
    "MIGRATION.md",
    "COMING_FROM_TAILWIND.md",
    "COMING_FROM_BOOTSTRAP.md",
    "docs/adr/0001-spacing-scale.md",
    ...(await walk(join(ROOT, "demo"), [".html", ".md"])).map((file) => relative(ROOT, file)),
    ...(await walk(join(ROOT, "examples"), [".html", ".md", ".jsx", ".tsx"])).map((file) => relative(ROOT, file)),
  ];
  for (const rel of publicClaimFiles) {
    const file = join(ROOT, rel);
    if (!existsSync(file)) continue;
    const text = await readFile(file, "utf8");
    const repositoryMatches = [...text.matchAll(/https:\/\/github\.com\/[A-Za-z0-9_-]+\/nucleus(?:#readme)?/g)];
    for (const match of repositoryMatches) {
      if (!match[0].startsWith(canonicalRepository)) fail(`${rel} uses noncanonical repository URL ${match[0]}`);
    }
  }

  const readClaim = async (rel) => readFile(join(ROOT, rel), "utf8");
  const readme = await readClaim("README.md");
  for (const match of readme.matchAll(/\b(\d+)(?: generated| documented)? classes\b/g)) {
    if (Number(match[1]) !== manifest.counts.classes) fail(`README.md class count is ${match[1]}, expected ${manifest.counts.classes}`);
  }
  for (const match of readme.matchAll(/\b(\d+) (?:design )?tokens\b/g)) {
    if (Number(match[1]) !== manifest.counts.tokens) fail(`README.md token count is ${match[1]}, expected ${manifest.counts.tokens}`);
  }
  const homepage = await readClaim("demo/index.html");
  if (!homepage.includes(`${manifest.counts.classes} documented classes`)) fail("demo/index.html class claim is stale");
  if (!homepage.includes(`<dt>${manifest.counts.classes}</dt><dd>classes</dd>`)) fail("demo/index.html class metric is stale");
  if (!homepage.includes(`<dt>${manifest.counts.tokens}</dt><dd>tokens</dd>`)) fail("demo/index.html token metric is stale");
  if (!homepage.includes(`<dt>${manifest.counts.components}</dt><dd>components</dd>`)) fail("demo/index.html component metric is stale");
  if (!homepage.includes(`Version ${version}.`)) fail("demo/index.html package version is stale");
  if (!homepage.includes(`${manifest.package}@${version}/dist/nucleus.min.css`)) fail("demo/index.html pinned CDN version is stale");
  const patterns = await readClaim("demo/patterns.html");
  if (!patterns.includes(`data-nucleus-count="classes">${manifest.counts.classes}<`)) fail("demo/patterns.html class metric is stale");

  // --- Demo/example markup checks (undefined classes + broken local links) ---
  const htmlFiles = [
    ...(await walk(join(ROOT, "demo"), [".html"])),
    ...(await walk(join(ROOT, "examples"), [".html"])),
  ];
  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    for (const f of validateContent(html, known)) {
      fail(`${relative(ROOT, file)}:${f.line} uses undefined .${f.className}`);
    }
    for (const m of html.matchAll(/href="([^"#?]+\.html)"/g)) {
      if (/^[a-z][a-z0-9+.-]*:\/\//i.test(m[1])) continue;
      const linked = join(dirname(file), m[1]);
      if (!existsSync(linked)) fail(`${relative(ROOT, file)} links to missing ${m[1]}`);
    }
  }

  // --- Write or verify ---
  if (checkOnly) {
    for (const [rel, content] of outputs) {
      const abs = join(ROOT, rel);
      if (!existsSync(abs)) {
        fail(`Missing generated file: ${rel}`);
        continue;
      }
      if ((await readFile(abs, "utf8")) !== content) fail(`Out of sync: ${rel} (run npm run build)`);
    }
  } else if (problems.length === 0) {
    for (const [rel, content] of outputs) {
      const abs = join(ROOT, rel);
      await mkdir(dirname(abs), { recursive: true });
      await writeFile(abs, content);
    }
  }

  // --- Report ---
  if (problems.length) {
    for (const p of problems) console.error(`✗ ${p}`);
    console.error(`\n✗ ${problems.length} problem(s) found`);
    process.exitCode = 1;
    return;
  }

  const full = bundles["nucleus.css"];
  const min = bundles["nucleus.min.css"];
  console.log(
    `✓ ${model.classes.length} classes · ${model.tokens.length} tokens · ${manifest.counts.components} documented components`,
  );
  console.log(
    `✓ nucleus.css ${(Buffer.byteLength(full) / 1024).toFixed(1)} KB → nucleus.min.css ${(Buffer.byteLength(min) / 1024).toFixed(1)} KB`,
  );
  console.log("✓ modules: reset, utilities, components, themes (+ .min)");
  console.log("✓ manifest + llms.txt + llms-full.txt + class/component/schema references");
  console.log(checkOnly ? "✓ All generated files are in sync" : "✓ Build complete");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
