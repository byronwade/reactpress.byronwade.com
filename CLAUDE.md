# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Mission

ReactPress is a Next.js reconstruction of the WordPress admin panel (`wp-admin`).
The non-negotiable rule: **the admin panel is an exact 1-for-1 visual copy of
`wp-admin`** — same DOM structure, IDs, class names, measurements, colors, and
behavior. Do not redesign, "improve", or add features to the replicated UI; a
change is only correct if real WordPress renders it the same way.

The secondary, ongoing effort is to section the monolithic admin stylesheet and
migrate it to Tailwind incrementally while holding pixel parity. **`AGENTS.md`
at the repo root is the authoritative contract for both goals — read it before
making UI/CSS changes.** This file covers commands and architecture.

## Commands

Bun is the primary package manager (`bun.lockb`); an npm lockfile also exists.

```bash
bun install            # install dependencies
bun run dev            # dev server with Turbopack (next dev --turbo)
bun run build          # production build — must pass before committing
bun run start          # serve production build
bun run lint           # next lint (ESLint)
bun run type-check     # tsc --noEmit — must pass before committing
bun run analyze        # production build with webpack-bundle-analyzer
bun run test:e2e       # open Cypress (E2E)
```

- Homepage runs at `http://localhost:3000`; the admin replica lives at
  `http://localhost:3000/rp-admin`.
- Cypress is the only test runner; there is no unit-test setup. `test:e2e`
  opens the interactive Cypress runner.

## Architecture

**Stack:** Next.js 14 App Router · React 18 (Server Components) · TypeScript
(strict) · Tailwind 3.4. Import alias `@/*` → `src/*`.

### Two distinct styling worlds

This is the most important thing to understand before touching styles:

1. **The replicated admin chrome** (`src/app/rp-admin/`) is styled by
   `src/app/rp-admin/index.css` — ~18.6k lines of original WordPress admin CSS
   (dashicons `@font-face` + glyphs, `#wpadminbar`, `#adminmenu`, `.wp-core-ui`
   forms, list tables, etc.). Components here render bare WordPress class
   names/IDs rather than Tailwind utilities. This monolith is the file being
   sectioned and migrated to Tailwind, area by area, per `AGENTS.md`.

2. **Net-new, non-replicated UI** uses Tailwind + the shadcn/ui-style
   primitives in `src/components/ui/` (CVA variants, `cn()` from
   `@/lib/utils`). `src/app/globals.css` defines the Tailwind layer and an
   HSL-CSS-variable theme (`--background`, `--primary`, …) with class-based dark
   mode. `components.json` configures shadcn (new-york style, RSC, base color
   slate).

When migrating CSS, keep the WordPress IDs/classes on the element (they are
structural/parity hooks) and express the styling with Tailwind utilities
alongside them — use arbitrary values (`w-[160px]`, `bg-[#2271b1]`) to hit exact
WordPress measurements, and delete the migrated rules from `index.css` so styles
aren't defined twice.

**Before converting any CSS, read `docs/WORDPRESS-DESIGN-SYSTEM.md`** — the
source-verified spec of the design system (DOM skeleton, metrics, Fresh-scheme
tokens, component specs, breakpoints) and the conversion-risk analysis. Two
gotchas that bite immediately:

- **ID-selector specificity.** WordPress styles `#adminmenu`/`#wpadminbar`/
  `#wpcontent` with ID selectors (`1,0,0`) that *beat* Tailwind utility classes
  (`0,1,0`). A converted utility silently does nothing until you delete the
  competing `index.css` rule — so convert + delete in the same change. Only
  **leaf** visuals are safe to Tailwind-ize; the structural shell, dashicons,
  and color-scheme layer stay as authored CSS.
- **html/body class placement.** The WordPress classes sit on **wrapper `<div>`s**,
  not the real `<html>`/`<body>`, and `index.css` has been adapted to suit —
  e.g. the admin-bar offset is `.wp-toolbar{padding-top:32px}` (a class), and
  state classes (`auto-fold`/`folded`/`sticky-menu`) ride the ancestor div so
  descendant rules match. **Do not move these onto the real `<html>`/`<body>`** —
  that doubles the `.wp-toolbar` offset (→64px) and regresses the layout. The
  real gap is ~45 `body.<class>` rules (`body.columns-2` 2-col dashboard,
  `body.post-new-php`, modal `body.modal-open`) that need the class on the bare
  real `<body>`; add those per-screen via a client effect, plus `#wpwrap` where
  modal/responsive rules need it.
- **Breakpoints are WordPress's, not Tailwind's:** `782/960/600px`. Don't use
  `sm/md/lg` for admin responsive behavior.

### Admin shell

`src/app/rp-admin/layout.tsx` is the admin shell. It pins WordPress's body
classes verbatim (`wp-admin wp-core-ui ... branch-6-1 version-6-1-1
admin-color-fresh sticky-menu svg`) — these class strings are pinned to
**WordPress 6.1.1** and are load-bearing for `index.css` selectors; treat them
as parity-critical, not decorative. The shell composes:
`Sidebar` (`#adminmenu`) + `#wpcontent` → `Toolbar` (`#wpadminbar`) + `#wpbody`
(page content). Common chrome lives in
`src/app/components/Admin/Common/` (`sidebar.tsx`, `toolbar.tsx`, `Footer/`).

### Routing

Admin pages live under `src/app/rp-admin/` and use Next.js **route groups**
(`(Dashboard)`, `(Content)`, `(Media)`, `(Comments)`, `(Plugins)`, `(Themes)`,
`(Users)`, `(Tools)`, `(Settings)`, `(Login)`, `(Install)`) that mirror the
`wp-admin` section structure without adding URL segments. The post/page editors
(`(Content)/posts/post-new`, `(Content)/pages/page-new`) embed the Gutenberg
block editor via `@wordpress/*` packages and ship their own large `styles.css`.

### Icons

Dashicons (WordPress icon font) are part of the replicated chrome and must stay.
Lucide / Heroicons are for new, non-replicated components only.

## Conventions

- TypeScript strict mode; `tsc --noEmit` must pass. Type props and data.
- Match existing formatting (tabs in source/config files) and the existing
  component patterns in `src/components/ui/`.
- Keep migration changes small and scoped to one WordPress area per PR so parity
  regressions are easy to spot and revert.
- README "CSS Conversion Guidelines" apply: preserve exact measurements
  (arbitrary values), maintain hover/focus states identically, verify responsive
  behavior, and comment tricky selector conversions.
