"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const location = usePathname();
	return (
		<>
			<div id="adminmenumain" role="navigation" aria-label="Main menu">
				<div id="adminmenuback" className="tw-fixed tw-top-0 tw-bottom-[-120px] tw-z-[1] tw-w-[160px] tw-bg-wp-chrome" />
				<div id="adminmenuwrap" className="tw-w-[160px] tw-bg-wp-chrome tw-relative tw-float-left tw-z-[9990]">
					<ul id="adminmenu" className="tw-clear-left tw-my-[12px] tw-mx-0 tw-p-0 tw-list-none">
						<li className={`wp-first-item wp-has-submenu ${location === "/rp-admin" || location === "/rp-admin/updates" ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-top-first menu-icon-dashboard menu-top-last`} id="menu-dashboard">
							<Link href="/rp-admin" className={location === "/rp-admin" || location === "/rp-admin/updates" ? "wp-has-current-submenu" : "wp-first-item wp-has-submenu wp-not-current-submenu menu-top menu-top-first menu-icon-dashboard menu-top-last"} aria-haspopup="true">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-dashboard" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Dashboard</div>
							</Link>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Dashboard
								</li>
								<li className={location === "/rp-admin" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin" className={location === "/rp-admin" ? "wp-first-item current active" : "wp-first-item"}>
										Home
									</Link>
								</li>
								<li className={location === "/rp-admin/updates" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/updates" className={location === "/rp-admin/updates" ? "wp-first-item current active" : "wp-first-item"}>
										Updates
										<span className="update-plugins count-0">
											<span className="update-count">0</span>
										</span>
									</Link>
								</li>
							</ul>
						</li>
						<li className="wp-not-current-submenu wp-menu-separator" aria-hidden="true">
							<div className="separator" />
						</li>
						<li className={`wp-has-submenu ${location.includes("/rp-admin/posts/edit") || location.includes("/rp-admin/posts/post-new/") || location.includes("/rp-admin/posts/edit-categorys") || location.includes("/rp-admin/posts/post-new") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} id="menu-posts">
							<Link href="/rp-admin/posts/edit" className={location.includes("/rp-admin/posts/edit") || location.includes("/rp-admin/posts/post-new/") || location.includes("/rp-admin/posts/edit-categorys") || location.includes("/rp-admin/posts/post-new") ? "wp-has-current-submenu wp-menu-open" : "wp-has-submenu wp-not-current-submenu menu-top menu-icon-post open-if-no-js menu-top-first"} aria-haspopup="true">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-post" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Posts</div>
							</Link>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Posts
								</li>
								<li className={location === "/rp-admin/posts/edit" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/posts/edit" className={location === "/rp-admin/posts/edit" ? "wp-first-item current active" : "wp-first-item"}>
										All Posts
									</Link>
								</li>
								<li className={location === "/rp-admin/posts/post-new" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/posts/post-new" className={location === "/rp-admin/posts/post-new" ? "wp-first-item current active" : "wp-first-item"}>
										Add New
									</Link>
								</li>
								<li className={location === "/rp-admin/posts/edit-categorys" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/posts/edit-categorys" className={location === "/rp-admin/posts/edit-categorys" ? "wp-first-item current active" : "wp-first-item"}>
										Categories
									</Link>
								</li>
								<li className={location === "/rp-admin/posts/edit-tags" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/posts/edit-tags" className={location === "/rp-admin/posts/edit-tags" ? "wp-first-item current active" : "wp-first-item"}>
										Tags
									</Link>
								</li>
							</ul>
						</li>
						<li className={`wp-has-submenu ${location.includes("/rp-admin/upload") || location.includes("/rp-admin/media-new") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} id="menu-media">
							<Link href="/rp-admin/upload" className={`wp-has-submenu ${location.includes("/rp-admin/upload") || location.includes("/rp-admin/media-new") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} aria-haspopup="true">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-media" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Media</div>
							</Link>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className={location === "/rp-admin/upload" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/upload" className={location === "/rp-admin/upload" ? "wp-first-item current active" : "wp-first-item"}>
										Library
									</Link>
								</li>
								<li className={location === "/rp-admin/media-new" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/media-new" className={location === "/rp-admin/media-new" ? "wp-first-item current active" : "wp-first-item"}>
										Add New
									</Link>
								</li>
							</ul>
						</li>
						<li className={`wp-has-submenu ${location.includes("/rp-admin/pages/edit") || location.includes("/rp-admin/pages/page-new") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} id="menu-pages">
							<Link href="/rp-admin/pages/edit" className={`wp-has-submenu ${location.includes("/rp-admin/pages/edit") || location.includes("/rp-admin/pages/page-new") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} aria-haspopup="false">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-page" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Pages</div>
							</Link>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Pages
								</li>
								<li className={location === "/rp-admin/pages/edit" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/pages/edit" className={location === "/rp-admin/pages/edit" ? "wp-first-item current active" : "wp-first-item"}>
										All Pages
									</Link>
								</li>
								<li className={location === "/rp-admin/pages/page-new" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/pages/page-new" className={location === "/rp-admin/pages/page-new" ? "wp-first-item current active" : "wp-first-item"}>
										Add New
									</Link>
								</li>
							</ul>
						</li>
						<li className={`wp-has-submenu ${location.includes("/rp-admin/edit-comments") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} id="menu-comments">
							<Link href="/rp-admin/edit-comments" className={`wp-has-submenu ${location.includes("/rp-admin/edit-comments") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`}>
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-comments" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">
									Comments
									<span className="awaiting-mod count-0">
										<span className="pending-count" aria-hidden="true">
											0
										</span>
										<span className="comments-in-moderation-text screen-reader-text">0 Comments in moderation</span>
									</span>
								</div>
							</Link>
						</li>
						<li className="wp-not-current-submenu wp-menu-separator" aria-hidden="true">
							<div className="separator" />
						</li>
						<li className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-appearance menu-top-first" id="menu-appearance">
							<Link href="/rp-admin" className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-appearance menu-top-first" aria-haspopup="true">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-appearance" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Appearance</div>
							</Link>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Appearance
								</li>
								<li className="wp-first-item">
									<Link href="/rp-admin/themes" className="wp-first-item">
										Themes
										<span className="update-plugins count-0">
											<span className="theme-count">0</span>
										</span>
									</Link>
								</li>
								<li className="hide-if-no-customize">
									<a href="/rp-admin" className="hide-if-no-customize">
										Customize
									</a>
								</li>
								<li>
									<a href="/rp-admin">Menus</a>
								</li>
								<li>
									<a href="/rp-admin">Theme File Editor</a>
								</li>
							</ul>
						</li>
						<li className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-plugins" id="menu-plugins">
							<Link href="/rp-admin/plugins" className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-plugins" aria-haspopup="true">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-plugins" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">
									Plugins
									<span className="update-plugins count-0">
										<span className="plugin-count">0</span>
									</span>
								</div>
							</Link>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Plugins
									<span className="update-plugins count-0">
										<span className="plugin-count">0</span>
									</span>
								</li>
								<li className="wp-first-item">
									<Link href="/rp-admin/plugins" className="wp-first-item">
										Installed Plugins
									</Link>
								</li>
								<li>
									<a href="/rp-admin">Add New</a>
								</li>
								<li>
									<a href="/rp-admin">Plugin File Editor</a>
								</li>
							</ul>
						</li>
						<li className={`wp-has-submenu ${location.includes("/rp-admin/users") || location.includes("/rp-admin/user-new") || location.includes("/rp-admin/profile") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} id="menu-users">
							<Link href="/rp-admin/users" className={`wp-has-submenu ${location.includes("/rp-admin/users") || location.includes("/rp-admin/user-new") || location.includes("/rp-admin/profile") ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} aria-haspopup="true">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-users" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Users</div>
							</Link>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Users
								</li>
								<li className={location === "/rp-admin/users" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/users" className={location === "/rp-admin/users" ? "wp-first-item current active" : "wp-first-item"}>
										All Users
									</Link>
								</li>
								<li className={location === "/rp-admin/user-new" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/user-new" className={location === "/rp-admin/user-new" ? "wp-first-item current active" : "wp-first-item"}>
										Add New
									</Link>
								</li>
								<li className={location === "/rp-admin/profile" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/profile" className={location === "/rp-admin/profile" ? "wp-first-item current active" : "wp-first-item"}>
										Profile
									</Link>
								</li>
							</ul>
						</li>
						<li className={`wp-has-submenu ${location === "/rp-admin/site-health" || location === "/rp-admin/tools" || location === "/rp-admin/import" || location === "/rp-admin/export" || location === "/rp-admin/export-personal-data" || location === "/rp-admin/erase-personal-data" ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} id="menu-tools">
							<Link href="/rp-admin/tools" className={`wp-has-submenu ${location === "/rp-admin/site-health" || location === "/rp-admin/tools" || location === "/rp-admin/import" || location === "/rp-admin/export" || location === "/rp-admin/export-personal-data" || location === "/rp-admin/erase-personal-data" ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"} menu-top menu-icon-post open-if-no-js menu-top-first`} aria-haspopup="true">
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-tools" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Tools</div>
							</Link>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Tools
								</li>
								<li className={location === "/rp-admin/tools" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/tools" className={location === "/rp-admin/tools" ? "wp-first-item current active" : "wp-first-item"}>
										Available Tools
									</Link>
								</li>
								<li className={location === "/rp-admin/import" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/import" className={location === "/rp-admin/import" ? "wp-first-item current active" : "wp-first-item"}>
										Import
									</Link>
								</li>
								<li className={location === "/rp-admin/export" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/export" className={location === "/rp-admin/export" ? "wp-first-item current active" : "wp-first-item"}>
										Export
									</Link>
								</li>
								<li className={location === "/rp-admin/site-health" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/site-health" className={location === "/rp-admin/site-health" ? "wp-first-item current active" : "wp-first-item"}>
										Site Health
										<span className="menu-counter site-health-counter count-0">
											<span className="count">0</span>
										</span>
									</Link>
								</li>
								<li className={location === "/rp-admin/export-personal-data" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/export-personal-data" className={location === "/rp-admin/export-personal-data" ? "wp-first-item current active" : "wp-first-item"}>
										Export Personal Data
									</Link>
								</li>
								<li className={location === "/rp-admin/erase-personal-data" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/erase-personal-data" className={location === "/rp-admin/erase-personal-data" ? "wp-first-item current active" : "wp-first-item"}>
										Erase Personal Data
									</Link>
								</li>
							</ul>
						</li>
						<li
							className={`wp-has-submenu ${
								location === "/rp-admin/options-privacy" || location === "/rp-admin/options-permalink" || location === "/rp-admin/options-media" || location === "/rp-admin/options-discussion" || location === "/rp-admin/options-general" || location === "/rp-admin/options-reading" || location === "/rp-admin/options-reading" || location === "/rp-admin/options-writing" ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"
							} menu-top menu-icon-post open-if-no-js menu-top-first`}
							id="menu-settings"
						>
							<Link
								href="/rp-admin/options-general"
								className={`wp-has-submenu ${
									location === "/rp-admin/options-privacy" || location === "/rp-admin/options-permalink" || location === "/rp-admin/options-media" || location === "/rp-admin/options-discussion" || location === "/rp-admin/options-general" || location === "/rp-admin/options-reading" || location === "/rp-admin/options-reading" || location === "/rp-admin/options-writing" ? "wp-has-current-submenu wp-menu-open" : "wp-not-current-submenu"
								} menu-top menu-icon-post open-if-no-js menu-top-first`}
								aria-haspopup="true"
							>
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div className="wp-menu-image dashicons-before dashicons-admin-settings" aria-hidden="true">
									<br />
								</div>
								<div className="wp-menu-name">Settings</div>
							</Link>
							<ul className="wp-submenu wp-submenu-wrap">
								<li className="wp-submenu-head" aria-hidden="true">
									Settings
								</li>
								<li className={location === "/rp-admin/options-general" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/options-general" className={location === "/rp-admin/options-general" ? "wp-first-item current active" : "wp-first-item"}>
										General
									</Link>
								</li>
								<li className={location === "/rp-admin/options-writing" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/options-writing" className={location === "/rp-admin/options-writing" ? "wp-first-item current active" : "wp-first-item"}>
										Writing
									</Link>
								</li>
								<li className={location === "/rp-admin/options-reading" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/options-reading" className={location === "/rp-admin/options-reading" ? "wp-first-item current active" : "wp-first-item"}>
										Reading
									</Link>
								</li>
								<li className={location === "/rp-admin/options-discussion" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/options-discussion" className={location === "/rp-admin/options-discussion" ? "wp-first-item current active" : "wp-first-item"}>
										Discussion
									</Link>
								</li>
								<li className={location === "/rp-admin/options-media" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/options-media" className={location === "/rp-admin/options-media" ? "wp-first-item current active" : "wp-first-item"}>
										Media
									</Link>
								</li>
								<li className={location === "/rp-admin/options-permalink" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/options-permalink" className={location === "/rp-admin/options-permalink" ? "wp-first-item current active" : "wp-first-item"}>
										Permalinks
									</Link>
								</li>
								<li className={location === "/rp-admin/options-privacy" ? "wp-first-item current" : "wp-first-item"}>
									<Link href="/rp-admin/options-privacy" className={location === "/rp-admin/options-privacy" ? "wp-first-item current active" : "wp-first-item"}>
										Privacy
									</Link>
								</li>
							</ul>
						</li>
						<li className="wp-not-current-submenu wp-menu-separator" aria-hidden="true">
							<div className="separator" />
						</li>
						<li id="collapse-menu" className="hide-if-no-js">
							<button type="button" id="collapse-button" className="tw-relative tw-block tw-w-full tw-h-[34px] tw-m-0 tw-p-0 tw-border-none tw-overflow-visible tw-bg-transparent tw-text-wp-icon tw-cursor-pointer" aria-label="Collapse Main menu" aria-expanded="true">
								<span className="collapse-button-icon" aria-hidden="true" />
								<span className="collapse-button-label">Collapse menu</span>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
