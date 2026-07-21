import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { ROOT } from "../scripts/lib/parse.mjs";

const cli = join(ROOT, "bin", "nucleus.mjs");
const runJson = (...args) => JSON.parse(execFileSync(process.execPath, [cli, ...args], { cwd: ROOT, encoding: "utf8" }));

test("structured class search returns alias metadata", () => {
  const results = runJson("search", "d-flex");
  const entry = results.find((candidate) => candidate.name === "n-d-flex");
  assert.equal(entry.deprecated, true);
  assert.equal(entry.replacement, "n-flex");
});

test("structured component lookup returns verified markup", () => {
  const component = runJson("component", "n-navbar");
  assert.equal(component.name, "n-navbar");
  assert.match(component.example, /aria-current="page"/);
});

test("structured token lookup exposes exact scale values", () => {
  const tokens = runJson("token", "--n-space-4");
  assert.deepEqual(tokens.map(({ name, value, category }) => ({ name, value, category })), [
    { name: "--n-space-4", value: "1.5rem", category: "spacing" },
  ]);
});

test("deprecated command lists only compatibility aliases", () => {
  const entries = runJson("deprecated");
  assert.ok(entries.length >= 2);
  assert.ok(entries.every((entry) => entry.deprecated));
  assert.ok(entries.some((entry) => entry.name === "n-d-flex"));
});

test("CLI validation warns on aliases but fails only unknown classes", async () => {
  const dir = await mkdtemp(join(tmpdir(), "nucleus-validator-"));
  try {
    const legacy = join(dir, "legacy.html");
    await writeFile(legacy, `<div class="n-d-flex"></div>`);
    const warning = spawnSync(process.execPath, [cli, "validate", legacy], { cwd: ROOT, encoding: "utf8" });
    assert.equal(warning.status, 0);
    assert.match(warning.stderr, /Warning: Deprecated Nucleus class: n-d-flex/);
    assert.match(warning.stderr, /Use instead: n-flex/);

    const unknown = join(dir, "unknown.html");
    await writeFile(unknown, `<div class="n-made-up"></div>`);
    const error = spawnSync(process.execPath, [cli, "validate", unknown], { cwd: ROOT, encoding: "utf8" });
    assert.equal(error.status, 1);
    assert.match(error.stderr, /Error: Unknown Nucleus class: n-made-up/);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});
