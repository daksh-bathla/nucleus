# ADR 0001: Preserve the v2 spacing scale

- Status: accepted
- Date: 2026-07-21

## Context

Nucleus numeric spacing classes use this scale:

`0=0`, `1=.25rem`, `2=.5rem`, `3=1rem`, `4=1.5rem`, `5=3rem`.

Developers and coding assistants familiar with Tailwind may incorrectly assume `4=1rem`. Existing Nucleus interfaces already depend on the current computed values.

## Decision

Keep every v2 spacing token and class value unchanged.

Expose the mapping in:

- `NAMING.md` and framework comparison guides;
- `llms.txt` and `llms-full.txt`;
- manifest `spacingScale.values`;
- token records and class-level `scaleValue` metadata.

Do not add a second numeric scale in v2. The same class names cannot safely represent two mappings, and a parallel numeric dialect would reduce predictability.

## Consequences

- Existing layouts remain visually compatible.
- Humans and coding assistants must consult Nucleus metadata rather than infer Tailwind values.
- New spacing levels can be considered only if they extend the current pattern without colliding with existing names.
- Remapping the numeric scale is reserved for a future major release with explicit migration tooling.

## Alternatives considered

### Silently adopt a Tailwind-like scale

Rejected because it would change existing computed styles.

### Add a second familiar numeric namespace

Rejected because two numeric systems would be harder to infer and document than the current explicit scale.

### Add semantic spacing names now

Deferred. Semantic names may help component internals, but adding a broad parallel public API in a compatibility release would increase surface area without removing the numeric ambiguity.
