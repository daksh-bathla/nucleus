# Nucleus naming

Every public Nucleus class starts with `n-`. Names use familiar CSS terms when the behavior matches those terms.

## Patterns

| Concept | Pattern | Example |
| --- | --- | --- |
| Component | `n-<name>` | `n-card` |
| Component part | `n-<name>-<part>` | `n-card-body` |
| Variant | `n-<name>-<variant>` | `n-btn-primary` |
| Size | `n-<name>-sm` or `n-<name>-lg` | `n-btn-sm` |
| Utility | `n-<property>-<value>` | `n-text-center` |
| Responsive utility | family-specific breakpoint position | `n-col-md-6`, `n-d-lg-flex` |
| Visual state | `n-is-<state>` | `n-is-loading` |

Use only classes present in `dist/nucleus.manifest.json`. Naming regularity helps inference, but the manifest is authoritative.

## Canonical and overlapping names

| Concept | Canonical guidance | Compatibility / distinction |
| --- | --- | --- |
| Flex container | `n-flex` | `n-d-flex` remains a deprecated exact alias |
| Normal display hiding | `n-d-none` | `n-hidden` force-hides with `!important`; it is intentionally distinct |
| Create and center a grid | `n-center` | `n-place-center` only sets `place-items` on an existing compatible layout |
| Intrinsic auto grid | `n-auto-grid` for the documented primitive | `n-grid-auto-fit` uses a different 14rem default and is not an alias |

The validator accepts deprecated aliases and prints a replacement warning. It rejects unknown classes.

## Semantic variants

The shared semantic set is:

`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`

Buttons, outline buttons, backgrounds, borders, alerts, and badges implement the complete set. Text colors also include semantic colors plus `muted` and `white`; choose text colors based on readable contrast rather than matrix completion alone.

## State names

Prefer state in this order:

1. Native or accurate ARIA: `disabled`, `aria-current="page"`, `aria-selected="true"`, `aria-expanded="true"`.
2. `data-state` when there is no accurate native or ARIA state.
3. A namespaced visual hook: `n-is-active`, `n-is-selected`, `n-is-expanded`, `n-is-open`, `n-is-loading`, `n-is-disabled`, or `n-is-dragging`.

Do not add unprefixed `.active` to new markup. Legacy `n-active`, `n-selected`, `n-expanded`, `n-loading`, `n-disabled`, and `n-dragging` remain compatible aliases.

## Spacing names

The v2 scale is stable but differs from Tailwind:

| Number | Value |
| --- | --- |
| `0` | `0` |
| `1` | `0.25rem` |
| `2` | `0.5rem` |
| `3` | `1rem` |
| `4` | `1.5rem` |
| `5` | `3rem` |

Do not infer the value from another framework. The manifest exposes `scaleValue` on spacing utilities and spacing tokens.
