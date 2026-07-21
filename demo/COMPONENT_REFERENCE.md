# Nucleus CSS — Component reference

Copy-paste HTML for every component category. All examples use only classes that exist in the framework.

## Contents
- [Container (`.n-container`)](#n-container)
- [Grid row (`.n-row`)](#n-row)
- [Auto grid (`.n-auto-grid`)](#n-auto-grid)
- [Sidebar layout (`.n-sidebar-layout`)](#n-sidebar-layout)
- [Cluster (`.n-cluster`)](#n-cluster)
- [Split (`.n-split`)](#n-split)
- [Stack (`.n-stack`)](#n-stack)
- [Button (`.n-btn`)](#n-btn)
- [Button group (`.n-button-group`)](#n-button-group)
- [Card (`.n-card`)](#n-card)
- [Text input (`.n-input`)](#n-input)
- [Select (`.n-select`)](#n-select)
- [Textarea (`.n-textarea`)](#n-textarea)
- [Checkbox / radio (`.n-checkbox`)](#n-checkbox)
- [Switch (`.n-switch`)](#n-switch)
- [Input group (`.n-input-group`)](#n-input-group)
- [Fieldset (`.n-fieldset`)](#n-fieldset)
- [Navbar (`.n-navbar`)](#n-navbar)
- [Breadcrumb (`.n-breadcrumb`)](#n-breadcrumb)
- [Pagination (`.n-pagination`)](#n-pagination)
- [Tabs (`.n-tabs`)](#n-tabs)
- [Alert (`.n-alert`)](#n-alert)
- [Badge (`.n-badge`)](#n-badge)
- [Callout (`.n-callout`)](#n-callout)
- [Toast (`.n-toast`)](#n-toast)
- [Progress bar (`.n-progress`)](#n-progress)
- [Spinner (`.n-spinner`)](#n-spinner)
- [Skeleton (`.n-skeleton`)](#n-skeleton)
- [Dialog (`.n-dialog`)](#n-dialog)
- [Drawer (`.n-drawer`)](#n-drawer)
- [Accordion (`.n-accordion`)](#n-accordion)
- [Dropdown menu (`.n-dropdown`)](#n-dropdown)
- [Tooltip (`.n-tooltip`)](#n-tooltip)
- [Table (`.n-table`)](#n-table)
- [List group (`.n-list-group`)](#n-list-group)
- [Stat (`.n-stat`)](#n-stat)
- [Avatar (`.n-avatar`)](#n-avatar)
- [Chip (`.n-chip`)](#n-chip)
- [Empty state (`.n-empty-state`)](#n-empty-state)
- [Prose (`.n-prose`)](#n-prose)
- [Code block (`.n-code-block`)](#n-code-block)
- [Blockquote (`.n-blockquote`)](#n-blockquote)
- [Surface (`.n-surface`)](#n-surface)
- [Icon tile (`.n-icon-tile`)](#n-icon-tile)
- [Status indicator (`.n-status`)](#n-status)
- [Meter (`.n-meter`)](#n-meter)
- [Gauge (`.n-gauge`)](#n-gauge)
- [Segmented control (`.n-segmented`)](#n-segmented)
- [Stat grid (`.n-stat-grid`)](#n-stat-grid)
- [Promo banner (`.n-banner`)](#n-banner)
- [Action dock (`.n-dock`)](#n-dock)
- [Consent bar (`.n-cookie-bar`)](#n-cookie-bar)
- [Combobox (`.n-combobox`)](#n-combobox)
- [Timeline (`.n-timeline`)](#n-timeline)
- [Pricing plan (`.n-plan`)](#n-plan)
- [Checklist (`.n-checklist`)](#n-checklist)
- [Responsive table (`.n-table-stack`)](#n-table-stack)
- [Search field (`.n-search-field`)](#n-search-field)
- [Marketing footer (`.n-footer`)](#n-footer)
- [Signal list (`.n-signal-list`)](#n-signal-list)

## Container

<a id="n-container"></a>

Centered, max-width page container with responsive breakpoints.

- **Parts:** `n-container-fluid`
- **Notes:** Use n-container-fluid for a full-width container with gutters but no max-width.

```html
<div class="n-container">
  <!-- page content -->
</div>
```

## Grid row

<a id="n-row"></a>

12-column CSS grid row. Pair with n-col-* children.

- **Parts:** `n-col-1`, `n-col-6`, `n-col-12`, `n-col-md-6`, `n-col-lg-4`
- **Notes:** Column classes exist for spans 1–12 at base, sm, md, lg, and xl breakpoints (e.g. n-col-md-6).

```html
<div class="n-row">
  <div class="n-col-12 n-col-md-6">Left</div>
  <div class="n-col-12 n-col-md-6">Right</div>
</div>
```

## Auto grid

<a id="n-auto-grid"></a>

Responsive grid that fits as many columns as space allows.

- **Parts:** `n-grid-auto-fit`, `n-grid-auto-fill`
- **Notes:** Set the minimum column width with the --n-grid-min custom property.

```html
<div class="n-auto-grid" style="--n-grid-min: 16rem">
  <article class="n-card"><div class="n-card-body">One</div></article>
  <article class="n-card"><div class="n-card-body">Two</div></article>
  <article class="n-card"><div class="n-card-body">Three</div></article>
</div>
```

## Sidebar layout

<a id="n-sidebar-layout"></a>

Two-column layout that collapses to a single column on narrow screens.

- **Parts:** `n-sidebar-right`
- **Notes:** Add n-sidebar-right to place the sidebar after the main content.

```html
<div class="n-sidebar-layout">
  <aside>Navigation</aside>
  <main>Content</main>
</div>
```

## Cluster

<a id="n-cluster"></a>

Flex row of items that wrap, with consistent gaps.


```html
<div class="n-cluster">
  <span class="n-badge n-badge-primary">New</span>
  <span class="n-badge n-badge-success">Stable</span>
</div>
```

## Split

<a id="n-split"></a>

Pushes two groups to opposite ends of a row.


```html
<div class="n-split">
  <strong>Title</strong>
  <button class="n-btn n-btn-primary">Action</button>
</div>
```

## Stack

<a id="n-stack"></a>

Vertical grid stack with a consistent gap between children.


```html
<div class="n-stack">
  <p>First</p>
  <p>Second</p>
</div>
```

## Button

<a id="n-btn"></a>

Base button. Combine with a color variant and optional size.

- **Element:** `<button>`
- **Variants:** `n-btn-primary`, `n-btn-secondary`, `n-btn-success`, `n-btn-danger`, `n-btn-warning`, `n-btn-info`, `n-btn-dark`, `n-btn-light`, `n-btn-outline-primary`, `n-btn-outline-secondary`, `n-btn-outline-success`, `n-btn-outline-danger`, `n-btn-outline-warning`, `n-btn-outline-info`, `n-btn-outline-dark`, `n-btn-outline-light`, `n-btn-ghost`
- **Sizes:** `n-btn-sm`, `n-btn-lg`
- **Parts:** `n-button-group`
- **States:** hover, active, focus-visible, disabled
- **Accessibility:** Use a native <button> for actions and an <a class="n-btn"> only for navigation. Disable with the [disabled] attribute, or aria-disabled="true" plus n-is-disabled for anchors.

```html
<button class="n-btn n-btn-primary">Continue</button>
<button class="n-btn n-btn-outline-primary">Learn more</button>
<button class="n-btn n-btn-primary" disabled>Disabled</button>
```

## Button group

<a id="n-button-group"></a>

Joins adjacent buttons into a single segmented control.


```html
<div class="n-button-group">
  <button class="n-btn n-btn-light">Day</button>
  <button class="n-btn n-btn-light">Week</button>
  <button class="n-btn n-btn-light">Month</button>
</div>
```

## Card

<a id="n-card"></a>

Surface container with optional header, body, and footer regions.

- **Variants:** `n-card-interactive`, `n-card-elevated`
- **Parts:** `n-card-header`, `n-card-body`, `n-card-footer`, `n-card-img`
- **Notes:** Add n-card-interactive for a hover lift, or n-card-elevated for a stronger shadow.

```html
<article class="n-card">
  <div class="n-card-header">Plan</div>
  <div class="n-card-body">
    <p class="n-text-muted">Everything you need to start.</p>
  </div>
  <div class="n-card-footer">
    <button class="n-btn n-btn-primary">Choose</button>
  </div>
</article>
```

## Text input

<a id="n-input"></a>

Full-width text field. Pair with n-label inside an n-form-group.

- **Element:** `<input>`
- **Variants:** `n-input-success`, `n-input-error`
- **Sizes:** `n-input-sm`, `n-input-lg`
- **Parts:** `n-form-group`, `n-label`, `n-helper-text`, `n-error-text`
- **States:** focus, disabled, aria-invalid
- **Accessibility:** Every control needs an associated <label>. Signal invalid state with aria-invalid="true" (styled automatically) and describe the error with n-error-text via aria-describedby.

```html
<div class="n-form-group">
  <label class="n-label" for="email">Email</label>
  <input class="n-input" id="email" type="email" placeholder="you@example.com">
  <p class="n-helper-text">We never share your email.</p>
</div>
```

## Select

<a id="n-select"></a>

Styled native select with a custom chevron.

- **Element:** `<select>`
- **Parts:** `n-form-group`, `n-label`

```html
<div class="n-form-group">
  <label class="n-label" for="plan">Plan</label>
  <select class="n-select" id="plan">
    <option>Starter</option>
    <option>Pro</option>
  </select>
</div>
```

## Textarea

<a id="n-textarea"></a>

Vertically resizable multi-line text field.

- **Element:** `<textarea>`

```html
<div class="n-form-group">
  <label class="n-label" for="bio">Bio</label>
  <textarea class="n-textarea" id="bio" rows="4"></textarea>
</div>
```

## Checkbox / radio

<a id="n-checkbox"></a>

Inline label wrapper for a native checkbox or radio.

- **Parts:** `n-radio`

```html
<label class="n-checkbox">
  <input type="checkbox"> Subscribe to updates
</label>
<label class="n-radio">
  <input type="radio" name="tier"> Free
</label>
```

## Switch

<a id="n-switch"></a>

Accessible toggle built from a visually-hidden checkbox and a track.

- **Parts:** `n-switch-track`
- **States:** checked, focus-visible, disabled
- **Accessibility:** The <input type="checkbox"> carries the accessible state; keep it inside the label.

```html
<label class="n-switch">
  <input type="checkbox">
  <span class="n-switch-track"></span>
  Enable notifications
</label>
```

## Input group

<a id="n-input-group"></a>

Joins an input with prefix/suffix add-ons or a button.

- **Parts:** `n-input-prefix`, `n-input-suffix`

```html
<div class="n-input-group">
  <span class="n-input-prefix">https://</span>
  <input class="n-input" type="text" placeholder="your-site">
  <button class="n-btn n-btn-primary">Go</button>
</div>
```

## Fieldset

<a id="n-fieldset"></a>

Grouped form controls with a legend.

- **Element:** `<fieldset>`
- **Parts:** `n-form-grid`, `n-field-row`

```html
<fieldset class="n-fieldset">
  <legend>Address</legend>
  <div class="n-form-grid">
    <input class="n-input" placeholder="City">
    <input class="n-input" placeholder="Postal code">
  </div>
</fieldset>
```

## Navbar

<a id="n-navbar"></a>

Sticky top navigation bar with inline links or a CSS-only hamburger menu.

- **Element:** `<nav>`
- **Parts:** `n-navbar-brand`, `n-navbar-menu`, `n-navbar-toggle`, `n-navbar-toggle-icon`, `n-nav`, `n-nav-item`, `n-nav-link`
- **Accessibility:** Native details/summary provides keyboard toggling without JavaScript. Add a text label with n-sr-only and mark the active link with aria-current="page".

```html
<nav class="n-navbar">
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
</nav>
```

## Breadcrumb

<a id="n-breadcrumb"></a>

Ordered trail of ancestor links.

- **Element:** `<ol>`

```html
<nav aria-label="Breadcrumb">
  <ol class="n-breadcrumb">
    <li><a href="/">Home</a></li>
    <li><a href="/docs">Docs</a></li>
    <li aria-current="page">Buttons</li>
  </ol>
</nav>
```

## Pagination

<a id="n-pagination"></a>

List of page links; mark the current page with aria-current.

- **Parts:** `n-pagination-link`

```html
<nav aria-label="Pagination">
  <ul class="n-pagination">
    <li><a class="n-pagination-link" href="#">1</a></li>
    <li><a class="n-pagination-link" href="#" aria-current="page">2</a></li>
    <li><a class="n-pagination-link" href="#">3</a></li>
  </ul>
</nav>
```

## Tabs

<a id="n-tabs"></a>

Horizontal tablist. Toggle aria-selected in JavaScript.

- **Parts:** `n-tab`, `n-tab-panel`
- **States:** aria-selected, hover
- **Accessibility:** Requires JS to move aria-selected and manage focus per the WAI-ARIA tabs pattern.

```html
<div class="n-tabs" role="tablist">
  <button class="n-tab" role="tab" aria-selected="true">Overview</button>
  <button class="n-tab" role="tab" aria-selected="false">Details</button>
</div>
<div class="n-tab-panel" role="tabpanel">…</div>
```

## Alert

<a id="n-alert"></a>

Colored message banner for contextual feedback.

- **Variants:** `n-alert-primary`, `n-alert-secondary`, `n-alert-success`, `n-alert-danger`, `n-alert-warning`, `n-alert-info`, `n-alert-light`, `n-alert-dark`
- **Accessibility:** Add role="alert" for errors and role="status" for non-urgent messages.

```html
<div class="n-alert n-alert-success" role="status">
  Your changes have been saved.
</div>
```

## Badge

<a id="n-badge"></a>

Small pill for counts, labels, or status.

- **Variants:** `n-badge-primary`, `n-badge-secondary`, `n-badge-success`, `n-badge-danger`, `n-badge-warning`, `n-badge-info`, `n-badge-light`, `n-badge-dark`, `n-badge-soft`

```html
<span class="n-badge n-badge-primary">Beta</span>
```

## Callout

<a id="n-callout"></a>

Boxed aside for tips and warnings.

- **Variants:** `n-callout-primary`, `n-callout-success`, `n-callout-danger`
- **Parts:** `n-callout-title`

```html
<div class="n-callout n-callout-primary">
  <p class="n-callout-title">Heads up</p>
  <p>Container queries need a modern browser.</p>
</div>
```

## Toast

<a id="n-toast"></a>

Transient notification; stack with n-toast-stack.

- **Parts:** `n-toast-stack`

```html
<div class="n-toast-stack">
  <div class="n-toast" role="status">Saved to your library.</div>
</div>
```

## Progress bar

<a id="n-progress"></a>

Native <progress> element styling.

- **Element:** `<progress>`

```html
<progress class="n-progress" value="70" max="100">70%</progress>
```

## Spinner

<a id="n-spinner"></a>

Indeterminate loading indicator.

- **Sizes:** `n-spinner-sm`, `n-spinner-lg`
- **Accessibility:** Respects prefers-reduced-motion. Provide an aria-label since it has no text.

```html
<span class="n-spinner" role="status" aria-label="Loading"></span>
```

## Skeleton

<a id="n-skeleton"></a>

Shimmering placeholder for loading content.

- **Parts:** `n-skeleton-text`, `n-skeleton-circle`

```html
<div class="n-skeleton n-skeleton-text" style="width: 60%"></div>
```

## Dialog

<a id="n-dialog"></a>

Native <dialog> modal. Open with dialog.showModal() in JavaScript.

- **Element:** `<dialog>`
- **Parts:** `n-dialog-header`, `n-dialog-body`, `n-dialog-footer`
- **Accessibility:** Open with element.showModal() (not the open attribute) so focus trapping, Esc-to-close, and the backdrop work. A method="dialog" form closes it.

```html
<dialog class="n-dialog">
  <div class="n-dialog-header"><strong>Confirm</strong></div>
  <div class="n-dialog-body">Delete this item?</div>
  <form method="dialog" class="n-dialog-footer">
    <button class="n-btn n-btn-light">Cancel</button>
    <button class="n-btn n-btn-danger">Delete</button>
  </form>
</dialog>
```

## Drawer

<a id="n-drawer"></a>

Edge-anchored <dialog> panel.

- **Element:** `<dialog>`
- **Variants:** `n-drawer-left`
- **Notes:** Combine with n-dialog; add n-drawer-left to anchor on the left edge.

```html
<dialog class="n-dialog n-drawer">
  <div class="n-dialog-body">Side panel</div>
</dialog>
```

## Accordion

<a id="n-accordion"></a>

Disclosure group built on native <details>/<summary>.

- **Parts:** `n-accordion-panel`
- **Accessibility:** Native <details> handles keyboard and expanded state with no JavaScript.

```html
<div class="n-accordion">
  <details>
    <summary>What is Nucleus?</summary>
    <div class="n-accordion-panel">A zero-build CSS framework.</div>
  </details>
</div>
```

## Dropdown menu

<a id="n-dropdown"></a>

Menu surface of n-dropdown-item rows. Best inside a popover.

- **Parts:** `n-dropdown-item`, `n-popover`

```html
<div class="n-dropdown">
  <button class="n-dropdown-item">Profile</button>
  <button class="n-dropdown-item">Settings</button>
</div>
```

## Tooltip

<a id="n-tooltip"></a>

CSS-only tooltip driven by the data-tooltip attribute.

- **States:** hover, focus-visible
- **Accessibility:** For essential text also expose it to assistive tech (e.g. aria-label).

```html
<button class="n-btn n-btn-light n-tooltip" data-tooltip="Save changes">Save</button>
```

## Table

<a id="n-table"></a>

Base table styling with striped/hover/bordered variants.

- **Element:** `<table>`
- **Variants:** `n-table-striped`, `n-table-hover`, `n-table-bordered`

```html
<table class="n-table n-table-striped">
  <thead><tr><th>Name</th><th>Role</th></tr></thead>
  <tbody><tr><td>Ada</td><td>Engineer</td></tr></tbody>
</table>
```

## List group

<a id="n-list-group"></a>

Bordered vertical list of rows.

- **Parts:** `n-list-group-item`

```html
<ul class="n-list-group">
  <li class="n-list-group-item"><span>Inbox</span><span class="n-badge n-badge-soft">12</span></li>
  <li class="n-list-group-item"><span>Drafts</span><span class="n-badge n-badge-soft">3</span></li>
</ul>
```

## Stat

<a id="n-stat"></a>

Labeled metric with a large value and optional change indicator.

- **Parts:** `n-stat-label`, `n-stat-value`, `n-stat-change`

```html
<div class="n-stat">
  <span class="n-stat-label">Revenue</span>
  <span class="n-stat-value">$48.2k</span>
  <span class="n-stat-change n-text-success">+12%</span>
</div>
```

## Avatar

<a id="n-avatar"></a>

Circular image or initials.

- **Sizes:** `n-avatar-sm`, `n-avatar-lg`
- **Parts:** `n-avatar-group`

```html
<span class="n-avatar">AB</span>
<span class="n-avatar"><img src="/user.jpg" alt="Ada"></span>
```

## Chip

<a id="n-chip"></a>

Compact token, optionally removable.

- **Variants:** `n-chip-removable`
- **Parts:** `n-chip-remove`

```html
<span class="n-chip n-chip-removable">
  Design
  <button class="n-chip-remove" aria-label="Remove">×</button>
</span>
```

## Empty state

<a id="n-empty-state"></a>

Centered placeholder for empty views.

- **Parts:** `n-empty-state-icon`

```html
<div class="n-empty-state">
  <div class="n-empty-state-icon">📭</div>
  <h3>No messages</h3>
  <p class="n-text-muted">You're all caught up.</p>
</div>
```

## Prose

<a id="n-prose"></a>

Readable typographic defaults for long-form article HTML.


```html
<article class="n-prose">
  <h2>Getting started</h2>
  <p>Nucleus styles your semantic HTML automatically inside a prose block.</p>
  <ul><li>One</li><li>Two</li></ul>
</article>
```

## Code block

<a id="n-code-block"></a>

Dark, scrollable preformatted code panel.

- **Element:** `<pre>`
- **Parts:** `n-code`, `n-kbd`

```html
<pre class="n-code-block"><code>npm install @navital/nucleus-css</code></pre>
<p>Press <kbd class="n-kbd">⌘</kbd> <kbd class="n-kbd">K</kbd> to search.</p>
```

## Blockquote

<a id="n-blockquote"></a>

Quotation with an accent border.

- **Element:** `<blockquote>`

```html
<blockquote class="n-blockquote">Design is how it works.</blockquote>
```

## Surface

<a id="n-surface"></a>

Elevated panel with border, radius, and soft shadow.

- **Variants:** `n-surface-glass`, `n-surface-raised`, `n-surface-sunken`, `n-surface-overlay`

```html
<div class="n-surface n-p-4">Panel content</div>
```

## Icon tile

<a id="n-icon-tile"></a>

Rounded container for a single icon, color-tinted to context.

- **Variants:** `n-icon-tile-round`, `n-icon-tile-primary`, `n-icon-tile-success`, `n-icon-tile-danger`, `n-icon-tile-warning`, `n-icon-tile-info`, `n-icon-tile-neutral`
- **Sizes:** `n-icon-tile-sm`, `n-icon-tile-lg`
- **Accessibility:** Decorative by default — add aria-hidden. If the tile is the only label, give it an aria-label.
- **Notes:** Origin: seen throughout LeadScrapper Pro and Itiner (stat cards, nav, headers).

```html
<span class="n-icon-tile n-icon-tile-success" aria-hidden="true">✓</span>
```

## Status indicator

<a id="n-status"></a>

Small dot plus label signalling live, lifecycle, or health state.

- **Variants:** `n-status-online`, `n-status-idle`, `n-status-offline`, `n-status-error`, `n-status-busy`, `n-status-pulse`
- **Parts:** `n-status-dot`
- **Accessibility:** State is carried by the visible text, not colour alone. The pulse respects prefers-reduced-motion.
- **Notes:** Origin: LeadScrapper Pro ("System connected") and Itiner (trip lifecycle).

```html
<span class="n-status n-status-online n-status-pulse">
  <span class="n-status-dot" aria-hidden="true"></span>
  System connected
</span>
```

## Meter

<a id="n-meter"></a>

Labeled usage bar whose fill colour flips at a threshold. Set --n-meter-value.

- **Variants:** `n-meter-success`, `n-meter-warning`, `n-meter-danger`
- **Sizes:** `n-meter-sm`, `n-meter-lg`
- **Parts:** `n-meter-header`, `n-meter-label`, `n-meter-value`, `n-meter-track`, `n-meter-fill`
- **Accessibility:** For an interactive value add role="progressbar" with aria-valuenow/min/max; expose the threshold state in text.
- **Notes:** Origin: LeadScrapper Pro quota/usage bars.

```html
<div class="n-meter n-meter-warning">
  <div class="n-meter-header">
    <span class="n-meter-label">Searches</span>
    <span class="n-meter-value">82 / 100</span>
  </div>
  <div class="n-meter-track">
    <div class="n-meter-fill" style="--n-meter-value: 82%"></div>
  </div>
</div>
```

## Gauge

<a id="n-gauge"></a>

Radial score ring driven by the --n-gauge-value custom property (0–100).

- **Variants:** `n-gauge-success`, `n-gauge-warning`, `n-gauge-danger`
- **Sizes:** `n-gauge-sm`, `n-gauge-lg`
- **Parts:** `n-gauge-value`, `n-gauge-label`
- **Accessibility:** Give the gauge role="img" (or role="meter") and an aria-label with the numeric value.
- **Notes:** Origin: LeadScrapper Pro lead/audit scores.

```html
<div class="n-gauge n-gauge-success" style="--n-gauge-value: 74" role="img" aria-label="Score 74 of 100">
  <span class="n-gauge-value">74</span>
</div>
```

## Segmented control

<a id="n-segmented"></a>

Single-select pill group for filtering or switching views.

- **Sizes:** `n-segmented-sm`
- **Parts:** `n-segmented-item`
- **States:** aria-selected, hover, focus-visible
- **Accessibility:** Mark the active segment with aria-selected (tablist) or aria-pressed (toggle group); it is not signalled by colour alone.
- **Notes:** Origin: LeadScrapper Pro lead filters and Itiner trip-status pills.

```html
<div class="n-segmented" role="tablist">
  <button class="n-segmented-item" role="tab" aria-selected="true">All</button>
  <button class="n-segmented-item" role="tab" aria-selected="false">Audited</button>
  <button class="n-segmented-item" role="tab" aria-selected="false">Contacted</button>
</div>
```

## Stat grid

<a id="n-stat-grid"></a>

Responsive auto-fit wrapper for n-stat or metric tiles.

- **Notes:** Origin: dashboard metric rows in both products. Compose with n-icon-tile for an icon.

```html
<div class="n-stat-grid">
  <div class="n-stat">
    <span class="n-stat-label">Leads found</span>
    <span class="n-stat-value">1,284</span>
  </div>
  <div class="n-stat">
    <span class="n-stat-label">Active scans</span>
    <span class="n-stat-value">7</span>
  </div>
</div>
```

## Promo banner

<a id="n-banner"></a>

Wide, high-emphasis marketing/upgrade panel with an optional dark surface.

- **Variants:** `n-banner-split`, `n-banner-dark`
- **Parts:** `n-banner-eyebrow`, `n-banner-title`, `n-banner-text`, `n-banner-actions`, `n-banner-media`
- **Notes:** Origin: LeadScrapper Pro upgrade banner. Add n-banner-split for a side-by-side layout at ≥768px.

```html
<section class="n-banner n-banner-split n-banner-dark">
  <div>
    <p class="n-banner-eyebrow">Premium</p>
    <h2 class="n-banner-title">Unlock market insights</h2>
    <p class="n-banner-text">Daily AI deep-dives into every lead you discover.</p>
  </div>
  <div class="n-banner-actions">
    <button class="n-btn n-btn-primary">Upgrade</button>
  </div>
</section>
```

## Action dock

<a id="n-dock"></a>

Bottom-centered floating bar of actions; the page scrolls behind it.

- **Variants:** `n-dock-bar-dark`
- **Parts:** `n-dock-bar`, `n-dock-item`, `n-dock-divider`
- **Accessibility:** Keep discernible names on icon-only items (aria-label). The dock does not trap focus.
- **Notes:** Origin: Itiner client-portal floating bar.

```html
<div class="n-dock">
  <div class="n-dock-bar n-dock-bar-dark">
    <button class="n-dock-item">Request change</button>
    <span class="n-dock-divider" aria-hidden="true"></span>
    <button class="n-dock-item">Ask for help</button>
  </div>
</div>
```

## Consent bar

<a id="n-cookie-bar"></a>

Persistent bottom notice bar with an actions cluster (e.g. cookie consent).

- **Parts:** `n-cookie-bar-text`, `n-cookie-bar-actions`
- **Accessibility:** Use role="dialog" with a label; make Decline as prominent as Accept; do not trap the whole page.
- **Notes:** Origin: Itiner and LeadScrapper Pro cookie banners.

```html
<div class="n-cookie-bar" role="dialog" aria-label="Cookie consent">
  <p class="n-cookie-bar-text">We use cookies to improve the product.</p>
  <div class="n-cookie-bar-actions">
    <button class="n-btn n-btn-light">Decline</button>
    <button class="n-btn n-btn-primary">Accept</button>
  </div>
</div>
```

## Combobox

<a id="n-combobox"></a>

Typeahead input paired with a results list. Wrap an n-input and a list.

- **Parts:** `n-combobox-list`, `n-combobox-option`, `n-combobox-empty`
- **States:** aria-selected, hover
- **Accessibility:** Follow the ARIA combobox pattern (aria-expanded, aria-controls, aria-activedescendant); Enter selects the active option instead of submitting.
- **Notes:** Origin: Itiner place autocomplete and LeadScrapper Pro niche picker. Requires JS for filtering + keyboard nav.

```html
<div class="n-combobox">
  <input class="n-input" type="text" role="combobox" aria-expanded="true" aria-controls="places" placeholder="Search city">
  <ul class="n-combobox-list" id="places" role="listbox">
    <li><button class="n-combobox-option" role="option" aria-selected="true">Lisbon, Portugal</button></li>
    <li><button class="n-combobox-option" role="option" aria-selected="false">Lima, Peru</button></li>
  </ul>
</div>
```

## Timeline

<a id="n-timeline"></a>

Vertical connector list with a numbered or icon marker per item.

- **Parts:** `n-timeline-item`, `n-timeline-marker`, `n-timeline-marker-muted`, `n-timeline-title`, `n-timeline-meta`, `n-timeline-content`
- **Notes:** Origin: Itiner itinerary day timeline. Reusable for feeds, tracking, and steppers.

```html
<ol class="n-timeline">
  <li class="n-timeline-item">
    <span class="n-timeline-marker">1</span>
    <p class="n-timeline-title">Arrive in Lisbon</p>
    <p class="n-timeline-meta">Day 1 · Hotel check-in</p>
  </li>
  <li class="n-timeline-item">
    <span class="n-timeline-marker n-timeline-marker-muted">2</span>
    <p class="n-timeline-title">Free day</p>
  </li>
</ol>
```

## Pricing plan

<a id="n-plan"></a>

Pricing tier card with price, feature list, and a featured/inverted state.

- **Variants:** `n-plan-featured`, `n-plan-inverted`
- **Parts:** `n-plan-grid`, `n-plan-ribbon`, `n-plan-name`, `n-plan-price`, `n-plan-period`, `n-plan-desc`, `n-plan-features`, `n-plan-feature`
- **Notes:** Origin: pricing pages of both products. Use n-plan-inverted for a solid-brand featured tier.

```html
<div class="n-plan-grid">
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
</div>
```

## Checklist

<a id="n-checklist"></a>

Onboarding task list; mark finished rows with n-checklist-done.

- **Parts:** `n-checklist-item`, `n-checklist-marker`, `n-checklist-done`
- **Accessibility:** Do not rely on colour alone for completion — pair the state with an icon or text.
- **Notes:** Origin: Itiner onboarding checklist.

```html
<ul class="n-checklist">
  <li class="n-checklist-item n-checklist-done">
    <span class="n-checklist-marker" aria-hidden="true">✓</span>
    <span>Create your first trip</span>
  </li>
  <li class="n-checklist-item">
    <span class="n-checklist-marker" aria-hidden="true">○</span>
    <span>Invite a team member</span>
  </li>
</ul>
```

## Responsive table

<a id="n-table-stack"></a>

Table modifier that collapses each row into a card below 768px using data-label.

- **Accessibility:** Give every <td> a data-label matching its column header so the stacked card keeps label→value pairing.
- **Notes:** Origin: LeadScrapper Pro recent-discoveries table. Combine with n-table.

```html
<table class="n-table n-table-stack">
  <thead><tr><th>Business</th><th>Status</th></tr></thead>
  <tbody>
    <tr>
      <td data-label="Business">Blue Bottle</td>
      <td data-label="Status">Enriched</td>
    </tr>
  </tbody>
</table>
```

## Search field

<a id="n-search-field"></a>

Input wrapper with a built-in leading search glyph.

- **Parts:** `n-search-input`
- **Accessibility:** Give the input an associated <label> or aria-label; the glyph is decorative.
- **Notes:** Origin: search bars in both products (Itiner trip search, LeadScrapper prospect search).

```html
<div class="n-search-field">
  <input class="n-input n-search-input" type="search" placeholder="Search leads">
</div>
```

## Marketing footer

<a id="n-footer"></a>

Multi-column site footer with a link grid and a bottom bar.

- **Element:** `<footer>`
- **Parts:** `n-footer-grid`, `n-footer-col`, `n-footer-title`, `n-footer-bottom`
- **Notes:** Origin: marketing footers in both products.

```html
<footer class="n-footer">
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
</footer>
```

## Signal list

<a id="n-signal-list"></a>

Dotted list for pro/con or insight bullets, colour-coded by sentiment.

- **Parts:** `n-signal`, `n-signal-positive`, `n-signal-negative`, `n-signal-neutral`
- **Accessibility:** Sentiment is dot-colour plus position — keep the text self-describing so it does not rely on colour alone.
- **Notes:** Origin: LeadScrapper Pro audit "what's working / needs fixing" lists.

```html
<ul class="n-signal-list">
  <li class="n-signal n-signal-positive">Fast, secure checkout</li>
  <li class="n-signal n-signal-negative">No mobile layout</li>
  <li class="n-signal n-signal-neutral">Blog last updated 2019</li>
</ul>
```
