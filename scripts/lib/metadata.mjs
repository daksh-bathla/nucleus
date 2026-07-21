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
  36: "component",
  37: "component",
  38: "component",
  39: "component",
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
      "n-btn-outline-warning",
      "n-btn-outline-info",
      "n-btn-outline-dark",
      "n-btn-outline-light",
      "n-btn-ghost",
    ],
    sizes: ["n-btn-sm", "n-btn-lg"],
    states: ["hover", "active", "focus-visible", "disabled"],
    parts: ["n-button-group"],
    example: `<button class="n-btn n-btn-primary">Continue</button>
<button class="n-btn n-btn-outline-primary">Learn more</button>
<button class="n-btn n-btn-primary" disabled>Disabled</button>`,
    a11y:
      "Use a native <button> for actions and an <a class=\"n-btn\"> only for navigation. Disable with the [disabled] attribute, or aria-disabled=\"true\" plus n-is-disabled for anchors.",
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
    summary: "Sticky top navigation bar with inline links or a CSS-only hamburger menu.",
    element: "nav",
    parts: ["n-navbar-brand", "n-navbar-menu", "n-navbar-toggle", "n-navbar-toggle-icon", "n-nav", "n-nav-item", "n-nav-link"],
    responsive: true,
    example: `<nav class="n-navbar">
  <a class="n-navbar-brand" href="/">Nucleus</a>
  <details class="n-navbar-menu">
    <summary class="n-navbar-toggle">
      <span class="n-navbar-toggle-icon" aria-hidden="true"></span>
      <span class="n-sr-only">Navigation menu</span>
    </summary>
    <ul class="n-nav">
      <li class="n-nav-item"><a class="n-nav-link" href="/" aria-current="page">Home</a></li>
      <li class="n-nav-item"><a class="n-nav-link" href="/docs">Docs</a></li>
    </ul>
  </details>
</nav>`,
    a11y: "Native details/summary provides keyboard toggling without JavaScript. Add a text label with n-sr-only and mark the active link with aria-current=\"page\".",
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
      "n-alert-secondary",
      "n-alert-success",
      "n-alert-danger",
      "n-alert-warning",
      "n-alert-info",
      "n-alert-light",
      "n-alert-dark",
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
      "n-badge-light",
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
  // ---- Production components (distilled from shipping products) ----
  {
    base: "n-icon-tile",
    title: "Icon tile",
    summary: "Rounded container for a single icon, color-tinted to context.",
    sizes: ["n-icon-tile-sm", "n-icon-tile-lg"],
    variants: [
      "n-icon-tile-round",
      "n-icon-tile-primary",
      "n-icon-tile-success",
      "n-icon-tile-danger",
      "n-icon-tile-warning",
      "n-icon-tile-info",
      "n-icon-tile-neutral",
    ],
    example: `<span class="n-icon-tile n-icon-tile-success" aria-hidden="true">✓</span>`,
    a11y: "Decorative by default — add aria-hidden. If the tile is the only label, give it an aria-label.",
    notes: "Origin: seen throughout LeadScrapper Pro and Itiner (stat cards, nav, headers).",
  },
  {
    base: "n-status",
    title: "Status indicator",
    summary: "Small dot plus label signalling live, lifecycle, or health state.",
    parts: ["n-status-dot"],
    variants: [
      "n-status-online",
      "n-status-idle",
      "n-status-offline",
      "n-status-error",
      "n-status-busy",
      "n-status-pulse",
    ],
    example: `<span class="n-status n-status-online n-status-pulse">
  <span class="n-status-dot" aria-hidden="true"></span>
  System connected
</span>`,
    a11y: "State is carried by the visible text, not colour alone. The pulse respects prefers-reduced-motion.",
    notes: "Origin: LeadScrapper Pro (\"System connected\") and Itiner (trip lifecycle).",
  },
  {
    base: "n-meter",
    title: "Meter",
    summary: "Labeled usage bar whose fill colour flips at a threshold. Set --n-meter-value.",
    parts: ["n-meter-header", "n-meter-label", "n-meter-value", "n-meter-track", "n-meter-fill"],
    sizes: ["n-meter-sm", "n-meter-lg"],
    variants: ["n-meter-success", "n-meter-warning", "n-meter-danger"],
    example: `<div class="n-meter n-meter-warning">
  <div class="n-meter-header">
    <span class="n-meter-label">Searches</span>
    <span class="n-meter-value">82 / 100</span>
  </div>
  <div class="n-meter-track">
    <div class="n-meter-fill" style="--n-meter-value: 82%"></div>
  </div>
</div>`,
    a11y: "For an interactive value add role=\"progressbar\" with aria-valuenow/min/max; expose the threshold state in text.",
    notes: "Origin: LeadScrapper Pro quota/usage bars.",
  },
  {
    base: "n-gauge",
    title: "Gauge",
    summary: "Radial score ring driven by the --n-gauge-value custom property (0–100).",
    parts: ["n-gauge-value", "n-gauge-label"],
    sizes: ["n-gauge-sm", "n-gauge-lg"],
    variants: ["n-gauge-success", "n-gauge-warning", "n-gauge-danger"],
    example: `<div class="n-gauge n-gauge-success" style="--n-gauge-value: 74" role="img" aria-label="Score 74 of 100">
  <span class="n-gauge-value">74</span>
</div>`,
    a11y: "Give the gauge role=\"img\" (or role=\"meter\") and an aria-label with the numeric value.",
    notes: "Origin: LeadScrapper Pro lead/audit scores.",
  },
  {
    base: "n-segmented",
    title: "Segmented control",
    summary: "Single-select pill group for filtering or switching views.",
    parts: ["n-segmented-item"],
    sizes: ["n-segmented-sm"],
    states: ["aria-selected", "hover", "focus-visible"],
    example: `<div class="n-segmented" role="tablist">
  <button class="n-segmented-item" role="tab" aria-selected="true">All</button>
  <button class="n-segmented-item" role="tab" aria-selected="false">Audited</button>
  <button class="n-segmented-item" role="tab" aria-selected="false">Contacted</button>
</div>`,
    a11y: "Mark the active segment with aria-selected (tablist) or aria-pressed (toggle group); it is not signalled by colour alone.",
    notes: "Origin: LeadScrapper Pro lead filters and Itiner trip-status pills.",
  },
  {
    base: "n-stat-grid",
    title: "Stat grid",
    summary: "Responsive auto-fit wrapper for n-stat or metric tiles.",
    example: `<div class="n-stat-grid">
  <div class="n-stat">
    <span class="n-stat-label">Leads found</span>
    <span class="n-stat-value">1,284</span>
  </div>
  <div class="n-stat">
    <span class="n-stat-label">Active scans</span>
    <span class="n-stat-value">7</span>
  </div>
</div>`,
    notes: "Origin: dashboard metric rows in both products. Compose with n-icon-tile for an icon.",
  },
  {
    base: "n-banner",
    title: "Promo banner",
    summary: "Wide, high-emphasis marketing/upgrade panel with an optional dark surface.",
    variants: ["n-banner-split", "n-banner-dark"],
    parts: ["n-banner-eyebrow", "n-banner-title", "n-banner-text", "n-banner-actions", "n-banner-media"],
    example: `<section class="n-banner n-banner-split n-banner-dark">
  <div>
    <p class="n-banner-eyebrow">Premium</p>
    <h2 class="n-banner-title">Unlock market insights</h2>
    <p class="n-banner-text">Daily AI deep-dives into every lead you discover.</p>
  </div>
  <div class="n-banner-actions">
    <button class="n-btn n-btn-primary">Upgrade</button>
  </div>
</section>`,
    notes: "Origin: LeadScrapper Pro upgrade banner. Add n-banner-split for a side-by-side layout at ≥768px.",
  },
  {
    base: "n-dock",
    title: "Action dock",
    summary: "Bottom-centered floating bar of actions; the page scrolls behind it.",
    parts: ["n-dock-bar", "n-dock-item", "n-dock-divider"],
    variants: ["n-dock-bar-dark"],
    example: `<div class="n-dock">
  <div class="n-dock-bar n-dock-bar-dark">
    <button class="n-dock-item">Request change</button>
    <span class="n-dock-divider" aria-hidden="true"></span>
    <button class="n-dock-item">Ask for help</button>
  </div>
</div>`,
    a11y: "Keep discernible names on icon-only items (aria-label). The dock does not trap focus.",
    notes: "Origin: Itiner client-portal floating bar.",
  },
  {
    base: "n-cookie-bar",
    title: "Consent bar",
    summary: "Persistent bottom notice bar with an actions cluster (e.g. cookie consent).",
    parts: ["n-cookie-bar-text", "n-cookie-bar-actions"],
    responsive: true,
    example: `<div class="n-cookie-bar" role="dialog" aria-label="Cookie consent">
  <p class="n-cookie-bar-text">We use cookies to improve the product.</p>
  <div class="n-cookie-bar-actions">
    <button class="n-btn n-btn-light">Decline</button>
    <button class="n-btn n-btn-primary">Accept</button>
  </div>
</div>`,
    a11y: "Use role=\"dialog\" with a label; make Decline as prominent as Accept; do not trap the whole page.",
    notes: "Origin: Itiner and LeadScrapper Pro cookie banners.",
  },
  {
    base: "n-combobox",
    title: "Combobox",
    summary: "Typeahead input paired with a results list. Wrap an n-input and a list.",
    parts: ["n-combobox-list", "n-combobox-option", "n-combobox-empty"],
    states: ["aria-selected", "hover"],
    example: `<div class="n-combobox">
  <input class="n-input" type="text" role="combobox" aria-expanded="true" aria-controls="places" placeholder="Search city">
  <ul class="n-combobox-list" id="places" role="listbox">
    <li><button class="n-combobox-option" role="option" aria-selected="true">Lisbon, Portugal</button></li>
    <li><button class="n-combobox-option" role="option" aria-selected="false">Lima, Peru</button></li>
  </ul>
</div>`,
    a11y: "Follow the ARIA combobox pattern (aria-expanded, aria-controls, aria-activedescendant); Enter selects the active option instead of submitting.",
    notes: "Origin: Itiner place autocomplete and LeadScrapper Pro niche picker. Requires JS for filtering + keyboard nav.",
  },
  {
    base: "n-timeline",
    title: "Timeline",
    summary: "Vertical connector list with a numbered or icon marker per item.",
    parts: ["n-timeline-item", "n-timeline-marker", "n-timeline-marker-muted", "n-timeline-title", "n-timeline-meta", "n-timeline-content"],
    example: `<ol class="n-timeline">
  <li class="n-timeline-item">
    <span class="n-timeline-marker">1</span>
    <p class="n-timeline-title">Arrive in Lisbon</p>
    <p class="n-timeline-meta">Day 1 · Hotel check-in</p>
  </li>
  <li class="n-timeline-item">
    <span class="n-timeline-marker n-timeline-marker-muted">2</span>
    <p class="n-timeline-title">Free day</p>
  </li>
</ol>`,
    notes: "Origin: Itiner itinerary day timeline. Reusable for feeds, tracking, and steppers.",
  },
  {
    base: "n-plan",
    title: "Pricing plan",
    summary: "Pricing tier card with price, feature list, and a featured/inverted state.",
    variants: ["n-plan-featured", "n-plan-inverted"],
    parts: ["n-plan-grid", "n-plan-ribbon", "n-plan-name", "n-plan-price", "n-plan-period", "n-plan-desc", "n-plan-features", "n-plan-feature"],
    example: `<div class="n-plan-grid">
  <div class="n-plan n-plan-featured">
    <span class="n-plan-ribbon">Popular</span>
    <p class="n-plan-name">Pro</p>
    <p class="n-plan-price">$49<span class="n-plan-period">/mo</span></p>
    <ul class="n-plan-features">
      <li class="n-plan-feature">500 audits / month</li>
      <li class="n-plan-feature">CSV export</li>
    </ul>
    <button class="n-btn n-btn-primary">Choose Pro</button>
  </div>
</div>`,
    notes: "Origin: pricing pages of both products. Use n-plan-inverted for a solid-brand featured tier.",
  },
  {
    base: "n-checklist",
    title: "Checklist",
    summary: "Onboarding task list; mark finished rows with n-checklist-done.",
    parts: ["n-checklist-item", "n-checklist-marker", "n-checklist-done"],
    example: `<ul class="n-checklist">
  <li class="n-checklist-item n-checklist-done">
    <span class="n-checklist-marker" aria-hidden="true">✓</span>
    <span>Create your first trip</span>
  </li>
  <li class="n-checklist-item">
    <span class="n-checklist-marker" aria-hidden="true">○</span>
    <span>Invite a team member</span>
  </li>
</ul>`,
    a11y: "Do not rely on colour alone for completion — pair the state with an icon or text.",
    notes: "Origin: Itiner onboarding checklist.",
  },
  {
    base: "n-table-stack",
    title: "Responsive table",
    summary: "Table modifier that collapses each row into a card below 768px using data-label.",
    example: `<table class="n-table n-table-stack">
  <thead><tr><th>Business</th><th>Status</th></tr></thead>
  <tbody>
    <tr>
      <td data-label="Business">Blue Bottle</td>
      <td data-label="Status">Enriched</td>
    </tr>
  </tbody>
</table>`,
    a11y: "Give every <td> a data-label matching its column header so the stacked card keeps label→value pairing.",
    notes: "Origin: LeadScrapper Pro recent-discoveries table. Combine with n-table.",
  },
  {
    base: "n-search-field",
    title: "Search field",
    summary: "Input wrapper with a built-in leading search glyph.",
    parts: ["n-search-input"],
    example: `<div class="n-search-field">
  <input class="n-input n-search-input" type="search" placeholder="Search leads">
</div>`,
    a11y: "Give the input an associated <label> or aria-label; the glyph is decorative.",
    notes: "Origin: search bars in both products (Itiner trip search, LeadScrapper prospect search).",
  },
  {
    base: "n-footer",
    title: "Marketing footer",
    summary: "Multi-column site footer with a link grid and a bottom bar.",
    parts: ["n-footer-grid", "n-footer-col", "n-footer-title", "n-footer-bottom"],
    element: "footer",
    example: `<footer class="n-footer">
  <div class="n-container">
    <div class="n-footer-grid">
      <div class="n-footer-col">
        <p class="n-footer-title">Product</p>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
      </div>
      <div class="n-footer-col">
        <p class="n-footer-title">Legal</p>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </div>
    <div class="n-footer-bottom">
      <span>© 2026 Acme</span>
      <span>Made with Nucleus</span>
    </div>
  </div>
</footer>`,
    notes: "Origin: marketing footers in both products.",
  },
  {
    base: "n-signal-list",
    title: "Signal list",
    summary: "Dotted list for pro/con or insight bullets, colour-coded by sentiment.",
    parts: ["n-signal", "n-signal-positive", "n-signal-negative", "n-signal-neutral"],
    example: `<ul class="n-signal-list">
  <li class="n-signal n-signal-positive">Fast, secure checkout</li>
  <li class="n-signal n-signal-negative">No mobile layout</li>
  <li class="n-signal n-signal-neutral">Blog last updated 2019</li>
</ul>`,
    a11y: "Sentiment is dot-colour plus position — keep the text self-describing so it does not rely on colour alone.",
    notes: "Origin: LeadScrapper Pro audit \"what's working / needs fixing\" lists.",
  },
];

/**
 * Intentional annotations for relationships that cannot be inferred from a
 * selector alone. Every key and alias target is validated against the parsed
 * stylesheet by the manifest builder.
 */
export const CLASS_METADATA = {
  "n-d-flex": {
    deprecated: true,
    aliasOf: "n-flex",
    replacement: "n-flex",
    since: "1.x",
    gotchas: ["Backward-compatible display-family alias. Prefer n-flex in new markup."],
  },
  "n-hidden": {
    since: "1.x",
    gotchas: ["Force-hides with !important. Use n-d-none when normal cascade behavior is preferable."],
  },
  "n-d-none": {
    since: "1.x",
    gotchas: ["Uses normal cascade priority. It is intentionally not an alias of forceful n-hidden."],
  },
  "n-center": {
    since: "1.x",
    gotchas: ["Creates a grid formatting context and centers its children on both axes."],
  },
  "n-place-center": {
    since: "2.x",
    gotchas: ["Only sets place-items: center; the element must already be a compatible layout container."],
  },
  "n-auto-grid": {
    since: "2.x",
    gotchas: ["Uses a 16rem default minimum column width. Override --n-grid-min when needed."],
  },
  "n-grid-auto-fit": {
    since: "2.x",
    gotchas: ["Uses a 14rem default minimum column width, so it is not an alias of n-auto-grid."],
  },
  "n-active": {
    deprecated: true,
    aliasOf: "n-is-active",
    replacement: "n-is-active",
    since: "1.x",
  },
  "n-selected": {
    deprecated: true,
    aliasOf: "n-is-selected",
    replacement: "n-is-selected",
    since: "2.x",
  },
  "n-expanded": {
    deprecated: true,
    aliasOf: "n-is-expanded",
    replacement: "n-is-expanded",
    since: "2.x",
  },
  "n-dragging": {
    deprecated: true,
    aliasOf: "n-is-dragging",
    replacement: "n-is-dragging",
    since: "2.x",
  },
  "n-loading": {
    deprecated: true,
    aliasOf: "n-is-loading",
    replacement: "n-is-loading",
    since: "2.x",
  },
  "n-disabled": {
    deprecated: true,
    aliasOf: "n-is-disabled",
    replacement: "n-is-disabled",
    since: "1.x",
    gotchas: ["Prefer native disabled or aria-disabled=true when those semantics are accurate."],
  },
  "n-is-active": { since: "2.x" },
  "n-is-selected": { since: "2.x" },
  "n-is-expanded": { since: "2.x" },
  "n-is-dragging": { since: "2.x" },
  "n-is-loading": { since: "2.x" },
  "n-is-disabled": {
    since: "2.x",
    gotchas: ["Prefer native disabled or aria-disabled=true when those semantics are accurate."],
  },
  "n-is-open": {
    since: "2.x",
    gotchas: ["A state hook only; it does not force a universal display value because open behavior is component-specific."],
  },
};

export const LEGACY_SELECTORS = [
  {
    selector: ".active",
    deprecated: true,
    replacement: "Use the component's semantic ARIA attribute or an n-is-* state class.",
    scope: ["n-nav-link", "n-tab", "n-segmented-item", "n-combobox-option"],
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
