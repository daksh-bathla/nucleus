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
  "production.html",
];

const read = (relativePath) => readFile(join(ROOT, relativePath), "utf8");
const pkg = JSON.parse(await read("package.json"));

test("every documentation page has the shared accessible shell", async () => {
  for (const page of pages) {
    const html = await read(`demo/${page}`);
    assert.match(html, /class="n-skip-link" href="#main-content"/, `${page} needs a skip link`);
    assert.match(html, /<nav[^>]+aria-label="Primary navigation"/, `${page} needs a labeled nav`);
    assert.match(html, /<details class="n-navbar-menu">/, `${page} needs a native hamburger menu`);
    assert.match(html, /<summary class="n-navbar-toggle">/, `${page} needs an accessible menu control`);
    assert.match(html, /<main[^>]+id="main-content"/, `${page} needs a main target`);
    assert.match(html, /<footer class="demo-footer">/, `${page} needs a semantic footer`);
    assert.match(html, /<script src="site\.js" defer><\/script>/, `${page} needs shared behavior`);
  }
});

test("the demo is built on Nucleus without third-party CSS frameworks", async () => {
  for (const page of pages) {
    const html = await read(`demo/${page}`);
    assert.ok(!/tailwind|bootstrap|bulma|foundation/i.test(html), `${page} references another CSS framework`);
    const stylesheets = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)].map((match) => match[1]);
    assert.deepEqual(stylesheets, ["nucleus.css", "demo.css"], `${page} should load only Nucleus and its documentation skin`);
  }
});

test("homepage points to real install and repository destinations", async () => {
  const html = await read("demo/index.html");
  assert.ok(html.includes("https://github.com/dakshbathla/nucleus"));
  assert.ok(html.includes("npm install @navital/nucleus-css"));
  assert.ok(html.includes(`@navital/nucleus-css@${pkg.version}/dist/nucleus.min.css`));
  assert.ok(html.includes(`Version ${pkg.version}.`));
  assert.ok(!html.includes('href="https://github.com"'));
});

test("all demo repository links use the package canonical URL", async () => {
  for (const page of pages) {
    const html = await read(`demo/${page}`);
    assert.ok(!html.includes("github.com/daksh-bathla/nucleus"), `${page} has a stale repository owner`);
  }
});

test("homepage offers native setup commands for major AI coding assistants", async () => {
  const html = await read("demo/index.html");
  for (const tool of ["claude", "codex", "cursor", "antigravity"]) {
    assert.ok(html.includes(`ai-setup ${tool}`), `missing ${tool} setup command`);
  }
});

test("homepage framework counts stay synchronized with the generated manifest", async () => {
  const html = await read("demo/index.html");
  const manifest = JSON.parse(await read("demo/nucleus.manifest.json"));
  const { classes, tokens, components } = manifest.counts;

  assert.ok(html.includes(`${classes} documented classes`));
  assert.ok(html.includes(`<dt>${classes}</dt><dd>classes</dd>`));
  assert.ok(html.includes(`<dt>${tokens}</dt><dd>tokens</dd>`));
  assert.ok(html.includes(`<dt>${components}</dt><dd>components</dd>`));
  const patterns = await read("demo/patterns.html");
  assert.ok(patterns.includes(`data-nucleus-count="classes">${classes}<`));
});

test("component documentation demonstrates the responsive native navbar", async () => {
  const html = await read("demo/components.html");
  const examples = html.match(/<details class="n-navbar-menu">/g) ?? [];
  assert.ok(examples.length >= 2, "components page should include the page menu and navbar example");
  assert.ok(html.includes("responsive, JavaScript-free menu"));
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
    "demo/MANIFEST.md",
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
