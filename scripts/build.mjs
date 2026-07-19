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
  if (model.tokens.length < 71) fail(`Expected ≥71 tokens, found ${model.tokens.length}`);

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
  outputs.set("dist/nucleus.manifest.json", JSON.stringify(manifest, null, 2) + "\n");
  outputs.set("demo/nucleus.css", bundles["nucleus.css"]);
  outputs.set("llms.txt", buildLlmsTxt(manifest));
  outputs.set("llms-full.txt", buildLlmsFull(manifest));
  outputs.set("CLASS_REFERENCE.md", buildClassReference(manifest));
  outputs.set("COMPONENT_REFERENCE.md", buildComponentReference(manifest));

  // --- Modules must partition the source (no class lost or duplicated) ---
  const moduleClassUnion = new Set();
  for (const moduleName of ["reset", "utilities", "components", "themes"]) {
    const css = bundles[`${moduleName}.css`];
    for (const m of css.matchAll(/\.(n-[A-Za-z0-9_-]+)/g)) moduleClassUnion.add(m[1]);
  }
  for (const cls of model.classes) {
    if (!moduleClassUnion.has(cls)) fail(`Class .${cls} is not in any module bundle`);
  }

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
  console.log("✓ manifest + llms.txt + llms-full.txt + CLASS_REFERENCE.md + COMPONENT_REFERENCE.md");
  console.log(checkOnly ? "✓ All generated files are in sync" : "✓ Build complete");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
