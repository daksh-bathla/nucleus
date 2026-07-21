# Nucleus CSS — Class reference

Generated from `src/css/nucleus.css`. 697 classes, prefix `n-`. Do not edit by hand — run `npm run build`.

## Contents
- [Layout](#layout) (92)
- [Component](#component) (259)
- [Utility](#utility) (294)
- [Content & typography](#content) (16)
- [State](#state) (18)
- [Helper](#helper) (11)
- [Accessibility](#accessibility) (6)
- [Theme & dark mode](#theme) (1)

## Layout

<a id="layout"></a>

| Class | Role | Status | Scale | Description / gotchas |
| --- | --- | --- | --- | --- |
| `.n-aspect-square` | layout | Canonical | — | Sets aspect-ratio: 1. |
| `.n-aspect-video` | layout | Canonical | — | Sets aspect-ratio: 16 / 9. |
| `.n-auto-grid` | layout | Canonical | — | Applies display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--n-grid-min, 16rem)), 1fr)); gap: var(--n-grid-gap, var(--n-gutter)). Uses a 16rem default minimum column width. Override --n-grid-min when needed. |
| `.n-cluster` | layout | Canonical | — | Applies display: flex; flex-wrap: wrap; align-items: center; gap: var(--n-cluster-gap, var(--n-space-2)). |
| `.n-col-1` | component-part | Canonical | — | Sets grid-column: span 1. |
| `.n-col-10` | layout | Canonical | — | Sets grid-column: span 10. |
| `.n-col-11` | layout | Canonical | — | Sets grid-column: span 11. |
| `.n-col-12` | component-part | Canonical | — | Sets grid-column: span 12. |
| `.n-col-2` | layout | Canonical | — | Sets grid-column: span 2. |
| `.n-col-3` | layout | Canonical | — | Sets grid-column: span 3. |
| `.n-col-4` | layout | Canonical | — | Sets grid-column: span 4. |
| `.n-col-5` | layout | Canonical | — | Sets grid-column: span 5. |
| `.n-col-6` | component-part | Canonical | — | Sets grid-column: span 6. |
| `.n-col-7` | layout | Canonical | — | Sets grid-column: span 7. |
| `.n-col-8` | layout | Canonical | — | Sets grid-column: span 8. |
| `.n-col-9` | layout | Canonical | — | Sets grid-column: span 9. |
| `.n-col-lg-1` | layout | Canonical | — | Sets grid-column: span 1. |
| `.n-col-lg-10` | layout | Canonical | — | Sets grid-column: span 10. |
| `.n-col-lg-11` | layout | Canonical | — | Sets grid-column: span 11. |
| `.n-col-lg-12` | layout | Canonical | — | Sets grid-column: span 12. |
| `.n-col-lg-2` | layout | Canonical | — | Sets grid-column: span 2. |
| `.n-col-lg-3` | layout | Canonical | — | Sets grid-column: span 3. |
| `.n-col-lg-4` | component-part | Canonical | — | Sets grid-column: span 4. |
| `.n-col-lg-5` | layout | Canonical | — | Sets grid-column: span 5. |
| `.n-col-lg-6` | layout | Canonical | — | Sets grid-column: span 6. |
| `.n-col-lg-7` | layout | Canonical | — | Sets grid-column: span 7. |
| `.n-col-lg-8` | layout | Canonical | — | Sets grid-column: span 8. |
| `.n-col-lg-9` | layout | Canonical | — | Sets grid-column: span 9. |
| `.n-col-md-1` | layout | Canonical | — | Sets grid-column: span 1. |
| `.n-col-md-10` | layout | Canonical | — | Sets grid-column: span 10. |
| `.n-col-md-11` | layout | Canonical | — | Sets grid-column: span 11. |
| `.n-col-md-12` | layout | Canonical | — | Sets grid-column: span 12. |
| `.n-col-md-2` | layout | Canonical | — | Sets grid-column: span 2. |
| `.n-col-md-3` | layout | Canonical | — | Sets grid-column: span 3. |
| `.n-col-md-4` | layout | Canonical | — | Sets grid-column: span 4. |
| `.n-col-md-5` | layout | Canonical | — | Sets grid-column: span 5. |
| `.n-col-md-6` | component-part | Canonical | — | Sets grid-column: span 6. |
| `.n-col-md-7` | layout | Canonical | — | Sets grid-column: span 7. |
| `.n-col-md-8` | layout | Canonical | — | Sets grid-column: span 8. |
| `.n-col-md-9` | layout | Canonical | — | Sets grid-column: span 9. |
| `.n-col-sm-1` | layout | Canonical | — | Sets grid-column: span 1. |
| `.n-col-sm-10` | layout | Canonical | — | Sets grid-column: span 10. |
| `.n-col-sm-11` | layout | Canonical | — | Sets grid-column: span 11. |
| `.n-col-sm-12` | layout | Canonical | — | Sets grid-column: span 12. |
| `.n-col-sm-2` | layout | Canonical | — | Sets grid-column: span 2. |
| `.n-col-sm-3` | layout | Canonical | — | Sets grid-column: span 3. |
| `.n-col-sm-4` | layout | Canonical | — | Sets grid-column: span 4. |
| `.n-col-sm-5` | layout | Canonical | — | Sets grid-column: span 5. |
| `.n-col-sm-6` | layout | Canonical | — | Sets grid-column: span 6. |
| `.n-col-sm-7` | layout | Canonical | — | Sets grid-column: span 7. |
| `.n-col-sm-8` | layout | Canonical | — | Sets grid-column: span 8. |
| `.n-col-sm-9` | layout | Canonical | — | Sets grid-column: span 9. |
| `.n-col-xl-1` | layout | Canonical | — | Sets grid-column: span 1. |
| `.n-col-xl-10` | layout | Canonical | — | Sets grid-column: span 10. |
| `.n-col-xl-11` | layout | Canonical | — | Sets grid-column: span 11. |
| `.n-col-xl-12` | layout | Canonical | — | Sets grid-column: span 12. |
| `.n-col-xl-2` | layout | Canonical | — | Sets grid-column: span 2. |
| `.n-col-xl-3` | layout | Canonical | — | Sets grid-column: span 3. |
| `.n-col-xl-4` | layout | Canonical | — | Sets grid-column: span 4. |
| `.n-col-xl-5` | layout | Canonical | — | Sets grid-column: span 5. |
| `.n-col-xl-6` | layout | Canonical | — | Sets grid-column: span 6. |
| `.n-col-xl-7` | layout | Canonical | — | Sets grid-column: span 7. |
| `.n-col-xl-8` | layout | Canonical | — | Sets grid-column: span 8. |
| `.n-col-xl-9` | layout | Canonical | — | Sets grid-column: span 9. |
| `.n-container` | layout | Canonical | — | Applies width: 100%; margin-inline: auto; padding-inline: var(--n-gutter). |
| `.n-container-fluid` | component-part | Canonical | — | Applies width: 100%; margin-inline: auto; padding-inline: var(--n-gutter); max-width: none. |
| `.n-container-query` | layout | Canonical | — | Sets container-type: inline-size. |
| `.n-content` | layout | Canonical | — | Applies width: min(100% - 2rem, 70ch); margin-inline: auto. |
| `.n-cover` | layout | Canonical | — | Applies display: flex; min-height: var(--n-cover-height, 100dvh); flex-direction: column; padding: var(--n-space-3). |
| `.n-cover-center` | layout | Canonical | — | Nucleus utility class (`.n-cover-center`). |
| `.n-cq-row` | layout | Canonical | — | Applies display: flex; align-items: center; gap: var(--n-space-3). |
| `.n-flow` | layout | Canonical | — | Nucleus utility class (`.n-flow`). |
| `.n-frame` | layout | Canonical | — | Applies overflow: hidden; aspect-ratio: var(--n-frame-ratio, 16 / 9). |
| `.n-grid-auto-fill` | component-part | Canonical | — | Applies display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, var(--n-grid-min, 14rem)), 1fr)); gap: var(--n-grid-gap, var(--n-gutter)). |
| `.n-grid-auto-fit` | component-part | Canonical | — | Applies display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--n-grid-min, 14rem)), 1fr)); gap: var(--n-grid-gap, var(--n-gutter)). Uses a 14rem default minimum column width, so it is not an alias of n-auto-grid. |
| `.n-object-contain` | layout | Canonical | — | Sets object-fit: contain. |
| `.n-object-cover` | layout | Canonical | — | Sets object-fit: cover. |
| `.n-order-1` | layout | Canonical | — | Sets order: 1. |
| `.n-order-2` | layout | Canonical | — | Sets order: 2. |
| `.n-order-3` | layout | Canonical | — | Sets order: 3. |
| `.n-order-4` | layout | Canonical | — | Sets order: 4. |
| `.n-order-5` | layout | Canonical | — | Sets order: 5. |
| `.n-order-first` | layout | Canonical | — | Sets order: -9999. |
| `.n-order-last` | layout | Canonical | — | Sets order: 9999. |
| `.n-place-center` | layout | Canonical | — | Sets place-items: center. Only sets place-items: center; the element must already be a compatible layout container. |
| `.n-reel` | layout | Canonical | — | Applies display: flex; gap: var(--n-reel-gap, var(--n-gutter)); overflow-x: auto; overscroll-behavior-inline: contain; scroll-snap-type: inline mandatory; padding-block-end: var(--n-space-2). |
| `.n-row` | layout | Canonical | — | Applies display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--n-gutter). |
| `.n-section` | layout | Canonical | — | Sets padding-block: var(--n-section-space). |
| `.n-sidebar-layout` | layout | Canonical | — | Applies display: grid; grid-template-columns: minmax(0, 1fr); gap: var(--n-sidebar-gap, var(--n-space-4)). |
| `.n-sidebar-right` | component-part | Canonical | — | Nucleus utility class (`.n-sidebar-right`). |
| `.n-split` | layout | Canonical | — | Applies display: flex; align-items: center; justify-content: space-between; gap: var(--n-space-3). |
| `.n-switcher` | layout | Canonical | — | Applies display: flex; flex-wrap: wrap; gap: var(--n-switcher-gap, var(--n-gutter)). |

## Component

<a id="component"></a>

| Class | Role | Status | Scale | Description / gotchas |
| --- | --- | --- | --- | --- |
| `.n-accordion` | component | Canonical | — | Disclosure group built on native <details>/<summary>. |
| `.n-accordion-panel` | component-part | Canonical | — | Accordion modifier/part (see .n-accordion). |
| `.n-alert` | component | Canonical | — | Colored message banner for contextual feedback. |
| `.n-alert-danger` | variant | Canonical | — | Alert modifier/part (see .n-alert). |
| `.n-alert-dark` | variant | Canonical | — | Alert modifier/part (see .n-alert). |
| `.n-alert-info` | variant | Canonical | — | Alert modifier/part (see .n-alert). |
| `.n-alert-light` | variant | Canonical | — | Alert modifier/part (see .n-alert). |
| `.n-alert-primary` | variant | Canonical | — | Alert modifier/part (see .n-alert). |
| `.n-alert-secondary` | variant | Canonical | — | Alert modifier/part (see .n-alert). |
| `.n-alert-success` | variant | Canonical | — | Alert modifier/part (see .n-alert). |
| `.n-alert-warning` | variant | Canonical | — | Alert modifier/part (see .n-alert). |
| `.n-avatar-group` | component-part | Canonical | — | Avatar modifier/part (see .n-avatar). |
| `.n-backdrop-blur` | component-part | Canonical | — | Applies backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px). |
| `.n-badge` | component | Canonical | — | Small pill for counts, labels, or status. |
| `.n-badge-danger` | variant | Canonical | — | Badge modifier/part (see .n-badge). |
| `.n-badge-dark` | variant | Canonical | — | Badge modifier/part (see .n-badge). |
| `.n-badge-info` | variant | Canonical | — | Badge modifier/part (see .n-badge). |
| `.n-badge-light` | variant | Canonical | — | Badge modifier/part (see .n-badge). |
| `.n-badge-primary` | variant | Canonical | — | Badge modifier/part (see .n-badge). |
| `.n-badge-secondary` | variant | Canonical | — | Badge modifier/part (see .n-badge). |
| `.n-badge-soft` | variant | Canonical | — | Badge modifier/part (see .n-badge). |
| `.n-badge-success` | variant | Canonical | — | Badge modifier/part (see .n-badge). |
| `.n-badge-warning` | variant | Canonical | — | Badge modifier/part (see .n-badge). |
| `.n-banner` | component | Canonical | — | Wide, high-emphasis marketing/upgrade panel with an optional dark surface. |
| `.n-banner-actions` | component-part | Canonical | — | Promo banner modifier/part (see .n-banner). |
| `.n-banner-dark` | variant | Canonical | — | Promo banner modifier/part (see .n-banner). |
| `.n-banner-eyebrow` | component-part | Canonical | — | Promo banner modifier/part (see .n-banner). |
| `.n-banner-media` | component-part | Canonical | — | Promo banner modifier/part (see .n-banner). |
| `.n-banner-split` | variant | Canonical | — | Promo banner modifier/part (see .n-banner). |
| `.n-banner-text` | component-part | Canonical | — | Promo banner modifier/part (see .n-banner). |
| `.n-banner-title` | component-part | Canonical | — | Promo banner modifier/part (see .n-banner). |
| `.n-blur-sm` | component-part | Canonical | — | Sets filter: blur(4px). |
| `.n-breadcrumb` | component | Canonical | — | Ordered trail of ancestor links. |
| `.n-btn` | component | Canonical | — | Base button. Combine with a color variant and optional size. |
| `.n-btn-danger` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-dark` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-ghost` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-info` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-lg` | size | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-light` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-outline-danger` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-outline-dark` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-outline-info` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-outline-light` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-outline-primary` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-outline-secondary` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-outline-success` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-outline-warning` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-primary` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-secondary` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-sm` | size | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-success` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-btn-warning` | variant | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-button-group` | component-part | Canonical | — | Button modifier/part (see .n-btn). |
| `.n-callout` | component | Canonical | — | Boxed aside for tips and warnings. |
| `.n-callout-danger` | variant | Canonical | — | Callout modifier/part (see .n-callout). |
| `.n-callout-primary` | variant | Canonical | — | Callout modifier/part (see .n-callout). |
| `.n-callout-success` | variant | Canonical | — | Callout modifier/part (see .n-callout). |
| `.n-callout-title` | component-part | Canonical | — | Callout modifier/part (see .n-callout). |
| `.n-card` | component | Canonical | — | Surface container with optional header, body, and footer regions. |
| `.n-card-body` | component-part | Canonical | — | Card modifier/part (see .n-card). |
| `.n-card-elevated` | variant | Canonical | — | Card modifier/part (see .n-card). |
| `.n-card-footer` | component-part | Canonical | — | Card modifier/part (see .n-card). |
| `.n-card-header` | component-part | Canonical | — | Card modifier/part (see .n-card). |
| `.n-card-img` | component-part | Canonical | — | Card modifier/part (see .n-card). |
| `.n-card-interactive` | variant | Canonical | — | Card modifier/part (see .n-card). |
| `.n-center` | component-part | Canonical | — | Applies display: grid; place-items: center. Creates a grid formatting context and centers its children on both axes. |
| `.n-character-count` | component-part | Canonical | — | Applies margin-block-start: 0.25rem; color: var(--n-text-muted); font-size: var(--n-text-xs); text-align: end. |
| `.n-checkbox` | component | Canonical | — | Inline label wrapper for a native checkbox or radio. |
| `.n-checklist` | component | Canonical | — | Onboarding task list; mark finished rows with n-checklist-done. |
| `.n-checklist-done` | component-part | Canonical | — | Checklist modifier/part (see .n-checklist). |
| `.n-checklist-item` | component-part | Canonical | — | Checklist modifier/part (see .n-checklist). |
| `.n-checklist-marker` | component-part | Canonical | — | Checklist modifier/part (see .n-checklist). |
| `.n-chip` | component | Canonical | — | Compact token, optionally removable. |
| `.n-chip-removable` | variant | Canonical | — | Chip modifier/part (see .n-chip). |
| `.n-chip-remove` | component-part | Canonical | — | Chip modifier/part (see .n-chip). |
| `.n-clamp-2` | component-part | Canonical | — | Applies display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden. |
| `.n-clamp-3` | component-part | Canonical | — | Applies display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden. |
| `.n-combobox` | component | Canonical | — | Typeahead input paired with a results list. Wrap an n-input and a list. |
| `.n-combobox-empty` | component-part | Canonical | — | Combobox modifier/part (see .n-combobox). |
| `.n-combobox-list` | component-part | Canonical | — | Combobox modifier/part (see .n-combobox). |
| `.n-combobox-option` | component-part | Canonical | — | Combobox modifier/part (see .n-combobox). |
| `.n-cookie-bar` | component | Canonical | — | Persistent bottom notice bar with an actions cluster (e.g. cookie consent). |
| `.n-cookie-bar-actions` | component-part | Canonical | — | Consent bar modifier/part (see .n-cookie-bar). |
| `.n-cookie-bar-text` | component-part | Canonical | — | Consent bar modifier/part (see .n-cookie-bar). |
| `.n-dialog` | component | Canonical | — | Native <dialog> modal. Open with dialog.showModal() in JavaScript. |
| `.n-dialog-body` | component-part | Canonical | — | Dialog modifier/part (see .n-dialog). |
| `.n-dialog-footer` | component-part | Canonical | — | Dialog modifier/part (see .n-dialog). |
| `.n-dialog-header` | component-part | Canonical | — | Dialog modifier/part (see .n-dialog). |
| `.n-divider-gradient` | component-part | Canonical | — | Applies height: 1px; border: 0; background: linear-gradient(90deg, transparent, var(--n-border-color), transparent). |
| `.n-dock` | component | Canonical | — | Bottom-centered floating bar of actions; the page scrolls behind it. |
| `.n-dock-bar` | component-part | Canonical | — | Action dock modifier/part (see .n-dock). |
| `.n-dock-bar-dark` | variant | Canonical | — | Action dock modifier/part (see .n-dock). |
| `.n-dock-divider` | component-part | Canonical | — | Action dock modifier/part (see .n-dock). |
| `.n-dock-item` | component-part | Canonical | — | Action dock modifier/part (see .n-dock). |
| `.n-drawer` | component | Canonical | — | Edge-anchored <dialog> panel. |
| `.n-drawer-left` | variant | Canonical | — | Drawer modifier/part (see .n-drawer). |
| `.n-dropdown` | component | Canonical | — | Menu surface of n-dropdown-item rows. Best inside a popover. |
| `.n-dropdown-item` | component-part | Canonical | — | Dropdown menu modifier/part (see .n-dropdown). |
| `.n-empty-state` | component | Canonical | — | Centered placeholder for empty views. |
| `.n-empty-state-icon` | component-part | Canonical | — | Empty state modifier/part (see .n-empty-state). |
| `.n-error-text` | component-part | Canonical | — | Text input modifier/part (see .n-input). |
| `.n-field-row` | component-part | Canonical | — | Fieldset modifier/part (see .n-fieldset). |
| `.n-fieldset` | component | Canonical | — | Grouped form controls with a legend. |
| `.n-file-input` | component-part | Canonical | — | Applies width: 100%; border: 1px solid var(--n-border-color); border-radius: var(--n-radius); background: var(--n-bg); color: var(--n-text-muted). |
| `.n-footer` | component | Canonical | — | Multi-column site footer with a link grid and a bottom bar. |
| `.n-footer-bottom` | component-part | Canonical | — | Marketing footer modifier/part (see .n-footer). |
| `.n-footer-col` | component-part | Canonical | — | Marketing footer modifier/part (see .n-footer). |
| `.n-footer-grid` | component-part | Canonical | — | Marketing footer modifier/part (see .n-footer). |
| `.n-footer-title` | component-part | Canonical | — | Marketing footer modifier/part (see .n-footer). |
| `.n-form-grid` | component-part | Canonical | — | Fieldset modifier/part (see .n-fieldset). |
| `.n-form-group` | component-part | Canonical | — | Text input modifier/part (see .n-input). |
| `.n-gauge` | component | Canonical | — | Radial score ring driven by the --n-gauge-value custom property (0–100). |
| `.n-gauge-danger` | variant | Canonical | — | Gauge modifier/part (see .n-gauge). |
| `.n-gauge-label` | component-part | Canonical | — | Gauge modifier/part (see .n-gauge). |
| `.n-gauge-lg` | size | Canonical | — | Gauge modifier/part (see .n-gauge). |
| `.n-gauge-sm` | size | Canonical | — | Gauge modifier/part (see .n-gauge). |
| `.n-gauge-success` | variant | Canonical | — | Gauge modifier/part (see .n-gauge). |
| `.n-gauge-value` | component-part | Canonical | — | Gauge modifier/part (see .n-gauge). |
| `.n-gauge-warning` | variant | Canonical | — | Gauge modifier/part (see .n-gauge). |
| `.n-gradient-border` | component-part | Canonical | — | Applies position: relative; border: 1px solid transparent; background: linear-gradient(var(--n-bg), var(--n-bg)) padding-box, linear-gradient(135deg, rgba(99,102,241,.8), rgba(14,165,233,.55)) border-box. |
| `.n-gradient-mesh` | component-part | Canonical | — | Applies background-color: var(--n-bg); background-image: radial-gradient(circle at 10% 15%, rgba(15, 118, 110, 0.18), transparent 30%), radial-gradient(circle at 90% 10%, rgba(14, 116, 144, 0.14), transparent 28%), radial-gradient(circle at 70% 90%, rgba(20, 125, 116, 0.12), transparent 32%). |
| `.n-gradient-primary` | component-part | Canonical | — | Applies background: linear-gradient(135deg, var(--n-primary), var(--n-secondary)); color: #fff. |
| `.n-gradient-text` | component-part | Canonical | — | Applies background: linear-gradient(135deg, var(--n-primary), var(--n-secondary)); -webkit-background-clip: text; background-clip: text; color: transparent. |
| `.n-grayscale` | component-part | Canonical | — | Sets filter: grayscale(1). |
| `.n-helper-text` | component-part | Canonical | — | Text input modifier/part (see .n-input). |
| `.n-hover-lift` | component-part | Canonical | — | Sets transition: transform var(--n-duration) var(--n-ease), box-shadow var(--n-duration) var(--n-ease). |
| `.n-hover-scale` | component-part | Canonical | — | Sets transition: transform var(--n-duration) var(--n-ease). |
| `.n-icon-tile` | component | Canonical | — | Rounded container for a single icon, color-tinted to context. |
| `.n-icon-tile-danger` | variant | Canonical | — | Icon tile modifier/part (see .n-icon-tile). |
| `.n-icon-tile-info` | variant | Canonical | — | Icon tile modifier/part (see .n-icon-tile). |
| `.n-icon-tile-lg` | size | Canonical | — | Icon tile modifier/part (see .n-icon-tile). |
| `.n-icon-tile-neutral` | variant | Canonical | — | Icon tile modifier/part (see .n-icon-tile). |
| `.n-icon-tile-primary` | variant | Canonical | — | Icon tile modifier/part (see .n-icon-tile). |
| `.n-icon-tile-round` | variant | Canonical | — | Icon tile modifier/part (see .n-icon-tile). |
| `.n-icon-tile-sm` | size | Canonical | — | Icon tile modifier/part (see .n-icon-tile). |
| `.n-icon-tile-success` | variant | Canonical | — | Icon tile modifier/part (see .n-icon-tile). |
| `.n-icon-tile-warning` | variant | Canonical | — | Icon tile modifier/part (see .n-icon-tile). |
| `.n-input` | component | Canonical | — | Full-width text field. Pair with n-label inside an n-form-group. |
| `.n-input-error` | variant | Canonical | — | Text input modifier/part (see .n-input). |
| `.n-input-group` | component | Canonical | — | Joins an input with prefix/suffix add-ons or a button. |
| `.n-input-lg` | size | Canonical | — | Text input modifier/part (see .n-input). |
| `.n-input-loading` | component-part | Canonical | — | Sets position: relative. |
| `.n-input-prefix` | component-part | Canonical | — | Input group modifier/part (see .n-input-group). |
| `.n-input-sm` | size | Canonical | — | Text input modifier/part (see .n-input). |
| `.n-input-success` | variant | Canonical | — | Text input modifier/part (see .n-input). |
| `.n-input-suffix` | component-part | Canonical | — | Input group modifier/part (see .n-input-group). |
| `.n-invalid` | component-part | Canonical | — | Sets border-color: var(--n-danger). |
| `.n-label` | component-part | Canonical | — | Text input modifier/part (see .n-input). |
| `.n-list` | component-part | Canonical | — | Applies list-style: none; padding: 0. |
| `.n-list-group` | component | Canonical | — | Bordered vertical list of rows. |
| `.n-list-group-item` | component-part | Canonical | — | List group modifier/part (see .n-list-group). |
| `.n-list-inline` | component-part | Canonical | — | Applies list-style: none; padding-left: 0; display: flex; flex-wrap: wrap; gap: 1rem. |
| `.n-list-unstyled` | component-part | Canonical | — | Applies list-style: none; padding-left: 0. |
| `.n-meter` | component | Canonical | — | Labeled usage bar whose fill colour flips at a threshold. Set --n-meter-value. |
| `.n-meter-danger` | variant | Canonical | — | Meter modifier/part (see .n-meter). |
| `.n-meter-fill` | component-part | Canonical | — | Meter modifier/part (see .n-meter). |
| `.n-meter-header` | component-part | Canonical | — | Meter modifier/part (see .n-meter). |
| `.n-meter-label` | component-part | Canonical | — | Meter modifier/part (see .n-meter). |
| `.n-meter-lg` | size | Canonical | — | Meter modifier/part (see .n-meter). |
| `.n-meter-sm` | size | Canonical | — | Meter modifier/part (see .n-meter). |
| `.n-meter-success` | variant | Canonical | — | Meter modifier/part (see .n-meter). |
| `.n-meter-track` | component-part | Canonical | — | Meter modifier/part (see .n-meter). |
| `.n-meter-value` | component-part | Canonical | — | Meter modifier/part (see .n-meter). |
| `.n-meter-warning` | variant | Canonical | — | Meter modifier/part (see .n-meter). |
| `.n-nav` | component-part | Canonical | — | Navbar modifier/part (see .n-navbar). |
| `.n-nav-item` | component-part | Canonical | — | Navbar modifier/part (see .n-navbar). |
| `.n-nav-link` | component-part | Canonical | — | Navbar modifier/part (see .n-navbar). |
| `.n-navbar` | component | Canonical | — | Sticky top navigation bar with inline links or a CSS-only hamburger menu. |
| `.n-navbar-brand` | component-part | Canonical | — | Navbar modifier/part (see .n-navbar). |
| `.n-navbar-menu` | component-part | Canonical | — | Navbar modifier/part (see .n-navbar). |
| `.n-navbar-toggle` | component-part | Canonical | — | Navbar modifier/part (see .n-navbar). |
| `.n-navbar-toggle-icon` | component-part | Canonical | — | Navbar modifier/part (see .n-navbar). |
| `.n-noise` | component-part | Canonical | — | Sets background-image: repeating-radial-gradient(circle at 0 0, rgba(15, 23, 42, 0.035) 0 1px, transparent 1px 4px). |
| `.n-page-atmosphere` | component-part | Canonical | — | Applies background-color: var(--n-bg); background-image: radial-gradient(circle at top left, rgba(15, 118, 110, 0.08), transparent 32%), radial-gradient(circle at top right, rgba(14, 116, 144, 0.06), transparent 28%); background-attachment: fixed. |
| `.n-pagination` | component | Canonical | — | List of page links; mark the current page with aria-current. |
| `.n-pagination-link` | component-part | Canonical | — | Pagination modifier/part (see .n-pagination). |
| `.n-plan` | component | Canonical | — | Pricing tier card with price, feature list, and a featured/inverted state. |
| `.n-plan-desc` | component-part | Canonical | — | Pricing plan modifier/part (see .n-plan). |
| `.n-plan-feature` | component-part | Canonical | — | Pricing plan modifier/part (see .n-plan). |
| `.n-plan-featured` | variant | Canonical | — | Pricing plan modifier/part (see .n-plan). |
| `.n-plan-features` | component-part | Canonical | — | Pricing plan modifier/part (see .n-plan). |
| `.n-plan-grid` | component-part | Canonical | — | Pricing plan modifier/part (see .n-plan). |
| `.n-plan-inverted` | variant | Canonical | — | Pricing plan modifier/part (see .n-plan). |
| `.n-plan-name` | component-part | Canonical | — | Pricing plan modifier/part (see .n-plan). |
| `.n-plan-period` | component-part | Canonical | — | Pricing plan modifier/part (see .n-plan). |
| `.n-plan-price` | component-part | Canonical | — | Pricing plan modifier/part (see .n-plan). |
| `.n-plan-ribbon` | component-part | Canonical | — | Pricing plan modifier/part (see .n-plan). |
| `.n-popover` | component-part | Canonical | — | Dropdown menu modifier/part (see .n-dropdown). |
| `.n-press` | component-part | Canonical | — | Nucleus utility class (`.n-press`). |
| `.n-progress` | component | Canonical | — | Native <progress> element styling. |
| `.n-radio` | component-part | Canonical | — | Checkbox / radio modifier/part (see .n-checkbox). |
| `.n-range` | component-part | Canonical | — | Applies width: 100%; accent-color: var(--n-primary). |
| `.n-readonly` | component-part | Canonical | — | Applies background: var(--n-bg-muted); cursor: default. |
| `.n-required` | component-part | Canonical | — | Nucleus utility class (`.n-required`). |
| `.n-ring` | component-part | Canonical | — | Sets box-shadow: 0 0 0 1px rgba(99,102,241,.15), 0 0 0 4px rgba(99,102,241,.08). |
| `.n-ring-danger` | component-part | Canonical | — | Sets box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.18). |
| `.n-ring-success` | component-part | Canonical | — | Sets box-shadow: 0 0 0 3px rgba(21, 128, 61, 0.18). |
| `.n-saturate` | component-part | Canonical | — | Sets filter: saturate(1.5). |
| `.n-search-field` | component | Canonical | — | Input wrapper with a built-in leading search glyph. |
| `.n-search-input` | component-part | Canonical | — | Search field modifier/part (see .n-search-field). |
| `.n-segmented` | component | Canonical | — | Single-select pill group for filtering or switching views. |
| `.n-segmented-item` | component-part | Canonical | — | Segmented control modifier/part (see .n-segmented). |
| `.n-segmented-sm` | size | Canonical | — | Segmented control modifier/part (see .n-segmented). |
| `.n-select` | component | Canonical | — | Styled native select with a custom chevron. |
| `.n-shadow-glow` | component-part | Canonical | — | Sets box-shadow: var(--n-shadow-glow). |
| `.n-shadow-inner` | component-part | Canonical | — | Sets box-shadow: inset 0 2px 4px rgba(15, 23, 42, 0.08). |
| `.n-signal` | component-part | Canonical | — | Signal list modifier/part (see .n-signal-list). |
| `.n-signal-list` | component | Canonical | — | Dotted list for pro/con or insight bullets, colour-coded by sentiment. |
| `.n-signal-negative` | component-part | Canonical | — | Signal list modifier/part (see .n-signal-list). |
| `.n-signal-neutral` | component-part | Canonical | — | Signal list modifier/part (see .n-signal-list). |
| `.n-signal-positive` | component-part | Canonical | — | Signal list modifier/part (see .n-signal-list). |
| `.n-skeleton` | component | Canonical | — | Shimmering placeholder for loading content. |
| `.n-skeleton-circle` | component-part | Canonical | — | Skeleton modifier/part (see .n-skeleton). |
| `.n-skeleton-text` | component-part | Canonical | — | Skeleton modifier/part (see .n-skeleton). |
| `.n-spinner` | component | Canonical | — | Indeterminate loading indicator. |
| `.n-spinner-lg` | size | Canonical | — | Spinner modifier/part (see .n-spinner). |
| `.n-spinner-sm` | size | Canonical | — | Spinner modifier/part (see .n-spinner). |
| `.n-stack` | component | Canonical | — | Vertical grid stack with a consistent gap between children. |
| `.n-stat` | component | Canonical | — | Labeled metric with a large value and optional change indicator. |
| `.n-stat-change` | component-part | Canonical | — | Stat modifier/part (see .n-stat). |
| `.n-stat-grid` | component | Canonical | — | Responsive auto-fit wrapper for n-stat or metric tiles. |
| `.n-stat-label` | component-part | Canonical | — | Stat modifier/part (see .n-stat). |
| `.n-stat-value` | component-part | Canonical | — | Stat modifier/part (see .n-stat). |
| `.n-status` | component | Canonical | — | Small dot plus label signalling live, lifecycle, or health state. |
| `.n-status-busy` | variant | Canonical | — | Status indicator modifier/part (see .n-status). |
| `.n-status-dot` | component-part | Canonical | — | Status indicator modifier/part (see .n-status). |
| `.n-status-error` | variant | Canonical | — | Status indicator modifier/part (see .n-status). |
| `.n-status-idle` | variant | Canonical | — | Status indicator modifier/part (see .n-status). |
| `.n-status-offline` | variant | Canonical | — | Status indicator modifier/part (see .n-status). |
| `.n-status-online` | variant | Canonical | — | Status indicator modifier/part (see .n-status). |
| `.n-status-pulse` | variant | Canonical | — | Status indicator modifier/part (see .n-status). |
| `.n-surface` | component | Canonical | — | Elevated panel with border, radius, and soft shadow. |
| `.n-surface-glass` | variant | Canonical | — | Surface modifier/part (see .n-surface). |
| `.n-surface-overlay` | variant | Canonical | — | Surface modifier/part (see .n-surface). |
| `.n-surface-raised` | variant | Canonical | — | Surface modifier/part (see .n-surface). |
| `.n-surface-sunken` | variant | Canonical | — | Surface modifier/part (see .n-surface). |
| `.n-switch` | component | Canonical | — | Accessible toggle built from a visually-hidden checkbox and a track. |
| `.n-switch-track` | component-part | Canonical | — | Switch modifier/part (see .n-switch). |
| `.n-tab` | component-part | Canonical | — | Tabs modifier/part (see .n-tabs). |
| `.n-tab-panel` | component-part | Canonical | — | Tabs modifier/part (see .n-tabs). |
| `.n-table` | component | Canonical | — | Base table styling with striped/hover/bordered variants. |
| `.n-table-bordered` | variant | Canonical | — | Table modifier/part (see .n-table). |
| `.n-table-hover` | variant | Canonical | — | Table modifier/part (see .n-table). |
| `.n-table-stack` | component | Canonical | — | Table modifier that collapses each row into a card below 768px using data-label. |
| `.n-table-striped` | variant | Canonical | — | Table modifier/part (see .n-table). |
| `.n-tabs` | component | Canonical | — | Horizontal tablist. Toggle aria-selected in JavaScript. |
| `.n-textarea` | component | Canonical | — | Vertically resizable multi-line text field. |
| `.n-timeline` | component | Canonical | — | Vertical connector list with a numbered or icon marker per item. |
| `.n-timeline-content` | component-part | Canonical | — | Timeline modifier/part (see .n-timeline). |
| `.n-timeline-item` | component-part | Canonical | — | Timeline modifier/part (see .n-timeline). |
| `.n-timeline-marker` | component-part | Canonical | — | Timeline modifier/part (see .n-timeline). |
| `.n-timeline-marker-muted` | component-part | Canonical | — | Timeline modifier/part (see .n-timeline). |
| `.n-timeline-meta` | component-part | Canonical | — | Timeline modifier/part (see .n-timeline). |
| `.n-timeline-title` | component-part | Canonical | — | Timeline modifier/part (see .n-timeline). |
| `.n-toast` | component | Canonical | — | Transient notification; stack with n-toast-stack. |
| `.n-toast-stack` | component-part | Canonical | — | Toast modifier/part (see .n-toast). |
| `.n-tooltip` | component | Canonical | — | CSS-only tooltip driven by the data-tooltip attribute. |
| `.n-valid` | component-part | Canonical | — | Sets border-color: var(--n-success). |

## Utility

<a id="utility"></a>

| Class | Role | Status | Scale | Description / gotchas |
| --- | --- | --- | --- | --- |
| `.n-absolute` | utility | Canonical | — | Sets position: absolute. |
| `.n-bg-danger` | utility | Canonical | — | Applies background-color: var(--n-danger); color: var(--n-on-danger). |
| `.n-bg-dark` | utility | Canonical | — | Applies background-color: var(--n-dark); color: #fff. |
| `.n-bg-info` | utility | Canonical | — | Applies background-color: var(--n-info); color: var(--n-on-info). |
| `.n-bg-light` | utility | Canonical | — | Applies background-color: var(--n-light); color: var(--n-dark). |
| `.n-bg-muted` | utility | Canonical | — | Sets background-color: var(--n-bg-muted). |
| `.n-bg-primary` | utility | Canonical | — | Applies background-color: var(--n-primary); color: var(--n-on-primary). |
| `.n-bg-secondary` | utility | Canonical | — | Applies background-color: var(--n-secondary); color: var(--n-on-secondary). |
| `.n-bg-success` | utility | Canonical | — | Applies background-color: var(--n-success); color: var(--n-on-success). |
| `.n-bg-warning` | utility | Canonical | — | Applies background-color: var(--n-warning); color: var(--n-on-warning). |
| `.n-bg-white` | utility | Canonical | — | Applies background-color: #fff; color: var(--n-dark). |
| `.n-border` | utility | Canonical | — | Sets border: 1px solid var(--n-border-color). |
| `.n-border-0` | utility | Canonical | — | Sets border: none. |
| `.n-border-b` | utility | Canonical | — | Sets border-bottom: 1px solid var(--n-border-color). |
| `.n-border-danger` | utility | Canonical | — | Sets border-color: var(--n-danger). |
| `.n-border-dark` | utility | Canonical | — | Sets border-color: var(--n-dark). |
| `.n-border-info` | utility | Canonical | — | Sets border-color: var(--n-info). |
| `.n-border-l` | utility | Canonical | — | Sets border-left: 1px solid var(--n-border-color). |
| `.n-border-light` | utility | Canonical | — | Sets border-color: var(--n-light). |
| `.n-border-primary` | utility | Canonical | — | Sets border-color: var(--n-primary). |
| `.n-border-r` | utility | Canonical | — | Sets border-right: 1px solid var(--n-border-color). |
| `.n-border-secondary` | utility | Canonical | — | Sets border-color: var(--n-secondary). |
| `.n-border-success` | utility | Canonical | — | Sets border-color: var(--n-success). |
| `.n-border-t` | utility | Canonical | — | Sets border-top: 1px solid var(--n-border-color). |
| `.n-border-warning` | utility | Canonical | — | Sets border-color: var(--n-warning). |
| `.n-bottom-0` | utility | Canonical | — | Sets bottom: 0. |
| `.n-break-inside-avoid` | utility | Canonical | — | Sets break-inside: avoid. |
| `.n-capitalize` | utility | Canonical | — | Sets text-transform: capitalize. |
| `.n-columns-2` | utility | Canonical | — | Applies columns: 2; column-gap: var(--n-gutter). |
| `.n-columns-3` | utility | Canonical | — | Applies columns: 3; column-gap: var(--n-gutter). |
| `.n-d-block` | utility | Canonical | — | Sets display: block. |
| `.n-d-flex` | utility | Deprecated; use `.n-flex` | — | Sets display: flex. Backward-compatible display-family alias. Prefer n-flex in new markup. |
| `.n-d-grid` | utility | Canonical | — | Sets display: grid. |
| `.n-d-inline` | utility | Canonical | — | Sets display: inline. |
| `.n-d-inline-block` | utility | Canonical | — | Sets display: inline-block. |
| `.n-d-inline-flex` | utility | Canonical | — | Sets display: inline-flex. |
| `.n-d-lg-block` | utility | Canonical | — | Sets display: block. |
| `.n-d-lg-flex` | utility | Canonical | — | Sets display: flex. |
| `.n-d-lg-inline` | utility | Canonical | — | Sets display: inline. |
| `.n-d-lg-inline-block` | utility | Canonical | — | Sets display: inline-block. |
| `.n-d-lg-none` | utility | Canonical | — | Sets display: none. |
| `.n-d-md-block` | utility | Canonical | — | Sets display: block. |
| `.n-d-md-flex` | utility | Canonical | — | Sets display: flex. |
| `.n-d-md-inline` | utility | Canonical | — | Sets display: inline. |
| `.n-d-md-inline-block` | utility | Canonical | — | Sets display: inline-block. |
| `.n-d-md-none` | utility | Canonical | — | Sets display: none. |
| `.n-d-none` | utility | Canonical | — | Sets display: none. Uses normal cascade priority. It is intentionally not an alias of forceful n-hidden. |
| `.n-d-sm-block` | utility | Canonical | — | Sets display: block. |
| `.n-d-sm-flex` | utility | Canonical | — | Sets display: flex. |
| `.n-d-sm-inline` | utility | Canonical | — | Sets display: inline. |
| `.n-d-sm-inline-block` | utility | Canonical | — | Sets display: inline-block. |
| `.n-d-sm-none` | utility | Canonical | — | Sets display: none. |
| `.n-duration-150` | utility | Canonical | — | Sets transition-duration: 150ms. |
| `.n-duration-300` | utility | Canonical | — | Sets transition-duration: 300ms. |
| `.n-duration-500` | utility | Canonical | — | Sets transition-duration: 500ms. |
| `.n-duration-75` | utility | Canonical | — | Sets transition-duration: 75ms. |
| `.n-ease-in` | utility | Canonical | — | Sets transition-timing-function: cubic-bezier(.4,0,1,1). |
| `.n-ease-in-out` | utility | Canonical | — | Sets transition-timing-function: cubic-bezier(.4,0,.2,1). |
| `.n-ease-linear` | utility | Canonical | — | Sets transition-timing-function: linear. |
| `.n-ease-out` | utility | Canonical | — | Sets transition-timing-function: cubic-bezier(0,0,.2,1). |
| `.n-fixed` | utility | Canonical | — | Sets position: fixed. |
| `.n-flex` | utility | Canonical | — | Sets display: flex. |
| `.n-flex-1` | utility | Canonical | — | Sets flex: 1 1 0%. |
| `.n-flex-auto` | utility | Canonical | — | Sets flex: 1 1 auto. |
| `.n-flex-col` | utility | Canonical | — | Sets flex-direction: column. |
| `.n-flex-col-reverse` | utility | Canonical | — | Sets flex-direction: column-reverse. |
| `.n-flex-none` | utility | Canonical | — | Sets flex: none. |
| `.n-flex-nowrap` | utility | Canonical | — | Sets flex-wrap: nowrap. |
| `.n-flex-row` | utility | Canonical | — | Sets flex-direction: row. |
| `.n-flex-row-reverse` | utility | Canonical | — | Sets flex-direction: row-reverse. |
| `.n-flex-wrap` | utility | Canonical | — | Sets flex-wrap: wrap. |
| `.n-font-bold` | utility | Canonical | — | Sets font-weight: 700. |
| `.n-font-light` | utility | Canonical | — | Sets font-weight: 300. |
| `.n-font-medium` | utility | Canonical | — | Sets font-weight: 500. |
| `.n-font-mono` | utility | Canonical | — | Sets font-family: var(--n-font-mono). |
| `.n-font-normal` | utility | Canonical | — | Sets font-weight: 400. |
| `.n-font-semibold` | utility | Canonical | — | Sets font-weight: 600. |
| `.n-gap-0` | utility | Canonical | 0 | Sets gap: var(--n-space-0). |
| `.n-gap-1` | utility | Canonical | 0.25rem | Sets gap: var(--n-space-1). |
| `.n-gap-2` | utility | Canonical | 0.5rem | Sets gap: var(--n-space-2). |
| `.n-gap-3` | utility | Canonical | 1rem | Sets gap: var(--n-space-3). |
| `.n-gap-4` | utility | Canonical | 1.5rem | Sets gap: var(--n-space-4). |
| `.n-gap-5` | utility | Canonical | 3rem | Sets gap: var(--n-space-5). |
| `.n-grow` | utility | Canonical | — | Sets flex-grow: 1. |
| `.n-h-auto` | utility | Canonical | — | Sets height: auto. |
| `.n-h-full` | utility | Canonical | — | Sets height: 100%. |
| `.n-h-screen` | utility | Canonical | — | Sets height: 100vh. |
| `.n-inset-0` | utility | Canonical | — | Sets inset: 0. |
| `.n-isolate` | utility | Canonical | — | Sets isolation: isolate. |
| `.n-italic` | utility | Canonical | — | Sets font-style: italic. |
| `.n-items-baseline` | utility | Canonical | — | Sets align-items: baseline. |
| `.n-items-center` | utility | Canonical | — | Sets align-items: center. |
| `.n-items-end` | utility | Canonical | — | Sets align-items: flex-end. |
| `.n-items-start` | utility | Canonical | — | Sets align-items: flex-start. |
| `.n-items-stretch` | utility | Canonical | — | Sets align-items: stretch. |
| `.n-justify-around` | utility | Canonical | — | Sets justify-content: space-around. |
| `.n-justify-between` | utility | Canonical | — | Sets justify-content: space-between. |
| `.n-justify-center` | utility | Canonical | — | Sets justify-content: center. |
| `.n-justify-end` | utility | Canonical | — | Sets justify-content: flex-end. |
| `.n-justify-evenly` | utility | Canonical | — | Sets justify-content: space-evenly. |
| `.n-justify-start` | utility | Canonical | — | Sets justify-content: flex-start. |
| `.n-leading-none` | utility | Canonical | — | Sets line-height: 1. |
| `.n-leading-normal` | utility | Canonical | — | Sets line-height: 1.5. |
| `.n-leading-relaxed` | utility | Canonical | — | Sets line-height: 1.75. |
| `.n-leading-tight` | utility | Canonical | — | Sets line-height: 1.25. |
| `.n-left-0` | utility | Canonical | — | Sets left: 0. |
| `.n-line-through` | utility | Canonical | — | Sets text-decoration: line-through. |
| `.n-lowercase` | utility | Canonical | — | Sets text-transform: lowercase. |
| `.n-m-0` | utility | Canonical | 0 | Sets margin: var(--n-space-0). |
| `.n-m-1` | utility | Canonical | 0.25rem | Sets margin: var(--n-space-1). |
| `.n-m-2` | utility | Canonical | 0.5rem | Sets margin: var(--n-space-2). |
| `.n-m-3` | utility | Canonical | 1rem | Sets margin: var(--n-space-3). |
| `.n-m-4` | utility | Canonical | 1.5rem | Sets margin: var(--n-space-4). |
| `.n-m-5` | utility | Canonical | 3rem | Sets margin: var(--n-space-5). |
| `.n-m-auto` | utility | Canonical | — | Sets margin: auto. |
| `.n-max-w-2xl` | utility | Canonical | — | Sets max-width: 42rem. |
| `.n-max-w-full` | utility | Canonical | — | Sets max-width: 100%. |
| `.n-max-w-lg` | utility | Canonical | — | Sets max-width: 32rem. |
| `.n-max-w-md` | utility | Canonical | — | Sets max-width: 28rem. |
| `.n-max-w-sm` | utility | Canonical | — | Sets max-width: 24rem. |
| `.n-max-w-xl` | utility | Canonical | — | Sets max-width: 36rem. |
| `.n-mb-0` | utility | Canonical | 0 | Sets margin-bottom: var(--n-space-0). |
| `.n-mb-1` | utility | Canonical | 0.25rem | Sets margin-bottom: var(--n-space-1). |
| `.n-mb-2` | utility | Canonical | 0.5rem | Sets margin-bottom: var(--n-space-2). |
| `.n-mb-3` | utility | Canonical | 1rem | Sets margin-bottom: var(--n-space-3). |
| `.n-mb-4` | utility | Canonical | 1.5rem | Sets margin-bottom: var(--n-space-4). |
| `.n-mb-5` | utility | Canonical | 3rem | Sets margin-bottom: var(--n-space-5). |
| `.n-min-h-screen` | utility | Canonical | — | Sets min-height: 100vh. |
| `.n-min-w-0` | utility | Canonical | — | Sets min-width: 0. |
| `.n-mix-blend-multiply` | utility | Canonical | — | Sets mix-blend-mode: multiply. |
| `.n-ml-0` | utility | Canonical | 0 | Sets margin-left: var(--n-space-0). |
| `.n-ml-1` | utility | Canonical | 0.25rem | Sets margin-left: var(--n-space-1). |
| `.n-ml-2` | utility | Canonical | 0.5rem | Sets margin-left: var(--n-space-2). |
| `.n-ml-3` | utility | Canonical | 1rem | Sets margin-left: var(--n-space-3). |
| `.n-ml-4` | utility | Canonical | 1.5rem | Sets margin-left: var(--n-space-4). |
| `.n-ml-5` | utility | Canonical | 3rem | Sets margin-left: var(--n-space-5). |
| `.n-mr-0` | utility | Canonical | 0 | Sets margin-right: var(--n-space-0). |
| `.n-mr-1` | utility | Canonical | 0.25rem | Sets margin-right: var(--n-space-1). |
| `.n-mr-2` | utility | Canonical | 0.5rem | Sets margin-right: var(--n-space-2). |
| `.n-mr-3` | utility | Canonical | 1rem | Sets margin-right: var(--n-space-3). |
| `.n-mr-4` | utility | Canonical | 1.5rem | Sets margin-right: var(--n-space-4). |
| `.n-mr-5` | utility | Canonical | 3rem | Sets margin-right: var(--n-space-5). |
| `.n-mt-0` | utility | Canonical | 0 | Sets margin-top: var(--n-space-0). |
| `.n-mt-1` | utility | Canonical | 0.25rem | Sets margin-top: var(--n-space-1). |
| `.n-mt-2` | utility | Canonical | 0.5rem | Sets margin-top: var(--n-space-2). |
| `.n-mt-3` | utility | Canonical | 1rem | Sets margin-top: var(--n-space-3). |
| `.n-mt-4` | utility | Canonical | 1.5rem | Sets margin-top: var(--n-space-4). |
| `.n-mt-5` | utility | Canonical | 3rem | Sets margin-top: var(--n-space-5). |
| `.n-mx-0` | utility | Canonical | 0 | Sets margin-inline: var(--n-space-0). |
| `.n-mx-1` | utility | Canonical | 0.25rem | Sets margin-inline: var(--n-space-1). |
| `.n-mx-2` | utility | Canonical | 0.5rem | Sets margin-inline: var(--n-space-2). |
| `.n-mx-3` | utility | Canonical | 1rem | Sets margin-inline: var(--n-space-3). |
| `.n-mx-4` | utility | Canonical | 1.5rem | Sets margin-inline: var(--n-space-4). |
| `.n-mx-5` | utility | Canonical | 3rem | Sets margin-inline: var(--n-space-5). |
| `.n-mx-auto` | utility | Canonical | — | Sets margin-inline: auto. |
| `.n-my-0` | utility | Canonical | 0 | Sets margin-block: var(--n-space-0). |
| `.n-my-1` | utility | Canonical | 0.25rem | Sets margin-block: var(--n-space-1). |
| `.n-my-2` | utility | Canonical | 0.5rem | Sets margin-block: var(--n-space-2). |
| `.n-my-3` | utility | Canonical | 1rem | Sets margin-block: var(--n-space-3). |
| `.n-my-4` | utility | Canonical | 1.5rem | Sets margin-block: var(--n-space-4). |
| `.n-my-5` | utility | Canonical | 3rem | Sets margin-block: var(--n-space-5). |
| `.n-no-underline` | utility | Canonical | — | Sets text-decoration: none. |
| `.n-normal-case` | utility | Canonical | — | Sets text-transform: none. |
| `.n-not-italic` | utility | Canonical | — | Sets font-style: normal. |
| `.n-opacity-0` | utility | Canonical | — | Sets opacity: 0. |
| `.n-opacity-100` | utility | Canonical | — | Sets opacity: 1. |
| `.n-opacity-25` | utility | Canonical | — | Sets opacity: 0.25. |
| `.n-opacity-50` | utility | Canonical | — | Sets opacity: 0.5. |
| `.n-opacity-75` | utility | Canonical | — | Sets opacity: 0.75. |
| `.n-overflow-auto` | utility | Canonical | — | Sets overflow: auto. |
| `.n-overflow-hidden` | utility | Canonical | — | Sets overflow: hidden. |
| `.n-overflow-scroll` | utility | Canonical | — | Sets overflow: scroll. |
| `.n-overflow-visible` | utility | Canonical | — | Sets overflow: visible. |
| `.n-overflow-x-auto` | utility | Canonical | — | Sets overflow-x: auto. |
| `.n-overflow-y-auto` | utility | Canonical | — | Sets overflow-y: auto. |
| `.n-overscroll-contain` | utility | Canonical | — | Sets overscroll-behavior: contain. |
| `.n-p-0` | utility | Canonical | 0 | Sets padding: var(--n-space-0). |
| `.n-p-1` | utility | Canonical | 0.25rem | Sets padding: var(--n-space-1). |
| `.n-p-2` | utility | Canonical | 0.5rem | Sets padding: var(--n-space-2). |
| `.n-p-3` | utility | Canonical | 1rem | Sets padding: var(--n-space-3). |
| `.n-p-4` | utility | Canonical | 1.5rem | Sets padding: var(--n-space-4). |
| `.n-p-5` | utility | Canonical | 3rem | Sets padding: var(--n-space-5). |
| `.n-pb-0` | utility | Canonical | 0 | Sets padding-bottom: var(--n-space-0). |
| `.n-pb-1` | utility | Canonical | 0.25rem | Sets padding-bottom: var(--n-space-1). |
| `.n-pb-2` | utility | Canonical | 0.5rem | Sets padding-bottom: var(--n-space-2). |
| `.n-pb-3` | utility | Canonical | 1rem | Sets padding-bottom: var(--n-space-3). |
| `.n-pb-4` | utility | Canonical | 1.5rem | Sets padding-bottom: var(--n-space-4). |
| `.n-pb-5` | utility | Canonical | 3rem | Sets padding-bottom: var(--n-space-5). |
| `.n-pl-0` | utility | Canonical | 0 | Sets padding-left: var(--n-space-0). |
| `.n-pl-1` | utility | Canonical | 0.25rem | Sets padding-left: var(--n-space-1). |
| `.n-pl-2` | utility | Canonical | 0.5rem | Sets padding-left: var(--n-space-2). |
| `.n-pl-3` | utility | Canonical | 1rem | Sets padding-left: var(--n-space-3). |
| `.n-pl-4` | utility | Canonical | 1.5rem | Sets padding-left: var(--n-space-4). |
| `.n-pl-5` | utility | Canonical | 3rem | Sets padding-left: var(--n-space-5). |
| `.n-pr-0` | utility | Canonical | 0 | Sets padding-right: var(--n-space-0). |
| `.n-pr-1` | utility | Canonical | 0.25rem | Sets padding-right: var(--n-space-1). |
| `.n-pr-2` | utility | Canonical | 0.5rem | Sets padding-right: var(--n-space-2). |
| `.n-pr-3` | utility | Canonical | 1rem | Sets padding-right: var(--n-space-3). |
| `.n-pr-4` | utility | Canonical | 1.5rem | Sets padding-right: var(--n-space-4). |
| `.n-pr-5` | utility | Canonical | 3rem | Sets padding-right: var(--n-space-5). |
| `.n-pt-0` | utility | Canonical | 0 | Sets padding-top: var(--n-space-0). |
| `.n-pt-1` | utility | Canonical | 0.25rem | Sets padding-top: var(--n-space-1). |
| `.n-pt-2` | utility | Canonical | 0.5rem | Sets padding-top: var(--n-space-2). |
| `.n-pt-3` | utility | Canonical | 1rem | Sets padding-top: var(--n-space-3). |
| `.n-pt-4` | utility | Canonical | 1.5rem | Sets padding-top: var(--n-space-4). |
| `.n-pt-5` | utility | Canonical | 3rem | Sets padding-top: var(--n-space-5). |
| `.n-px-0` | utility | Canonical | 0 | Sets padding-inline: var(--n-space-0). |
| `.n-px-1` | utility | Canonical | 0.25rem | Sets padding-inline: var(--n-space-1). |
| `.n-px-2` | utility | Canonical | 0.5rem | Sets padding-inline: var(--n-space-2). |
| `.n-px-3` | utility | Canonical | 1rem | Sets padding-inline: var(--n-space-3). |
| `.n-px-4` | utility | Canonical | 1.5rem | Sets padding-inline: var(--n-space-4). |
| `.n-px-5` | utility | Canonical | 3rem | Sets padding-inline: var(--n-space-5). |
| `.n-py-0` | utility | Canonical | 0 | Sets padding-block: var(--n-space-0). |
| `.n-py-1` | utility | Canonical | 0.25rem | Sets padding-block: var(--n-space-1). |
| `.n-py-2` | utility | Canonical | 0.5rem | Sets padding-block: var(--n-space-2). |
| `.n-py-3` | utility | Canonical | 1rem | Sets padding-block: var(--n-space-3). |
| `.n-py-4` | utility | Canonical | 1.5rem | Sets padding-block: var(--n-space-4). |
| `.n-py-5` | utility | Canonical | 3rem | Sets padding-block: var(--n-space-5). |
| `.n-relative` | utility | Canonical | — | Sets position: relative. |
| `.n-resize` | utility | Canonical | — | Sets resize: both. |
| `.n-resize-none` | utility | Canonical | — | Sets resize: none. |
| `.n-right-0` | utility | Canonical | — | Sets right: 0. |
| `.n-rotate-180` | utility | Canonical | — | Sets transform: rotate(180deg). |
| `.n-rotate-90` | utility | Canonical | — | Sets transform: rotate(90deg). |
| `.n-rounded` | utility | Canonical | — | Sets border-radius: var(--n-radius). |
| `.n-rounded-full` | utility | Canonical | — | Sets border-radius: var(--n-radius-full). |
| `.n-rounded-lg` | utility | Canonical | — | Sets border-radius: var(--n-radius-lg). |
| `.n-rounded-none` | utility | Canonical | — | Sets border-radius: 0. |
| `.n-rounded-sm` | utility | Canonical | — | Sets border-radius: var(--n-radius-sm). |
| `.n-rounded-xl` | utility | Canonical | — | Sets border-radius: var(--n-radius-xl). |
| `.n-scale-100` | utility | Canonical | — | Sets transform: scale(1). |
| `.n-scale-105` | utility | Canonical | — | Sets transform: scale(1.05). |
| `.n-scale-95` | utility | Canonical | — | Sets transform: scale(0.95). |
| `.n-scroll-smooth` | utility | Canonical | — | Sets scroll-behavior: smooth. |
| `.n-self-center` | utility | Canonical | — | Sets align-self: center. |
| `.n-self-end` | utility | Canonical | — | Sets align-self: flex-end. |
| `.n-self-start` | utility | Canonical | — | Sets align-self: flex-start. |
| `.n-self-stretch` | utility | Canonical | — | Sets align-self: stretch. |
| `.n-shadow` | utility | Canonical | — | Sets box-shadow: var(--n-shadow). |
| `.n-shadow-lg` | utility | Canonical | — | Sets box-shadow: var(--n-shadow-lg). |
| `.n-shadow-md` | utility | Canonical | — | Sets box-shadow: var(--n-shadow-md). |
| `.n-shadow-none` | utility | Canonical | — | Sets box-shadow: none. |
| `.n-shadow-sm` | utility | Canonical | — | Sets box-shadow: var(--n-shadow-sm). |
| `.n-shadow-xl` | utility | Canonical | — | Sets box-shadow: var(--n-shadow-xl). |
| `.n-shrink-0` | utility | Canonical | — | Sets flex-shrink: 0. |
| `.n-snap-start` | utility | Canonical | — | Sets scroll-snap-align: start. |
| `.n-snap-x` | utility | Canonical | — | Sets scroll-snap-type: x mandatory. |
| `.n-static` | utility | Canonical | — | Sets position: static. |
| `.n-sticky` | utility | Canonical | — | Sets position: sticky. |
| `.n-text-2xl` | utility | Canonical | — | Sets font-size: var(--n-text-2xl). |
| `.n-text-3xl` | utility | Canonical | — | Sets font-size: var(--n-text-3xl). |
| `.n-text-4xl` | utility | Canonical | — | Sets font-size: var(--n-text-4xl). |
| `.n-text-base` | utility | Canonical | — | Sets font-size: var(--n-text-base). |
| `.n-text-center` | utility | Canonical | — | Sets text-align: center. |
| `.n-text-danger` | utility | Canonical | — | Sets color: var(--n-danger). |
| `.n-text-dark` | utility | Canonical | — | Sets color: var(--n-dark). |
| `.n-text-info` | utility | Canonical | — | Sets color: var(--n-info). |
| `.n-text-justify` | utility | Canonical | — | Sets text-align: justify. |
| `.n-text-left` | utility | Canonical | — | Sets text-align: left. |
| `.n-text-lg` | utility | Canonical | — | Sets font-size: var(--n-text-lg). |
| `.n-text-light` | utility | Canonical | — | Sets color: var(--n-light). |
| `.n-text-muted` | utility | Canonical | — | Sets color: var(--n-text-muted). |
| `.n-text-primary` | utility | Canonical | — | Sets color: var(--n-primary). |
| `.n-text-right` | utility | Canonical | — | Sets text-align: right. |
| `.n-text-secondary` | utility | Canonical | — | Sets color: var(--n-secondary). |
| `.n-text-sm` | utility | Canonical | — | Sets font-size: var(--n-text-sm). |
| `.n-text-success` | utility | Canonical | — | Sets color: var(--n-success). |
| `.n-text-warning` | utility | Canonical | — | Sets color: var(--n-warning). |
| `.n-text-white` | utility | Canonical | — | Sets color: #ffffff. |
| `.n-text-xl` | utility | Canonical | — | Sets font-size: var(--n-text-xl). |
| `.n-text-xs` | utility | Canonical | — | Sets font-size: var(--n-text-xs). |
| `.n-top-0` | utility | Canonical | — | Sets top: 0. |
| `.n-tracking-normal` | utility | Canonical | — | Sets letter-spacing: 0. |
| `.n-tracking-tight` | utility | Canonical | — | Sets letter-spacing: -0.025em. |
| `.n-tracking-wide` | utility | Canonical | — | Sets letter-spacing: 0.05em. |
| `.n-transition` | utility | Canonical | — | Sets transition: all var(--n-duration) var(--n-ease). |
| `.n-transition-colors` | utility | Canonical | — | Sets transition: color var(--n-duration) var(--n-ease), background-color var(--n-duration) var(--n-ease), border-color var(--n-duration) var(--n-ease). |
| `.n-transition-none` | utility | Canonical | — | Sets transition: none. |
| `.n-transition-shadow` | utility | Canonical | — | Sets transition: box-shadow var(--n-duration) var(--n-ease). |
| `.n-transition-transform` | utility | Canonical | — | Sets transition: transform var(--n-duration) var(--n-ease). |
| `.n-translate-y-1` | utility | Canonical | — | Sets transform: translateY(-0.25rem). |
| `.n-truncate` | utility | Canonical | — | Applies overflow: hidden; text-overflow: ellipsis; white-space: nowrap. |
| `.n-underline` | utility | Canonical | — | Sets text-decoration: underline. |
| `.n-uppercase` | utility | Canonical | — | Sets text-transform: uppercase. |
| `.n-w-auto` | utility | Canonical | — | Sets width: auto. |
| `.n-w-full` | utility | Canonical | — | Sets width: 100%. |
| `.n-w-half` | utility | Canonical | — | Sets width: 50%. |
| `.n-w-screen` | utility | Canonical | — | Sets width: 100vw. |
| `.n-will-change-transform` | utility | Canonical | — | Sets will-change: transform. |
| `.n-z-0` | utility | Canonical | — | Sets z-index: 0. |
| `.n-z-10` | utility | Canonical | — | Sets z-index: 10. |
| `.n-z-100` | utility | Canonical | — | Sets z-index: 100. |
| `.n-z-20` | utility | Canonical | — | Sets z-index: 20. |
| `.n-z-50` | utility | Canonical | — | Sets z-index: 50. |

## Content & typography

<a id="content"></a>

| Class | Role | Status | Scale | Description / gotchas |
| --- | --- | --- | --- | --- |
| `.n-blockquote` | component | Canonical | — | Applies padding-inline-start: 1.25rem; border-inline-start: 4px solid var(--n-primary); color: var(--n-text-muted); font-size: var(--n-text-lg); font-style: italic. |
| `.n-caption` | utility | Canonical | — | Applies font-size: var(--n-text-xs); line-height: 1.5; color: var(--n-text-muted). |
| `.n-clamp-1` | utility | Canonical | — | Applies display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden. |
| `.n-clamp-4` | utility | Canonical | — | Applies display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden. |
| `.n-clamp-5` | utility | Canonical | — | Applies display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden. |
| `.n-clamp-6` | utility | Canonical | — | Applies display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden. |
| `.n-code` | component-part | Canonical | — | Sets font-family: var(--n-font-mono). |
| `.n-code-block` | component | Canonical | — | Sets font-family: var(--n-font-mono). |
| `.n-kbd` | component-part | Canonical | — | Sets font-family: var(--n-font-mono). |
| `.n-lead` | utility | Canonical | — | Applies font-size: clamp(1.125rem, 1rem + 0.5vw, 1.375rem); line-height: 1.65; color: var(--n-text-muted). |
| `.n-mark` | utility | Canonical | — | Applies padding-inline: 0.15em; border-radius: 0.15em; background: #fef08a; color: #422006. |
| `.n-overline` | utility | Canonical | — | Applies font-size: var(--n-text-xs); font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--n-primary). |
| `.n-prose` | component | Canonical | — | Applies max-width: 70ch; color: var(--n-text); line-height: 1.75. |
| `.n-text-balance` | utility | Canonical | — | Sets text-wrap: balance. |
| `.n-text-fluid-xl` | utility | Canonical | — | Applies font-size: clamp(2rem, 5vw, 4.5rem); line-height: 1.05. |
| `.n-text-pretty` | utility | Canonical | — | Sets text-wrap: pretty. |

## State

<a id="state"></a>

| Class | Role | Status | Scale | Description / gotchas |
| --- | --- | --- | --- | --- |
| `.n-active` | state | Deprecated; use `.n-is-active` | — | Sets color: var(--n-primary). |
| `.n-disabled` | state | Deprecated; use `.n-is-disabled` | — | Applies opacity: 0.5; pointer-events: none; cursor: not-allowed. Prefer native disabled or aria-disabled=true when those semantics are accurate. |
| `.n-dragging` | state | Deprecated; use `.n-is-dragging` | — | Applies opacity: 0.72; box-shadow: var(--n-shadow-lg); transform: rotate(1deg); cursor: grabbing. |
| `.n-expandable` | state | Canonical | — | Nucleus utility class (`.n-expandable`). |
| `.n-expanded` | state | Deprecated; use `.n-is-expanded` | — | Sets background: var(--n-bg-muted). |
| `.n-focus-ring` | state | Canonical | — | Nucleus utility class (`.n-focus-ring`). |
| `.n-hidden` | state | Canonical | — | Sets display: none !important. Force-hides with !important. Use n-d-none when normal cascade behavior is preferable. |
| `.n-invisible` | state | Canonical | — | Sets visibility: hidden. |
| `.n-is-active` | state | Canonical | — | Sets color: var(--n-primary). |
| `.n-is-disabled` | state | Canonical | — | Applies opacity: 0.5; pointer-events: none; cursor: not-allowed. Prefer native disabled or aria-disabled=true when those semantics are accurate. |
| `.n-is-dragging` | state | Canonical | — | Applies opacity: 0.72; box-shadow: var(--n-shadow-lg); transform: rotate(1deg); cursor: grabbing. |
| `.n-is-expanded` | state | Canonical | — | Sets background: var(--n-bg-muted). |
| `.n-is-loading` | state | Canonical | — | Sets cursor: progress. |
| `.n-is-open` | state | Canonical | — | Sets --n-state-open: 1. A state hook only; it does not force a universal display value because open behavior is component-specific. |
| `.n-is-selected` | state | Canonical | — | Applies border-color: var(--n-primary); background: var(--n-primary-soft). |
| `.n-loading` | state | Deprecated; use `.n-is-loading` | — | Sets cursor: progress. |
| `.n-selected` | state | Deprecated; use `.n-is-selected` | — | Applies border-color: var(--n-primary); background: var(--n-primary-soft). |
| `.n-visible` | state | Canonical | — | Sets visibility: visible. |

## Helper

<a id="helper"></a>

| Class | Role | Status | Scale | Description / gotchas |
| --- | --- | --- | --- | --- |
| `.n-avatar` | component | Canonical | — | Applies display: inline-flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: var(--n-radius-full); background: var(--n-primary); color: #fff; font-weight: 600; font-size: var(--n-text-sm); overflow: hidden. |
| `.n-avatar-lg` | size | Canonical | — | Applies width: 3.5rem; height: 3.5rem; font-size: var(--n-text-lg). |
| `.n-avatar-sm` | size | Canonical | — | Applies width: 2rem; height: 2rem; font-size: var(--n-text-xs). |
| `.n-clearfix` | utility | Canonical | — | Nucleus utility class (`.n-clearfix`). |
| `.n-divider` | utility | Canonical | — | Applies border: none; border-top: 1px solid var(--n-border-color); margin: 1.5rem 0. |
| `.n-img-cover` | utility | Canonical | — | Applies object-fit: cover; width: 100%; height: 100%. |
| `.n-img-fluid` | utility | Canonical | — | Applies max-width: 100%; height: auto. |
| `.n-pointer` | utility | Canonical | — | Sets cursor: pointer. |
| `.n-select-all` | utility | Canonical | — | Sets user-select: all. |
| `.n-select-none` | utility | Canonical | — | Sets user-select: none. |
| `.n-sr-only` | utility | Canonical | — | Applies position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0. |

## Accessibility

<a id="accessibility"></a>

| Class | Role | Status | Scale | Description / gotchas |
| --- | --- | --- | --- | --- |
| `.n-no-print` | accessibility | Canonical | — | Sets display: none !important. |
| `.n-pointer-events-auto` | accessibility | Canonical | — | Sets pointer-events: auto. |
| `.n-pointer-events-none` | accessibility | Canonical | — | Sets pointer-events: none. |
| `.n-skip-link` | accessibility | Canonical | — | Applies position: fixed; z-index: 9999; inset-block-start: 0.75rem; inset-inline-start: 0.75rem; padding: 0.625rem 0.875rem; border-radius: var(--n-radius); background: var(--n-primary); color: var(--n-on-primary); box-shadow: var(--n-shadow-lg); transform: translateY(-200%). |
| `.n-sr-only-focusable` | accessibility | Canonical | — | Nucleus utility class (`.n-sr-only-focusable`). |
| `.n-touch-target` | accessibility | Canonical | — | Applies min-width: 2.75rem; min-height: 2.75rem. |

## Theme & dark mode

<a id="theme"></a>

| Class | Role | Status | Scale | Description / gotchas |
| --- | --- | --- | --- | --- |
| `.n-dark-mode` | theme | Canonical | — | Applies --n-text: #e2e8f0; --n-text-muted: #94a3b8; --n-bg: #0f172a; --n-bg-muted: #1e293b; --n-border-color: #334155; --n-surface: #0f172a; --n-surface-raised: #172033; --n-surface-sunken: #0b1220; --n-overlay: rgba(2, 6, 23, 0.76); --n-primary: #d5a44f; --n-primary-h: #e2bc75; --n-secondary: #c28b31; --n-secondary-h: #d5a44f; --n-focus: rgba(213, 164, 79, 0.42); --n-primary-soft: rgba(213, 164, 79, 0.13); --n-primary-border: rgba(213, 164, 79, 0.42); --n-primary-ink: #f0d395; --n-secondary-soft: rgba(194, 139, 49, 0.14); --n-visited: #d5a44f; --n-on-primary: #1a160f; --n-on-secondary: #1a160f; color-scheme: dark. |
