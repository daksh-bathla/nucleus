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
- **Variants:** `n-btn-primary`, `n-btn-secondary`, `n-btn-success`, `n-btn-danger`, `n-btn-warning`, `n-btn-info`, `n-btn-dark`, `n-btn-light`, `n-btn-outline-primary`, `n-btn-outline-secondary`, `n-btn-outline-success`, `n-btn-outline-danger`, `n-btn-ghost`
- **Sizes:** `n-btn-sm`, `n-btn-lg`
- **Parts:** `n-button-group`
- **States:** hover, active, focus-visible, disabled
- **Accessibility:** Use a native <button> for actions and an <a class="n-btn"> only for navigation. Disable with the [disabled] attribute (or n-disabled for anchors, which cannot be natively disabled).

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

Sticky top navigation bar with brand and nav links.

- **Element:** `<nav>`
- **Parts:** `n-navbar-brand`, `n-nav`, `n-nav-item`, `n-nav-link`
- **Accessibility:** Mark the active link with the `active` class and aria-current="page".

```html
<nav class="n-navbar">
  <a class="n-navbar-brand" href="/">Nucleus</a>
  <ul class="n-nav">
    <li class="n-nav-item"><a class="n-nav-link active" href="/">Home</a></li>
    <li class="n-nav-item"><a class="n-nav-link" href="/docs">Docs</a></li>
  </ul>
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

- **Variants:** `n-alert-primary`, `n-alert-success`, `n-alert-danger`, `n-alert-warning`, `n-alert-info`
- **Accessibility:** Add role="alert" for errors and role="status" for non-urgent messages.

```html
<div class="n-alert n-alert-success" role="status">
  Your changes have been saved.
</div>
```

## Badge

<a id="n-badge"></a>

Small pill for counts, labels, or status.

- **Variants:** `n-badge-primary`, `n-badge-secondary`, `n-badge-success`, `n-badge-danger`, `n-badge-warning`, `n-badge-info`, `n-badge-dark`, `n-badge-soft`

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
