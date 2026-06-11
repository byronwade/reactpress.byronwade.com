# Admin Panel Conversion Playbook

How we methodically clean up `rp-admin` and migrate the monolithic WordPress CSS
to React + Tailwind **without breaking the 1-for-1 WordPress layout**.

Read `AGENTS.md` first — it is the parity contract. This document is the
step-by-step process and the running queue of work.

## Golden rules (non-negotiable)

1. **Pixel parity is the gate.** A slice is "done" only when the rendered admin
   page is visually identical to before (and to real `wp-admin`).
2. **Keep the WordPress DOM hooks.** IDs/classes like `#adminmenu`, `.ab-item`,
   `.wp-core-ui`, `.dashicons-*` stay on elements even after a Tailwind pass —
   they are structural/parity hooks, not just styling.
3. **One small slice per PR.** Never a big-bang rewrite of `index.css`.
4. **Exact measurements.** Use Tailwind arbitrary values (`w-[160px]`,
   `bg-[#2271b1]`) — never round to the nearest token.
5. **No duplicate styling.** When a rule is reproduced in Tailwind, delete it
   from `index.css` so styles aren't defined twice.

## The two-track plan

### Track A — React structure cleanup (low risk, do first)

Tidy the component layer so the markup is clean and ready to be data-driven,
keeping rendered DOM identical:

- [x] Remove debug/dead code (`console.log` in `sidebar.tsx`).
- [x] Fix non-visual quirks (deduped duplicate classes; internal links use
      Next `<Link>` instead of raw `<a>` where siblings already do).
- [x] Convert loose `utils/helper.js` → TypeScript.
- [x] Add a typed admin-nav model (`src/lib/admin/navigation.ts` + `types.ts`)
      as the single source of truth for the sidebar.
- [ ] **Next:** render `sidebar.tsx` from `ADMIN_MENU` (collapses ~380 lines of
      repetition into one small renderer; output DOM must stay byte-identical).
- [ ] Do the same for the admin bar (`toolbar.tsx`).
- [ ] Extract repeated page chrome (`#wpbody-content` > `.wrap` > `<h1>`,
      contextual-help blocks) into shared components.

### Track B — CSS → Tailwind (per section, after structure is clean)

Section `src/app/rp-admin/index.css` (~18.6k lines) into the files below, then
convert each to Tailwind utilities on the components, deleting migrated rules.
Convert in this order (smallest/most-isolated first):

| Order | Section | WordPress selectors | Component(s) | Status |
|------:|---------|---------------------|--------------|--------|
| 1 | Admin bar | `#wpadminbar`, `.ab-top-menu`, `.ab-item`, `.ab-submenu` | `toolbar.tsx` | ☐ |
| 2 | Admin menu | `#adminmenumain`, `#adminmenu`, `.wp-menu-*`, `.wp-submenu` | `sidebar.tsx` | ☐ |
| 3 | Notices | `.notice`, `.updated`, `.error`, `.is-dismissible` | (various) | ☐ |
| 4 | Buttons/forms | `.wp-core-ui .button*`, `.form-table`, inputs, labels | settings pages | ☐ |
| 5 | List tables | `.wp-list-table`, `.row-actions`, bulk actions, pagination | `table.tsx` | ☐ |
| 6 | Postbox/metabox | `.postbox`, `.meta-box-sortables`, `#screen-meta` | dashboard, editors | ☐ |
| 7 | Layout shell | `#wpwrap`, `#wpcontent`, `#wpbody`, `.wrap`, `#wpfooter` | `layout.tsx` | ☐ |
| 8 | Dashicons | `@font-face`, `.dashicons-*` | (global, keep as-is) | ☐ |

Dashicons stay as the icon font for the replicated chrome — do **not** swap them
for Lucide/Heroicons here.

## Per-slice checklist

For each section above:

1. Capture a baseline of the affected page(s) (screenshot / DOM snapshot).
2. Move the relevant rules out of `index.css` into the section file (no edits
   yet) — confirm the page is still identical (pure move, import order kept).
3. Convert the component's elements to Tailwind utilities, matching every
   measurement exactly; keep the WordPress classes on the elements.
4. Delete the now-duplicated rules from the section file.
5. Diff against the baseline — must be visually identical. Run `bun run build`,
   `bun run lint`, `bun run type-check`.
6. Commit as one scoped PR (e.g. "Convert admin bar to Tailwind").

## Known cleanup backlog (not yet done)

- **Dead files**: `src/app/utils/provider.js` (imports `swr`/`recoil`, neither
  installed) and `src/app/utils/setup.js` (DB seed script) are imported nowhere
  and look abandoned. Recommend deleting — left in place pending owner sign-off.
- **Placeholder links**: several sidebar items (Appearance → Customize / Menus /
  Theme File Editor; Plugins → Add New / Plugin File Editor) point to `/rp-admin`
  stubs. Wire to real routes when those pages are built.
- **Redundant single-child `<>` fragments** remain in some components
  (`sidebar.tsx`, `toolbar.tsx`, `MenuOptions.tsx`); remove opportunistically
  when next editing those files (reindent-only, no DOM change).
- **Large page files** (`nav-menus` ~1.9k, `plugin-editor` ~1.85k lines) are
  prime candidates for componentization once the shared primitives exist.
