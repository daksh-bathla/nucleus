import { CATEGORY_LABELS } from "./metadata.mjs";

const CATEGORY_ORDER = [
  "layout",
  "component",
  "utility",
  "content",
  "state",
  "helper",
  "accessibility",
  "theme",
  "reset",
];

function groupByCategory(classes) {
  const groups = new Map();
  for (const cls of classes) {
    if (!groups.has(cls.category)) groups.set(cls.category, []);
    groups.get(cls.category).push(cls);
  }
  return [...groups.entries()].sort(
    (a, b) => CATEGORY_ORDER.indexOf(a[0]) - CATEGORY_ORDER.indexOf(b[0]),
  );
}

/** Concise, AI-oriented overview kept small enough for a context window. */
export function buildLlmsTxt(manifest) {
  const componentNames = manifest.components.map((c) => c.name).join(", ");
  const utilityFamilies = [
    "spacing: n-m-{0..5}, n-mt/mb/ml/mr/mx/my-{0..5}, n-p-{0..5}, n-pt/pb/pl/pr/px/py-{0..5}",
    "flex: n-flex, n-flex-col, n-items-center, n-justify-between, n-gap-{0..5}",
    "text: n-text-{xs..4xl}, n-text-center, n-font-{light..bold}, n-text-{primary,muted,...}",
    "color bg: n-bg-{primary,secondary,success,danger,warning,info,light,dark,white,muted}",
    "sizing: n-w-full, n-max-w-{sm..2xl}, n-h-screen, n-min-h-screen",
    "border/radius: n-border, n-rounded, n-rounded-{sm,lg,xl,full}, n-shadow-{sm..xl}",
    "display: n-d-{none,block,grid,...} and responsive n-d-{sm,md,lg}-*; use canonical n-flex for flex containers",
  ];

  return `# ${manifest.name}

> ${manifest.description} Prefix: \`${manifest.prefix}\`. ${manifest.counts.classes} classes, ${manifest.counts.tokens} tokens. No runtime JS, no build step required.

Every class begins with the \`${manifest.prefix}\` prefix. Only classes listed in the
manifest exist — do NOT invent classes, and do NOT mix in Tailwind or Bootstrap
class names (no \`flex\`, \`mt-4\`, \`btn-primary\`, \`col-md-6\`; use \`n-flex\`,
\`n-mt-4\`, \`n-btn n-btn-primary\`, \`n-col-md-6\`).

## Install

\`\`\`bash
npm install ${manifest.package}
\`\`\`

\`\`\`js
import "${manifest.package}";               // full framework
\`\`\`

\`\`\`css
@import "${manifest.package}";              /* or a module below */
\`\`\`

CDN: \`${manifest.cdn}\`

## Configure an AI coding assistant

\`npx ${manifest.package} ai-setup <tool>\` writes this context plus the tool's
native project rule. Supported tools: \`claude\`, \`codex\`, \`cursor\`, and
\`antigravity\`.

## Modular imports

- \`${manifest.imports.reset}\` — tokens, reset, global a11y
- \`${manifest.imports.utilities}\` — layout + utility classes
- \`${manifest.imports.components}\` — buttons, cards, forms, etc.
- \`${manifest.imports.themes}\` — themes + dark mode
(Import \`reset\` first, or just import the full bundle.)

## Naming conventions

- Component: \`n-<name>\` (e.g. \`n-btn\`, \`n-card\`, \`n-alert\`).
- Variant: \`n-<name>-<variant>\` (e.g. \`n-btn-primary\`, \`n-alert-success\`).
- Size: \`n-<name>-sm\` / \`n-<name>-lg\`.
- Responsive utility: \`n-<util>-<bp>-*\` where bp ∈ {${manifest.breakpoints.map((b) => b.name).join(", ")}} (e.g. \`n-col-md-6\`, \`n-d-lg-flex\`).
- Prefer canonical classes. Deprecated aliases remain valid but the validator reports their replacement.

## State convention

1. Use native state and accurate ARIA first (\`disabled\`, \`aria-current="page"\`, \`aria-selected="true"\`, \`aria-expanded="true"\`).
2. Use \`data-state\` for framework-specific state when ARIA would be inaccurate.
3. Use namespaced visual hooks such as \`n-is-active\`, \`n-is-loading\`, and \`n-is-disabled\`.
Do not add unprefixed \`.active\` to new markup.

## Breakpoints (min-width, mobile-first)

${manifest.breakpoints.map((b) => `- ${b.name}: ${b.min}`).join("\n")}

## Core layout

- \`n-container\` / \`n-container-fluid\`
- \`n-row\` + \`n-col-1..12\` (and \`n-col-{sm,md,lg,xl}-1..12\`)
- \`n-auto-grid\`, \`n-grid-auto-fit\`, \`n-sidebar-layout\`, \`n-cluster\`, \`n-split\`, \`n-stack\`, \`n-switcher\`, \`n-cover\`, \`n-reel\`, \`n-frame\`, \`n-section\`, \`n-content\`

## Core utilities

${utilityFamilies.map((f) => `- ${f}`).join("\n")}

## Spacing scale (not Tailwind-compatible)

${Object.entries(manifest.spacingScale.values).map(([key, value]) => `- ${key}: ${value}`).join("\n")}
Never infer Nucleus spacing values from Tailwind. For example, \`n-p-4\` is ${manifest.spacingScale.values[4]}.

## Components

${componentNames}

## Themes & modes

- Themes (on any element via \`data-theme\`): ${manifest.themes.join(", ")}
- Density (\`data-density\`): ${manifest.densities.join(", ")}
- Dark mode: automatic (\`${manifest.darkMode.automatic}\`) or manual class \`${manifest.darkMode.manual}\`
- Customize via CSS custom properties (\`--n-*\`), e.g. \`--n-primary\`, \`--n-radius\`, \`--n-font-sans\`.

## Common mistakes to avoid

- Inventing classes not in the manifest (validate with \`npx ${manifest.package} validate ./src\`).
- Using deprecated aliases when a canonical class is available (the validator warns and suggests a replacement).
- Using Tailwind/Bootstrap names instead of the \`n-\` equivalents.
- Using the \`open\` attribute on \`n-dialog\` — open it with \`dialog.showModal()\`.
- Forgetting a \`<label>\` for \`n-input\`/\`n-select\`/\`n-textarea\`.

## More detail (local files)

- CLASS_REFERENCE.md — every class with a description
- COMPONENT_REFERENCE.md — components with HTML examples
- llms-full.txt — complete plain-text reference
- dist/nucleus.manifest.json — machine-readable manifest
- AI_USAGE.md — how to prompt AI tools to use Nucleus
- MANIFEST.md — manifest schema and structured CLI commands
`;
}

/** Complete plain-text reference: every class + every component example. */
export function buildLlmsFull(manifest) {
  const lines = [];
  lines.push(`${manifest.name} — Full reference (v${manifest.version})`);
  lines.push("");
  lines.push(manifest.description);
  lines.push(`Package: ${manifest.package}   Prefix: ${manifest.prefix}`);
  lines.push(
    `Classes: ${manifest.counts.classes}   Tokens: ${manifest.counts.tokens}   Components: ${manifest.counts.components}`,
  );
  lines.push("");
  lines.push("Breakpoints (min-width): " + manifest.breakpoints.map((b) => `${b.name}=${b.min}`).join(", "));
  lines.push("Themes: " + manifest.themes.join(", "));
  lines.push("Densities: " + manifest.densities.join(", "));
  lines.push(`Dark mode: ${manifest.darkMode.automatic} or .${manifest.darkMode.manual}`);
  lines.push("");
  lines.push("=".repeat(60));
  lines.push("DESIGN TOKENS (CSS custom properties, override to theme)");
  lines.push("=".repeat(60));
  for (const t of manifest.tokens) lines.push(`${t.name}: ${t.value}`);
  lines.push("");
  lines.push("=".repeat(60));
  lines.push("COMPONENTS (states, variants, and a valid HTML example)");
  lines.push("=".repeat(60));
  for (const c of manifest.components) {
    lines.push("");
    lines.push(`## ${c.name} — ${c.title}`);
    lines.push(c.description);
    if (c.element) lines.push(`Recommended element: <${c.element}>`);
    if (c.variants.length) lines.push(`Variants: ${c.variants.join(", ")}`);
    if (c.sizes.length) lines.push(`Sizes: ${c.sizes.join(", ")}`);
    if (c.parts.length) lines.push(`Parts: ${c.parts.join(", ")}`);
    if (c.states.length) lines.push(`States: ${c.states.join(", ")}`);
    if (c.responsive) lines.push("Responsive: yes");
    if (c.accessibility) lines.push(`Accessibility: ${c.accessibility}`);
    if (c.notes) lines.push(`Notes: ${c.notes}`);
    lines.push("Example:");
    lines.push(c.example);
  }
  lines.push("");
  lines.push("=".repeat(60));
  lines.push("ALL CLASSES BY CATEGORY");
  lines.push("=".repeat(60));
  for (const [category, classes] of groupByCategory(manifest.classes)) {
    lines.push("");
    lines.push(`--- ${CATEGORY_LABELS[category] || category} (${classes.length}) ---`);
    for (const cls of classes) {
      const details = [`role=${cls.role}`];
      if (cls.deprecated) details.push(`DEPRECATED → .${cls.replacement}`);
      if (cls.scaleValue) details.push(`scale=${cls.scaleValue}`);
      if (cls.gotchas.length) details.push(`gotcha=${cls.gotchas.join(" ")}`);
      lines.push(`.${cls.name} — ${cls.description} [${details.join("; ")}]`);
    }
  }
  lines.push("");
  return lines.join("\n");
}

/** Markdown table of every class, grouped by category. */
export function buildClassReference(manifest) {
  const lines = [];
  lines.push(`# ${manifest.name} — Class reference`);
  lines.push("");
  lines.push(
    `Generated from \`src/css/nucleus.css\`. ${manifest.counts.classes} classes, prefix \`${manifest.prefix}\`. Do not edit by hand — run \`npm run build\`.`,
  );
  lines.push("");
  lines.push("## Contents");
  for (const [category, classes] of groupByCategory(manifest.classes)) {
    lines.push(`- [${CATEGORY_LABELS[category] || category}](#${category}) (${classes.length})`);
  }
  for (const [category, classes] of groupByCategory(manifest.classes)) {
    lines.push("");
    lines.push(`## ${CATEGORY_LABELS[category] || category}`);
    lines.push("");
    lines.push(`<a id="${category}"></a>`);
    lines.push("");
    lines.push("| Class | Role | Status | Scale | Description / gotchas |");
    lines.push("| --- | --- | --- | --- | --- |");
    for (const cls of classes) {
      const notes = [cls.description, ...cls.gotchas].join(" ").replace(/\|/g, "\\|");
      const status = cls.deprecated ? `Deprecated; use \`.${cls.replacement}\`` : "Canonical";
      lines.push(`| \`.${cls.name}\` | ${cls.role} | ${status} | ${cls.scaleValue || "—"} | ${notes} |`);
    }
  }
  lines.push("");
  return lines.join("\n");
}

/** Markdown component gallery with copy-paste HTML examples. */
export function buildComponentReference(manifest) {
  const lines = [];
  lines.push(`# ${manifest.name} — Component reference`);
  lines.push("");
  lines.push(
    "Copy-paste HTML for every component category. All examples use only classes that exist in the framework.",
  );
  lines.push("");
  lines.push("## Contents");
  for (const c of manifest.components) {
    lines.push(`- [${c.title} (\`.${c.name}\`)](#${c.name})`);
  }
  for (const c of manifest.components) {
    lines.push("");
    lines.push(`## ${c.title}`);
    lines.push("");
    lines.push(`<a id="${c.name}"></a>`);
    lines.push("");
    lines.push(c.description);
    lines.push("");
    if (c.element) lines.push(`- **Element:** \`<${c.element}>\``);
    if (c.variants.length) lines.push(`- **Variants:** ${c.variants.map((v) => `\`${v}\``).join(", ")}`);
    if (c.sizes.length) lines.push(`- **Sizes:** ${c.sizes.map((v) => `\`${v}\``).join(", ")}`);
    if (c.parts.length) lines.push(`- **Parts:** ${c.parts.map((v) => `\`${v}\``).join(", ")}`);
    if (c.states.length) lines.push(`- **States:** ${c.states.join(", ")}`);
    if (c.accessibility) lines.push(`- **Accessibility:** ${c.accessibility}`);
    if (c.notes) lines.push(`- **Notes:** ${c.notes}`);
    lines.push("");
    lines.push("```html");
    lines.push(c.example);
    lines.push("```");
  }
  lines.push("");
  return lines.join("\n");
}

/** Generated documentation for the JSON manifest contract. */
export function buildManifestReference(manifest) {
  const deprecated = manifest.classes.filter((entry) => entry.deprecated);
  return `# ${manifest.name} — Manifest schema

Generated from \`src/css/nucleus.css\` and the validated metadata annotations. Do not edit the JSON manifest by hand.

## Top-level contract

- \`schemaVersion\`: manifest contract version (${manifest.schemaVersion})
- \`version\`: package version
- \`architecture\`: framework model and ordered cascade layers
- \`stateConvention\`: canonical state hierarchy and legacy compatibility selectors
- \`spacingScale\`: exact v2 numeric mapping and migration policy
- \`counts\`: generated class, token, component, and deprecation counts
- \`tokens[]\`, \`components[]\`, \`classes[]\`: CSS-backed public API records

## Class record

Every \`classes[]\` record includes \`class\`/\`name\`, \`category\`, \`role\`, \`layer\`, \`deprecated\`, \`gotchas\`, \`responsive\`, \`tokenReferences\`, \`customPropertyReferences\`, and \`description\`. Relevant records also include \`aliasOf\`, \`replacement\`, \`since\`, \`variantOf\`, \`states\`, \`scaleValue\`, or \`examples\`.

Allowed roles currently emitted: \`utility\`, \`component\`, \`component-part\`, \`variant\`, \`size\`, \`layout\`, \`state\`, \`theme\`, and \`accessibility\`.

## Deprecations

${deprecated.map((entry) => `- \`.${entry.name}\` → \`.${entry.replacement}\``).join("\n") || "No deprecated classes."}

## Structured CLI queries

\`npx ${manifest.package} search flex\`

\`npx ${manifest.package} component n-navbar\`

\`npx ${manifest.package} token --n-space-4\`

\`npx ${manifest.package} deprecated\`

All four commands return JSON suitable for developer tools and coding assistants.
`;
}
