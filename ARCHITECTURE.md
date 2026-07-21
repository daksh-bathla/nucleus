# Nucleus architecture

Nucleus is a component-first, token-driven CSS framework with a predictable utility layer, intrinsic layout primitives, machine-readable metadata, and zero runtime JavaScript.

It is a hybrid framework. Components provide accessible structures and sensible defaults. Utilities provide targeted overrides. Design tokens connect both layers. Nucleus is not utility-first and does not attempt to reproduce Tailwind or Bootstrap.

## Public cascade contract

The full and modular builds declare the same ordered layers:

```css
@layer reset, tokens, base, layout, components, utilities, states, themes;
```

| Layer | Responsibility |
| --- | --- |
| `reset` | Box sizing and low-priority element normalization |
| `tokens` | Default `--n-*` custom properties |
| `base` | Typography defaults, accessibility, print behavior |
| `layout` | Containers, grid, and intrinsic layout primitives |
| `components` | Buttons, cards, forms, navigation, and composed patterns |
| `utilities` | Focused property overrides such as spacing, display, color, and effects |
| `states` | Generic `n-is-*` visual states and compatibility state hooks |
| `themes` | Theme, density, and dark-mode token overrides |

Layer order, not accidental file position, is the contract. A utility therefore overrides an equal-specificity component default:

```html
<nav class="n-navbar n-p-2">...</nav>
```

`n-navbar` supplies the component padding and `n-p-2` deliberately replaces it.

## Source and generated outputs

`src/css/nucleus.css` remains the single authored stylesheet. The numbered sections are wrapped in named layers and parsed by `scripts/lib/parse.mjs`.

The build produces:

- the full and minified bundles;
- reset, utility, component, and theme modules;
- the JSON manifest;
- concise and full AI references;
- class, component, and manifest references;
- synchronized demo copies.

Keeping one authored file avoids partial-import drift while the parser can still produce modular packages. A source split should happen only when it reduces maintenance cost without changing selector order, generated metadata, or import behavior.

## Source of truth

The parser owns class, token, layer, and section discovery. Curated metadata may describe a real selector, but the build fails if it names a class or alias target that the CSS does not contain. Counts, package version, and generated documentation come from the parser and `package.json`.

Handwritten current-count claims and repository links are validated during `npm run build`. Generated files are checked byte-for-byte by `npm run check` and the test suite.

## Compatibility boundary

- Public classes use the `n-` namespace.
- Existing classes are not removed in a minor or compatibility release.
- A renamed concept keeps a CSS alias and manifest deprecation record.
- Component-scoped `.active` selectors remain only as temporary compatibility hooks.
- Utilities do not gain blanket `!important`; cascade layers provide priority.
- Token overrides and normal CSS remain the escape hatch.

## Runtime model

Nucleus ships no runtime JavaScript. Native HTML handles what it can, including `details`, `dialog`, `popover`, `disabled`, and ARIA state. Applications supply behavior when a component needs interaction logic, such as tab focus management or combobox filtering.
