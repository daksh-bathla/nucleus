import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
export const ROOT = resolve(here, "..", "..");
export const SOURCE_PATH = join(ROOT, "src", "css", "nucleus.css");

const CLASS_RE = /\.(n-[A-Za-z0-9_-]+)/g;
const SECTION_RE =
  /\/\*\s*-{3,}\s*\*\/\s*\r?\n\/\*\s*(\d+)\s*·\s*(.+?)\s*\*\/\s*\r?\n\/\*\s*-{3,}\s*\*\//g;
// Innermost style rules: `selector { declarations }` where the body has no
// nested braces. At-rule wrappers (@media/@container) are skipped naturally.
const RULE_RE = /([^{}]+)\{([^{}]*)\}/g;
const TOKEN_RE = /(--n-[A-Za-z0-9_-]+)\s*:\s*([^;]+);/g;
const LAYER_ORDER_RE = /@layer\s+([a-z-]+(?:\s*,\s*[a-z-]+)+)\s*;/;
const LAYER_BLOCK_RE = /@layer\s+([a-z-]+)\s*\{/g;

/**
 * Which numbered source section belongs to which distributable module.
 * The full bundle is always the verbatim source; modules are contiguous
 * subsets for advanced consumers. Every section maps to exactly one module.
 */
export const MODULE_SECTIONS = {
  reset: [0, 1, 33],
  utilities: [2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 19, 24, 26, 27, 31, 34],
  components: [9, 10, 11, 12, 20, 21, 22, 23, 25, 28, 29, 30, 36, 37, 38, 39],
  themes: [32, 35],
};

export const BREAKPOINTS = [
  { name: "sm", min: "576px" },
  { name: "md", min: "768px" },
  { name: "lg", min: "992px" },
  { name: "xl", min: "1200px" },
  { name: "xxl", min: "1600px" },
];

export const THEMES = ["ocean", "forest", "rose", "amber", "mono"];
export const DENSITIES = ["compact", "spacious"];

function uniqueClasses(text) {
  return new Set([...text.matchAll(CLASS_RE)].map((m) => m[1]));
}

/**
 * Parse the source stylesheet into a structured model used by the build,
 * the manifest/doc generators, and the tests. Pure — no side effects.
 */
export function parseSource(source) {
  // --- Sections (verbatim slices between banner headers) ---
  const marks = [...source.matchAll(SECTION_RE)].map((m) => ({
    num: Number(m[1]),
    title: m[2].trim(),
    start: m.index,
  }));

  const sections = marks.map((mark, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].start : source.length;
    const text = source.slice(mark.start, end);
    return {
      num: mark.num,
      title: mark.title,
      text,
      classes: uniqueClasses(text),
      layers: [...text.matchAll(LAYER_BLOCK_RE)].map((match) => match[1]),
    };
  });

  const prelude = marks.length ? source.slice(0, marks[0].start) : "";
  // Attribute a class to the section that defines it with a standalone
  // selector before falling back to its first mention. State classes, for
  // example, are referenced by component selectors before their generic rule
  // is defined; using the first mention would incorrectly label them as
  // component-layer classes in the manifest.
  const sectionOf = new Map();
  for (const section of sections) {
    const bareSection = section.text.replace(/\/\*[\s\S]*?\*\//g, "");
    for (const [, selector] of bareSection.matchAll(RULE_RE)) {
      for (const part of selector.split(",")) {
        const exact = /^\.(n-[A-Za-z0-9_-]+)$/.exec(part.trim());
        if (exact && !sectionOf.has(exact[1])) sectionOf.set(exact[1], section);
      }
    }
  }
  for (const section of sections) {
    for (const name of section.classes) if (!sectionOf.has(name)) sectionOf.set(name, section);
  }

  // --- Every class + its own declaration block (for auto descriptions) ---
  // Strip comments first so banner text is not swept into a selector chunk.
  const bare = source.replace(/\/\*[\s\S]*?\*\//g, "");
  const classes = [...uniqueClasses(source)].sort();
  const selfCss = new Map();
  for (const [, selector, body] of bare.matchAll(RULE_RE)) {
    const decls = body.trim().replace(/\s+/g, " ");
    if (!decls) continue;
    for (const sel of selector.split(",")) {
      const exact = /^\.(n-[A-Za-z0-9_-]+)$/.exec(sel.trim());
      // Keep the first (defining) rule; ignore later media-query overrides.
      if (exact && !selfCss.has(exact[1])) selfCss.set(exact[1], decls);
    }
  }

  // --- Design tokens (canonical :root defaults only) ---
  const rootStart = bare.indexOf(":root");
  const rootBlock = rootStart >= 0 ? bare.slice(rootStart, bare.indexOf("}", rootStart)) : "";
  const tokens = [...rootBlock.matchAll(TOKEN_RE)].map(([, name, value]) => ({
    name,
    value: value.trim(),
  }));

  const layerMatch = source.match(LAYER_ORDER_RE);
  const layers = layerMatch
    ? layerMatch[1].split(",").map((layer) => layer.trim())
    : [];

  return {
    source,
    sections,
    prelude,
    classes,
    classCount: classes.length,
    tokens,
    layers,
    layerStatement: layerMatch?.[0] || "",
    sectionOf,
    selfCss,
  };
}

export async function loadSource(path = SOURCE_PATH) {
  return readFile(path, "utf8");
}

export async function loadModel(path = SOURCE_PATH) {
  return parseSource(await loadSource(path));
}
