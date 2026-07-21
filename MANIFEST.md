# Nucleus CSS — Manifest schema

Generated from `src/css/nucleus.css` and the validated metadata annotations. Do not edit the JSON manifest by hand.

## Top-level contract

- `schemaVersion`: manifest contract version (2.0.0)
- `version`: package version
- `architecture`: framework model and ordered cascade layers
- `stateConvention`: canonical state hierarchy and legacy compatibility selectors
- `spacingScale`: exact v2 numeric mapping and migration policy
- `counts`: generated class, token, component, and deprecation counts
- `tokens[]`, `components[]`, `classes[]`: CSS-backed public API records

## Class record

Every `classes[]` record includes `class`/`name`, `category`, `role`, `layer`, `deprecated`, `gotchas`, `responsive`, `tokenReferences`, `customPropertyReferences`, and `description`. Relevant records also include `aliasOf`, `replacement`, `since`, `variantOf`, `states`, `scaleValue`, or `examples`.

Allowed roles currently emitted: `utility`, `component`, `component-part`, `variant`, `size`, `layout`, `state`, `theme`, and `accessibility`.

## Deprecations

- `.n-active` → `.n-is-active`
- `.n-d-flex` → `.n-flex`
- `.n-disabled` → `.n-is-disabled`
- `.n-dragging` → `.n-is-dragging`
- `.n-expanded` → `.n-is-expanded`
- `.n-loading` → `.n-is-loading`
- `.n-selected` → `.n-is-selected`

## Structured CLI queries

`npx @navital/nucleus-css search flex`

`npx @navital/nucleus-css component n-navbar`

`npx @navital/nucleus-css token --n-space-4`

`npx @navital/nucleus-css deprecated`

All four commands return JSON suitable for developer tools and coding assistants.
