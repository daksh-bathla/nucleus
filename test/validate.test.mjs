import test from "node:test";
import assert from "node:assert/strict";

import {
  validateContent,
  suggest,
  levenshtein,
} from "../scripts/lib/validate-markup.mjs";

const known = new Set(["n-btn", "n-btn-primary", "n-card", "n-flex", "n-container"]);

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
