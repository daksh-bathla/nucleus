import { BREAKPOINTS, THEMES, DENSITIES } from "./parse.mjs";
import {
  PROJECT,
  SECTION_CATEGORY,
  COMPONENTS,
  CLASS_METADATA,
  LEGACY_SELECTORS,
  describeUtility,
} from "./metadata.mjs";

/** Collect every class a curated component entry references. */
function componentClasses(component) {
  return [
    component.base,
    ...(component.variants || []),
    ...(component.sizes || []),
    ...(component.parts || []),
  ];
}

function unique(values) {
  return [...new Set(values)];
}

function tokenReferences(css = "") {
  return unique([...css.matchAll(/var\((--n-[A-Za-z0-9_-]+)/g)].map((match) => match[1]));
}

function responsiveClass(name) {
  return /^n-(?:col|d)-(?:sm|md|lg|xl|xxl)-/.test(name);
}

function roleFor(name, category, owner) {
  if (owner) {
    const component = COMPONENTS.find((candidate) => candidate.base === owner);
    if (name === owner) return category === "layout" ? "layout" : "component";
    if (component?.sizes?.includes(name)) return "size";
    if (component?.parts?.includes(name)) return "component-part";
    if (component?.variants?.includes(name)) return "variant";
  }
  if (["state", "theme", "accessibility", "layout"].includes(category)) return category;
  return category === "component" ? "component-part" : "utility";
}

function spacingScaleValue(name, tokenMap) {
  const match = /^n-(?:gap|[mp](?:[trblxy])?)-(\d+)$/.exec(name);
  if (!match) return null;
  return tokenMap.get(`--n-space-${match[1]}`) || null;
}

function tokenCategory(name) {
  if (name.startsWith("--n-space-")) return "spacing";
  if (name.startsWith("--n-text-")) return "typography";
  if (name.startsWith("--n-radius")) return "radius";
  if (name.startsWith("--n-shadow")) return "shadow";
  if (name.startsWith("--n-container-") || name === "--n-gutter") return "layout";
  if (name.startsWith("--n-duration") || name === "--n-ease") return "motion";
  if (name.startsWith("--n-control-") || name.startsWith("--n-component-") || name === "--n-section-space") return "component";
  return "color";
}

/**
 * Build the machine-readable manifest from the parsed source model.
 * Returns { manifest, errors }. `errors` is non-empty if any curated class
 * is missing from the real stylesheet — the build fails on that.
 */
export function buildManifest(model, version) {
  const known = new Set(model.classes);
  const errors = [];
  const tokenMap = new Map(model.tokens.map((token) => [token.name, token.value]));

  for (const component of COMPONENTS) {
    for (const cls of componentClasses(component)) {
      if (!known.has(cls)) {
        errors.push(`Component "${component.base}" references unknown class .${cls}`);
      }
    }
  }

  for (const [name, metadata] of Object.entries(CLASS_METADATA)) {
    if (!known.has(name)) errors.push(`Metadata references unknown class .${name}`);
    if (metadata.aliasOf && !known.has(metadata.aliasOf)) {
      errors.push(`Metadata alias .${name} targets unknown .${metadata.aliasOf}`);
    }
    if (metadata.aliasOf && model.selfCss.get(name) !== model.selfCss.get(metadata.aliasOf)) {
      errors.push(`Metadata alias .${name} does not match the CSS for .${metadata.aliasOf}`);
    }
  }

  // Map each class to the component it belongs to (base wins over variant).
  const ownerOf = new Map();
  for (const component of COMPONENTS) {
    for (const cls of componentClasses(component)) {
      if (!ownerOf.has(cls)) ownerOf.set(cls, component.base);
    }
  }

  const categoryOf = (cls) => {
    const section = model.sectionOf.get(cls);
    return (section && SECTION_CATEGORY[section.num]) || "utility";
  };

  const classes = model.classes.map((name) => {
    const category = categoryOf(name);
    const css = model.selfCss.get(name);
    const owner = ownerOf.get(name);
    const component = owner && COMPONENTS.find((candidate) => candidate.base === owner);
    const annotations = CLASS_METADATA[name] || {};
    const references = tokenReferences(css);
    const entry = {
      class: name,
      name,
      category,
      role: roleFor(name, category, owner),
      layer: model.sectionOf.get(name)?.layers?.[0] || null,
      deprecated: Boolean(annotations.deprecated),
      gotchas: annotations.gotchas || [],
      responsive: responsiveClass(name),
      tokenReferences: references.filter((token) => tokenMap.has(token)),
      customPropertyReferences: references.filter((token) => !tokenMap.has(token)),
    };
    if (owner && owner !== name) entry.variantOf = owner;
    if (annotations.aliasOf) entry.aliasOf = annotations.aliasOf;
    if (annotations.replacement) entry.replacement = annotations.replacement;
    if (annotations.since) entry.since = annotations.since;
    const scaleValue = spacingScaleValue(name, tokenMap);
    if (scaleValue !== null) entry.scaleValue = scaleValue;
    if (name === owner && component?.states?.length) entry.states = component.states;
    if (name === owner && component?.example) entry.examples = [component.example];
    if (category === "component" && owner) {
      entry.description =
        name === owner ? component.summary : `${component.title} modifier/part (see .${owner}).`;
    } else {
      entry.description = describeUtility(name, css);
    }
    if (css && css.length <= 200) entry.css = css;
    return entry;
  });

  const components = COMPONENTS.map((c) => ({
    name: c.base,
    title: c.title,
    category: "component",
    description: c.summary,
    element: c.element || null,
    requires: c.requires || [],
    variants: c.variants || [],
    sizes: c.sizes || [],
    parts: c.parts || [],
    states: c.states || [],
    responsive: Boolean(c.responsive),
    accessibility: c.a11y || null,
    notes: c.notes || null,
    example: c.example,
  }));

  const manifest = {
    schemaVersion: "2.0.0",
    name: PROJECT.name,
    package: PROJECT.package,
    version,
    prefix: PROJECT.prefix,
    description: PROJECT.description,
    repository: PROJECT.repository,
    license: PROJECT.license,
    imports: {
      full: PROJECT.package,
      minified: `${PROJECT.package}/min`,
      reset: `${PROJECT.package}/reset`,
      utilities: `${PROJECT.package}/utilities`,
      components: `${PROJECT.package}/components`,
      themes: `${PROJECT.package}/themes`,
    },
    cdn: PROJECT.cdn.replace("{version}", version),
    breakpoints: BREAKPOINTS,
    themes: THEMES,
    densities: DENSITIES,
    darkMode: {
      automatic: "@media (prefers-color-scheme: dark)",
      manual: "n-dark-mode",
    },
    architecture: {
      model: "component-first hybrid",
      layers: model.layers,
      zeroRuntimeJavaScript: true,
    },
    stateConvention: {
      priority: ["native-or-aria", "data-attribute", "n-is-* class"],
      canonicalClasses: [
        "n-is-active",
        "n-is-selected",
        "n-is-expanded",
        "n-is-open",
        "n-is-loading",
        "n-is-disabled",
        "n-is-dragging",
      ],
      legacySelectors: LEGACY_SELECTORS,
    },
    spacingScale: {
      strategy: "stable-v2",
      tailwindCompatible: false,
      values: Object.fromEntries(
        model.tokens
          .filter((token) => token.name.startsWith("--n-space-"))
          .map((token) => [token.name.replace("--n-space-", ""), token.value]),
      ),
      migration: "Numeric values remain unchanged in v2; any remapping is reserved for a future major release.",
    },
    counts: {
      classes: model.classes.length,
      tokens: model.tokens.length,
      components: COMPONENTS.length,
      deprecatedClasses: classes.filter((entry) => entry.deprecated).length,
    },
    tokens: model.tokens.map((token) => ({
      ...token,
      category: tokenCategory(token.name),
      ...(token.name.startsWith("--n-space-") ? { scaleValue: token.value } : {}),
    })),
    components,
    classes,
  };

  return { manifest, errors };
}
