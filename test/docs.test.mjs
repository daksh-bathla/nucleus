import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

import { loadModel, ROOT } from "../scripts/lib/parse.mjs";
import { buildManifest } from "../scripts/lib/manifest.mjs";
import {
  buildLlmsTxt,
  buildLlmsFull,
  buildClassReference,
  buildComponentReference,
} from "../scripts/lib/docs.mjs";

const model = await loadModel();
const { manifest } = buildManifest(model, "0.0.0-test");

test("llms.txt is concise and states the do-not-invent rule", () => {
  const txt = buildLlmsTxt(manifest);
  assert.ok(txt.includes("@navital/nucleus-css"));
  assert.ok(/do NOT invent/i.test(txt));
  assert.ok(txt.includes("n-btn"));
  assert.ok(txt.length < 8000, "llms.txt should stay small for context windows");
});

test("llms-full.txt covers tokens, components, and all classes", () => {
  const txt = buildLlmsFull(manifest);
  assert.ok(txt.includes("--n-primary"));
  assert.ok(txt.includes("## n-btn — Button"));
  for (const c of model.classes.slice(0, 50)) {
    assert.ok(txt.includes(`.${c} `), `llms-full missing .${c}`);
  }
});

test("class reference documents every class", () => {
  const md = buildClassReference(manifest);
  for (const c of model.classes) assert.ok(md.includes(`\`.${c}\``), `class ref missing .${c}`);
});

test("component reference has fenced HTML examples", () => {
  const md = buildComponentReference(manifest);
  assert.ok(md.includes("```html"));
  assert.ok(md.includes("n-btn n-btn-primary"));
});

test("generated docs exist on disk after build", () => {
  for (const f of [
    "llms.txt",
    "llms-full.txt",
    "CLASS_REFERENCE.md",
    "COMPONENT_REFERENCE.md",
    "AI_USAGE.md",
  ]) {
    assert.ok(existsSync(join(ROOT, f)), `missing ${f}`);
  }
});
