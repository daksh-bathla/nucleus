#!/usr/bin/env node
import { readFile, readdir, stat, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve, relative, extname } from "node:path";

import { validateContent, knownFromManifest } from "../scripts/lib/validate-markup.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = resolve(HERE, "..");
const SCAN_EXTS = new Set([".html", ".htm", ".jsx", ".tsx", ".js", ".ts", ".vue", ".svelte", ".astro", ".php", ".erb"]);
const IGNORE_DIRS = new Set(["node_modules", ".git", "dist", ".next", "build", "out", "coverage", ".nucleus"]);

async function loadManifest() {
  const path = join(PKG_ROOT, "dist", "nucleus.manifest.json");
  if (!existsSync(path)) {
    console.error("✗ dist/nucleus.manifest.json not found. Run `npm run build` first.");
    process.exit(1);
  }
  return JSON.parse(await readFile(path, "utf8"));
}

async function readPkg() {
  return JSON.parse(await readFile(join(PKG_ROOT, "package.json"), "utf8"));
}

async function collectFiles(target) {
  const info = existsSync(target) ? await stat(target) : null;
  if (!info) return [];
  if (info.isFile()) return [target];
  const out = [];
  for (const entry of await readdir(target)) {
    if (IGNORE_DIRS.has(entry)) continue;
    const full = join(target, entry);
    const s = await stat(full);
    if (s.isDirectory()) out.push(...(await collectFiles(full)));
    else if (SCAN_EXTS.has(extname(entry))) out.push(full);
  }
  return out;
}

async function cmdValidate(args) {
  const targets = args.length ? args : ["."];
  const manifest = await loadManifest();
  const known = knownFromManifest(manifest);

  const files = [];
  for (const t of targets) files.push(...(await collectFiles(resolve(process.cwd(), t))));

  let total = 0;
  let scanned = 0;
  for (const file of files) {
    const content = await readFile(file, "utf8");
    scanned += 1;
    const findings = validateContent(content, known);
    for (const f of findings) {
      total += 1;
      const rel = relative(process.cwd(), file);
      console.error(`Unknown Nucleus class: ${f.className}`);
      if (f.suggestion) console.error(`  Did you mean: ${f.suggestion}?`);
      console.error(`  File: ${rel}`);
      console.error(`  Line: ${f.line}`);
      console.error("");
    }
  }

  if (total === 0) {
    console.log(`✓ No unknown Nucleus classes found (scanned ${scanned} file${scanned === 1 ? "" : "s"}).`);
    return 0;
  }
  console.error(`✗ ${total} unknown Nucleus class${total === 1 ? "" : "es"} in ${scanned} scanned file(s).`);
  return 1;
}

async function cmdAiContext(args) {
  const llms = join(PKG_ROOT, "llms.txt");
  const text = existsSync(llms)
    ? await readFile(llms, "utf8")
    : "llms.txt not found. Run `npm run build`.";
  const outIndex = args.indexOf("--out");
  if (outIndex !== -1 && args[outIndex + 1]) {
    const dest = resolve(process.cwd(), args[outIndex + 1]);
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, text);
    console.log(`✓ Wrote AI context to ${relative(process.cwd(), dest)}`);
  } else {
    process.stdout.write(text);
  }
  return 0;
}

async function cmdInit() {
  const pkg = await readPkg();
  const configPath = resolve(process.cwd(), "nucleus.config.js");
  const contextDir = resolve(process.cwd(), ".nucleus");
  const contextPath = join(contextDir, "ai-context.md");

  const config = `// Nucleus CSS project configuration.
// Consumed by \`npx ${pkg.name} validate\` and AI tooling.
export default {
  package: ${JSON.stringify(pkg.name)},
  prefix: "n-",
  // Directories to validate for unknown Nucleus classes.
  include: ["src", "app", "components", "pages"],
  // Extra project class prefixes the validator should ignore.
  ignore: [],
};
`;

  const llms = join(PKG_ROOT, "llms.txt");
  const context = existsSync(llms) ? await readFile(llms, "utf8") : "";

  if (existsSync(configPath)) {
    console.log("• nucleus.config.js already exists — leaving it untouched.");
  } else {
    await writeFile(configPath, config);
    console.log("✓ Created nucleus.config.js");
  }
  await mkdir(contextDir, { recursive: true });
  await writeFile(contextPath, context);
  console.log("✓ Created .nucleus/ai-context.md");
  console.log("\nPoint your AI assistant at .nucleus/ai-context.md, then run:");
  console.log(`  npx ${pkg.name} validate ./src`);
  return 0;
}

async function cmdManifest() {
  const manifest = await loadManifest();
  process.stdout.write(JSON.stringify(manifest, null, 2) + "\n");
  return 0;
}

async function help() {
  const pkg = await readPkg();
  console.log(`${pkg.name} v${pkg.version} — CLI

Usage:
  npx ${pkg.name} <command> [options]

Commands:
  validate [paths...]   Scan HTML/JSX/TSX/Vue/Svelte for unknown Nucleus classes
                        (defaults to the current directory). Exits non-zero on
                        any unknown class.
  ai-context [--out f]  Print the compact AI context (llms.txt) or write it to a
                        file with --out.
  init                  Create nucleus.config.js and .nucleus/ai-context.md.
  manifest              Print the machine-readable class manifest as JSON.
  help                  Show this help.
  --version             Print the package version.

Examples:
  npx ${pkg.name} validate ./src
  npx ${pkg.name} ai-context --out .nucleus/ai-context.md
`);
  return 0;
}

async function main() {
  const [command, ...args] = process.argv.slice(2);
  switch (command) {
    case "validate":
      process.exit(await cmdValidate(args));
      break;
    case "ai-context":
      process.exit(await cmdAiContext(args));
      break;
    case "init":
      process.exit(await cmdInit());
      break;
    case "manifest":
      process.exit(await cmdManifest());
      break;
    case "--version":
    case "-v": {
      const pkg = await readPkg();
      console.log(pkg.version);
      process.exit(0);
      break;
    }
    case undefined:
    case "help":
    case "--help":
    case "-h":
      process.exit(await help());
      break;
    default:
      console.error(`Unknown command: ${command}\n`);
      await help();
      process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
