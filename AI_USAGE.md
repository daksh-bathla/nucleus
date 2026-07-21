# Using Nucleus CSS with AI coding assistants

Nucleus ships machine-readable metadata so AI tools generate **real** class names
instead of guessing (or inventing Tailwind/Bootstrap classes). This page explains
what to give an assistant and how to verify its output.

## What Nucleus provides for AI

| File | Purpose |
| --- | --- |
| [`llms.txt`](llms.txt) | Concise, context-window-sized overview (install, naming rules, core classes, components, restrictions). |
| [`llms-full.txt`](llms-full.txt) | Complete plain-text reference: every class, every token, and a valid HTML example per component. |
| [`CLASS_REFERENCE.md`](CLASS_REFERENCE.md) | Every class with a description, grouped by category. |
| [`COMPONENT_REFERENCE.md`](COMPONENT_REFERENCE.md) | Copy-paste HTML for each component. |
| [`dist/nucleus.manifest.json`](dist/nucleus.manifest.json) | Structured manifest: classes, categories, variants, states, tokens, examples. |
| [`MANIFEST.md`](MANIFEST.md) | Manifest schema, roles, aliases, deprecations, and structured CLI queries. |
| `npx @navital/nucleus-css validate` | Fails the build on any hallucinated `n-` class. |
| `npx @navital/nucleus-css ai-context` | Prints the compact context for piping into a tool. |
| `npx @navital/nucleus-css ai-setup <tool>` | Creates the compact context and the tool's native project rule. |

The manifest, LLM files, and reference documents are generated from the source CSS.
The CLI consumes that manifest, and the build validates the handwritten guidance
against the same package identity and public API.

## The golden rules (paste these into your prompt)

```text
Build this interface using only classes that exist in Nucleus CSS.
Read llms.txt and CLASS_REFERENCE.md before generating code.
Every class is prefixed with `n-`. Do not invent classes.
Prefer canonical classes and replace aliases marked deprecated in the manifest.
Use accurate native/ARIA state first, then data-state, then n-is-* visual state classes.
Do not add an unprefixed .active class to new markup.
Do not infer Nucleus spacing from Tailwind: n-p-4 is 1.5rem.
Query a component example before inventing its internal structure.
Do not use Tailwind, Bootstrap, or unsupported Nucleus classes
(no `flex`, `mt-4`, `btn-primary`, `col-md-6`; use `n-flex`, `n-mt-4`,
`n-btn n-btn-primary`, `n-col-md-6`).
After generating, run: npx @navital/nucleus-css validate ./src
```

## Per-tool guidance

### Claude Code / Claude

Create `.nucleus/ai-context.md` and a path-scoped `.claude/rules/nucleus.md` rule:

```bash
npx @navital/nucleus-css ai-setup claude
```

Claude Code loads the rule whenever it works on UI files. To verify it manually:

```bash
claude "Read .nucleus/ai-context.md and build the UI using only documented Nucleus classes."
```

### Codex / OpenAI

Create `.nucleus/ai-context.md` and add an idempotent Nucleus section to the
project's `AGENTS.md` without replacing existing instructions:

```bash
npx @navital/nucleus-css ai-setup codex
```

Codex reads `AGENTS.md` at the start of a task. You can verify the setup with:

```bash
codex "Read .nucleus/ai-context.md, summarize the Nucleus rules, and validate the UI."
```

### Cursor

Create `.nucleus/ai-context.md` and `.cursor/rules/nucleus.mdc`:

```bash
npx @navital/nucleus-css ai-setup cursor
```

The generated rule is always applied to supported markup and component files.

### Google Antigravity

Create `.nucleus/ai-context.md` and Antigravity's workspace rule at
`.agents/rules/nucleus.md`:

```bash
npx @navital/nucleus-css ai-setup antigravity
```

Antigravity recognizes `.agents/rules` at the workspace or Git root. Set the rule
to **Always On** in its Rules panel if you want it injected for every UI task.

### Manual rule example

Every generated rule carries the same core instruction:

```md
Use only Nucleus CSS classes (prefix `n-`) documented in `.nucleus/ai-context.md`
and `CLASS_REFERENCE.md`. Never emit Tailwind or Bootstrap classes. Validate with
`npx @navital/nucleus-css validate`.
```

### GitHub Copilot

Add the rules to `.github/copilot-instructions.md`:

```md
UI is built with Nucleus CSS. Only use `n-`-prefixed classes from
`CLASS_REFERENCE.md`. Do not invent classes or use Tailwind/Bootstrap names.
```

### Generic assistants (ChatGPT, etc.)

Paste the output of `npx @navital/nucleus-css ai-context` at the top of the chat,
then ask for markup. Paste any code back through the validator before shipping.

## Verifying AI output

```bash
# Exits non-zero and lists unknown classes with suggestions.
npx @navital/nucleus-css validate ./src
```

Example output:

```text
Unknown Nucleus class: n-btn-prmary
  Did you mean: n-btn-primary?
  File: src/components/Hero.tsx
  Line: 18
```

The validator scans `class` / `className` / `:class` attributes in
`.html`, `.jsx`, `.tsx`, `.js`, `.ts`, `.vue`, `.svelte`, `.astro` files. It only
reports static `n-`-prefixed tokens, so dynamic expressions and your own project
classes are never flagged.

Deprecated aliases are warnings, not errors:

```text
Warning: Deprecated Nucleus class: n-d-flex
  Use instead: n-flex
  File: src/components/Toolbar.tsx
  Line: 8
```

## Structured metadata queries

Coding assistants and developer tools can query the existing zero-dependency CLI:

```bash
npx @navital/nucleus-css search flex
npx @navital/nucleus-css component n-navbar
npx @navital/nucleus-css token --n-space-4
npx @navital/nucleus-css deprecated
```

These commands return JSON. Use them to search real classes, retrieve verified component markup, inspect token values, and list migration warnings.

## MCP server

An MCP server could expose the manifest to agents as tools —
`search_nucleus_classes`, `get_nucleus_component`, `get_nucleus_example`,
`validate_nucleus_markup`, `list_nucleus_tokens`. This is intentionally **not**
bundled with the CSS package to keep runtime dependencies at zero. The structured
CLI covers the same read-only discovery needs without adding server infrastructure.
