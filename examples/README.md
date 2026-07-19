# Nucleus CSS examples

Copy-paste starters. Every example uses only classes that exist in the framework
(verified by `npm run build` for HTML and by `npx @navital/nucleus-css validate`
for JSX/TSX).

## Standalone HTML

Open these directly in a browser after running `npm run build` at the repo root:

- [`plain-html/index.html`](plain-html/index.html) — full landing page (navbar, hero, features).
- [`landing-section.html`](landing-section.html) — a single marketing section.
- [`navbar.html`](navbar.html) — sticky navigation + breadcrumb.
- [`form.html`](form.html) — accessible form with validation-ready fields.
- [`card-layout.html`](card-layout.html) — responsive auto-grid of cards.
- [`dialog.html`](dialog.html) — native `<dialog>` modal.

## Frameworks

- [`vite-react/`](vite-react/) — import the package once in your entry file.
- [`nextjs/`](nextjs/) — import in the App Router root layout.

## Quick usage recap

```html
<!-- Plain HTML (CDN) -->
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@navital/nucleus-css/dist/nucleus.min.css" />
```

```js
// Bundler (Vite, Next.js, webpack, Parcel)
import "@navital/nucleus-css";
```

```css
/* CSS entry */
@import "@navital/nucleus-css";
```
