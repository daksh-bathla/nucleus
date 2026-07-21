import test from "node:test";
import assert from "node:assert/strict";

import { loadModel } from "../scripts/lib/parse.mjs";
import { bundleFiles } from "../scripts/lib/build-css.mjs";
import { buildManifest } from "../scripts/lib/manifest.mjs";

const model = await loadModel();
const { manifest } = buildManifest(model, "0.0.0-test");

test("cascade layers put utilities above components", () => {
  assert.deepEqual(model.layers, ["reset", "tokens", "base", "layout", "components", "utilities", "states", "themes"]);
  assert.ok(model.layers.indexOf("utilities") > model.layers.indexOf("components"));
  assert.deepEqual(model.sectionOf.get("n-navbar").layers, ["components"]);
  assert.deepEqual(model.sectionOf.get("n-p-2").layers, ["utilities"]);
  assert.match(model.selfCss.get("n-navbar"), /padding: 0\.75rem 1\.25rem/);
  assert.equal(manifest.classes.find((entry) => entry.name === "n-p-2").scaleValue, "0.5rem");
});

test("every source section is assigned to a named layer", () => {
  for (const section of model.sections) {
    assert.ok(section.layers.length > 0, `section ${section.num} has no layer`);
    for (const layer of section.layers) assert.ok(model.layers.includes(layer), `unknown layer ${layer}`);
  }
  for (const section of model.sections.filter((entry) => entry.layers.includes("utilities"))) {
    assert.ok(!section.text.includes("!important"), `utility section ${section.num} uses !important`);
  }
});

test("standalone bundles repeat the public layer order", () => {
  const bundles = bundleFiles(model, "0.0.0-test");
  const statement = `@layer ${model.layers.join(", ")};`;
  for (const name of ["reset", "utilities", "components", "themes"]) {
    assert.ok(bundles[`${name}.css`].includes(statement), `${name} bundle lacks layer order`);
  }
});

test("public class selectors remain namespaced except scoped active compatibility", () => {
  const withoutCommentsOrStrings = model.source
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, "");
  const selectors = new Set([...withoutCommentsOrStrings.matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)/g)].map((match) => match[1]));
  for (const selector of selectors) {
    assert.ok(selector.startsWith("n-") || selector === "active", `unprefixed public class .${selector}`);
  }
  for (const match of model.source.matchAll(/([^{}]+\.active[^{}]*)\{/g)) {
    assert.match(match[1], /\.n-(?:nav-link|tab|segmented-item|combobox-option)\.active/);
  }
});

test("canonical state selectors and semantic attributes remain wired", () => {
  for (const name of ["n-is-active", "n-is-selected", "n-is-expanded", "n-is-open", "n-is-loading", "n-is-disabled", "n-is-dragging"]) {
    assert.ok(model.classes.includes(name), `missing .${name}`);
    const entry = manifest.classes.find((candidate) => candidate.name === name);
    assert.equal(entry.category, "state", `.${name} has the wrong category`);
    assert.equal(entry.role, "state", `.${name} has the wrong role`);
    assert.equal(entry.layer, "states", `.${name} has the wrong layer`);
  }
  for (const name of ["n-active", "n-selected", "n-expanded", "n-loading", "n-disabled", "n-dragging"]) {
    const entry = manifest.classes.find((candidate) => candidate.name === name);
    assert.equal(entry.category, "state", `.${name} compatibility alias has the wrong category`);
    assert.equal(entry.layer, "states", `.${name} compatibility alias has the wrong layer`);
  }
  for (const selector of ['aria-current="page"', 'aria-selected="true"', 'aria-expanded="true"', 'aria-disabled="true"']) {
    assert.ok(model.source.includes(selector), `missing ${selector} state selector`);
  }
});

test("themes stay last and new light variants remain token-driven", () => {
  assert.equal(model.layers.at(-1), "themes");
  assert.deepEqual(model.sections.find((section) => section.num === 32).layers, ["themes"]);
  assert.deepEqual(model.sections.find((section) => section.num === 35).layers, ["themes"]);
  assert.match(model.selfCss.get("n-alert-light"), /var\(--n-surface-sunken\)/);
  assert.match(model.selfCss.get("n-badge-light"), /var\(--n-text\)/);
});
