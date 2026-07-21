# Compatibility and migration guide

The current release does not remove public classes. Existing markup keeps working while the validator guides new code toward canonical names and semantic states.

## Recommended v2 cleanup

### Prefer the canonical flex class

```html
<!-- Compatible, deprecated -->
<div class="n-d-flex n-gap-2">...</div>

<!-- Canonical -->
<div class="n-flex n-gap-2">...</div>
```

### Replace visual `.active` with semantics

```html
<!-- Compatible, deprecated -->
<a class="n-nav-link active" href="/docs">Docs</a>

<!-- Canonical and accessible -->
<a class="n-nav-link" href="/docs" aria-current="page">Docs</a>
```

For tabs and single-select controls, use `aria-selected="true"`. Use `aria-expanded` only when the element actually controls expandable content.

### Use namespaced fallback states

```html
<button class="n-btn n-btn-primary n-is-loading" aria-busy="true">Saving...</button>
<a class="n-btn n-btn-secondary n-is-disabled" aria-disabled="true">Unavailable</a>
```

Legacy `n-loading` and `n-disabled` still work and produce validator warnings.

### Check spacing before framework migration

Nucleus keeps its v2 numeric mapping. In particular, `n-p-4` is `1.5rem`. Review numeric spacing classes instead of mechanically prefixing Tailwind classes.

## Validate a project

```bash
npx @navital/nucleus-css validate ./src ./app ./components ./pages
```

Unknown classes are errors and return a non-zero exit status. Deprecated aliases are warnings with a replacement and do not fail the command.

List all compatibility aliases:

```bash
npx @navital/nucleus-css deprecated
```

## Future major-release candidates

A future major release may reconsider the numeric spacing scale and remove unprefixed component-scoped `.active` selectors after a deprecation window. It should not change either behavior without a dedicated codemod or explicit migration table.
