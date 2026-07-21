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
  assert.ok(model.classes.length >= 690, `only ${model.classes.length} classes`);
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

test("built CSS and manifest expose the same public classes", () => {
  const bundles = bundleFiles(model, "0.0.0-test");
  const built = new Set([...bundles["nucleus.css"].matchAll(/\.(n-[A-Za-z0-9_-]+)/g)].map((match) => match[1]));
  const documented = new Set(manifest.classes.map((entry) => entry.name));
  assert.deepEqual([...built].sort(), [...documented].sort());
});

test("manifest metadata is coherent", () => {
  assert.equal(manifest.prefix, "n-");
  assert.equal(manifest.package, "@navital/nucleus-css");
  assert.equal(manifest.counts.classes, model.classes.length);
  assert.equal(manifest.counts.tokens, model.tokens.length);
  assert.ok(manifest.breakpoints.length >= 5);
  assert.ok(manifest.themes.includes("ocean"));
  assert.equal(manifest.schemaVersion, "2.0.0");
  assert.deepEqual(manifest.architecture.layers, ["reset", "tokens", "base", "layout", "components", "utilities", "states", "themes"]);
  assert.equal(manifest.classes.find((entry) => entry.name === "n-d-flex").replacement, "n-flex");
  assert.equal(manifest.classes.find((entry) => entry.name === "n-d-flex").deprecated, true);
  assert.equal(manifest.classes.find((entry) => entry.name === "n-p-4").scaleValue, "1.5rem");
  assert.equal(manifest.tokens.find((entry) => entry.name === "--n-space-4").category, "spacing");
  assert.equal(manifest.spacingScale.tailwindCompatible, false);
});

test("semantic variant families are complete", () => {
  const classes = new Set(manifest.classes.map((entry) => entry.name));
  const semantic = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
  for (const variant of semantic) {
    for (const prefix of ["n-text", "n-btn", "n-btn-outline", "n-bg", "n-border", "n-alert", "n-badge"]) {
      assert.ok(classes.has(`${prefix}-${variant}`), `missing ${prefix}-${variant}`);
    }
  }
});

test("reported overlapping utilities are classified honestly", () => {
  const byName = new Map(manifest.classes.map((entry) => [entry.name, entry]));
  assert.equal(byName.get("n-d-flex").aliasOf, "n-flex");
  for (const name of ["n-hidden", "n-d-none", "n-center", "n-place-center", "n-auto-grid", "n-grid-auto-fit"]) {
    assert.equal(byName.get(name).aliasOf, undefined, `${name} should not be mislabeled as an alias`);
    assert.ok(byName.get(name).gotchas.length > 0, `${name} needs behavioral guidance`);
  }
});

test("every manifest class record follows the schema", () => {
  const classNames = new Set(manifest.classes.map((entry) => entry.name));
  const tokenNames = new Set(manifest.tokens.map((entry) => entry.name));
  const roles = new Set(["utility", "component", "component-part", "variant", "size", "layout", "state", "theme", "accessibility"]);
  for (const entry of manifest.classes) {
    assert.equal(entry.class, entry.name);
    assert.ok(roles.has(entry.role), `${entry.name} has invalid role ${entry.role}`);
    assert.ok(manifest.architecture.layers.includes(entry.layer), `${entry.name} has invalid layer ${entry.layer}`);
    assert.equal(typeof entry.deprecated, "boolean");
    assert.ok(Array.isArray(entry.gotchas));
    assert.equal(typeof entry.responsive, "boolean");
    for (const token of entry.tokenReferences) assert.ok(tokenNames.has(token), `${entry.name} references unknown ${token}`);
    assert.ok(Array.isArray(entry.customPropertyReferences));
    if (entry.aliasOf) assert.ok(classNames.has(entry.aliasOf), `${entry.name} aliases unknown ${entry.aliasOf}`);
  }
});

test("responsive and theme metadata remain accurate", () => {
  const byName = new Map(manifest.classes.map((entry) => [entry.name, entry]));
  assert.equal(byName.get("n-col-md-6").responsive, true);
  assert.equal(byName.get("n-d-lg-flex").responsive, true);
  assert.equal(byName.get("n-btn-lg").responsive, false);
  assert.equal(byName.get("n-dark-mode").role, "theme");
  assert.equal(byName.get("n-is-loading").role, "state");
  assert.ok(byName.get("n-auto-grid").customPropertyReferences.includes("--n-grid-min"));
});
