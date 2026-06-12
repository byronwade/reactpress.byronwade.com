import React from "react";
import { getDb } from "@/lib/fakebase/client";
import type { UserRow } from "@/lib/fakebase/schema";

const ROLE_LABELS: Record<string, string> = {
	administrator: "Administrator",
	editor: "Editor",
	author: "Author",
	contributor: "Contributor",
	subscriber: "Subscriber",
};

function roleLabel(role: string): string {
	return ROLE_LABELS[role] ?? role.charAt(0).toUpperCase() + role.slice(1);
}

function items(n: number): string {
	return `${n} item${n === 1 ? "" : "s"}`;
}

export default async function Users() {
	const db = await getDb();
	const { data } = await db.from("users").select("*").order("id", { ascending: true });
	const users: UserRow[] = data ?? [];

	const total = users.length;
	const roleCounts = users.reduce<Record<string, number>>((acc, u) => {
		acc[u.role] = (acc[u.role] ?? 0) + 1;
		return acc;
	}, {});

	return (
		<>
			<div id="wpbody-content">
				<div id="screen-meta" className="metabox-prefs">
					<div id="contextual-help-wrap" className="hidden" tabIndex={-1} aria-label="Contextual Help Tab">
						<div id="contextual-help-back" />
						<div id="contextual-help-columns">
							<div className="contextual-help-tabs">
								<ul>
									<li id="tab-link-overview" className="active">
										<a href="/" aria-controls="tab-panel-overview">
											Overview
										</a>
									</li>
									<li id="tab-link-screen-content">
										<a href="/" aria-controls="tab-panel-screen-content">
											Screen Content
										</a>
									</li>
									<li id="tab-link-action-links">
										<a href="/" aria-controls="tab-panel-action-links">
											Available Actions
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="/">Documentation on Managing Users</a>
								</p>
								<p>
									<a href="/">Descriptions of Roles and Capabilities</a>
								</p>
								<p>
									<a href="/">Support</a>
								</p>
							</div>
							<div className="contextual-help-tabs-wrap">
								<div id="tab-panel-overview" className="help-tab-content active">
									<p>This screen lists all the existing users for your site. Each user has one of five defined roles as set by the site admin: Site Administrator, Editor, Author, Contributor, or Subscriber. Users with roles other than Administrator will see fewer options in the dashboard navigation when they are logged in, based on their role.</p>
									<p>To add a new user for your site, click the Add New button at the top of the screen or Add New in the Users menu section.</p>
								</div>
								<div id="tab-panel-screen-content" className="help-tab-content">
									<p>You can customize the display of this screen in a number of ways:</p>
									<ul>
										<li>You can hide/display columns based on your needs and decide how many users to list per screen using the Screen Options tab.</li>
										<li>You can filter the list of users by User Role using the text links above the users list to show All, Administrator, Editor, Author, Contributor, or Subscriber. The default view is to show all users. Unused User Roles are not listed.</li>
										<li>You can view all posts made by a user by clicking on the number under the Posts column.</li>
									</ul>
								</div>
								<div id="tab-panel-action-links" className="help-tab-content">
									<p>Hovering over a row in the users list will display action links that allow you to manage users. You can perform the following actions:</p>
									<ul>
										<li>
											<strong>Edit</strong> takes you to the editable profile screen for that user. You can also reach that screen by clicking on the username.
										</li>
										<li>
											<strong>Delete</strong> brings you to the Delete Users screen for confirmation, where you can permanently remove a user from your site and delete their content. You can also delete multiple users at once by using bulk actions.
										</li>
										<li>
											<strong>Send password reset</strong> sends the user an email with a link to set a new password.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div id="screen-options-wrap" className="hidden" tabIndex={-1} aria-label="Screen Options Tab">
						<form id="adv-settings" method="post">
							<fieldset className="metabox-prefs">
								<legend>Columns</legend>
								<label>
									<input className="hide-column-tog" name="email-hide" type="checkbox" id="email-hide" defaultValue="email" defaultChecked={true} />
									Email
								</label>
								<label>
									<input className="hide-column-tog" name="role-hide" type="checkbox" id="role-hide" defaultValue="role" defaultChecked={true} />
									Role
								</label>
								<label>
									<input className="hide-column-tog" name="posts-hide" type="checkbox" id="posts-hide" defaultValue="posts" defaultChecked={true} />
									Posts
								</label>
							</fieldset>
							<fieldset className="screen-options">
								<legend>Pagination</legend>
								<label htmlFor="users_per_page">Number of items per page:</label>
								<input type="number" step={1} min={1} max={999} className="screen-per-page" name="wp_screen_options[value]" id="users_per_page" maxLength={3} defaultValue={20} />
								<input type="hidden" name="wp_screen_options[option]" defaultValue="users_per_page" />
							</fieldset>
							<p className="submit">
								<input type="submit" name="screen-options-apply" id="screen-options-apply" className="button button-primary" defaultValue="Apply" />
							</p>
							<input type="hidden" id="screenoptionnonce" name="screenoptionnonce" defaultValue="566934ee14" />
						</form>
					</div>
				</div>
				<div id="screen-meta-links">
					<div id="screen-options-link-wrap" className="hide-if-no-js screen-meta-toggle">
						<button type="button" id="show-settings-link" className="button show-settings" aria-controls="screen-options-wrap" aria-expanded="false">
							Screen Options
						</button>
					</div>
					<div id="contextual-help-link-wrap" className="hide-if-no-js screen-meta-toggle">
						<button type="button" id="contextual-help-link" className="button show-settings" aria-controls="contextual-help-wrap" aria-expanded="false">
							Help
						</button>
					</div>
				</div>
				<div className="wrap">
					<h1 className="wp-heading-inline">Users</h1>
					<a href="/rp-admin/user-new" className="page-title-action">
						Add New
					</a>
					<hr className="wp-header-end" />
					<h2 className="screen-reader-text">Filter users list</h2>
					<ul className="subsubsub">
						<li className="all">
							<a href="/" className="current" aria-current="page">
								All <span className="count">({total})</span>
							</a>
							{Object.keys(roleCounts).length > 0 ? " |" : ""}
						</li>
						{Object.keys(roleCounts).map((role, i, arr) => (
							<li key={role} className={role}>
								<a href="/">
									{roleLabel(role)} <span className="count">({roleCounts[role]})</span>
								</a>
								{i < arr.length - 1 ? " |" : ""}
							</li>
						))}
					</ul>
					<form method="get">
						<p className="search-box">
							<label className="screen-reader-text" htmlFor="user-search-input">
								Search Users:
							</label>
							<input type="search" id="user-search-input" name="s" defaultValue="" />
							<input type="submit" id="search-submit" className="button" defaultValue="Search Users" />
						</p>
						<input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="e8850c2680" />
						<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/users.php" />
						<div className="tablenav top">
							<div className="alignleft actions bulkactions">
								<label htmlFor="bulk-action-selector-top" className="screen-reader-text">
									Select bulk action
								</label>
								<select name="action" id="bulk-action-selector-top">
									<option value={-1}>Bulk actions</option>
									<option value="delete">Delete</option>
									<option value="resetpassword">Send password reset</option>
								</select>
								<input type="submit" id="doaction" className="button action" defaultValue="Apply" />
							</div>
							<div className="alignleft actions">
								<label className="screen-reader-text" htmlFor="new_role">
									Change role to…
								</label>
								<select name="new_role" id="new_role">
									<option value="">Change role to…</option>
									<option value="subscriber">Subscriber</option>
									<option value="contributor">Contributor</option>
									<option value="author">Author</option>
									<option value="editor">Editor</option>
									<option value="administrator">Administrator</option> <option value="none">— No role for this site —</option>
								</select>
								<input type="submit" name="changeit" id="changeit" className="button" defaultValue="Change" />
							</div>
							<div className="tablenav-pages one-page">
								<span className="displaying-num">{items(total)}</span>
								<span className="pagination-links">
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										«
									</span>
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										‹
									</span>
									<span className="paging-input">
										<label htmlFor="current-page-selector" className="screen-reader-text">
											Current Page
										</label>
										<input className="current-page" id="current-page-selector" type="text" name="paged" defaultValue={1} size={1} aria-describedby="table-paging" />
										<span className="tablenav-paging-text">
											of <span className="total-pages">1</span>
										</span>
									</span>
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										›
									</span>
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										»
									</span>
								</span>
							</div>
							<br className="clear" />
						</div>
						<h2 className="screen-reader-text">Users list</h2>
						<table className="wp-list-table widefat fixed striped table-view-list users">
							<thead>
								<tr>
									<td id="cb" className="manage-column column-cb check-column">
										<label className="screen-reader-text" htmlFor="cb-select-all-1">
											Select All
										</label>
										<input id="cb-select-all-1" type="checkbox" />
									</td>
									<th scope="col" id="username" className="manage-column column-username column-primary sortable desc">
										<a href="/">
											<span>Username</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th scope="col" id="name" className="manage-column column-name">
										Name
									</th>
									<th scope="col" id="email" className="manage-column column-email sortable desc">
										<a href="/">
											<span>Email</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th scope="col" id="role" className="manage-column column-role">
										Role
									</th>
									<th scope="col" id="posts" className="manage-column column-posts num">
										Posts
									</th>
								</tr>
							</thead>
							<tbody id="the-list" data-wp-lists="list:user">
								{users.map((u) => (
									<tr key={u.id} id={`user-${u.id}`}>
										<th scope="row" className="check-column">
											<label className="screen-reader-text" htmlFor={`user_${u.id}`}>
												Select {u.username}
											</label>
											<input type="checkbox" name="users[]" id={`user_${u.id}`} className={u.role} defaultValue={u.id} />
										</th>
										<td className="username column-username has-row-actions column-primary" data-colname="Username">
											<img alt="" src="https://secure.gravatar.com/avatar/?s=32&d=mm&r=g" srcSet="https://secure.gravatar.com/avatar/?s=64&d=mm&r=g 2x" className="avatar avatar-32 photo" height={32} width={32} loading="lazy" decoding="async" />
											<strong>
												<a href="/rp-admin/profile">{u.username}</a>
											</strong>
											<br />
											<div className="row-actions">
												<span className="edit">
													<a href="/rp-admin/profile">Edit</a> |
												</span>
												<span className="view">
													<a href="/" aria-label={`View posts by ${u.display_name}`}>
														View
													</a>
												</span>
											</div>
											<button type="button" className="toggle-row">
												<span className="screen-reader-text">Show more details</span>
											</button>
										</td>
										<td className="name column-name" data-colname="Name">
											{u.display_name}
										</td>
										<td className="email column-email" data-colname="Email">
											<a href={`mailto:${u.email}`}>{u.email}</a>
										</td>
										<td className="role column-role" data-colname="Role">
											{roleLabel(u.role)}
										</td>
										<td className="posts column-posts num" data-colname="Posts">
											{u.post_count > 0 ? (
												<a href="/" className="edit">
													<span aria-hidden="true">{u.post_count}</span>
													<span className="screen-reader-text">{u.post_count} posts by this author</span>
												</a>
											) : (
												<span aria-hidden="true">0</span>
											)}
										</td>
									</tr>
								))}
							</tbody>
							<tfoot>
								<tr>
									<td className="manage-column column-cb check-column">
										<label className="screen-reader-text" htmlFor="cb-select-all-2">
											Select All
										</label>
										<input id="cb-select-all-2" type="checkbox" />
									</td>
									<th scope="col" className="manage-column column-username column-primary sortable desc">
										<a href="/">
											<span>Username</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th scope="col" className="manage-column column-name">
										Name
									</th>
									<th scope="col" className="manage-column column-email sortable desc">
										<a href="/">
											<span>Email</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th scope="col" className="manage-column column-role">
										Role
									</th>
									<th scope="col" className="manage-column column-posts num">
										Posts
									</th>
								</tr>
							</tfoot>
						</table>
						<div className="tablenav bottom">
							<div className="alignleft actions bulkactions">
								<label htmlFor="bulk-action-selector-bottom" className="screen-reader-text">
									Select bulk action
								</label>
								<select name="action2" id="bulk-action-selector-bottom">
									<option value={-1}>Bulk actions</option>
									<option value="delete">Delete</option>
									<option value="resetpassword">Send password reset</option>
								</select>
								<input type="submit" id="doaction2" className="button action" defaultValue="Apply" />
							</div>
							<div className="alignleft actions">
								<label className="screen-reader-text" htmlFor="new_role2">
									Change role to…
								</label>
								<select name="new_role2" id="new_role2">
									<option value="">Change role to…</option>
									<option value="subscriber">Subscriber</option>
									<option value="contributor">Contributor</option>
									<option value="author">Author</option>
									<option value="editor">Editor</option>
									<option value="administrator">Administrator</option> <option value="none">— No role for this site —</option>
								</select>
								<input type="submit" name="changeit2" id="changeit2" className="button" defaultValue="Change" />
							</div>
							<div className="tablenav-pages one-page">
								<span className="displaying-num">{items(total)}</span>
								<span className="pagination-links">
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										«
									</span>
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										‹
									</span>
									<span className="screen-reader-text">Current Page</span>
									<span id="table-paging" className="paging-input">
										<span className="tablenav-paging-text">
											1 of <span className="total-pages">1</span>
										</span>
									</span>
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										›
									</span>
									<span className="tablenav-pages-navspan button disabled" aria-hidden="true">
										»
									</span>
								</span>
							</div>
							<br className="clear" />
						</div>
					</form>
					<div className="clear" />
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
