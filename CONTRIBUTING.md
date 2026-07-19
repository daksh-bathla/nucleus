# Contributing to Nucleus CSS

Thanks for helping improve Nucleus. This project is intentionally small and
dependency-free — please keep it that way.

## Project layout

```
src/css/nucleus.css        Single source of truth for all CSS.
scripts/build.mjs          Orchestrates the build + validation.
scripts/lib/*.mjs          Parser, minifier, CSS assembler, manifest + doc generators.
bin/nucleus.mjs            The `nucleus-css` CLI (validate / ai-context / init / manifest).
test/*.test.mjs            node:test suites (no test runner dependency).
demo/*.html                Documentation site (also the deployed demo).
examples/                  Framework starter snippets.
dist/                      Generated — do not edit by hand.
llms*.txt, *_REFERENCE.md  Generated — do not edit by hand.
```

## Golden rule: edit the source, then rebuild

Everything in `dist/`, `demo/nucleus.css`, `llms.txt`, `llms-full.txt`,
`CLASS_REFERENCE.md`, and `COMPONENT_REFERENCE.md` is **generated**. Edit
`src/css/nucleus.css` (and the curated metadata in
`scripts/lib/metadata.mjs`), then:

```bash
npm run build     # regenerate every distributable + doc
npm test          # build + run all checks
npm run check     # verify generated files are in sync (used in CI)
```

## Adding or changing a class

1. Add the rule to the correct numbered section of `src/css/nucleus.css`.
   Keep the `n-` prefix and follow the existing naming (`n-<name>`,
   `n-<name>-<variant>`, `n-<name>-<sm|lg>`, responsive `n-<util>-<bp>-*`).
2. **Do not rename or remove existing public classes.** If something must change,
   keep the old class as an alias and document the migration in `CHANGELOG.md`.
3. If it's a component (not a pure utility), add a curated entry with an HTML
   example to `scripts/lib/metadata.mjs` so it appears in the manifest and docs.
4. Run `npm run build`. The build fails if any documented class does not exist or
   if a demo/example uses an undefined class.

## Accessibility expectations

- Interactive components must have a visible `:focus-visible` state.
- Prefer native elements (`<button>`, `<dialog>`, `<details>`, `<progress>`).
- Document any required HTML attributes / JS behavior in the component's metadata
  `a11y` note (CSS alone can't guarantee accessibility).
- Respect `prefers-reduced-motion` for animations.

## Commit / PR checklist

- [ ] `npm run build` produces no changes beyond your intended ones.
- [ ] `npm test` passes.
- [ ] `npm pack --dry-run` shows the expected files.
- [ ] No new runtime dependencies; build dependencies stay at zero.
- [ ] `CHANGELOG.md` updated under `[Unreleased]`.

## Release process

See [`RELEASE.md`](RELEASE.md).
