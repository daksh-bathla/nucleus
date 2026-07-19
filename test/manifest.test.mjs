import test from "node:test";
import assert from "node:assert/strict";

import { loadModel } from "../scripts/lib/parse.mjs";
import { buildManifest } from "../scripts/lib/manifest.mjs";
import { bundleFiles } from "../scripts/lib/build-css.mjs";
import { validateContent } from "../scripts/lib/validate-markup.mjs";

const model = await loadModel();
const { manifest, errors } = buildManifest(model, "0.0.0-test");
const known = new Set(model.classes);

test("no curated component references an unknown class", () => {
  assert.deepEqual(errors, []);
});

test("source has the expected public surface", () => {
  assert.ok(model.classes.length >= 580, `only ${model.classes.length} classes`);
  assert.equal(model.tokens.length, 76);
});

test("manifest lists every source class and nothing invented", () => {
  const manifestClasses = new Set(manifest.classes.map((c) => c.name));
  for (const c of model.classes) assert.ok(manifestClasses.has(c), `manifest missing .${c}`);
  for (const c of manifestClasses) assert.ok(known.has(c), `manifest invented .${c}`);
  assert.equal(manifest.classes.length, model.classes.length);
});

test("every documented component example uses only real classes", () => {
  assert.ok(manifest.components.length >= 30);
  for (const c of manifest.components) {
    const bad = validateContent(c.example, known);
    assert.equal(bad.length, 0, `${c.name} example: ${bad.map((b) => b.className).join(", ")}`);
  }
});

test("module bundles partition every class (none lost or orphaned)", () => {
  const bundles = bundleFiles(model, "0.0.0-test");
  const union = new Set();
  for (const name of ["reset", "utilities", "components", "themes"]) {
    for (const m of bundles[`${name}.css`].matchAll(/\.(n-[A-Za-z0-9_-]+)/g)) union.add(m[1]);
  }
  for (const c of model.classes) assert.ok(union.has(c), `.${c} missing from all modules`);
});

test("manifest metadata is coherent", () => {
  assert.equal(manifest.prefix, "n-");
  assert.equal(manifest.package, "@navital/nucleus-css");
  assert.equal(manifest.counts.classes, model.classes.length);
  assert.equal(manifest.counts.tokens, model.tokens.length);
  assert.ok(manifest.breakpoints.length >= 5);
  assert.ok(manifest.themes.includes("ocean"));
});
