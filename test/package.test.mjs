import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

import { ROOT } from "../scripts/lib/parse.mjs";

const pkg = JSON.parse(await readFile(join(ROOT, "package.json"), "utf8"));

function targets(exportsObj) {
  const out = [];
  const walk = (v) => {
    if (typeof v === "string") out.push(v);
    else if (v && typeof v === "object") Object.values(v).forEach(walk);
  };
  walk(exportsObj);
  return [...new Set(out)];
}

test("package identity", () => {
  assert.equal(pkg.name, "@navital/nucleus-css");
  assert.equal(pkg.publishConfig.access, "public");
  assert.ok(pkg.style?.endsWith(".css"));
});

test("every exports target resolves to a real file", () => {
  for (const t of targets(pkg.exports)) {
    assert.ok(existsSync(join(ROOT, t.replace(/^\.\//, ""))), `missing export target ${t}`);
  }
});

test("bin file exists and is ESM", async () => {
  const bin = pkg.bin["nucleus-css"];
  assert.ok(existsSync(join(ROOT, bin)));
  const src = await readFile(join(ROOT, bin), "utf8");
  assert.ok(src.startsWith("#!/usr/bin/env node"));
});

test("modular import subpaths are declared", () => {
  for (const sub of ["./reset", "./utilities", "./components", "./themes"]) {
    assert.ok(pkg.exports[sub], `missing subpath export ${sub}`);
  }
});

test("published files list points at things that exist", () => {
  for (const entry of pkg.files) {
    assert.ok(existsSync(join(ROOT, entry)), `files entry missing: ${entry}`);
  }
});

test("required dist artifacts are present", () => {
  for (const f of [
    "dist/nucleus.css",
    "dist/nucleus.min.css",
    "dist/reset.css",
    "dist/utilities.css",
    "dist/components.css",
    "dist/themes.css",
    "dist/nucleus.manifest.json",
  ]) {
    assert.ok(existsSync(join(ROOT, f)), `missing ${f}`);
  }
});
