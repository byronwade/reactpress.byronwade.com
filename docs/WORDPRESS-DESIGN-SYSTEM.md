# WordPress Admin Design System — Reference & Preservation Spec

The authoritative description of the `wp-admin` design system this project
replicates **1-for-1**, and the rules for converting its CSS to Tailwind
**without breaking parity**.

Every value below is cross-checked against two sources: WordPress core
(`wordpress-develop` SCSS + developer.wordpress.org) and the actual tokens
already present in this repo's `src/app/rp-admin/index.css`. This project ships
the default **"Fresh"** admin color scheme (`admin-color-fresh`), WordPress 6.1.x.

> Read with `AGENTS.md` (the parity contract) and `docs/CONVERSION.md` (the
> step-by-step process). This file is the *what must be preserved* spec.

---

## 1. The DOM skeleton (structural invariant)

WordPress's admin layout is a fixed skeleton. Its CSS targets these IDs/classes
by **exact position in this tree** — the structure itself is load-bearing.

Canonical `wp-admin` structure:

```
html.wp-toolbar
└─ body.wp-admin.wp-core-ui.admin-bar.admin-color-fresh.auto-fold.sticky-menu… (state classes)
   └─ #wpwrap
      ├─ #adminmenumain[role="navigation"]
      │  ├─ #adminmenuback
      │  └─ #adminmenuwrap
      │     └─ #adminmenu              (the sidebar <ul>, 160px)
      └─ #wpcontent                    (margin-left:160px to clear the menu)
         ├─ #wpadminbar                (the top bar, position:fixed, 32px)
         ├─ #wpbody[role="main"]
         │  └─ #wpbody-content
         │     └─ .wrap                (page content; .wrap > h1.wp-heading-inline)
         └─ #wpfooter
```

**Why this matters for parity:** layout rules are written as
`#wpcontent { margin-left:160px }`, `.folded #wpcontent { margin-left:36px }`,
`html.wp-toolbar { padding-top:32px }`, `.wp-responsive-open #wpadminbar …`.
These only work when the classes sit on the **real `<html>`/`<body>`** and the
nesting matches.

### Current structure in this repo (and what is / isn't a problem)

`src/app/layout.tsx` renders a **bare** `<html lang="en">` and `<body>`, and
`src/app/rp-admin/layout.tsx` puts the WordPress classes on **wrapper `<div>`s**
instead:

```html
<div class="wp-toolbar">
  <div class="wp-admin wp-core-ui … admin-bar … admin-color-fresh sticky-menu svg">
    …#wpcontent … #wpadminbar … #wpbody …
```

**`index.css` has already been adapted to this div structure**, so most of it
works as-is. Verified:
- The admin-bar offset was rewritten from WordPress's `html.wp-toolbar { padding-top:32px }`
  to **`.wp-toolbar { padding-top:32px }`** (a class selector, ~line 3583) — it
  matches the wrapper div, so the 32px offset works.
- There are **zero `html.<class>` selectors** left in `index.css`. The state
  classes (`auto-fold`, `sticky-menu`, `admin-bar`, `folded`, …) sit on the
  wrapper div, which is an ancestor of `#adminmenu`/`#wpcontent`/`#wpbody`, so
  descendant rules like `.folded #adminmenuwrap` still match.

> ⚠️ **Do NOT naively move the WordPress classes onto the real `<html>`/`<body>`.**
> Because the offset is a *class* rule (`.wp-toolbar`), adding `wp-toolbar` to
> `<html>` as well would apply `padding-top:32px` **twice** (html + div = 64px) —
> a regression. The structure is intentionally div-based.

**The genuine remaining gap:** ~45 `body.<class>` rules that need the class on
the real `<body>` element (it's bare), e.g. `body.columns-2 #postbox-container-1`
(dashboard/edit 2-column layout), `body.post-new-php`, `body.user-new-php`, and
the media modal's `body.modal-open` / `body.iframe`. `#wpwrap` is also absent
(10 `#wpwrap` rules, mostly modal/responsive). **Fix direction (narrow, per
screen):** add only the specific `body.<class>` hooks the screen needs to the
real `<body>` (via a small client effect), and add `#wpwrap` where modal/
responsive rules require it — *without* duplicating the `.wp-toolbar` offset.

---

## 2. Layout metrics (exact, verified in `index.css`)

| Element | Property | Value |
|---|---|---|
| Admin bar `#wpadminbar` | height (desktop) | **32px** |
| Admin bar | height (≤782px) | **46px** |
| Admin bar | position / z-index | `fixed; top:0; left:0` / **99999** |
| Admin bar | min-width / bg | 600px / `#1d2327` |
| Admin menu `#adminmenu` | width (expanded) | **160px** |
| Admin menu | width (folded) | **36px** |
| `#wpcontent`, `#wpfooter` | margin-left (expanded / folded) | **160px / 36px** |
| `#wpcontent` | padding-left | **20px** |
| `#wpbody-content` | padding-bottom | **65px** (float:left; width:100%) |
| `html.wp-toolbar` | padding-top | **32px** (clears fixed bar) |
| `.wrap` | margin | `10px 20px 0 2px` |

CSS variable: `--wp-admin--admin-bar--height: 32px` (set on `html`).

---

## 3. Responsive breakpoints (WordPress's, NOT Tailwind's)

WordPress uses its own breakpoints. **Tailwind's defaults (640/768/1024/1280)
are different and will shift the layout** — converted responsive styles MUST use
these exact values (via arbitrary variants `max-[782px]:` / `min-[783px]:` or a
`tailwind.config` `screens` override):

| Breakpoint | Meaning |
|---|---|
| **782px** | Primary "responsive admin" cutoff: touch-sized controls, admin bar → 46px. `≤782` = mobile, `≥783` = desktop. |
| **960px** | `auto-fold`: admin menu collapses to the 36px icon strip below this width. |
| **600px** | Admin bar `min-width`; small-screen admin-bar behavior. |
| 480px / 320px | Further small-phone adjustments. |

---

## 4. Color tokens — "Fresh" scheme (all verified present in `index.css`)

WordPress derives scheme colors from semantic SCSS variables. Mapping for the
Fresh scheme in use:

| Semantic role | Hex | Notes |
|---|---|---|
| Primary / link / `.button-primary` | `#2271b1` | WordPress blue (`$highlight`) |
| Primary hover / link focus | `#135e96` | darker blue |
| Primary active / current accent | `#0a4b78` / `#2271b1` | |
| Admin chrome bg (menu + bar) | `#1d2327` | `$base` / `$menu-background` |
| Submenu / hover chrome bg | `#2c3338` | `$base` −7% |
| Notification / update bubble / **destructive** | `#d63638` | `$notification` |
| Success | `#00a32a` | |
| Warning | `#dba617` | |
| Info | `#72aee6` | also icon focus |
| App background | `#f0f0f1` | `body` background |
| Surface / card / input bg | `#fff` | |
| Body text | `#3c434a` | |
| Secondary text | `#646970`, `#50575e` | |
| Menu text | `#c3c4c7` → `#f0f0f1` (hover) | |
| Border — strong / default | `#c3c4c7` | tables, boxes |
| Border — light | `#dcdcde` | dividers |
| Border — form input | `#8c8f94` | inputs/selects |
| Border / icon — medium | `#a7aaad` | dashicon base |
| Focus ring | `box-shadow: 0 0 0 1px #2271b1` | + `outline: 2px solid transparent` |

> If/when these are tokenized, extend `tailwind.config.js` with these as named
> colors so converted utilities use real WP values, never Tailwind defaults.

---

## 5. Typography

- **Font stack (system):**
  `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`
- **Base:** body/admin text `13px`, line-height ~`1.4em`; forms commonly `14px`.
- **Admin bar:** `13px`, line-height `2.46153846` ( = 32 / 13 — a magic number;
  do not round).
- **Headings:** `h1.wp-heading-inline` ≈ `23px`, weight `400`, line-height `1.3`.
- **Code/editors:** `Consolas, Monaco, monospace`.

---

## 6. Component specs (parity requirements)

### Buttons — `.wp-core-ui .button`, `.button-primary`, `.button-secondary`, `.button-link`
- height ~`30px` (line-height `2.15384615`), padding `0 10px`, `font-size:13px`,
  **`border-radius:3px`**, border `1px solid`.
- Primary: bg/border `#2271b1`, text `#fff`, hover `#135e96`.
- Secondary: bg `#f6f7f7`, border `#2271b1`, text `#2271b1`.
- Focus: `box-shadow: 0 0 0 1px #2271b1`.

### Forms — `.form-table`, `input`, `select`, `textarea`
- input border `1px solid #8c8f94`, **`border-radius:4px`**, bg `#fff`.
- focus: border-color `#2271b1` + `box-shadow:0 0 0 1px #2271b1`.
- `.form-table th` (label col) width ~`200px`, padding `20px 10px 20px 0`.
- checkbox/radio are custom-drawn (`appearance:none` + dashicon check).

### List tables — `.wp-list-table.widefat.fixed.striped`
- bg `#fff`, border `1px solid #c3c4c7`; striped rows `#f6f7f7`.
- sortable `th` with `.sorting-indicator`; `.check-column` ~`2.2em`.
- `.row-actions` revealed on row hover; `.tablenav` pagination; bulk actions.

### Notices — `.notice`, `.notice-{success|error|warning|info}`, `.updated`, `.error`
- bg `#fff`, `border-left: 4px solid` (success `#00a32a`, error `#d63638`,
  warning `#dba617`, info `#72aee6`), margin `5px 0 15px`, padding `1px 12px`.
- `.is-dismissible` adds the `.notice-dismiss` button.

### Postboxes — `.postbox`
- bg `#fff`, border `1px solid #c3c4c7`; `.postbox-header > .hndle` title;
  drag-sortable via `.meta-box-sortables`.

### Screen meta — `#screen-meta`, `#screen-meta-links`, contextual help/options
- the slide-down panels toggled by the Screen Options / Help buttons.

### Dashicons — `@font-face "dashicons"`, `.dashicons` / `.dashicons-before::before`
- `font: normal 20px/1 dashicons`, rendered via `::before { content:"\f###" }`,
  `vertical-align:middle`. ~1500 glyphs. **Keep as a font — Tailwind cannot set
  arbitrary glyph `content` cleanly.**

---

## 7. State classes (toggled by JS — keep every hook)

These drive descendant rules; removing or renaming them breaks behavior:

- **`<body>`:** `auto-fold`, `folded`, `wp-responsive-open`, `admin-bar`,
  `sticky-menu`, `admin-color-{scheme}`, `post-type-{x}`, `branch-X`,
  `version-X-Y-Z`, `locale-en-us`, `js`/`no-js`, `customize-support`, `svg`.
- **menu `<li>`:** `wp-has-submenu`, `wp-has-current-submenu`, `wp-menu-open`,
  `wp-not-current-submenu`, `current`, `menu-top`, `menu-top-first/last`,
  `wp-first-item`, `wp-menu-separator`.
- **admin bar:** `menupop`, `.hover` (added on `mouseenter`, see
  `utils/helper.ts`), `ab-item`, `ab-submenu`.

---

## 8. WordPress core CSS architecture → our sectioning map

How `index.css` (a concatenation of WP's admin CSS) maps to WP's source files
and to our planned section files (see `docs/CONVERSION.md`):

| WordPress core file | Concern | Our section |
|---|---|---|
| `wp-includes/css/dashicons.css` | icon font + glyphs | `dashicons.css` |
| `wp-includes/css/admin-bar.css` | `#wpadminbar`, `.ab-*` | `admin-bar.css` |
| `wp-admin/css/colors/fresh/colors.css` | **color-scheme token layer** | keep as theme layer |
| `wp-admin/css/admin-menu.css` | `#adminmenu`, `.wp-menu-*` | `admin-menu.css` |
| `wp-admin/css/common.css` | layout shell, buttons, misc (largest) | `layout.css` + `buttons.css` |
| `wp-admin/css/forms.css` | `.form-table`, inputs | `forms.css` |
| `wp-admin/css/list-tables.css` | `.wp-list-table` | `list-tables.css` |
| `wp-admin/css/dashboard.css` | dashboard widgets/postboxes | `dashboard.css` |
| `wp-admin/css/edit.css` | post/page edit screens | `edit.css` |
| `wp-admin/css/nav-menus.css`, `themes.css`, `widgets.css`, `site-health.css`, `install.css`, `login.css` | per-screen | per-screen files |

---

## 9. ⚠️ Why CSS breaks during Tailwind conversion (read before converting)

The conversion is the hardest and riskiest part. Five failure modes, each with a
rule:

1. **ID-selector specificity.** WP uses ID selectors (`#adminmenu`,
   `#wpadminbar`, `#wpcontent` = specificity `1,0,0`). Tailwind utilities are
   classes (`0,1,0`) and **lose** to any leftover ID rule in `index.css` → your
   utility silently does nothing. **Rule:** convert a selector and *delete its
   `index.css` rule in the same change.* Never leave both.

2. **Global element + cascade rules.** `html{}`, `body{}`, `#wpcontent{}` set
   layout/offsets globally and depend on the class-hooks being on the real
   `html`/`body`. A Tailwind class on a `<div>` cannot reproduce
   `html.wp-toolbar{padding-top:32px}`. **Rule:** the structural shell stays as
   authored CSS (see §1 fix) — do not Tailwind-ize it.

3. **Stateful descendant rules.** `.folded #wpcontent{margin-left:36px}`,
   `.wp-menu-open .wp-submenu{…}`, `.hover .ab-sub-wrapper{…}` are parent-state
   → child rules. Per-element utilities can't express them. **Rule:** model with
   deliberate `group`/`group-[.state]:`/`data-[state]:` variants, not by hanging
   utilities on the child.

4. **Pseudo-element icons (dashicons).** Driven by `::before{content:"\f###"}`.
   **Rule:** keep dashicons as CSS/font.

5. **Magic numbers & WP breakpoints.** `2.46153846`, `2.15384615`, `160px`,
   `min-width:600px`, breakpoints `782/960/600`. **Rule:** use exact arbitrary
   values and WP breakpoints — never Tailwind's rounded tokens/screens.

6. **⚠️ Tailwind utility / WordPress class-name collisions (this bit hard).**
   WordPress reuses words that are *also* Tailwind utilities, as plain class
   names with different meanings: `fixed` (table-layout, NOT `position:fixed`),
   `sticky` (sticky posts, NOT `position:sticky`), `inline` (a notice/quick-edit
   hook, NOT `display:inline`), `columns-2/3/4` (dashboard grid, NOT CSS
   columns), `block`, `table`, `static`, `visible`, `container`. Tailwind's JIT
   scanner sees these words in the admin JSX and **emits the utility, which then
   lands on the WordPress element** — e.g. `.fixed{position:fixed}` turned the
   list table into an out-of-flow, 100vw element that ran off-screen.
   **Mitigation in place:** a `blocklist` in `tailwind.config.js` stops Tailwind
   emitting the harmful colliding utilities the app doesn't otherwise use
   (`fixed`, `sticky`, `inline`, `visible`, `static`, `table`, `columns-1..4`).
   **The complete fix** (required before converting admin chrome to Tailwind
   utilities) is to give Tailwind a `prefix` (e.g. `tw-`) so no Tailwind utility
   can ever share a name with a WordPress class — then update the app's own
   Tailwind usage to the prefix. Until then, do not add Tailwind utilities to
   elements that also carry WordPress class names matching a utility.

### Layering rule — what to keep vs. convert

| Layer | Examples | Action |
|---|---|---|
| **Structural shell** | html/body class system, `#wpwrap`/`#wpcontent`/`#wpbody`/`#adminmenu` layout + offsets, fixed admin-bar positioning, color-scheme token layer, dashicons | **Keep as authored CSS** (section it, don't Tailwind-ize) |
| **Stateful chrome** | menu open/fold, admin-bar hover dropdowns, responsive-open | Convert only with `group`/`data-` variants, carefully |
| **Leaf visuals** | a single button, badge/counter, notice variant, table-cell padding, form-field look, `.wrap` typography/spacing | **Safe to convert** — keep the WP class hook, delete the matching `index.css` rule, use exact values + WP breakpoints |

### Foundational prep (do first, before converting any leaf)

1. Fix the html/body class placement + restore `#wpwrap` (§1).
2. Extend `tailwind.config.js` with WP **design tokens**: the colors above
   (named semantically), `screens` = `{ 'wp-sm':'600px','wp-md':'782px','wp-fold':'960px' }`,
   the system font stack, and `borderRadius` `wp:3px` / `wp-input:4px`. Then
   converted utilities use real WP values automatically.
3. Only then convert leaf components, smallest-first (see `docs/CONVERSION.md`).
