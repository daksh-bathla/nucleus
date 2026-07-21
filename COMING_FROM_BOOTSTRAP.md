# Coming from Bootstrap

Nucleus has components, a 12-column grid, and some familiar display naming. It is smaller, token-driven, and ships no runtime JavaScript. It is not Bootstrap-compatible.

## Directly familiar concepts

| Bootstrap | Nucleus | Notes |
| --- | --- | --- |
| `container` | `n-container` | Responsive centered container |
| `row` | `n-row` | CSS Grid rather than Bootstrap flex gutters |
| `col-md-6` | `n-col-md-6` | Mobile-first 12-column span |
| `btn btn-primary` | `n-btn n-btn-primary` | Component plus variant |
| `card` / `card-body` | `n-card` / `n-card-body` | Direct component structure |
| `d-none` | `n-d-none` | Normal display utility |
| `d-md-flex` | `n-d-md-flex` | Responsive display utility |

## Similar names with different behavior

- `n-flex` is the canonical base flex-container class. `n-d-flex` remains a deprecated compatibility alias.
- Nucleus spacing uses `0, .25rem, .5rem, 1rem, 1.5rem, 3rem` for levels `0..5`; do not assume Bootstrap's Sass scale.
- The grid is native CSS Grid, so column behavior and nested layout details differ from Bootstrap's flexbox grid.
- Nucleus has no JavaScript plugins. Applications manage tab focus, dialog actions, dropdown logic, and other behavior or use native HTML.

## Nucleus-specific primitives

Nucleus includes intrinsic layouts such as `n-auto-grid`, `n-stack`, `n-cluster`, `n-sidebar-layout`, `n-switcher`, and `n-cover`. These respond to available space rather than requiring a breakpoint for every layout change.

## State migration

Do not copy Bootstrap's unprefixed `.active` into new Nucleus markup. Use `aria-current="page"` for current navigation, `aria-selected="true"` for tabs or segmented choices, and `n-is-active` only as a generic visual fallback.

## Example

Bootstrap:

```html
<a class="btn btn-outline-primary active" href="#">Current</a>
```

Nucleus navigation state:

```html
<a class="n-nav-link" href="#" aria-current="page">Current</a>
```

Nucleus button styling without navigation state:

```html
<a class="n-btn n-btn-outline-primary" href="#">Learn more</a>
```

Use `npx @navital/nucleus-css component n-navbar` for verified structure and run the validator after migration.
