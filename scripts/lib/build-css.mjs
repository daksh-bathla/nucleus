import { MODULE_SECTIONS } from "./parse.mjs";
import { PROJECT } from "./metadata.mjs";
import { minifyCss } from "./minify.mjs";

function banner(version, label) {
  return `/*! ${PROJECT.name} ${version} · ${label} · ${PROJECT.package} · ${PROJECT.license} · ${PROJECT.repository} */\n`;
}

/** The `:root` design-token section (0). Every module needs these variables. */
function tokenSection(model) {
  const section = model.sections.find((s) => s.num === 0);
  return section ? section.text.trimEnd() : "";
}

/** Assemble a module (contiguous source sections) as readable CSS. */
export function assembleModule(model, moduleName, version) {
  const nums = new Set(MODULE_SECTIONS[moduleName]);
  const parts = [];
  // The file prelude (title banner) rides with reset.
  if (moduleName === "reset" && model.prelude.trim()) parts.push(model.prelude.trimEnd());
  // Reset owns the tokens (section 0). Make the other modules self-sufficient by
  // prepending the same token block, so `import ".../utilities"` on its own still
  // resolves every var(--n-*). (Combining modules just redeclares identical
  // tokens — harmless; the full bundle remains the canonical single import.)
  if (moduleName !== "reset") {
    parts.push(
      `/* Design tokens (shared with the reset module; included so this module is usable standalone) */\n${tokenSection(model)}`,
    );
  }
  for (const section of model.sections) {
    if (section.num === 0 && moduleName !== "reset") continue; // prepended above
    if (nums.has(section.num)) parts.push(section.text.trimEnd());
  }
  const label = `${moduleName} module`;
  return `${banner(version, label)}\n${parts.join("\n\n")}\n`;
}

/**
 * Produce every distributable CSS file as { filename: content }.
 * The full bundle is the verbatim source (with a license banner) so its
 * cascade is guaranteed identical to development.
 */
export function bundleFiles(model, version) {
  const files = {};
  const full = `${banner(version, "full build")}${model.source}`;
  files["nucleus.css"] = full;
  files["nucleus.min.css"] = banner(version, "full build (minified)") + minifyCss(model.source);

  for (const moduleName of Object.keys(MODULE_SECTIONS)) {
    const css = assembleModule(model, moduleName, version);
    files[`${moduleName}.css`] = css;
    files[`${moduleName}.min.css`] =
      banner(version, `${moduleName} module (minified)`) + minifyCss(css);
  }
  return files;
}
