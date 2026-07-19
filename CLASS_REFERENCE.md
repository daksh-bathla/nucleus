# Nucleus CSS — Class reference

Generated from `src/css/nucleus.css`. 580 classes, prefix `n-`. Do not edit by hand — run `npm run build`.

## Contents
- [Layout](#layout) (92)
- [Component](#component) (155)
- [Utility](#utility) (289)
- [Content & typography](#content) (16)
- [State](#state) (10)
- [Helper](#helper) (11)
- [Accessibility](#accessibility) (6)
- [Theme & dark mode](#theme) (1)

## Layout

<a id="layout"></a>

| Class | Description |
| --- | --- |
| `.n-aspect-square` | Sets aspect-ratio: 1. |
| `.n-aspect-video` | Sets aspect-ratio: 16 / 9. |
| `.n-auto-grid` | Applies display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--n-grid-min, 16rem)), 1fr)); gap: var(--n-grid-gap, var(--n-gutter)). |
| `.n-cluster` | Applies display: flex; flex-wrap: wrap; align-items: center; gap: var(--n-cluster-gap, var(--n-space-2)). |
| `.n-col-1` | Sets grid-column: span 1. |
| `.n-col-10` | Sets grid-column: span 10. |
| `.n-col-11` | Sets grid-column: span 11. |
| `.n-col-12` | Sets grid-column: span 12. |
| `.n-col-2` | Sets grid-column: span 2. |
| `.n-col-3` | Sets grid-column: span 3. |
| `.n-col-4` | Sets grid-column: span 4. |
| `.n-col-5` | Sets grid-column: span 5. |
| `.n-col-6` | Sets grid-column: span 6. |
| `.n-col-7` | Sets grid-column: span 7. |
| `.n-col-8` | Sets grid-column: span 8. |
| `.n-col-9` | Sets grid-column: span 9. |
| `.n-col-lg-1` | Sets grid-column: span 1. |
| `.n-col-lg-10` | Sets grid-column: span 10. |
| `.n-col-lg-11` | Sets grid-column: span 11. |
| `.n-col-lg-12` | Sets grid-column: span 12. |
| `.n-col-lg-2` | Sets grid-column: span 2. |
| `.n-col-lg-3` | Sets grid-column: span 3. |
| `.n-col-lg-4` | Sets grid-column: span 4. |
| `.n-col-lg-5` | Sets grid-column: span 5. |
| `.n-col-lg-6` | Sets grid-column: span 6. |
| `.n-col-lg-7` | Sets grid-column: span 7. |
| `.n-col-lg-8` | Sets grid-column: span 8. |
| `.n-col-lg-9` | Sets grid-column: span 9. |
| `.n-col-md-1` | Sets grid-column: span 1. |
| `.n-col-md-10` | Sets grid-column: span 10. |
| `.n-col-md-11` | Sets grid-column: span 11. |
| `.n-col-md-12` | Sets grid-column: span 12. |
| `.n-col-md-2` | Sets grid-column: span 2. |
| `.n-col-md-3` | Sets grid-column: span 3. |
| `.n-col-md-4` | Sets grid-column: span 4. |
| `.n-col-md-5` | Sets grid-column: span 5. |
| `.n-col-md-6` | Sets grid-column: span 6. |
| `.n-col-md-7` | Sets grid-column: span 7. |
| `.n-col-md-8` | Sets grid-column: span 8. |
| `.n-col-md-9` | Sets grid-column: span 9. |
| `.n-col-sm-1` | Sets grid-column: span 1. |
| `.n-col-sm-10` | Sets grid-column: span 10. |
| `.n-col-sm-11` | Sets grid-column: span 11. |
| `.n-col-sm-12` | Sets grid-column: span 12. |
| `.n-col-sm-2` | Sets grid-column: span 2. |
| `.n-col-sm-3` | Sets grid-column: span 3. |
| `.n-col-sm-4` | Sets grid-column: span 4. |
| `.n-col-sm-5` | Sets grid-column: span 5. |
| `.n-col-sm-6` | Sets grid-column: span 6. |
| `.n-col-sm-7` | Sets grid-column: span 7. |
| `.n-col-sm-8` | Sets grid-column: span 8. |
| `.n-col-sm-9` | Sets grid-column: span 9. |
| `.n-col-xl-1` | Sets grid-column: span 1. |
| `.n-col-xl-10` | Sets grid-column: span 10. |
| `.n-col-xl-11` | Sets grid-column: span 11. |
| `.n-col-xl-12` | Sets grid-column: span 12. |
| `.n-col-xl-2` | Sets grid-column: span 2. |
| `.n-col-xl-3` | Sets grid-column: span 3. |
| `.n-col-xl-4` | Sets grid-column: span 4. |
| `.n-col-xl-5` | Sets grid-column: span 5. |
| `.n-col-xl-6` | Sets grid-column: span 6. |
| `.n-col-xl-7` | Sets grid-column: span 7. |
| `.n-col-xl-8` | Sets grid-column: span 8. |
| `.n-col-xl-9` | Sets grid-column: span 9. |
| `.n-container` | Applies width: 100%; margin-inline: auto; padding-inline: var(--n-gutter). |
| `.n-container-fluid` | Applies width: 100%; margin-inline: auto; padding-inline: var(--n-gutter); max-width: none. |
| `.n-container-query` | Sets container-type: inline-size. |
| `.n-content` | Applies width: min(100% - 2rem, 70ch); margin-inline: auto. |
| `.n-cover` | Applies display: flex; min-height: var(--n-cover-height, 100dvh); flex-direction: column; padding: var(--n-space-3). |
| `.n-cover-center` | Nucleus utility class (`.n-cover-center`). |
| `.n-cq-row` | Applies display: flex; align-items: center; gap: var(--n-space-3). |
| `.n-flow` | Nucleus utility class (`.n-flow`). |
| `.n-frame` | Applies overflow: hidden; aspect-ratio: var(--n-frame-ratio, 16 / 9). |
| `.n-grid-auto-fill` | Applies display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, var(--n-grid-min, 14rem)), 1fr)); gap: var(--n-grid-gap, var(--n-gutter)). |
| `.n-grid-auto-fit` | Applies display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--n-grid-min, 14rem)), 1fr)); gap: var(--n-grid-gap, var(--n-gutter)). |
| `.n-object-contain` | Sets object-fit: contain. |
| `.n-object-cover` | Sets object-fit: cover. |
| `.n-order-1` | Sets order: 1. |
| `.n-order-2` | Sets order: 2. |
| `.n-order-3` | Sets order: 3. |
| `.n-order-4` | Sets order: 4. |
| `.n-order-5` | Sets order: 5. |
| `.n-order-first` | Sets order: -9999. |
| `.n-order-last` | Sets order: 9999. |
| `.n-place-center` | Sets place-items: center. |
| `.n-reel` | Applies display: flex; gap: var(--n-reel-gap, var(--n-gutter)); overflow-x: auto; overscroll-behavior-inline: contain; scroll-snap-type: inline mandatory; padding-block-end: var(--n-space-2). |
| `.n-row` | Applies display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--n-gutter). |
| `.n-section` | Sets padding-block: var(--n-section-space). |
| `.n-sidebar-layout` | Applies display: grid; grid-template-columns: minmax(0, 1fr); gap: var(--n-sidebar-gap, var(--n-space-4)). |
| `.n-sidebar-right` | Nucleus utility class (`.n-sidebar-right`). |
| `.n-split` | Applies display: flex; align-items: center; justify-content: space-between; gap: var(--n-space-3). |
| `.n-switcher` | Applies display: flex; flex-wrap: wrap; gap: var(--n-switcher-gap, var(--n-gutter)). |

## Component

<a id="component"></a>

| Class | Description |
| --- | --- |
| `.n-accordion` | Disclosure group built on native <details>/<summary>. |
| `.n-accordion-panel` | Accordion modifier/part (see .n-accordion). |
| `.n-alert` | Colored message banner for contextual feedback. |
| `.n-alert-danger` | Alert modifier/part (see .n-alert). |
| `.n-alert-info` | Alert modifier/part (see .n-alert). |
| `.n-alert-primary` | Alert modifier/part (see .n-alert). |
| `.n-alert-success` | Alert modifier/part (see .n-alert). |
| `.n-alert-warning` | Alert modifier/part (see .n-alert). |
| `.n-avatar-group` | Avatar modifier/part (see .n-avatar). |
| `.n-backdrop-blur` | Applies backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px). |
| `.n-badge` | Small pill for counts, labels, or status. |
| `.n-badge-danger` | Badge modifier/part (see .n-badge). |
| `.n-badge-dark` | Badge modifier/part (see .n-badge). |
| `.n-badge-info` | Badge modifier/part (see .n-badge). |
| `.n-badge-primary` | Badge modifier/part (see .n-badge). |
| `.n-badge-secondary` | Badge modifier/part (see .n-badge). |
| `.n-badge-soft` | Badge modifier/part (see .n-badge). |
| `.n-badge-success` | Badge modifier/part (see .n-badge). |
| `.n-badge-warning` | Badge modifier/part (see .n-badge). |
| `.n-blur-sm` | Sets filter: blur(4px). |
| `.n-breadcrumb` | Ordered trail of ancestor links. |
| `.n-btn` | Base button. Combine with a color variant and optional size. |
| `.n-btn-danger` | Button modifier/part (see .n-btn). |
| `.n-btn-dark` | Button modifier/part (see .n-btn). |
| `.n-btn-ghost` | Button modifier/part (see .n-btn). |
| `.n-btn-info` | Button modifier/part (see .n-btn). |
| `.n-btn-lg` | Button modifier/part (see .n-btn). |
| `.n-btn-light` | Button modifier/part (see .n-btn). |
| `.n-btn-outline-danger` | Button modifier/part (see .n-btn). |
| `.n-btn-outline-primary` | Button modifier/part (see .n-btn). |
| `.n-btn-outline-secondary` | Button modifier/part (see .n-btn). |
| `.n-btn-outline-success` | Button modifier/part (see .n-btn). |
| `.n-btn-primary` | Button modifier/part (see .n-btn). |
| `.n-btn-secondary` | Button modifier/part (see .n-btn). |
| `.n-btn-sm` | Button modifier/part (see .n-btn). |
| `.n-btn-success` | Button modifier/part (see .n-btn). |
| `.n-btn-warning` | Button modifier/part (see .n-btn). |
| `.n-button-group` | Button modifier/part (see .n-btn). |
| `.n-callout` | Boxed aside for tips and warnings. |
| `.n-callout-danger` | Callout modifier/part (see .n-callout). |
| `.n-callout-primary` | Callout modifier/part (see .n-callout). |
| `.n-callout-success` | Callout modifier/part (see .n-callout). |
| `.n-callout-title` | Callout modifier/part (see .n-callout). |
| `.n-card` | Surface container with optional header, body, and footer regions. |
| `.n-card-body` | Card modifier/part (see .n-card). |
| `.n-card-elevated` | Card modifier/part (see .n-card). |
| `.n-card-footer` | Card modifier/part (see .n-card). |
| `.n-card-header` | Card modifier/part (see .n-card). |
| `.n-card-img` | Card modifier/part (see .n-card). |
| `.n-card-interactive` | Card modifier/part (see .n-card). |
| `.n-center` | Applies display: grid; place-items: center. |
| `.n-character-count` | Applies margin-block-start: 0.25rem; color: var(--n-text-muted); font-size: var(--n-text-xs); text-align: end. |
| `.n-checkbox` | Inline label wrapper for a native checkbox or radio. |
| `.n-chip` | Compact token, optionally removable. |
| `.n-chip-removable` | Chip modifier/part (see .n-chip). |
| `.n-chip-remove` | Chip modifier/part (see .n-chip). |
| `.n-clamp-2` | Applies display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden. |
| `.n-clamp-3` | Applies display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden. |
| `.n-dialog` | Native <dialog> modal. Open with dialog.showModal() in JavaScript. |
| `.n-dialog-body` | Dialog modifier/part (see .n-dialog). |
| `.n-dialog-footer` | Dialog modifier/part (see .n-dialog). |
| `.n-dialog-header` | Dialog modifier/part (see .n-dialog). |
| `.n-disabled` | Applies opacity: 0.5; pointer-events: none; cursor: not-allowed. |
| `.n-divider-gradient` | Applies height: 1px; border: 0; background: linear-gradient(90deg, transparent, var(--n-border-color), transparent). |
| `.n-drawer` | Edge-anchored <dialog> panel. |
| `.n-drawer-left` | Drawer modifier/part (see .n-drawer). |
| `.n-dropdown` | Menu surface of n-dropdown-item rows. Best inside a popover. |
| `.n-dropdown-item` | Dropdown menu modifier/part (see .n-dropdown). |
| `.n-empty-state` | Centered placeholder for empty views. |
| `.n-empty-state-icon` | Empty state modifier/part (see .n-empty-state). |
| `.n-error-text` | Text input modifier/part (see .n-input). |
| `.n-field-row` | Fieldset modifier/part (see .n-fieldset). |
| `.n-fieldset` | Grouped form controls with a legend. |
| `.n-file-input` | Applies width: 100%; border: 1px solid var(--n-border-color); border-radius: var(--n-radius); background: var(--n-bg); color: var(--n-text-muted). |
| `.n-form-grid` | Fieldset modifier/part (see .n-fieldset). |
| `.n-form-group` | Text input modifier/part (see .n-input). |
| `.n-gradient-border` | Applies position: relative; border: 1px solid transparent; background: linear-gradient(var(--n-bg), var(--n-bg)) padding-box, linear-gradient(135deg, rgba(99,102,241,.8), rgba(14,165,233,.55)) border-box. |
| `.n-gradient-mesh` | Applies background-color: var(--n-bg); background-image: radial-gradient(circle at 10% 15%, rgba(15, 118, 110, 0.18), transparent 30%), radial-gradient(circle at 90% 10%, rgba(14, 116, 144, 0.14), transparent 28%), radial-gradient(circle at 70% 90%, rgba(20, 125, 116, 0.12), transparent 32%). |
| `.n-gradient-primary` | Applies background: linear-gradient(135deg, var(--n-primary), var(--n-secondary)); color: #fff. |
| `.n-gradient-text` | Applies background: linear-gradient(135deg, var(--n-primary), var(--n-secondary)); -webkit-background-clip: text; background-clip: text; color: transparent. |
| `.n-grayscale` | Sets filter: grayscale(1). |
| `.n-helper-text` | Text input modifier/part (see .n-input). |
| `.n-hover-lift` | Sets transition: transform var(--n-duration) var(--n-ease), box-shadow var(--n-duration) var(--n-ease). |
| `.n-hover-scale` | Sets transition: transform var(--n-duration) var(--n-ease). |
| `.n-input` | Full-width text field. Pair with n-label inside an n-form-group. |
| `.n-input-error` | Text input modifier/part (see .n-input). |
| `.n-input-group` | Joins an input with prefix/suffix add-ons or a button. |
| `.n-input-lg` | Text input modifier/part (see .n-input). |
| `.n-input-loading` | Sets position: relative. |
| `.n-input-prefix` | Input group modifier/part (see .n-input-group). |
| `.n-input-sm` | Text input modifier/part (see .n-input). |
| `.n-input-success` | Text input modifier/part (see .n-input). |
| `.n-input-suffix` | Input group modifier/part (see .n-input-group). |
| `.n-invalid` | Sets border-color: var(--n-danger). |
| `.n-label` | Text input modifier/part (see .n-input). |
| `.n-list` | Applies list-style: none; padding: 0. |
| `.n-list-group` | Bordered vertical list of rows. |
| `.n-list-group-item` | List group modifier/part (see .n-list-group). |
| `.n-list-inline` | Applies list-style: none; padding-left: 0; display: flex; flex-wrap: wrap; gap: 1rem. |
| `.n-list-unstyled` | Applies list-style: none; padding-left: 0. |
| `.n-nav` | Navbar modifier/part (see .n-navbar). |
| `.n-nav-item` | Navbar modifier/part (see .n-navbar). |
| `.n-nav-link` | Navbar modifier/part (see .n-navbar). |
| `.n-navbar` | Sticky top navigation bar with brand and nav links. |
| `.n-navbar-brand` | Navbar modifier/part (see .n-navbar). |
| `.n-noise` | Sets background-image: repeating-radial-gradient(circle at 0 0, rgba(15, 23, 42, 0.035) 0 1px, transparent 1px 4px). |
| `.n-page-atmosphere` | Applies background-color: var(--n-bg); background-image: radial-gradient(circle at top left, rgba(15, 118, 110, 0.08), transparent 32%), radial-gradient(circle at top right, rgba(14, 116, 144, 0.06), transparent 28%); background-attachment: fixed. |
| `.n-pagination` | List of page links; mark the current page with aria-current. |
| `.n-pagination-link` | Pagination modifier/part (see .n-pagination). |
| `.n-popover` | Dropdown menu modifier/part (see .n-dropdown). |
| `.n-press` | Nucleus utility class (`.n-press`). |
| `.n-progress` | Native <progress> element styling. |
| `.n-radio` | Checkbox / radio modifier/part (see .n-checkbox). |
| `.n-range` | Applies width: 100%; accent-color: var(--n-primary). |
| `.n-readonly` | Applies background: var(--n-bg-muted); cursor: default. |
| `.n-required` | Nucleus utility class (`.n-required`). |
| `.n-ring` | Sets box-shadow: 0 0 0 1px rgba(99,102,241,.15), 0 0 0 4px rgba(99,102,241,.08). |
| `.n-ring-danger` | Sets box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.18). |
| `.n-ring-success` | Sets box-shadow: 0 0 0 3px rgba(21, 128, 61, 0.18). |
| `.n-saturate` | Sets filter: saturate(1.5). |
| `.n-search-field` | Sets position: relative. |
| `.n-search-input` | Sets padding-inline-start: 2.5rem. |
| `.n-select` | Styled native select with a custom chevron. |
| `.n-shadow-glow` | Sets box-shadow: var(--n-shadow-glow). |
| `.n-shadow-inner` | Sets box-shadow: inset 0 2px 4px rgba(15, 23, 42, 0.08). |
| `.n-skeleton` | Shimmering placeholder for loading content. |
| `.n-skeleton-circle` | Skeleton modifier/part (see .n-skeleton). |
| `.n-skeleton-text` | Skeleton modifier/part (see .n-skeleton). |
| `.n-spinner` | Indeterminate loading indicator. |
| `.n-spinner-lg` | Spinner modifier/part (see .n-spinner). |
| `.n-spinner-sm` | Spinner modifier/part (see .n-spinner). |
| `.n-stack` | Vertical grid stack with a consistent gap between children. |
| `.n-stat` | Labeled metric with a large value and optional change indicator. |
| `.n-stat-change` | Stat modifier/part (see .n-stat). |
| `.n-stat-label` | Stat modifier/part (see .n-stat). |
| `.n-stat-value` | Stat modifier/part (see .n-stat). |
| `.n-surface` | Elevated panel with border, radius, and soft shadow. |
| `.n-surface-glass` | Surface modifier/part (see .n-surface). |
| `.n-surface-overlay` | Surface modifier/part (see .n-surface). |
| `.n-surface-raised` | Surface modifier/part (see .n-surface). |
| `.n-surface-sunken` | Surface modifier/part (see .n-surface). |
| `.n-switch` | Accessible toggle built from a visually-hidden checkbox and a track. |
| `.n-switch-track` | Switch modifier/part (see .n-switch). |
| `.n-tab` | Tabs modifier/part (see .n-tabs). |
| `.n-tab-panel` | Tabs modifier/part (see .n-tabs). |
| `.n-table` | Base table styling with striped/hover/bordered variants. |
| `.n-table-bordered` | Table modifier/part (see .n-table). |
| `.n-table-hover` | Table modifier/part (see .n-table). |
| `.n-table-striped` | Table modifier/part (see .n-table). |
| `.n-tabs` | Horizontal tablist. Toggle aria-selected in JavaScript. |
| `.n-textarea` | Vertically resizable multi-line text field. |
| `.n-toast` | Transient notification; stack with n-toast-stack. |
| `.n-toast-stack` | Toast modifier/part (see .n-toast). |
| `.n-tooltip` | CSS-only tooltip driven by the data-tooltip attribute. |
| `.n-valid` | Sets border-color: var(--n-success). |

## Utility

<a id="utility"></a>

| Class | Description |
| --- | --- |
| `.n-absolute` | Sets position: absolute. |
| `.n-bg-danger` | Applies background-color: var(--n-danger); color: var(--n-on-danger). |
| `.n-bg-dark` | Applies background-color: var(--n-dark); color: #fff. |
| `.n-bg-info` | Applies background-color: var(--n-info); color: var(--n-on-info). |
| `.n-bg-light` | Applies background-color: var(--n-light); color: var(--n-dark). |
| `.n-bg-muted` | Sets background-color: var(--n-bg-muted). |
| `.n-bg-primary` | Applies background-color: var(--n-primary); color: var(--n-on-primary). |
| `.n-bg-secondary` | Applies background-color: var(--n-secondary); color: var(--n-on-secondary). |
| `.n-bg-success` | Applies background-color: var(--n-success); color: var(--n-on-success). |
| `.n-bg-warning` | Applies background-color: var(--n-warning); color: var(--n-on-warning). |
| `.n-bg-white` | Sets background-color: #fff. |
| `.n-border` | Sets border: 1px solid var(--n-border-color). |
| `.n-border-0` | Sets border: none. |
| `.n-border-b` | Sets border-bottom: 1px solid var(--n-border-color). |
| `.n-border-danger` | Sets border-color: var(--n-danger). |
| `.n-border-l` | Sets border-left: 1px solid var(--n-border-color). |
| `.n-border-primary` | Sets border-color: var(--n-primary). |
| `.n-border-r` | Sets border-right: 1px solid var(--n-border-color). |
| `.n-border-success` | Sets border-color: var(--n-success). |
| `.n-border-t` | Sets border-top: 1px solid var(--n-border-color). |
| `.n-border-warning` | Sets border-color: var(--n-warning). |
| `.n-bottom-0` | Sets bottom: 0. |
| `.n-break-inside-avoid` | Sets break-inside: avoid. |
| `.n-capitalize` | Sets text-transform: capitalize. |
| `.n-columns-2` | Applies columns: 2; column-gap: var(--n-gutter). |
| `.n-columns-3` | Applies columns: 3; column-gap: var(--n-gutter). |
| `.n-d-block` | Sets display: block. |
| `.n-d-flex` | Sets display: flex. |
| `.n-d-grid` | Sets display: grid. |
| `.n-d-inline` | Sets display: inline. |
| `.n-d-inline-block` | Sets display: inline-block. |
| `.n-d-inline-flex` | Sets display: inline-flex. |
| `.n-d-lg-block` | Sets display: block. |
| `.n-d-lg-flex` | Sets display: flex. |
| `.n-d-lg-inline` | Sets display: inline. |
| `.n-d-lg-inline-block` | Sets display: inline-block. |
| `.n-d-lg-none` | Sets display: none. |
| `.n-d-md-block` | Sets display: block. |
| `.n-d-md-flex` | Sets display: flex. |
| `.n-d-md-inline` | Sets display: inline. |
| `.n-d-md-inline-block` | Sets display: inline-block. |
| `.n-d-md-none` | Sets display: none. |
| `.n-d-none` | Sets display: none. |
| `.n-d-sm-block` | Sets display: block. |
| `.n-d-sm-flex` | Sets display: flex. |
| `.n-d-sm-inline` | Sets display: inline. |
| `.n-d-sm-inline-block` | Sets display: inline-block. |
| `.n-d-sm-none` | Sets display: none. |
| `.n-duration-150` | Sets transition-duration: 150ms. |
| `.n-duration-300` | Sets transition-duration: 300ms. |
| `.n-duration-500` | Sets transition-duration: 500ms. |
| `.n-duration-75` | Sets transition-duration: 75ms. |
| `.n-ease-in` | Sets transition-timing-function: cubic-bezier(.4,0,1,1). |
| `.n-ease-in-out` | Sets transition-timing-function: cubic-bezier(.4,0,.2,1). |
| `.n-ease-linear` | Sets transition-timing-function: linear. |
| `.n-ease-out` | Sets transition-timing-function: cubic-bezier(0,0,.2,1). |
| `.n-fixed` | Sets position: fixed. |
| `.n-flex` | Sets display: flex. |
| `.n-flex-1` | Sets flex: 1 1 0%. |
| `.n-flex-auto` | Sets flex: 1 1 auto. |
| `.n-flex-col` | Sets flex-direction: column. |
| `.n-flex-col-reverse` | Sets flex-direction: column-reverse. |
| `.n-flex-none` | Sets flex: none. |
| `.n-flex-nowrap` | Sets flex-wrap: nowrap. |
| `.n-flex-row` | Sets flex-direction: row. |
| `.n-flex-row-reverse` | Sets flex-direction: row-reverse. |
| `.n-flex-wrap` | Sets flex-wrap: wrap. |
| `.n-font-bold` | Sets font-weight: 700. |
| `.n-font-light` | Sets font-weight: 300. |
| `.n-font-medium` | Sets font-weight: 500. |
| `.n-font-mono` | Sets font-family: var(--n-font-mono). |
| `.n-font-normal` | Sets font-weight: 400. |
| `.n-font-semibold` | Sets font-weight: 600. |
| `.n-gap-0` | Sets gap: var(--n-space-0). |
| `.n-gap-1` | Sets gap: var(--n-space-1). |
| `.n-gap-2` | Sets gap: var(--n-space-2). |
| `.n-gap-3` | Sets gap: var(--n-space-3). |
| `.n-gap-4` | Sets gap: var(--n-space-4). |
| `.n-gap-5` | Sets gap: var(--n-space-5). |
| `.n-grow` | Sets flex-grow: 1. |
| `.n-h-auto` | Sets height: auto. |
| `.n-h-full` | Sets height: 100%. |
| `.n-h-screen` | Sets height: 100vh. |
| `.n-inset-0` | Sets inset: 0. |
| `.n-isolate` | Sets isolation: isolate. |
| `.n-italic` | Sets font-style: italic. |
| `.n-items-baseline` | Sets align-items: baseline. |
| `.n-items-center` | Sets align-items: center. |
| `.n-items-end` | Sets align-items: flex-end. |
| `.n-items-start` | Sets align-items: flex-start. |
| `.n-items-stretch` | Sets align-items: stretch. |
| `.n-justify-around` | Sets justify-content: space-around. |
| `.n-justify-between` | Sets justify-content: space-between. |
| `.n-justify-center` | Sets justify-content: center. |
| `.n-justify-end` | Sets justify-content: flex-end. |
| `.n-justify-evenly` | Sets justify-content: space-evenly. |
| `.n-justify-start` | Sets justify-content: flex-start. |
| `.n-leading-none` | Sets line-height: 1. |
| `.n-leading-normal` | Sets line-height: 1.5. |
| `.n-leading-relaxed` | Sets line-height: 1.75. |
| `.n-leading-tight` | Sets line-height: 1.25. |
| `.n-left-0` | Sets left: 0. |
| `.n-line-through` | Sets text-decoration: line-through. |
| `.n-lowercase` | Sets text-transform: lowercase. |
| `.n-m-0` | Sets margin: var(--n-space-0). |
| `.n-m-1` | Sets margin: var(--n-space-1). |
| `.n-m-2` | Sets margin: var(--n-space-2). |
| `.n-m-3` | Sets margin: var(--n-space-3). |
| `.n-m-4` | Sets margin: var(--n-space-4). |
| `.n-m-5` | Sets margin: var(--n-space-5). |
| `.n-m-auto` | Sets margin: auto. |
| `.n-max-w-2xl` | Sets max-width: 42rem. |
| `.n-max-w-full` | Sets max-width: 100%. |
| `.n-max-w-lg` | Sets max-width: 32rem. |
| `.n-max-w-md` | Sets max-width: 28rem. |
| `.n-max-w-sm` | Sets max-width: 24rem. |
| `.n-max-w-xl` | Sets max-width: 36rem. |
| `.n-mb-0` | Sets margin-bottom: var(--n-space-0). |
| `.n-mb-1` | Sets margin-bottom: var(--n-space-1). |
| `.n-mb-2` | Sets margin-bottom: var(--n-space-2). |
| `.n-mb-3` | Sets margin-bottom: var(--n-space-3). |
| `.n-mb-4` | Sets margin-bottom: var(--n-space-4). |
| `.n-mb-5` | Sets margin-bottom: var(--n-space-5). |
| `.n-min-h-screen` | Sets min-height: 100vh. |
| `.n-min-w-0` | Sets min-width: 0. |
| `.n-mix-blend-multiply` | Sets mix-blend-mode: multiply. |
| `.n-ml-0` | Sets margin-left: var(--n-space-0). |
| `.n-ml-1` | Sets margin-left: var(--n-space-1). |
| `.n-ml-2` | Sets margin-left: var(--n-space-2). |
| `.n-ml-3` | Sets margin-left: var(--n-space-3). |
| `.n-ml-4` | Sets margin-left: var(--n-space-4). |
| `.n-ml-5` | Sets margin-left: var(--n-space-5). |
| `.n-mr-0` | Sets margin-right: var(--n-space-0). |
| `.n-mr-1` | Sets margin-right: var(--n-space-1). |
| `.n-mr-2` | Sets margin-right: var(--n-space-2). |
| `.n-mr-3` | Sets margin-right: var(--n-space-3). |
| `.n-mr-4` | Sets margin-right: var(--n-space-4). |
| `.n-mr-5` | Sets margin-right: var(--n-space-5). |
| `.n-mt-0` | Sets margin-top: var(--n-space-0). |
| `.n-mt-1` | Sets margin-top: var(--n-space-1). |
| `.n-mt-2` | Sets margin-top: var(--n-space-2). |
| `.n-mt-3` | Sets margin-top: var(--n-space-3). |
| `.n-mt-4` | Sets margin-top: var(--n-space-4). |
| `.n-mt-5` | Sets margin-top: var(--n-space-5). |
| `.n-mx-0` | Sets margin-inline: var(--n-space-0). |
| `.n-mx-1` | Sets margin-inline: var(--n-space-1). |
| `.n-mx-2` | Sets margin-inline: var(--n-space-2). |
| `.n-mx-3` | Sets margin-inline: var(--n-space-3). |
| `.n-mx-4` | Sets margin-inline: var(--n-space-4). |
| `.n-mx-5` | Sets margin-inline: var(--n-space-5). |
| `.n-mx-auto` | Sets margin-inline: auto. |
| `.n-my-0` | Sets margin-block: var(--n-space-0). |
| `.n-my-1` | Sets margin-block: var(--n-space-1). |
| `.n-my-2` | Sets margin-block: var(--n-space-2). |
| `.n-my-3` | Sets margin-block: var(--n-space-3). |
| `.n-my-4` | Sets margin-block: var(--n-space-4). |
| `.n-my-5` | Sets margin-block: var(--n-space-5). |
| `.n-no-underline` | Sets text-decoration: none. |
| `.n-normal-case` | Sets text-transform: none. |
| `.n-not-italic` | Sets font-style: normal. |
| `.n-opacity-0` | Sets opacity: 0. |
| `.n-opacity-100` | Sets opacity: 1. |
| `.n-opacity-25` | Sets opacity: 0.25. |
| `.n-opacity-50` | Sets opacity: 0.5. |
| `.n-opacity-75` | Sets opacity: 0.75. |
| `.n-overflow-auto` | Sets overflow: auto. |
| `.n-overflow-hidden` | Sets overflow: hidden. |
| `.n-overflow-scroll` | Sets overflow: scroll. |
| `.n-overflow-visible` | Sets overflow: visible. |
| `.n-overflow-x-auto` | Sets overflow-x: auto. |
| `.n-overflow-y-auto` | Sets overflow-y: auto. |
| `.n-overscroll-contain` | Sets overscroll-behavior: contain. |
| `.n-p-0` | Sets padding: var(--n-space-0). |
| `.n-p-1` | Sets padding: var(--n-space-1). |
| `.n-p-2` | Sets padding: var(--n-space-2). |
| `.n-p-3` | Sets padding: var(--n-space-3). |
| `.n-p-4` | Sets padding: var(--n-space-4). |
| `.n-p-5` | Sets padding: var(--n-space-5). |
| `.n-pb-0` | Sets padding-bottom: var(--n-space-0). |
| `.n-pb-1` | Sets padding-bottom: var(--n-space-1). |
| `.n-pb-2` | Sets padding-bottom: var(--n-space-2). |
| `.n-pb-3` | Sets padding-bottom: var(--n-space-3). |
| `.n-pb-4` | Sets padding-bottom: var(--n-space-4). |
| `.n-pb-5` | Sets padding-bottom: var(--n-space-5). |
| `.n-pl-0` | Sets padding-left: var(--n-space-0). |
| `.n-pl-1` | Sets padding-left: var(--n-space-1). |
| `.n-pl-2` | Sets padding-left: var(--n-space-2). |
| `.n-pl-3` | Sets padding-left: var(--n-space-3). |
| `.n-pl-4` | Sets padding-left: var(--n-space-4). |
| `.n-pl-5` | Sets padding-left: var(--n-space-5). |
| `.n-pr-0` | Sets padding-right: var(--n-space-0). |
| `.n-pr-1` | Sets padding-right: var(--n-space-1). |
| `.n-pr-2` | Sets padding-right: var(--n-space-2). |
| `.n-pr-3` | Sets padding-right: var(--n-space-3). |
| `.n-pr-4` | Sets padding-right: var(--n-space-4). |
| `.n-pr-5` | Sets padding-right: var(--n-space-5). |
| `.n-pt-0` | Sets padding-top: var(--n-space-0). |
| `.n-pt-1` | Sets padding-top: var(--n-space-1). |
| `.n-pt-2` | Sets padding-top: var(--n-space-2). |
| `.n-pt-3` | Sets padding-top: var(--n-space-3). |
| `.n-pt-4` | Sets padding-top: var(--n-space-4). |
| `.n-pt-5` | Sets padding-top: var(--n-space-5). |
| `.n-px-0` | Sets padding-inline: var(--n-space-0). |
| `.n-px-1` | Sets padding-inline: var(--n-space-1). |
| `.n-px-2` | Sets padding-inline: var(--n-space-2). |
| `.n-px-3` | Sets padding-inline: var(--n-space-3). |
| `.n-px-4` | Sets padding-inline: var(--n-space-4). |
| `.n-px-5` | Sets padding-inline: var(--n-space-5). |
| `.n-py-0` | Sets padding-block: var(--n-space-0). |
| `.n-py-1` | Sets padding-block: var(--n-space-1). |
| `.n-py-2` | Sets padding-block: var(--n-space-2). |
| `.n-py-3` | Sets padding-block: var(--n-space-3). |
| `.n-py-4` | Sets padding-block: var(--n-space-4). |
| `.n-py-5` | Sets padding-block: var(--n-space-5). |
| `.n-relative` | Sets position: relative. |
| `.n-resize` | Sets resize: both. |
| `.n-resize-none` | Sets resize: none. |
| `.n-right-0` | Sets right: 0. |
| `.n-rotate-180` | Sets transform: rotate(180deg). |
| `.n-rotate-90` | Sets transform: rotate(90deg). |
| `.n-rounded` | Sets border-radius: var(--n-radius). |
| `.n-rounded-full` | Sets border-radius: var(--n-radius-full). |
| `.n-rounded-lg` | Sets border-radius: var(--n-radius-lg). |
| `.n-rounded-none` | Sets border-radius: 0. |
| `.n-rounded-sm` | Sets border-radius: var(--n-radius-sm). |
| `.n-rounded-xl` | Sets border-radius: var(--n-radius-xl). |
| `.n-scale-100` | Sets transform: scale(1). |
| `.n-scale-105` | Sets transform: scale(1.05). |
| `.n-scale-95` | Sets transform: scale(0.95). |
| `.n-scroll-smooth` | Sets scroll-behavior: smooth. |
| `.n-self-center` | Sets align-self: center. |
| `.n-self-end` | Sets align-self: flex-end. |
| `.n-self-start` | Sets align-self: flex-start. |
| `.n-self-stretch` | Sets align-self: stretch. |
| `.n-shadow` | Sets box-shadow: var(--n-shadow). |
| `.n-shadow-lg` | Sets box-shadow: var(--n-shadow-lg). |
| `.n-shadow-md` | Sets box-shadow: var(--n-shadow-md). |
| `.n-shadow-none` | Sets box-shadow: none. |
| `.n-shadow-sm` | Sets box-shadow: var(--n-shadow-sm). |
| `.n-shadow-xl` | Sets box-shadow: var(--n-shadow-xl). |
| `.n-shrink-0` | Sets flex-shrink: 0. |
| `.n-snap-start` | Sets scroll-snap-align: start. |
| `.n-snap-x` | Sets scroll-snap-type: x mandatory. |
| `.n-static` | Sets position: static. |
| `.n-sticky` | Sets position: sticky. |
| `.n-text-2xl` | Sets font-size: var(--n-text-2xl). |
| `.n-text-3xl` | Sets font-size: var(--n-text-3xl). |
| `.n-text-4xl` | Sets font-size: var(--n-text-4xl). |
| `.n-text-base` | Sets font-size: var(--n-text-base). |
| `.n-text-center` | Sets text-align: center. |
| `.n-text-danger` | Sets color: var(--n-danger). |
| `.n-text-dark` | Sets color: var(--n-dark). |
| `.n-text-info` | Sets color: var(--n-info). |
| `.n-text-justify` | Sets text-align: justify. |
| `.n-text-left` | Sets text-align: left. |
| `.n-text-lg` | Sets font-size: var(--n-text-lg). |
| `.n-text-muted` | Sets color: var(--n-text-muted). |
| `.n-text-primary` | Sets color: var(--n-primary). |
| `.n-text-right` | Sets text-align: right. |
| `.n-text-secondary` | Sets color: var(--n-secondary). |
| `.n-text-sm` | Sets font-size: var(--n-text-sm). |
| `.n-text-success` | Sets color: var(--n-success). |
| `.n-text-warning` | Sets color: var(--n-warning). |
| `.n-text-white` | Sets color: #ffffff. |
| `.n-text-xl` | Sets font-size: var(--n-text-xl). |
| `.n-text-xs` | Sets font-size: var(--n-text-xs). |
| `.n-top-0` | Sets top: 0. |
| `.n-tracking-normal` | Sets letter-spacing: 0. |
| `.n-tracking-tight` | Sets letter-spacing: -0.025em. |
| `.n-tracking-wide` | Sets letter-spacing: 0.05em. |
| `.n-transition` | Sets transition: all var(--n-duration) var(--n-ease). |
| `.n-transition-colors` | Sets transition: color var(--n-duration) var(--n-ease), background-color var(--n-duration) var(--n-ease), border-color var(--n-duration) var(--n-ease). |
| `.n-transition-none` | Sets transition: none. |
| `.n-transition-shadow` | Sets transition: box-shadow var(--n-duration) var(--n-ease). |
| `.n-transition-transform` | Sets transition: transform var(--n-duration) var(--n-ease). |
| `.n-translate-y-1` | Sets transform: translateY(-0.25rem). |
| `.n-truncate` | Applies overflow: hidden; text-overflow: ellipsis; white-space: nowrap. |
| `.n-underline` | Sets text-decoration: underline. |
| `.n-uppercase` | Sets text-transform: uppercase. |
| `.n-w-auto` | Sets width: auto. |
| `.n-w-full` | Sets width: 100%. |
| `.n-w-half` | Sets width: 50%. |
| `.n-w-screen` | Sets width: 100vw. |
| `.n-will-change-transform` | Sets will-change: transform. |
| `.n-z-0` | Sets z-index: 0. |
| `.n-z-10` | Sets z-index: 10. |
| `.n-z-100` | Sets z-index: 100. |
| `.n-z-20` | Sets z-index: 20. |
| `.n-z-50` | Sets z-index: 50. |

## Content & typography

<a id="content"></a>

| Class | Description |
| --- | --- |
| `.n-blockquote` | Applies padding-inline-start: 1.25rem; border-inline-start: 4px solid var(--n-primary); color: var(--n-text-muted); font-size: var(--n-text-lg); font-style: italic. |
| `.n-caption` | Applies font-size: var(--n-text-xs); line-height: 1.5; color: var(--n-text-muted). |
| `.n-clamp-1` | Applies display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden. |
| `.n-clamp-4` | Applies display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden. |
| `.n-clamp-5` | Applies display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden. |
| `.n-clamp-6` | Applies display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden. |
| `.n-code` | Sets font-family: var(--n-font-mono). |
| `.n-code-block` | Sets font-family: var(--n-font-mono). |
| `.n-kbd` | Sets font-family: var(--n-font-mono). |
| `.n-lead` | Applies font-size: clamp(1.125rem, 1rem + 0.5vw, 1.375rem); line-height: 1.65; color: var(--n-text-muted). |
| `.n-mark` | Applies padding-inline: 0.15em; border-radius: 0.15em; background: #fef08a; color: #422006. |
| `.n-overline` | Applies font-size: var(--n-text-xs); font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--n-primary). |
| `.n-prose` | Applies max-width: 70ch; color: var(--n-text); line-height: 1.75. |
| `.n-text-balance` | Sets text-wrap: balance. |
| `.n-text-fluid-xl` | Applies font-size: clamp(2rem, 5vw, 4.5rem); line-height: 1.05. |
| `.n-text-pretty` | Sets text-wrap: pretty. |

## State

<a id="state"></a>

| Class | Description |
| --- | --- |
| `.n-active` | Sets color: var(--n-primary). |
| `.n-dragging` | Applies opacity: 0.72; box-shadow: var(--n-shadow-lg); transform: rotate(1deg); cursor: grabbing. |
| `.n-expandable` | Nucleus utility class (`.n-expandable`). |
| `.n-expanded` | Sets background: var(--n-bg-muted). |
| `.n-focus-ring` | Nucleus utility class (`.n-focus-ring`). |
| `.n-hidden` | Sets display: none !important. |
| `.n-invisible` | Sets visibility: hidden. |
| `.n-loading` | Sets cursor: progress. |
| `.n-selected` | Applies border-color: var(--n-primary); background: var(--n-primary-soft). |
| `.n-visible` | Sets visibility: visible. |

## Helper

<a id="helper"></a>

| Class | Description |
| --- | --- |
| `.n-avatar` | Applies display: inline-flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: var(--n-radius-full); background: var(--n-primary); color: #fff; font-weight: 600; font-size: var(--n-text-sm); overflow: hidden. |
| `.n-avatar-lg` | Applies width: 3.5rem; height: 3.5rem; font-size: var(--n-text-lg). |
| `.n-avatar-sm` | Applies width: 2rem; height: 2rem; font-size: var(--n-text-xs). |
| `.n-clearfix` | Nucleus utility class (`.n-clearfix`). |
| `.n-divider` | Applies border: none; border-top: 1px solid var(--n-border-color); margin: 1.5rem 0. |
| `.n-img-cover` | Applies object-fit: cover; width: 100%; height: 100%. |
| `.n-img-fluid` | Applies max-width: 100%; height: auto. |
| `.n-pointer` | Sets cursor: pointer. |
| `.n-select-all` | Sets user-select: all. |
| `.n-select-none` | Sets user-select: none. |
| `.n-sr-only` | Applies position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0. |

## Accessibility

<a id="accessibility"></a>

| Class | Description |
| --- | --- |
| `.n-no-print` | Sets display: none !important. |
| `.n-pointer-events-auto` | Sets pointer-events: auto. |
| `.n-pointer-events-none` | Sets pointer-events: none. |
| `.n-skip-link` | Applies position: fixed; z-index: 9999; inset-block-start: 0.75rem; inset-inline-start: 0.75rem; padding: 0.625rem 0.875rem; border-radius: var(--n-radius); background: var(--n-primary); color: var(--n-on-primary); box-shadow: var(--n-shadow-lg); transform: translateY(-200%). |
| `.n-sr-only-focusable` | Nucleus utility class (`.n-sr-only-focusable`). |
| `.n-touch-target` | Applies min-width: 2.75rem; min-height: 2.75rem. |

## Theme & dark mode

<a id="theme"></a>

| Class | Description |
| --- | --- |
| `.n-dark-mode` | Applies --n-text: #e2e8f0; --n-text-muted: #94a3b8; --n-bg: #0f172a; --n-bg-muted: #1e293b; --n-border-color: #334155; --n-surface: #0f172a; --n-surface-raised: #172033; --n-surface-sunken: #0b1220; --n-overlay: rgba(2, 6, 23, 0.76); --n-primary: #d5a44f; --n-primary-h: #e2bc75; --n-secondary: #c28b31; --n-secondary-h: #d5a44f; --n-focus: rgba(213, 164, 79, 0.42); --n-primary-soft: rgba(213, 164, 79, 0.13); --n-primary-border: rgba(213, 164, 79, 0.42); --n-primary-ink: #f0d395; --n-secondary-soft: rgba(194, 139, 49, 0.14); --n-visited: #d5a44f; --n-on-primary: #1a160f; --n-on-secondary: #1a160f; color-scheme: dark. |
