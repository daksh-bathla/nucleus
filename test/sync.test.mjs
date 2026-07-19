import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { loadModel, ROOT } from "../scripts/lib/parse.mjs";
import { bundleFiles } from "../scripts/lib/build-css.mjs";
import { buildManifest } from "../scripts/lib/manifest.mjs";
import {
  buildLlmsTxt,
  buildLlmsFull,
  buildClassReference,
  buildComponentReference,
} from "../scripts/lib/docs.mjs";

const pkg = JSON.parse(await readFile(join(ROOT, "package.json"), "utf8"));
const model = await loadModel();
const { manifest } = buildManifest(model, pkg.version);
const bundles = bundleFiles(model, pkg.version);

async function onDisk(rel) {
  return readFile(join(ROOT, rel), "utf8");
}

test("dist CSS on disk matches the generators", async () => {
  for (const name of ["nucleus.css", "nucleus.min.css", "reset.css", "utilities.css", "components.css", "themes.css"]) {
    assert.equal(await onDisk(`dist/${name}`), bundles[name], `${name} is stale — run npm run build`);
  }
});

test("manifest + docs on disk match the generators", async () => {
  assert.equal(await onDisk("dist/nucleus.manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
  assert.equal(await onDisk("llms.txt"), buildLlmsTxt(manifest));
  assert.equal(await onDisk("llms-full.txt"), buildLlmsFull(manifest));
  assert.equal(await onDisk("CLASS_REFERENCE.md"), buildClassReference(manifest));
  assert.equal(await onDisk("COMPONENT_REFERENCE.md"), buildComponentReference(manifest));
});

test("demo bundle matches the full build", async () => {
  assert.equal(await onDisk("demo/nucleus.css"), bundles["nucleus.css"]);
});
