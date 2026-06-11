# AGENTS.md

Operating guide for AI agents and contributors working on **ReactPress** — a
Next.js reconstruction of the WordPress admin panel (`wp-admin`).

Read this file in full before making changes. The rules here are not
suggestions; they are the contract for this codebase.

---

## 1. Prime Directive — Pixel-Perfect WordPress Parity

> **The admin panel is an EXACT 1-for-1 copy of the WordPress admin panel. No
> exceptions.**

This is the single most important rule in the project. Everything else is
subordinate to it.

What this means in practice:

- **Visual output must be indistinguishable from real `wp-admin`.** Same
  layout, spacing, colors, typography, borders, shadows, hover/focus states,
  active states, transitions, z-index stacking, and responsive breakpoints.
- **Preserve WordPress DOM structure and class names / IDs.** Keep
  `#wpadminbar`, `#adminmenu`, `#adminmenumain`, `#wpbody`, `.wp-admin`,
  `.wp-core-ui`, `.wrap`, `.wp-menu-*`, `.ab-item`, `.dashicons*`, etc. These
  are part of the contract — they are how WordPress structures the page and how
  its CSS targets elements. Do not rename, simplify, or "modernize" them away.
- **Do not redesign, "improve", or add features to the UI.** If real WordPress
  does it a certain way — even a way that seems dated or odd — we replicate it
  faithfully. A change is only correct if WordPress itself would render it the
  same way.
- **When in doubt, compare against a real WordPress install.** The reference is
  the actual rendered `wp-admin`, not memory or assumption. Match measurements
  exactly (e.g. the admin menu is `160px` wide, the admin bar is `32px` tall on
  desktop / `46px` on mobile, WordPress blue is `#2271b1`, etc.).

If a requested change would break parity with WordPress, stop and flag it
rather than silently diverging.

---

## 2. The Secondary Goal — Section & Migrate CSS to Tailwind

The project ships a single enormous stylesheet,
`src/app/rp-admin/index.css` (**~18,600 lines / ~430 KB** of original WordPress
admin CSS). The long-term goal is to:

1. **Section** that monolith into smaller, logically-grouped stylesheets.
2. **Convert** the CSS to Tailwind utility classes **bit by bit** — slowly,
   professionally, accurately, and cleanly.

### Rules for the migration

- **Parity is non-negotiable during conversion.** A migration is only "done"
  when the rendered output is byte-for-byte visually identical to before. If
  you cannot guarantee that, do not merge it.
- **Migrate in small, reviewable slices.** One coherent area at a time (e.g.
  the admin bar, then the admin menu, then form controls, then list tables).
  Never attempt a big-bang rewrite of `index.css`.
- **Preserve exact measurements.** Use Tailwind arbitrary values when no token
  matches — `w-[160px]`, `h-[32px]`, `text-[13px]`, `bg-[#2271b1]`,
  `leading-[1.4em]`, `px-[10px]`. Do **not** round to the nearest Tailwind
  spacing step "because it's close." Close is wrong.
- **Keep the WordPress class hooks even after converting.** Tailwind utilities
  describe the styling; the WordPress IDs/classes (`#adminmenu`, `.ab-item`,
  etc.) stay on the element so structure, JS hooks, and parity are preserved.
  Tailwind and the semantic WordPress classes coexist.
- **Delete migrated rules from the monolith.** When a block of CSS is fully
  represented by Tailwind utilities (or a sectioned file), remove the now-dead
  rules from `index.css` so the source of truth stays singular. Never leave the
  same styling defined in two places — that causes drift.
- **Document non-obvious conversions.** If a WordPress rule relies on
  specificity, cascade order, pseudo-elements (e.g. dashicons via `::before`),
  or magic numbers, add a brief comment explaining the original intent.
- **Dashicons stay.** The icon font (`@font-face` + `.dashicons-*`) is part of
  WordPress fidelity. Do not replace dashicons with Lucide/Heroicons in the
  replicated admin UI; those modern icon libs are only for net-new,
  non-replicated components.

### Suggested sectioning target

When breaking up `index.css`, group by WordPress concern, e.g.:

```
src/app/rp-admin/styles/
  dashicons.css        # @font-face + icon glyph classes
  admin-bar.css        # #wpadminbar, .ab-top-menu, .ab-item
  admin-menu.css       # #adminmenumain, #adminmenu, .wp-menu-*
  forms.css            # .wp-core-ui buttons, inputs, labels, .form-table
  list-tables.css      # .wp-list-table, bulk actions, pagination
  notices.css          # .notice, .updated, .error
  layout.css           # #wpbody, #wpcontent, .wrap
  ...
```

Convert each section to Tailwind incrementally; the `.css` file shrinks as
utilities take over, until the section file can be deleted entirely.

---

## 3. Code Quality Bar

- **HTML/JSX structure must be clean and advanced.** Semantic, correctly
  nested, accessible where WordPress is, no redundant wrapper soup beyond what
  WordPress itself emits. Mirror WordPress's structure, but write the JSX
  cleanly and idiomatically.
- **Everything organized and structured extremely well.** Components small and
  single-purpose; files named clearly; routes grouped logically (the existing
  `(Group)` route convention). No dumping ground files.
- **TypeScript, strictly.** This is a TS project (`tsc --noEmit` must pass).
  Type props and data; avoid `any`.
- **Match surrounding code.** Follow existing formatting (tabs in config files,
  the existing import style, the existing component patterns in
  `src/components/ui/`).
- **Reuse the design-system primitives** in `src/components/ui/` (CVA + Tailwind
  `button.tsx`, `input.tsx`, etc.) for net-new, non-replicated UI — but the
  replicated `wp-admin` chrome must still match WordPress exactly.

---

## 4. Tech Stack

| Area | Choice |
|------|--------|
| Framework | **Next.js 14** (App Router) |
| UI | **React 18**, **TypeScript** (strict) |
| Styling | **Tailwind CSS 3.4** + PostCSS/autoprefixer; legacy WordPress CSS in `index.css` |
| Variants | `class-variance-authority`, `tailwind-merge`, `clsx` |
| Icons | **Dashicons** (replicated admin UI) · Lucide / Heroicons (new components only) |
| Editor | `@wordpress/*` packages (Gutenberg block editor) |
| Package manager | **Bun** (`bun.lockb`) — npm lockfile also present |
| Tests | Cypress (E2E) |
| Deploy | Vercel |

---

## 5. Project Structure

```
src/
├── app/
│   ├── globals.css              # Tailwind directives + CSS-variable theme (HSL tokens, dark mode)
│   ├── layout.tsx               # Root layout
│   ├── rp-admin/                # ★ The WordPress admin replica
│   │   ├── index.css            # ★ The monolith being sectioned & migrated (~18.6k lines)
│   │   ├── layout.tsx           # Admin shell (sidebar + toolbar + #wpbody)
│   │   ├── page.tsx             # Dashboard
│   │   ├── MenuOptions.tsx
│   │   ├── (Dashboard)/  (Content)/  (Media)/  (Comments)/
│   │   ├── (Plugins)/    (Themes)/   (Users)/  (Tools)/
│   │   ├── (Settings)/   (Login)/    (Install)/
│   │   └── ...                   # Grouped routes mirror wp-admin sections
│   ├── components/Admin/Common/  # sidebar.tsx, toolbar.tsx, Footer/
│   └── assets/                   # fonts (dashicons), images
├── components/ui/                # shadcn-style CVA + Tailwind primitives (new UI)
├── lib/utils.ts                  # cn() etc.
└── types/
```

Reference docs: `README.md` (project overview + CSS architecture + roadmap),
`CHANGELOG.md`.

---

## 6. Commands

```bash
bun install            # install deps (Bun is the primary package manager)

bun run dev            # next dev --turbo   (local dev server)
bun run build          # next build         (production build — must pass)
bun run start          # next start
bun run lint           # next lint
bun run type-check     # tsc --noEmit       (must pass)
bun run test:e2e       # cypress open
bun run analyze        # bundle analysis
```

Before committing, ensure **`bun run lint`**, **`bun run type-check`**, and
**`bun run build`** all pass.

---

## 7. Definition of Done (checklist)

For any change touching the admin UI or CSS:

- [ ] Rendered output is **visually identical to real WordPress** (parity held).
- [ ] WordPress DOM structure, IDs, and class hooks preserved.
- [ ] Exact measurements preserved (arbitrary Tailwind values where needed).
- [ ] If migrating CSS: the equivalent rules were **removed** from `index.css`
      (no duplicate/competing definitions).
- [ ] JSX/HTML is clean, semantic, and well-organized; files in their right place.
- [ ] `lint`, `type-check`, and `build` pass.
- [ ] Non-obvious conversions are commented.

---

## 8. Git / Workflow

- Develop on the assigned feature branch; commit with clear, descriptive
  messages; push with `git push -u origin <branch>`.
- Keep migration commits small and scoped to one WordPress area so they are
  easy to review and easy to revert if parity regresses.
- Open a PR (draft) once a coherent slice is complete.

---

## 9. Quick "do / don't"

**Do**
- Replicate WordPress exactly, down to the pixel.
- Convert CSS → Tailwind in small, accurate, clean slices.
- Use arbitrary values to hit exact WordPress measurements.
- Keep WordPress classes/IDs alongside Tailwind utilities.

**Don't**
- Redesign, "improve", or add features to the replicated admin UI.
- Round measurements to the nearest Tailwind token.
- Leave the same styling defined in both `index.css` and Tailwind.
- Swap dashicons for another icon set in the replicated chrome.
- Do a big-bang rewrite of `index.css`.
