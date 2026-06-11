import type { AdminMenuItem } from "./types";

/**
 * Canonical model of the WordPress admin sidebar (`#adminmenu`).
 *
 * This is the single source of truth for the upcoming sidebar refactor: it
 * mirrors the markup currently hand-written in
 * `src/app/components/Admin/Common/sidebar.tsx` exactly (labels, hrefs,
 * dashicons, badges, separators, and the active-state match paths). When the
 * sidebar is converted to render from this array, the output DOM must stay
 * 1-for-1 with WordPress — see `AGENTS.md` and `docs/CONVERSION.md`.
 *
 * NOTE: Appearance currently has no real routes wired (Customize / Menus /
 * Theme File Editor are placeholder stubs in the live sidebar); those are
 * intentionally omitted here until their pages exist.
 */
export const ADMIN_MENU: AdminMenuItem[] = [
	{
		id: "menu-dashboard",
		label: "Dashboard",
		href: "/rp-admin",
		dashicon: "dashicons-dashboard",
		matchPaths: ["/rp-admin", "/rp-admin/updates"],
		submenu: [
			{ label: "Home", href: "/rp-admin" },
			{
				label: "Updates",
				href: "/rp-admin/updates",
				badge: { wrapperClassName: "update-plugins count-0", countClassName: "update-count", count: 0 },
			},
		],
	},
	{
		id: "menu-posts",
		label: "Posts",
		href: "/rp-admin/posts/edit",
		dashicon: "dashicons-admin-post",
		separatorBefore: true,
		matchPaths: ["/rp-admin/posts/edit", "/rp-admin/posts/post-new", "/rp-admin/posts/edit-categorys", "/rp-admin/posts/edit-tags"],
		submenu: [
			{ label: "All Posts", href: "/rp-admin/posts/edit" },
			{ label: "Add New", href: "/rp-admin/posts/post-new" },
			{ label: "Categories", href: "/rp-admin/posts/edit-categorys" },
			{ label: "Tags", href: "/rp-admin/posts/edit-tags" },
		],
	},
	{
		id: "menu-media",
		label: "Media",
		href: "/rp-admin/upload",
		dashicon: "dashicons-admin-media",
		matchPaths: ["/rp-admin/upload", "/rp-admin/media-new"],
		submenu: [
			{ label: "Library", href: "/rp-admin/upload" },
			{ label: "Add New", href: "/rp-admin/media-new" },
		],
	},
	{
		id: "menu-pages",
		label: "Pages",
		href: "/rp-admin/pages/edit",
		dashicon: "dashicons-admin-page",
		matchPaths: ["/rp-admin/pages/edit", "/rp-admin/pages/page-new", "/rp-admin/pages/edit-categorys", "/rp-admin/pages/edit-tags"],
		submenu: [
			{ label: "All Pages", href: "/rp-admin/pages/edit" },
			{ label: "Add New", href: "/rp-admin/pages/page-new" },
		],
	},
	{
		id: "menu-comments",
		label: "Comments",
		href: "/rp-admin/edit-comments",
		dashicon: "dashicons-admin-comments",
		matchPaths: ["/rp-admin/edit-comments"],
		badge: { wrapperClassName: "awaiting-mod count-0", countClassName: "pending-count", count: 0 },
	},
	{
		id: "menu-users",
		label: "Users",
		href: "/rp-admin/users",
		dashicon: "dashicons-admin-users",
		separatorBefore: true,
		matchPaths: ["/rp-admin/users", "/rp-admin/user-new", "/rp-admin/profile"],
		submenu: [
			{ label: "All Users", href: "/rp-admin/users" },
			{ label: "Add New", href: "/rp-admin/user-new" },
			{ label: "Profile", href: "/rp-admin/profile" },
		],
	},
	{
		id: "menu-tools",
		label: "Tools",
		href: "/rp-admin/tools",
		dashicon: "dashicons-admin-tools",
		matchPaths: ["/rp-admin/tools", "/rp-admin/import", "/rp-admin/export", "/rp-admin/site-health", "/rp-admin/export-personal-data", "/rp-admin/erase-personal-data"],
		submenu: [
			{ label: "Available Tools", href: "/rp-admin/tools" },
			{ label: "Import", href: "/rp-admin/import" },
			{ label: "Export", href: "/rp-admin/export" },
			{
				label: "Site Health",
				href: "/rp-admin/site-health",
				badge: { wrapperClassName: "menu-counter site-health-counter count-0", countClassName: "count", count: 0 },
			},
			{ label: "Export Personal Data", href: "/rp-admin/export-personal-data" },
			{ label: "Erase Personal Data", href: "/rp-admin/erase-personal-data" },
		],
	},
	{
		id: "menu-settings",
		label: "Settings",
		href: "/rp-admin/options-general",
		dashicon: "dashicons-admin-settings",
		matchPaths: ["/rp-admin/options-general", "/rp-admin/options-writing", "/rp-admin/options-reading", "/rp-admin/options-discussion", "/rp-admin/options-media", "/rp-admin/options-permalink", "/rp-admin/options-privacy"],
		submenu: [
			{ label: "General", href: "/rp-admin/options-general" },
			{ label: "Writing", href: "/rp-admin/options-writing" },
			{ label: "Reading", href: "/rp-admin/options-reading" },
			{ label: "Discussion", href: "/rp-admin/options-discussion" },
			{ label: "Media", href: "/rp-admin/options-media" },
			{ label: "Permalinks", href: "/rp-admin/options-permalink" },
			{ label: "Privacy", href: "/rp-admin/options-privacy" },
		],
	},
];
