# Coming from Tailwind

Nucleus shares some familiar utility names, but it is a component-first framework with a smaller, fixed API. It is not Tailwind-compatible.

## Directly familiar concepts

| Tailwind | Nucleus | Notes |
| --- | --- | --- |
| `flex` | `n-flex` | Direct behavior match |
| `flex-col` | `n-flex-col` | Use with `n-flex` |
| `items-center` | `n-items-center` | Direct behavior match |
| `justify-between` | `n-justify-between` | Direct behavior match |
| `text-center` | `n-text-center` | Direct behavior match |
| `w-full` | `n-w-full` | Direct behavior match |
| `rounded-lg` | `n-rounded-lg` | Token-driven radius |

## Similar names with different behavior

- Numeric spacing is not Tailwind-compatible. `n-p-4` is `1.5rem`, not `1rem`.
- Breakpoints are `sm=576px`, `md=768px`, `lg=992px`, `xl=1200px`, and `xxl=1600px`.
- Responsive display uses `n-d-md-flex`; Nucleus does not use Tailwind's `md:flex` syntax.
- `n-center` creates a grid and centers its children. It is not a generic text-centering shortcut.
- Nucleus does not generate arbitrary values or every property/value combination.

## Components and layout primitives

Use Nucleus components instead of rebuilding every pattern from utilities:

- `n-btn`, `n-card`, `n-alert`, `n-badge`, `n-navbar`, `n-dialog`, and form controls;
- `n-container` with the 12-column `n-row` / `n-col-*` grid;
- `n-auto-grid`, `n-stack`, `n-cluster`, `n-sidebar-layout`, `n-switcher`, and `n-cover`.

Utilities intentionally outrank component defaults through cascade layers, so targeted overrides remain predictable.

## State migration

Use native and ARIA state first. Prefer `aria-current="page"` for navigation, `aria-selected="true"` for tabs, and native `disabled` for buttons. Use `n-is-*` only for generic visual state that lacks a better semantic hook.

## Example

Tailwind:

```html
<button class="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white">
  Continue
</button>
```

Nucleus:

```html
<button class="n-btn n-btn-primary">
  Continue
</button>
```

Before migrating a larger block, query the manifest and validate the result:

```bash
npx @navital/nucleus-css search card
npx @navital/nucleus-css validate ./src
```
