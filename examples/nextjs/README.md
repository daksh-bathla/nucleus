# Nucleus CSS + Next.js (App Router)

```bash
npx create-next-app@latest my-app
cd my-app
npm install @navital/nucleus-css
```

Import the framework once in the root layout (`app/layout.tsx`):

```tsx
import "@navital/nucleus-css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

See [`app/layout.tsx`](app/layout.tsx) and [`app/page.tsx`](app/page.tsx).

- Works with both the App Router and Pages Router — the import goes in your
  root layout (`app/layout.tsx`) or `pages/_app.tsx`.
- No PostCSS/Tailwind config needed; Nucleus is plain CSS.

Validate generated markup:

```bash
npx @navital/nucleus-css validate ./app
```
