# Changelog

All notable changes to Nucleus CSS are documented here. This project adheres to
[Semantic Versioning](https://semver.org/) and the
[Keep a Changelog](https://keepachangelog.com/) format.

## [Unreleased]

### Added — packaging & distribution

- **npm package** published as `@navital/nucleus-css` with `exports`, `style`,
  `sideEffects`, and a published `files` allow-list.
- **Modular builds**: `dist/reset.css`, `dist/utilities.css`, `dist/components.css`,
  `dist/themes.css` (plus `.min.css` for each) alongside the full
  `dist/nucleus.css` / `dist/nucleus.min.css`.
- **Modular import subpaths**: `@navital/nucleus-css/reset`, `/utilities`,
  `/components`, `/themes`, and `/min`.
- **Zero-dependency build** (`scripts/build.mjs`) with a string-safe CSS minifier.
  One command (`npm run build`) regenerates every distributable and doc.

### Added — AI-friendly metadata

- `dist/nucleus.manifest.json` — machine-readable manifest of every class,
  category, variant, state, token, and component example, generated from and
  validated against the source CSS.
- `llms.txt` and `llms-full.txt` — AI-readable overview and full reference.
- `CLASS_REFERENCE.md` and `COMPONENT_REFERENCE.md` — generated human/AI docs.
- `MANIFEST.md` — generated schema documentation for roles, aliases, deprecations,
  token references, responsive flags, and spacing values.
- `AI_USAGE.md` — how to instruct Claude Code, Codex, Cursor, Antigravity,
  Copilot, and others.
- Architecture, naming, compatibility, Tailwind, Bootstrap, and spacing-decision
  guides.

### Added — tooling

- **CLI** (`npx @navital/nucleus-css …`):
  - `validate [paths]` — reports hallucinated `n-` classes with suggestions and a
    non-zero exit code.
  - `ai-context [--out]` — prints/writes the compact AI context.
  - `ai-setup <tool>` — writes the shared context plus native project rules for
    Claude Code, Codex, Cursor, or Antigravity without replacing hand-written rules.
  - `init` — scaffolds `nucleus.config.js` and `.nucleus/ai-context.md`.
  - `manifest` — prints the JSON manifest.
  - `search`, `component`, `token`, and `deprecated` — structured JSON queries
    for humans and coding assistants.
- **Tests** (`node --test`) covering the build, manifest integrity, doc
  generation, package exports, and the validator.
- Cross-platform zero-dependency dev server (`scripts/serve.mjs`).

### Changed

- Added the public cascade order `reset, tokens, base, layout, components,
  utilities, states, themes`; utilities now deliberately override component
  defaults without blanket `!important`.
- Completed semantic border, outline-button, alert, and badge families.
- Standardized new generic visual states on `n-is-*` and semantic ARIA while
  retaining previous state classes and component-scoped `.active` behavior.
- Package renamed from `nucleus-css` to the scoped `@navital/nucleus-css`.
- `README.md` expanded with install, CDN, framework (Next.js/Vite/plain HTML),
  customization, accessibility, and AI-assisted development sections.
- `dist/nucleus.css` and `demo/nucleus.css` now carry a license banner header.

### Compatibility

- **No public class was renamed or removed.** Current totals are generated in the
  manifest and class reference; existing markup keeps working. See the "Backward compatibility" note
  in `README.md`.
- `n-d-flex` and the previous short state classes remain valid deprecated aliases;
  the validator reports canonical replacements without failing valid markup.
- The v2 spacing scale is unchanged. `n-p-4` remains `1.5rem`.
