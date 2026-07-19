# Release checklist

Nucleus follows [Semantic Versioning](https://semver.org/):

- **patch** — doc/build fixes, no CSS or API change.
- **minor** — new classes/components/tokens; fully backward compatible.
- **major** — any renamed/removed public class, token, or changed default.

## Steps

1. Ensure `main` is green:
   ```bash
   npm run build
   npm test
   npm run check
   ```
2. Update `CHANGELOG.md`: move `[Unreleased]` to the new version + date.
3. Bump the version (this also reruns the build via `prepare`):
   ```bash
   npm version <patch|minor|major>
   ```
4. Inspect the tarball contents:
   ```bash
   npm pack --dry-run
   ```
   Confirm it contains `dist/` (full + min + modules + manifest), `bin/`,
   `llms.txt`, `llms-full.txt`, the reference docs, `README.md`, and `LICENSE`,
   and does **not** contain `demo/`, `test/`, `.vercel`, or `src/js`.
5. Publish (scoped package is public):
   ```bash
   npm publish
   ```
   `prepublishOnly` runs `npm test` (which rebuilds) as a final gate.
6. Push the tag:
   ```bash
   git push --follow-tags
   ```
7. Verify the CDN once npm has propagated:
   ```
   https://cdn.jsdelivr.net/npm/@navital/nucleus-css@<version>/dist/nucleus.min.css
   ```

## First scoped release

The package was renamed from `nucleus-css` to `@navital/nucleus-css`. Publish this
as the first release under the scoped name. No public CSS class changed, so
consumers only need to update their install/import path.
