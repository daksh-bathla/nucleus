import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ROOT } from "../scripts/lib/parse.mjs";

const pages = [
  "index.html",
  "grid.html",
  "typography.html",
  "buttons.html",
  "cards.html",
  "forms.html",
  "components.html",
  "utilities.html",
  "patterns.html",
];

const read = (relativePath) => readFile(join(ROOT, relativePath), "utf8");

test("every documentation page has the shared accessible shell", async () => {
  for (const page of pages) {
    const html = await read(`demo/${page}`);
    assert.match(html, /class="n-skip-link" href="#main-content"/, `${page} needs a skip link`);
    assert.match(html, /<nav[^>]+aria-label="Primary navigation"/, `${page} needs a labeled nav`);
    assert.match(html, /<main[^>]+id="main-content"/, `${page} needs a main target`);
    assert.match(html, /<footer class="demo-footer">/, `${page} needs a semantic footer`);
    assert.match(html, /<script src="site\.js" defer><\/script>/, `${page} needs shared behavior`);
  }
});

test("homepage points to real install and repository destinations", async () => {
  const html = await read("demo/index.html");
  assert.ok(html.includes("https://github.com/daksh-bathla/nucleus"));
  assert.ok(html.includes("npm install @navital/nucleus-css"));
  assert.ok(html.includes("@navital/nucleus-css@2.0.0/dist/nucleus.min.css"));
  assert.ok(!html.includes('href="https://github.com"'));
});

test("deployed crawler surfaces cover the documentation", async () => {
  const robots = await read("demo/robots.txt");
  const sitemap = await read("demo/sitemap.xml");
  assert.ok(robots.includes("Sitemap: https://nucleus-rose.vercel.app/sitemap.xml"));
  for (const page of pages.slice(1)) {
    assert.ok(sitemap.includes(`/${page}`), `sitemap missing ${page}`);
  }
  for (const file of [
    "demo/llms.txt",
    "demo/llms-full.txt",
    "demo/nucleus.manifest.json",
    "demo/CLASS_REFERENCE.md",
    "demo/COMPONENT_REFERENCE.md",
  ]) {
    assert.ok((await read(file)).length > 100, `${file} should contain generated documentation`);
  }
});

test("Vercel builds the current generated demo", async () => {
  const config = JSON.parse(await read("vercel.json"));
  assert.equal(config.buildCommand, "npm run build");
  assert.equal(config.outputDirectory, "demo");
  assert.equal(config.rewrites, undefined);
});
