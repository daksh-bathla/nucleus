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
- `AI_USAGE.md` — how to instruct Claude Code, Codex, Cursor, Copilot, and others.

### Added — tooling

- **CLI** (`npx @navital/nucleus-css …`):
  - `validate [paths]` — reports hallucinated `n-` classes with suggestions and a
    non-zero exit code.
  - `ai-context [--out]` — prints/writes the compact AI context.
  - `init` — scaffolds `nucleus.config.js` and `.nucleus/ai-context.md`.
  - `manifest` — prints the JSON manifest.
- **Tests** (`node --test`) covering the build, manifest integrity, doc
  generation, package exports, and the validator.
- Cross-platform zero-dependency dev server (`scripts/serve.mjs`).

### Changed

- Package renamed from `nucleus-css` to the scoped `@navital/nucleus-css`.
- `README.md` expanded with install, CDN, framework (Next.js/Vite/plain HTML),
  customization, accessibility, and AI-assisted development sections.
- `dist/nucleus.css` and `demo/nucleus.css` now carry a license banner header.

### Compatibility

- **No public class was renamed or removed.** All 580 classes and 71 tokens are
  unchanged; existing markup keeps working. See the "Backward compatibility" note
  in `README.md`.
