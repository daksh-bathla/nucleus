import test from "node:test";
import assert from "node:assert/strict";

import {
  validateContent,
  validateUsage,
  suggest,
  levenshtein,
} from "../scripts/lib/validate-markup.mjs";

const known = new Set(["n-btn", "n-btn-primary", "n-card", "n-flex", "n-container"]);
const manifest = {
  classes: [
    { name: "n-btn", deprecated: false },
    { name: "n-flex", deprecated: false },
    { name: "n-d-flex", deprecated: true, replacement: "n-flex" },
    { name: "n-nav-link", deprecated: false },
  ],
  stateConvention: {
    legacySelectors: [{ selector: ".active", scope: ["n-nav-link"], replacement: "Use aria-current=page." }],
  },
};

test("levenshtein basics", () => {
  assert.equal(levenshtein("n-btn", "n-btn"), 0);
  assert.equal(levenshtein("n-btn-prmary", "n-btn-primary"), 1);
});

test("suggest returns the closest valid class", () => {
  assert.equal(suggest("n-btn-prmary", known), "n-btn-primary");
  assert.equal(suggest("n-flexx", known), "n-flex");
});

test("suggest returns null when nothing is close", () => {
  assert.equal(suggest("n-totally-different-thing-xyz", known), null);
});

test("flags unknown classes in class= and className=", () => {
  const html = `<div class="n-container"><button className="n-btn n-btn-bogus">x</button></div>`;
  const found = validateContent(html, known);
  assert.equal(found.length, 1);
  assert.equal(found[0].className, "n-btn-bogus");
});

test("ignores dynamic expressions and non-nucleus classes", () => {
  const jsx = [
    'const a = <div className={`n-card ${x}`}>ok</div>;',
    'const b = <div className="my-thing sidebar-open">fine</div>;',
    'const c = <div className={styles.foo}>fine</div>;',
  ].join("\n");
  assert.deepEqual(validateContent(jsx, known), []);
});

test("reports accurate line numbers", () => {
  const html = ["<div>", '  <span class="n-nope"></span>', "</div>"].join("\n");
  const found = validateContent(html, known);
  assert.equal(found.length, 1);
  assert.equal(found[0].line, 2);
});

test("accepts valid Vue :class object string tokens", () => {
  const vue = `<div :class="'n-btn n-btn-primary'"></div>`;
  assert.deepEqual(validateContent(vue, known), []);
});

test("rich validation warns for deprecated aliases without rejecting them", () => {
  const found = validateUsage(`<div class="n-d-flex"></div>`, manifest);
  assert.deepEqual(found.map(({ level, code, replacement }) => ({ level, code, replacement })), [
    { level: "warning", code: "deprecated-class", replacement: "n-flex" },
  ]);
});

test("rich validation warns for component-scoped legacy active state", () => {
  const found = validateUsage(`<a class="n-nav-link active"></a>`, manifest);
  assert.equal(found.length, 1);
  assert.equal(found[0].code, "legacy-state-selector");
  assert.equal(found[0].level, "warning");
});

test("rich validation leaves unrelated active classes alone", () => {
  assert.deepEqual(validateUsage(`<div class="sidebar active"></div>`, manifest), []);
});
