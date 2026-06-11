/**
 * Shared types for the ReactPress admin (`rp-admin`) chrome.
 *
 * These describe the WordPress admin navigation in a typed, data-driven shape
 * so the sidebar/admin-bar can be rendered from a single source of truth during
 * the incremental React/Tailwind conversion (see `docs/CONVERSION.md`).
 *
 * IMPORTANT: this model must reproduce the exact WordPress DOM (classes, IDs,
 * dashicons, badges) when consumed — it is a faithful description of the current
 * markup, not a redesign. See `AGENTS.md` for the 1-for-1 parity rule.
 */

/** A small count badge rendered inside a menu label (updates, site health, etc.). */
export interface AdminMenuBadge {
	/** Wrapper span class, e.g. `"update-plugins count-0"`. */
	wrapperClassName: string;
	/** Inner count span class, e.g. `"update-count"` or `"plugin-count"`. */
	countClassName: string;
	/** Current count value. */
	count: number;
}

/** A second-level item inside a top-level menu's fly-out submenu. */
export interface AdminSubMenuItem {
	label: string;
	href: string;
	/** Optional badge shown after the label. */
	badge?: AdminMenuBadge;
}

/** A top-level item in the admin sidebar (`#adminmenu`). */
export interface AdminMenuItem {
	/** WordPress `<li>` id, e.g. `"menu-dashboard"`. */
	id: string;
	label: string;
	/** Top-level link target. */
	href: string;
	/** Dashicons glyph class, e.g. `"dashicons-admin-post"`. */
	dashicon: string;
	/**
	 * Pathnames (exact or prefix) that mark this top-level item — and its
	 * fly-out — as the current/open menu.
	 */
	matchPaths: string[];
	/** Optional badge shown on the top-level label. */
	badge?: AdminMenuBadge;
	/** Fly-out submenu items (omitted for single-link items like Comments). */
	submenu?: AdminSubMenuItem[];
	/** Render a `.wp-menu-separator` immediately before this item. */
	separatorBefore?: boolean;
}
