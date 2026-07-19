import { BREAKPOINTS, THEMES, DENSITIES } from "./parse.mjs";
import {
  PROJECT,
  SECTION_CATEGORY,
  COMPONENTS,
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

/**
 * Build the machine-readable manifest from the parsed source model.
 * Returns { manifest, errors }. `errors` is non-empty if any curated class
 * is missing from the real stylesheet — the build fails on that.
 */
export function buildManifest(model, version) {
  const known = new Set(model.classes);
  const errors = [];

  for (const component of COMPONENTS) {
    for (const cls of componentClasses(component)) {
      if (!known.has(cls)) {
        errors.push(`Component "${component.base}" references unknown class .${cls}`);
      }
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
    const entry = { name, category };
    if (owner && owner !== name) entry.variantOf = owner;
    if (category === "component" && owner) {
      const c = COMPONENTS.find((x) => x.base === owner);
      entry.description =
        name === owner ? c.summary : `${c.title} modifier/part (see .${owner}).`;
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
    counts: {
      classes: model.classes.length,
      tokens: model.tokens.length,
      components: COMPONENTS.length,
    },
    tokens: model.tokens,
    components,
    classes,
  };

  return { manifest, errors };
}
