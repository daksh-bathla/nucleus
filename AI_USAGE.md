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
| `npx @navital/nucleus-css validate` | Fails the build on any hallucinated `n-` class. |
| `npx @navital/nucleus-css ai-context` | Prints the compact context for piping into a tool. |

All of these are **generated from the source CSS** on every build, so they never
drift from what actually exists.

## The golden rules (paste these into your prompt)

```text
Build this interface using only classes that exist in Nucleus CSS.
Read llms.txt and CLASS_REFERENCE.md before generating code.
Every class is prefixed with `n-`. Do not invent classes.
Do not use Tailwind, Bootstrap, or unsupported Nucleus classes
(no `flex`, `mt-4`, `btn-primary`, `col-md-6`; use `n-flex`, `n-mt-4`,
`n-btn n-btn-primary`, `n-col-md-6`).
After generating, run: npx @navital/nucleus-css validate ./src
```

## Per-tool guidance

### Claude Code / Claude

Add the context to your project so it is always available:

```bash
npx @navital/nucleus-css ai-context --out .nucleus/ai-context.md
```

Then reference it in `CLAUDE.md`:

```md
This project styles UI with Nucleus CSS. Before writing markup, read
`.nucleus/ai-context.md` and use only `n-`-prefixed classes it lists.
Validate generated markup with `npx @navital/nucleus-css validate ./src`.
```

### Codex / OpenAI

Include `llms.txt` (or the output of `ai-context`) in the system/developer message,
and add a final step to the task: run the validator and fix any reported classes.

### Cursor

Create a project rule so the context loads automatically:

```bash
npx @navital/nucleus-css init            # writes .nucleus/ai-context.md
```

`.cursor/rules/nucleus.mdc`:

```md
---
description: Nucleus CSS class rules
globs: ["**/*.{html,jsx,tsx,vue,svelte}"]
alwaysApply: true
---
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

## Optional: MCP server (future enhancement)

An MCP server could expose the manifest to agents as tools —
`search_nucleus_classes`, `get_nucleus_component`, `get_nucleus_example`,
`validate_nucleus_markup`, `list_nucleus_tokens`. This is intentionally **not**
bundled with the CSS package to keep runtime dependencies at zero. Because all the
data already lives in `dist/nucleus.manifest.json`, a thin server is easy to build
separately; it is tracked as a future enhancement rather than shipped here.
