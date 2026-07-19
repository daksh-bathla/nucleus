/**
 * Hand-curated framework metadata: project facts + rich component entries
 * (description, variants, states, accessibility, and a real HTML example).
 *
 * Every class named here is cross-checked against the parsed source at build
 * time (see scripts/lib/manifest.mjs), so this file can never document a class
 * that does not exist. Utility classes not listed here get a description
 * generated directly from their CSS declaration.
 */

export const PROJECT = {
  name: "Nucleus CSS",
  package: "@navital/nucleus-css",
  prefix: "n-",
  description: "A polished, accessible, zero-build CSS framework.",
  repository: "https://github.com/dakshbathla/nucleus",
  license: "MIT",
  cdn: "https://cdn.jsdelivr.net/npm/@navital/nucleus-css@{version}/dist/nucleus.min.css",
};

/** Section number → high-level category used across manifest and docs. */
export const SECTION_CATEGORY = {
  0: "tokens",
  1: "reset",
  2: "layout",
  3: "layout",
  4: "utility",
  5: "utility",
  6: "utility",
  7: "utility",
  8: "utility",
  9: "component",
  10: "component",
  11: "component",
  12: "component",
  13: "utility",
  14: "utility",
  15: "utility",
  16: "utility",
  17: "utility",
  18: "utility",
  19: "utility",
  20: "component",
  21: "component",
  22: "component",
  23: "component",
  24: "helper",
  25: "component",
  26: "layout",
  27: "content",
  28: "component",
  29: "component",
  30: "component",
  31: "state",
  32: "theme",
  33: "accessibility",
  34: "utility",
  35: "theme",
};

export const CATEGORY_LABELS = {
  layout: "Layout",
  utility: "Utility",
  component: "Component",
  helper: "Helper",
  content: "Content & typography",
  state: "State",
  theme: "Theme & dark mode",
  accessibility: "Accessibility",
  reset: "Reset",
  tokens: "Design tokens",
};

/**
 * Curated component/primitive entries. `base` is the anchor class; `variants`,
 * `sizes`, and `parts` list the real classes that pair with it.
 */
export const COMPONENTS = [
  // ---- Layout ----
  {
    base: "n-container",
    title: "Container",
    summary: "Centered, max-width page container with responsive breakpoints.",
    parts: ["n-container-fluid"],
    responsive: true,
    example: `<div class="n-container">
  <!-- page content -->
</div>`,
    notes: "Use n-container-fluid for a full-width container with gutters but no max-width.",
  },
  {
    base: "n-row",
    title: "Grid row",
    summary: "12-column CSS grid row. Pair with n-col-* children.",
    parts: ["n-col-1", "n-col-6", "n-col-12", "n-col-md-6", "n-col-lg-4"],
    responsive: true,
    example: `<div class="n-row">
  <div class="n-col-12 n-col-md-6">Left</div>
  <div class="n-col-12 n-col-md-6">Right</div>
</div>`,
    notes:
      "Column classes exist for spans 1–12 at base, sm, md, lg, and xl breakpoints (e.g. n-col-md-6).",
  },
  {
    base: "n-auto-grid",
    title: "Auto grid",
    summary: "Responsive grid that fits as many columns as space allows.",
    parts: ["n-grid-auto-fit", "n-grid-auto-fill"],
    example: `<div class="n-auto-grid" style="--n-grid-min: 16rem">
  <article class="n-card"><div class="n-card-body">One</div></article>
  <article class="n-card"><div class="n-card-body">Two</div></article>
  <article class="n-card"><div class="n-card-body">Three</div></article>
</div>`,
    notes: "Set the minimum column width with the --n-grid-min custom property.",
  },
  {
    base: "n-sidebar-layout",
    title: "Sidebar layout",
    summary: "Two-column layout that collapses to a single column on narrow screens.",
    parts: ["n-sidebar-right"],
    responsive: true,
    example: `<div class="n-sidebar-layout">
  <aside>Navigation</aside>
  <main>Content</main>
</div>`,
    notes: "Add n-sidebar-right to place the sidebar after the main content.",
  },
  {
    base: "n-cluster",
    title: "Cluster",
    summary: "Flex row of items that wrap, with consistent gaps.",
    example: `<div class="n-cluster">
  <span class="n-badge n-badge-primary">New</span>
  <span class="n-badge n-badge-success">Stable</span>
</div>`,
  },
  {
    base: "n-split",
    title: "Split",
    summary: "Pushes two groups to opposite ends of a row.",
    example: `<div class="n-split">
  <strong>Title</strong>
  <button class="n-btn n-btn-primary">Action</button>
</div>`,
  },
  {
    base: "n-stack",
    title: "Stack",
    summary: "Vertical grid stack with a consistent gap between children.",
    example: `<div class="n-stack">
  <p>First</p>
  <p>Second</p>
</div>`,
  },
  // ---- Buttons ----
  {
    base: "n-btn",
    title: "Button",
    summary: "Base button. Combine with a color variant and optional size.",
    element: "button",
    variants: [
      "n-btn-primary",
      "n-btn-secondary",
      "n-btn-success",
      "n-btn-danger",
      "n-btn-warning",
      "n-btn-info",
      "n-btn-dark",
      "n-btn-light",
      "n-btn-outline-primary",
      "n-btn-outline-secondary",
      "n-btn-outline-success",
      "n-btn-outline-danger",
      "n-btn-ghost",
    ],
    sizes: ["n-btn-sm", "n-btn-lg"],
    states: ["hover", "active", "focus-visible", "disabled"],
    parts: ["n-button-group"],
    example: `<button class="n-btn n-btn-primary">Continue</button>
<button class="n-btn n-btn-outline-primary">Learn more</button>
<button class="n-btn n-btn-primary" disabled>Disabled</button>`,
    a11y:
      "Use a native <button> for actions and an <a class=\"n-btn\"> only for navigation. Disable with the [disabled] attribute (or n-disabled for anchors, which cannot be natively disabled).",
  },
  {
    base: "n-button-group",
    title: "Button group",
    summary: "Joins adjacent buttons into a single segmented control.",
    example: `<div class="n-button-group">
  <button class="n-btn n-btn-light">Day</button>
  <button class="n-btn n-btn-light">Week</button>
  <button class="n-btn n-btn-light">Month</button>
</div>`,
  },
  // ---- Cards ----
  {
    base: "n-card",
    title: "Card",
    summary: "Surface container with optional header, body, and footer regions.",
    variants: ["n-card-interactive", "n-card-elevated"],
    parts: ["n-card-header", "n-card-body", "n-card-footer", "n-card-img"],
    example: `<article class="n-card">
  <div class="n-card-header">Plan</div>
  <div class="n-card-body">
    <p class="n-text-muted">Everything you need to start.</p>
  </div>
  <div class="n-card-footer">
    <button class="n-btn n-btn-primary">Choose</button>
  </div>
</article>`,
    notes: "Add n-card-interactive for a hover lift, or n-card-elevated for a stronger shadow.",
  },
  // ---- Forms ----
  {
    base: "n-input",
    title: "Text input",
    summary: "Full-width text field. Pair with n-label inside an n-form-group.",
    element: "input",
    sizes: ["n-input-sm", "n-input-lg"],
    variants: ["n-input-success", "n-input-error"],
    states: ["focus", "disabled", "aria-invalid"],
    parts: ["n-form-group", "n-label", "n-helper-text", "n-error-text"],
    example: `<div class="n-form-group">
  <label class="n-label" for="email">Email</label>
  <input class="n-input" id="email" type="email" placeholder="you@example.com">
  <p class="n-helper-text">We never share your email.</p>
</div>`,
    a11y:
      "Every control needs an associated <label>. Signal invalid state with aria-invalid=\"true\" (styled automatically) and describe the error with n-error-text via aria-describedby.",
  },
  {
    base: "n-select",
    title: "Select",
    summary: "Styled native select with a custom chevron.",
    element: "select",
    parts: ["n-form-group", "n-label"],
    example: `<div class="n-form-group">
  <label class="n-label" for="plan">Plan</label>
  <select class="n-select" id="plan">
    <option>Starter</option>
    <option>Pro</option>
  </select>
</div>`,
  },
  {
    base: "n-textarea",
    title: "Textarea",
    summary: "Vertically resizable multi-line text field.",
    element: "textarea",
    example: `<div class="n-form-group">
  <label class="n-label" for="bio">Bio</label>
  <textarea class="n-textarea" id="bio" rows="4"></textarea>
</div>`,
  },
  {
    base: "n-checkbox",
    title: "Checkbox / radio",
    summary: "Inline label wrapper for a native checkbox or radio.",
    parts: ["n-radio"],
    example: `<label class="n-checkbox">
  <input type="checkbox"> Subscribe to updates
</label>
<label class="n-radio">
  <input type="radio" name="tier"> Free
</label>`,
  },
  {
    base: "n-switch",
    title: "Switch",
    summary: "Accessible toggle built from a visually-hidden checkbox and a track.",
    parts: ["n-switch-track"],
    states: ["checked", "focus-visible", "disabled"],
    example: `<label class="n-switch">
  <input type="checkbox">
  <span class="n-switch-track"></span>
  Enable notifications
</label>`,
    a11y: "The <input type=\"checkbox\"> carries the accessible state; keep it inside the label.",
  },
  {
    base: "n-input-group",
    title: "Input group",
    summary: "Joins an input with prefix/suffix add-ons or a button.",
    parts: ["n-input-prefix", "n-input-suffix"],
    example: `<div class="n-input-group">
  <span class="n-input-prefix">https://</span>
  <input class="n-input" type="text" placeholder="your-site">
  <button class="n-btn n-btn-primary">Go</button>
</div>`,
  },
  {
    base: "n-fieldset",
    title: "Fieldset",
    summary: "Grouped form controls with a legend.",
    element: "fieldset",
    parts: ["n-form-grid", "n-field-row"],
    example: `<fieldset class="n-fieldset">
  <legend>Address</legend>
  <div class="n-form-grid">
    <input class="n-input" placeholder="City">
    <input class="n-input" placeholder="Postal code">
  </div>
</fieldset>`,
  },
  // ---- Navigation ----
  {
    base: "n-navbar",
    title: "Navbar",
    summary: "Sticky top navigation bar with brand and nav links.",
    element: "nav",
    parts: ["n-navbar-brand", "n-nav", "n-nav-item", "n-nav-link"],
    responsive: true,
    example: `<nav class="n-navbar">
  <a class="n-navbar-brand" href="/">Nucleus</a>
  <ul class="n-nav">
    <li class="n-nav-item"><a class="n-nav-link active" href="/">Home</a></li>
    <li class="n-nav-item"><a class="n-nav-link" href="/docs">Docs</a></li>
  </ul>
</nav>`,
    a11y: "Mark the active link with the `active` class and aria-current=\"page\".",
  },
  {
    base: "n-breadcrumb",
    title: "Breadcrumb",
    summary: "Ordered trail of ancestor links.",
    element: "ol",
    example: `<nav aria-label="Breadcrumb">
  <ol class="n-breadcrumb">
    <li><a href="/">Home</a></li>
    <li><a href="/docs">Docs</a></li>
    <li aria-current="page">Buttons</li>
  </ol>
</nav>`,
  },
  {
    base: "n-pagination",
    title: "Pagination",
    summary: "List of page links; mark the current page with aria-current.",
    parts: ["n-pagination-link"],
    example: `<nav aria-label="Pagination">
  <ul class="n-pagination">
    <li><a class="n-pagination-link" href="#">1</a></li>
    <li><a class="n-pagination-link" href="#" aria-current="page">2</a></li>
    <li><a class="n-pagination-link" href="#">3</a></li>
  </ul>
</nav>`,
  },
  {
    base: "n-tabs",
    title: "Tabs",
    summary: "Horizontal tablist. Toggle aria-selected in JavaScript.",
    parts: ["n-tab", "n-tab-panel"],
    states: ["aria-selected", "hover"],
    example: `<div class="n-tabs" role="tablist">
  <button class="n-tab" role="tab" aria-selected="true">Overview</button>
  <button class="n-tab" role="tab" aria-selected="false">Details</button>
</div>
<div class="n-tab-panel" role="tabpanel">…</div>`,
    a11y: "Requires JS to move aria-selected and manage focus per the WAI-ARIA tabs pattern.",
  },
  // ---- Feedback ----
  {
    base: "n-alert",
    title: "Alert",
    summary: "Colored message banner for contextual feedback.",
    variants: [
      "n-alert-primary",
      "n-alert-success",
      "n-alert-danger",
      "n-alert-warning",
      "n-alert-info",
    ],
    example: `<div class="n-alert n-alert-success" role="status">
  Your changes have been saved.
</div>`,
    a11y: "Add role=\"alert\" for errors and role=\"status\" for non-urgent messages.",
  },
  {
    base: "n-badge",
    title: "Badge",
    summary: "Small pill for counts, labels, or status.",
    variants: [
      "n-badge-primary",
      "n-badge-secondary",
      "n-badge-success",
      "n-badge-danger",
      "n-badge-warning",
      "n-badge-info",
      "n-badge-dark",
      "n-badge-soft",
    ],
    example: `<span class="n-badge n-badge-primary">Beta</span>`,
  },
  {
    base: "n-callout",
    title: "Callout",
    summary: "Boxed aside for tips and warnings.",
    variants: ["n-callout-primary", "n-callout-success", "n-callout-danger"],
    parts: ["n-callout-title"],
    example: `<div class="n-callout n-callout-primary">
  <p class="n-callout-title">Heads up</p>
  <p>Container queries need a modern browser.</p>
</div>`,
  },
  {
    base: "n-toast",
    title: "Toast",
    summary: "Transient notification; stack with n-toast-stack.",
    parts: ["n-toast-stack"],
    example: `<div class="n-toast-stack">
  <div class="n-toast" role="status">Saved to your library.</div>
</div>`,
  },
  {
    base: "n-progress",
    title: "Progress bar",
    summary: "Native <progress> element styling.",
    element: "progress",
    example: `<progress class="n-progress" value="70" max="100">70%</progress>`,
  },
  {
    base: "n-spinner",
    title: "Spinner",
    summary: "Indeterminate loading indicator.",
    sizes: ["n-spinner-sm", "n-spinner-lg"],
    example: `<span class="n-spinner" role="status" aria-label="Loading"></span>`,
    a11y: "Respects prefers-reduced-motion. Provide an aria-label since it has no text.",
  },
  {
    base: "n-skeleton",
    title: "Skeleton",
    summary: "Shimmering placeholder for loading content.",
    parts: ["n-skeleton-text", "n-skeleton-circle"],
    example: `<div class="n-skeleton n-skeleton-text" style="width: 60%"></div>`,
  },
  // ---- Overlays (native) ----
  {
    base: "n-dialog",
    title: "Dialog",
    summary: "Native <dialog> modal. Open with dialog.showModal() in JavaScript.",
    element: "dialog",
    parts: ["n-dialog-header", "n-dialog-body", "n-dialog-footer"],
    example: `<dialog class="n-dialog">
  <div class="n-dialog-header"><strong>Confirm</strong></div>
  <div class="n-dialog-body">Delete this item?</div>
  <form method="dialog" class="n-dialog-footer">
    <button class="n-btn n-btn-light">Cancel</button>
    <button class="n-btn n-btn-danger">Delete</button>
  </form>
</dialog>`,
    a11y:
      "Open with element.showModal() (not the open attribute) so focus trapping, Esc-to-close, and the backdrop work. A method=\"dialog\" form closes it.",
  },
  {
    base: "n-drawer",
    title: "Drawer",
    summary: "Edge-anchored <dialog> panel.",
    element: "dialog",
    variants: ["n-drawer-left"],
    example: `<dialog class="n-dialog n-drawer">
  <div class="n-dialog-body">Side panel</div>
</dialog>`,
    notes: "Combine with n-dialog; add n-drawer-left to anchor on the left edge.",
  },
  {
    base: "n-accordion",
    title: "Accordion",
    summary: "Disclosure group built on native <details>/<summary>.",
    parts: ["n-accordion-panel"],
    example: `<div class="n-accordion">
  <details>
    <summary>What is Nucleus?</summary>
    <div class="n-accordion-panel">A zero-build CSS framework.</div>
  </details>
</div>`,
    a11y: "Native <details> handles keyboard and expanded state with no JavaScript.",
  },
  {
    base: "n-dropdown",
    title: "Dropdown menu",
    summary: "Menu surface of n-dropdown-item rows. Best inside a popover.",
    parts: ["n-dropdown-item", "n-popover"],
    example: `<div class="n-dropdown">
  <button class="n-dropdown-item">Profile</button>
  <button class="n-dropdown-item">Settings</button>
</div>`,
  },
  {
    base: "n-tooltip",
    title: "Tooltip",
    summary: "CSS-only tooltip driven by the data-tooltip attribute.",
    states: ["hover", "focus-visible"],
    example: `<button class="n-btn n-btn-light n-tooltip" data-tooltip="Save changes">Save</button>`,
    a11y: "For essential text also expose it to assistive tech (e.g. aria-label).",
  },
  // ---- Data display ----
  {
    base: "n-table",
    title: "Table",
    summary: "Base table styling with striped/hover/bordered variants.",
    element: "table",
    variants: ["n-table-striped", "n-table-hover", "n-table-bordered"],
    example: `<table class="n-table n-table-striped">
  <thead><tr><th>Name</th><th>Role</th></tr></thead>
  <tbody><tr><td>Ada</td><td>Engineer</td></tr></tbody>
</table>`,
  },
  {
    base: "n-list-group",
    title: "List group",
    summary: "Bordered vertical list of rows.",
    parts: ["n-list-group-item"],
    example: `<ul class="n-list-group">
  <li class="n-list-group-item"><span>Inbox</span><span class="n-badge n-badge-soft">12</span></li>
  <li class="n-list-group-item"><span>Drafts</span><span class="n-badge n-badge-soft">3</span></li>
</ul>`,
  },
  {
    base: "n-stat",
    title: "Stat",
    summary: "Labeled metric with a large value and optional change indicator.",
    parts: ["n-stat-label", "n-stat-value", "n-stat-change"],
    example: `<div class="n-stat">
  <span class="n-stat-label">Revenue</span>
  <span class="n-stat-value">$48.2k</span>
  <span class="n-stat-change n-text-success">+12%</span>
</div>`,
  },
  {
    base: "n-avatar",
    title: "Avatar",
    summary: "Circular image or initials.",
    sizes: ["n-avatar-sm", "n-avatar-lg"],
    parts: ["n-avatar-group"],
    example: `<span class="n-avatar">AB</span>
<span class="n-avatar"><img src="/user.jpg" alt="Ada"></span>`,
  },
  {
    base: "n-chip",
    title: "Chip",
    summary: "Compact token, optionally removable.",
    variants: ["n-chip-removable"],
    parts: ["n-chip-remove"],
    example: `<span class="n-chip n-chip-removable">
  Design
  <button class="n-chip-remove" aria-label="Remove">×</button>
</span>`,
  },
  {
    base: "n-empty-state",
    title: "Empty state",
    summary: "Centered placeholder for empty views.",
    parts: ["n-empty-state-icon"],
    example: `<div class="n-empty-state">
  <div class="n-empty-state-icon">📭</div>
  <h3>No messages</h3>
  <p class="n-text-muted">You're all caught up.</p>
</div>`,
  },
  // ---- Content ----
  {
    base: "n-prose",
    title: "Prose",
    summary: "Readable typographic defaults for long-form article HTML.",
    example: `<article class="n-prose">
  <h2>Getting started</h2>
  <p>Nucleus styles your semantic HTML automatically inside a prose block.</p>
  <ul><li>One</li><li>Two</li></ul>
</article>`,
  },
  {
    base: "n-code-block",
    title: "Code block",
    summary: "Dark, scrollable preformatted code panel.",
    parts: ["n-code", "n-kbd"],
    element: "pre",
    example: `<pre class="n-code-block"><code>npm install @navital/nucleus-css</code></pre>
<p>Press <kbd class="n-kbd">⌘</kbd> <kbd class="n-kbd">K</kbd> to search.</p>`,
  },
  {
    base: "n-blockquote",
    title: "Blockquote",
    summary: "Quotation with an accent border.",
    element: "blockquote",
    example: `<blockquote class="n-blockquote">Design is how it works.</blockquote>`,
  },
  // ---- Surfaces ----
  {
    base: "n-surface",
    title: "Surface",
    summary: "Elevated panel with border, radius, and soft shadow.",
    variants: ["n-surface-glass", "n-surface-raised", "n-surface-sunken", "n-surface-overlay"],
    example: `<div class="n-surface n-p-4">Panel content</div>`,
  },
];

/**
 * Human-readable description for a utility class, derived from its CSS.
 * Kept intentionally literal so it never drifts from the source.
 */
export function describeUtility(name, css) {
  if (!css) return `Nucleus utility class (\`.${name}\`).`;
  const decls = css
    .split(";")
    .map((d) => d.trim())
    .filter(Boolean);
  if (decls.length === 1) return `Sets ${decls[0].replace(/:\s*/, ": ")}.`;
  return `Applies ${decls.map((d) => d.replace(/:\s*/, ": ")).join("; ")}.`;
}
