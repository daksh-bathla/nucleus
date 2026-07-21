# Nucleus CSS

A polished, accessible, **zero-build** CSS framework you can install like Bootstrap
— and that AI coding assistants can use accurately, because every class is
described in machine-readable metadata instead of left to guesswork.

- **697 classes, 76 design tokens** — utilities, intrinsic layouts, components,
  forms, content styles, states, and effects.
- **Zero runtime, zero dependencies** — one stylesheet, no required JavaScript.
- **Prefix everything with `n-`** — no collisions with your own classes.
- **AI-friendly** — ships `llms.txt`, a JSON manifest, and a class validator CLI.

![Nucleus Logo](demo/assets/nucleus.png)

## Contents

- [Install](#install) · [CDN](#cdn) · [Imports](#imports)
- [Framework setup](#framework-setup): [Plain HTML](#plain-html) · [Vite](#vite) · [Next.js](#nextjs)
- [Examples](#examples) · [Utilities](#utilities) · [Customization](#customization)
- [Dark mode & themes](#dark-mode--themes) · [Accessibility](#accessibility)
- [AI-assisted development](#ai-assisted-development)
- [Architecture & naming](#architecture--naming) · [Migration guides](#migration-guides)
- [Browser support](#browser-support) · [Backward compatibility](#backward-compatibility)
- [Contributing & releases](#contributing--releases)

## Install

```bash
npm install @navital/nucleus-css
```

## CDN

No install, no build:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@navital/nucleus-css/dist/nucleus.min.css"
/>
```

Pin a version for production (replace `VERSION` with a published version, e.g. from
[npm](https://www.npmjs.com/package/@navital/nucleus-css)):

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@navital/nucleus-css@VERSION/dist/nucleus.min.css"
/>
```

unpkg works too: `https://unpkg.com/@navital/nucleus-css/dist/nucleus.min.css`.

## Imports

```js
import "@navital/nucleus-css";            // full framework (bundlers)
```

```css
@import "@navital/nucleus-css";           /* full framework (CSS entry) */
```

Optional modular imports (import `reset` first — it defines the tokens the other
modules use, or just use the full bundle):

```js
import "@navital/nucleus-css/reset";       // tokens, reset, global a11y
import "@navital/nucleus-css/utilities";   // layout + utility classes
import "@navital/nucleus-css/components";  // buttons, cards, forms, …
import "@navital/nucleus-css/themes";      // themes + dark mode
```

## Framework setup

### Plain HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@navital/nucleus-css/dist/nucleus.min.css" />
  </head>
  <body>
    <main class="n-container n-section">
      <button class="n-btn n-btn-primary">Get started</button>
    </main>
  </body>
</html>
```

### Vite

```js
// src/main.jsx (or main.ts)
import "@navital/nucleus-css";
```

```jsx
export default function App() {
  return (
    <div className="n-container n-section">
      <button className="n-btn n-btn-primary">Get started</button>
    </div>
  );
}
```

Full starter: [`examples/vite-react`](examples/vite-react).

### Next.js

```tsx
// app/layout.tsx (App Router) — or pages/_app.tsx (Pages Router)
import "@navital/nucleus-css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

Full starter: [`examples/nextjs`](examples/nextjs).

## Examples

Runnable, all using only real classes:

| File | Shows |
| --- | --- |
| [`examples/plain-html`](examples/plain-html/index.html) | Full landing page |
| [`examples/landing-section.html`](examples/landing-section.html) | Marketing section |
| [`examples/navbar.html`](examples/navbar.html) | Sticky nav + breadcrumb |
| [`examples/form.html`](examples/form.html) | Accessible form |
| [`examples/card-layout.html`](examples/card-layout.html) | Responsive card grid |
| [`examples/dialog.html`](examples/dialog.html) | Native `<dialog>` modal |

### Buttons

```html
<button class="n-btn n-btn-primary">Primary</button>
<button class="n-btn n-btn-outline-primary">Outline</button>
<button class="n-btn n-btn-ghost">Ghost</button>
<button class="n-btn n-btn-primary" disabled>Disabled</button>
```

### Card

```html
<article class="n-card n-card-interactive">
  <div class="n-card-body n-flow">
    <span class="n-overline">New</span>
    <h3>Readable HTML</h3>
    <p class="n-text-muted">A finished card with a few meaningful classes.</p>
    <button class="n-btn n-btn-primary">Continue</button>
  </div>
</article>
```

### Responsive grid

```html
<!-- 12-column grid -->
<div class="n-row">
  <div class="n-col-12 n-col-md-6">Left</div>
  <div class="n-col-12 n-col-md-6">Right</div>
</div>

<!-- Or an intrinsic grid that fits as many columns as fit -->
<div class="n-auto-grid" style="--n-grid-min: 16rem">
  <article>One</article>
  <article>Two</article>
  <article>Three</article>
</div>
```

More: **[COMPONENT_REFERENCE.md](COMPONENT_REFERENCE.md)** (copy-paste HTML for every
component) and **[CLASS_REFERENCE.md](CLASS_REFERENCE.md)** (every class described).

## Utilities

Utilities follow predictable, mobile-first names:

```html
<div class="n-flex n-items-center n-justify-between n-gap-3 n-p-4">
  <span class="n-text-lg n-font-semibold">Title</span>
  <span class="n-badge n-badge-soft">3</span>
</div>

<p class="n-mt-3 n-text-muted n-text-center">Spacing, color, and typography helpers.</p>
```

- **Spacing:** `n-m-{0..5}`, `n-mt/mb/ml/mr/mx/my-{0..5}`, and the `n-p*` padding equivalents.
- **Flex:** `n-flex`, `n-flex-col`, `n-items-center`, `n-justify-between`, `n-gap-{0..5}`.
- **Type:** `n-text-{xs..4xl}`, `n-font-{light..bold}`, `n-text-center`, `n-truncate`.
- **Color:** `n-text-{primary,muted,…}`, `n-bg-{primary,success,danger,…}`.
- **Responsive:** append a breakpoint — `n-col-md-6`, `n-d-lg-flex` (bp ∈ sm/md/lg/xl/xxl).

## Customization

Everything themes through CSS custom properties — override them in your own CSS:

```css
:root {
  --n-primary: #1d4ed8;
  --n-primary-h: #1e40af;
  --n-radius: 0.75rem;
  --n-font-sans: Inter, system-ui, sans-serif;
}
```

Density modes adjust control height/padding without markup changes:

```html
<div data-density="compact">…</div>
<div data-density="spacious">…</div>
```

## Dark mode & themes

```html
<!-- Automatic: follows prefers-color-scheme. Manual override: -->
<body class="n-dark-mode">…</body>

<!-- Bundled themes on any element: ocean, forest, rose, amber, mono -->
<html data-theme="ocean">
```

## Accessibility

Nucleus ships strong defaults, but semantics are your responsibility. It provides:

- Visible `:focus-visible` rings and an `n-skip-link`.
- `prefers-reduced-motion`, `prefers-contrast`, and forced-colors handling.
- Screen-reader helpers (`n-sr-only`, `n-sr-only-focusable`) and a 44px `n-touch-target`.
- Native, accessible components: `<dialog>` (open with `showModal()`), `<details>`
  accordions, `<progress>`, and semantic form controls.

Required HTML/JS (documented per component in
[COMPONENT_REFERENCE.md](COMPONENT_REFERENCE.md)): label every input, mark active
nav links with `aria-current`, and drive `n-tabs`/toasts with the appropriate ARIA
in JavaScript. CSS alone cannot guarantee accessibility.

## AI-assisted development

Nucleus is built so AI tools generate **real** class names. See
**[AI_USAGE.md](AI_USAGE.md)** for per-tool setup (Claude Code, Codex, Cursor,
Google Antigravity, Copilot, ChatGPT).

```bash
# Generate the context plus the native project rule for your assistant
npx @navital/nucleus-css ai-setup claude
npx @navital/nucleus-css ai-setup codex
npx @navital/nucleus-css ai-setup cursor
npx @navital/nucleus-css ai-setup antigravity
```

```bash
# Or only print/write the compact AI context
npx @navital/nucleus-css ai-context --out .nucleus/ai-context.md

# Fail on any hallucinated class (scans html/jsx/tsx/vue/svelte)
npx @navital/nucleus-css validate ./src
```

```text
Unknown Nucleus class: n-btn-prmary
  Did you mean: n-btn-primary?
  File: src/components/Hero.tsx
  Line: 18
```

Machine-readable metadata lives in
[`dist/nucleus.manifest.json`](dist/nucleus.manifest.json) and the plain-text
[`llms.txt`](llms.txt) / [`llms-full.txt`](llms-full.txt).

Structured queries return JSON:

```bash
npx @navital/nucleus-css search flex
npx @navital/nucleus-css component n-navbar
npx @navital/nucleus-css token --n-space-4
npx @navital/nucleus-css deprecated
```

## Architecture & naming

Nucleus is a component-first hybrid framework. Named cascade layers make utilities
override component defaults deliberately, while states and themes have explicit
priority. See [ARCHITECTURE.md](ARCHITECTURE.md), [NAMING.md](NAMING.md), and the
generated [MANIFEST.md](MANIFEST.md).

The canonical flex-container class is `n-flex`; `n-d-flex` remains a deprecated
alias. Other visually similar utilities can have meaningful behavioral differences,
which are recorded as manifest gotchas rather than mislabeled as aliases.

## Migration guides

- [Compatibility and migration](MIGRATION.md)
- [Coming from Tailwind](COMING_FROM_TAILWIND.md)
- [Coming from Bootstrap](COMING_FROM_BOOTSTRAP.md)
- [Spacing-scale decision](docs/adr/0001-spacing-scale.md)

## Browser support

Core utilities and components use broadly supported CSS. Progressive features —
container queries, `:has()`-free but modern selectors, `text-wrap`, `dvh`, native
`popover`/`dialog` — enhance current browsers and degrade gracefully elsewhere.

## Backward compatibility

**No public class or token was renamed or removed** in this packaging release. All
697 generated classes and 76 tokens keep their compatibility contract, so existing
markup continues to work unchanged. The only breaking change is the **package name**
(`nucleus-css` → `@navital/nucleus-css`); update your install/import path. See
[CHANGELOG.md](CHANGELOG.md).

## Project structure

```
src/css/nucleus.css   Source of truth (edit here).
dist/                 Generated: full + min + reset/utilities/components/themes + manifest.
bin/nucleus.mjs       CLI (validation, AI setup, and structured metadata queries).
scripts/              Zero-dependency build + generators.
docs/                 Architecture decision records.
demo/                 Documentation site (deployed).
examples/             Framework starters.
```

Rebuild everything with one command:

```bash
npm run build     # regenerate dist + docs
npm test          # build + run all checks
npm run check     # verify generated files are in sync
npm run dev       # serve the demo at http://localhost:3000
```

## Contributing & releases

See [CONTRIBUTING.md](CONTRIBUTING.md) and [RELEASE.md](RELEASE.md). In short: edit
`src/css/nucleus.css`, never edit `dist/` by hand, keep dependencies at zero, and
never rename a public class without an alias + changelog entry.

## License

[MIT](LICENSE) © Daksh Bathla
