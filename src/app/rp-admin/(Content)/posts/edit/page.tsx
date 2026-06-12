import React from "react";
import { getDb } from "@/lib/fakebase/client";
import { items, statusLabel, wpDate } from "@/lib/fakebase/format";
import type { PostRow, TermRow, UserRow } from "@/lib/fakebase/schema";

function slugify(s: string): string {
	return s
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

export default async function Edit() {
	const db = await getDb();
	const [postsRes, usersRes, catsRes] = await Promise.all([db.from("posts").select("*").eq("type", "post").order("date", { ascending: false }), db.from("users").select("*"), db.from("terms").select("*").eq("taxonomy", "category").order("name", { ascending: true })]);
	const posts: PostRow[] = postsRes.data ?? [];
	const users: UserRow[] = usersRes.data ?? [];
	const cats: TermRow[] = catsRes.data ?? [];
	const userById = new Map(users.map((u) => [u.id, u]));

	const total = posts.length;
	const published = posts.filter((p) => p.status === "publish").length;
	const drafts = posts.filter((p) => p.status === "draft").length;

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
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="/">Documentation on Managing Posts</a>
								</p>
								<p>
									<a href="/">Support</a>
								</p>
							</div>
							<div className="contextual-help-tabs-wrap">
								<div id="tab-panel-overview" className="help-tab-content active">
									<p>This screen provides access to all of your posts. You can customize the display of this screen to suit your workflow.</p>
								</div>
								<div id="tab-panel-screen-content" className="help-tab-content">
									<p>You can customize the display of this screen’s contents in a number of ways:</p>
									<ul>
										<li>You can hide/display columns based on your needs and decide how many posts to list per screen using the Screen Options tab.</li>
										<li>You can filter the list of posts by post status using the text links above the posts list to only show posts with that status. The default view is to show all posts.</li>
										<li>You can refine the list to show only posts in a specific category or from a specific month by using the dropdown menus above the posts list. Click the Filter button after making your selection. You can also refine the list by clicking on the post author, category or tag in the posts list.</li>
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
									<input className="hide-column-tog" name="author-hide" type="checkbox" id="author-hide" defaultValue="author" defaultChecked={true} />
									Author
								</label>
								<label>
									<input className="hide-column-tog" name="categories-hide" type="checkbox" id="categories-hide" defaultValue="categories" defaultChecked={true} />
									Categories
								</label>
								<label>
									<input className="hide-column-tog" name="tags-hide" type="checkbox" id="tags-hide" defaultValue="tags" defaultChecked={true} />
									Tags
								</label>
								<label>
									<input className="hide-column-tog" name="comments-hide" type="checkbox" id="comments-hide" defaultValue="comments" defaultChecked={true} />
									Comments
								</label>
								<label>
									<input className="hide-column-tog" name="date-hide" type="checkbox" id="date-hide" defaultValue="date" defaultChecked={true} />
									Date
								</label>
							</fieldset>
							<fieldset className="screen-options">
								<legend>Pagination</legend>
								<label htmlFor="edit_post_per_page">Number of items per page:</label>
								<input type="number" step={1} min={1} max={999} className="screen-per-page" name="wp_screen_options[value]" id="edit_post_per_page" maxLength={3} defaultValue={20} />
								<input type="hidden" name="wp_screen_options[option]" defaultValue="edit_post_per_page" />
							</fieldset>
							<fieldset className="metabox-prefs view-mode">
								<legend>View mode</legend>
								<label htmlFor="list-view-mode">
									<input id="list-view-mode" type="radio" name="mode" defaultValue="list" defaultChecked={true} />
									Compact view
								</label>
								<label htmlFor="excerpt-view-mode">
									<input id="excerpt-view-mode" type="radio" name="mode" defaultValue="excerpt" />
									Extended view
								</label>
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
					<h1 className="wp-heading-inline">Posts</h1>
					<a href="/rp-admin/posts/post-new" className="page-title-action">
						Add New
					</a>
					<hr className="wp-header-end" />
					<h2 className="screen-reader-text">Filter posts list</h2>
					<ul className="subsubsub">
						<li className="all">
							<a href="/" className="current" aria-current="page">
								All <span className="count">({total})</span>
							</a>
							{published > 0 || drafts > 0 ? " |" : ""}
						</li>
						{published > 0 ? (
							<li className="publish">
								<a href="/">
									Published <span className="count">({published})</span>
								</a>
								{drafts > 0 ? " |" : ""}
							</li>
						) : null}
						{drafts > 0 ? (
							<li className="draft">
								<a href="/">
									Drafts <span className="count">({drafts})</span>
								</a>
							</li>
						) : null}
					</ul>
					<form id="posts-filter" method="get">
						<p className="search-box">
							<label className="screen-reader-text" htmlFor="post-search-input">
								Search Posts:
							</label>
							<input type="search" id="post-search-input" name="s" defaultValue="" />
							<input type="submit" id="search-submit" className="button" defaultValue="Search Posts" />
						</p>
						<input type="hidden" name="post_status" className="post_status_page" defaultValue="all" />
						<input type="hidden" name="post_type" className="post_type_page" defaultValue="post" />
						<input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="7de34e26bb" />
						<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/edit.php" />
						<div className="tablenav top">
							<div className="alignleft actions bulkactions">
								<label htmlFor="bulk-action-selector-top" className="screen-reader-text">
									Select bulk action
								</label>
								<select name="action" id="bulk-action-selector-top">
									<option>Bulk actions</option>
									<option value="edit" className="hide-if-no-js">
										Edit
									</option>
									<option value="trash">Move to Trash</option>
								</select>
								<input type="submit" id="doaction" className="button action" defaultValue="Apply" />
							</div>
							<div className="alignleft actions">
								<label htmlFor="filter-by-date" className="screen-reader-text">
									Filter by date
								</label>
								<select name="m" id="filter-by-date">
									<option selected={true}>All dates</option>
									<option>February 2023</option>
									<option>March 2023</option>
								</select>
								<label className="screen-reader-text" htmlFor="cat">
									Filter by category
								</label>
								<select name="cat" id="cat" className="postform">
									<option value={0}>All Categories</option>
									{cats.map((c) => (
										<option key={c.id} className="level-0" value={c.id}>
											{c.name}
										</option>
									))}
								</select>
								<input type="submit" name="filter_action" id="post-query-submit" className="button" defaultValue="Filter" />
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
						<h2 className="screen-reader-text">Posts list</h2>
						<table className="wp-list-table widefat fixed striped table-view-list posts">
							<thead>
								<tr>
									<td id="cb" className="manage-column column-cb check-column">
										<label className="screen-reader-text" htmlFor="cb-select-all-1">
											Select All
										</label>
										<input id="cb-select-all-1" type="checkbox" />
									</td>
									<th scope="col" id="title" className="manage-column column-title column-primary sortable desc">
										<a href="/">
											<span>Title</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th scope="col" id="author" className="manage-column column-author">
										Author
									</th>
									<th scope="col" id="categories" className="manage-column column-categories">
										Categories
									</th>
									<th scope="col" id="tags" className="manage-column column-tags">
										Tags
									</th>
									<th scope="col" id="comments" className="manage-column column-comments num sortable desc">
										<a href="/">
											<span>
												<span className="vers comment-grey-bubble" title="Comments" aria-hidden="true" />
												<span className="screen-reader-text">Comments</span>
											</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th scope="col" id="date" className="manage-column column-date sortable asc">
										<a href="/">
											<span>Date</span>
											<span className="sorting-indicator" />
										</a>
									</th>
								</tr>
							</thead>
							<tbody id="the-list">
								{posts.map((p) => {
									const author = userById.get(p.author_id);
									const catClasses = p.categories.map((c) => `category-${slugify(c)}`).join(" ");
									const dateHeading = p.status === "publish" ? "Published" : p.status === "future" ? "Scheduled" : "Last Modified";
									const dateValue = p.status === "publish" ? p.date : p.modified;
									return (
										<tr key={p.id} id={`post-${p.id}`} className={`iedit author-self level-0 post-${p.id} type-post status-${p.status} format-standard hentry ${catClasses}`.trim()}>
											<th scope="row" className="check-column">
												<label className="screen-reader-text" htmlFor={`cb-select-${p.id}`}>
													Select {p.title}
												</label>
												<input id={`cb-select-${p.id}`} type="checkbox" name="post[]" defaultValue={p.id} />
												<div className="locked-indicator">
													<span className="locked-indicator-icon" aria-hidden="true" />
													<span className="screen-reader-text">“{p.title}” is locked </span>
												</div>
											</th>
											<td className="title column-title has-row-actions column-primary page-title" data-colname="Title">
												<div className="locked-info">
													<span className="locked-avatar" /> <span className="locked-text" />
												</div>
												<strong>
													<a className="row-title" href="/rp-admin/posts/edit" aria-label={`“${p.title}” (Edit)`}>
														{p.title}
													</a>
													{p.status === "draft" ? <span className="post-state"> — Draft</span> : null}
													{p.sticky ? <span className="post-state"> — Sticky</span> : null}
												</strong>
												<div className="row-actions">
													<span className="edit">
														<a href="/rp-admin/posts/edit" aria-label={`Edit “${p.title}”`}>
															Edit
														</a>
														|
													</span>
													<span className="inline hide-if-no-js">
														<button type="button" className="button-link editinline" aria-label={`Quick edit “${p.title}” inline`} aria-expanded="false">
															Quick&nbsp;Edit
														</button>
														|
													</span>
													<span className="trash">
														<a href="/" className="submitdelete" aria-label={`Move “${p.title}” to the Trash`}>
															Trash
														</a>
														|
													</span>
													<span className="view">
														<a href="/" rel="bookmark" aria-label={`View “${p.title}”`}>
															View
														</a>
													</span>
												</div>
												<button type="button" className="toggle-row">
													<span className="screen-reader-text">Show more details</span>
												</button>
											</td>
											<td className="author column-author" data-colname="Author">
												<a href="/">{author?.display_name ?? "—"}</a>
											</td>
											<td className="categories column-categories" data-colname="Categories">
												{p.categories.length > 0 ? (
													p.categories.map((c, i) => (
														<React.Fragment key={c}>
															<a href="/">{c}</a>
															{i < p.categories.length - 1 ? ", " : ""}
														</React.Fragment>
													))
												) : (
													<span aria-hidden="true">—</span>
												)}
											</td>
											<td className="tags column-tags" data-colname="Tags">
												{p.tags.length > 0 ? (
													p.tags.map((t, i) => (
														<React.Fragment key={t}>
															<a href="/">{t}</a>
															{i < p.tags.length - 1 ? ", " : ""}
														</React.Fragment>
													))
												) : (
													<>
														<span aria-hidden="true">—</span>
														<span className="screen-reader-text">No tags</span>
													</>
												)}
											</td>
											<td className="comments column-comments" data-colname="Comments">
												<div className="post-com-count-wrapper">
													{p.comment_count > 0 ? (
														<a href="/" className="post-com-count post-com-count-approved">
															<span className="comment-count-approved" aria-hidden="true">
																{p.comment_count}
															</span>
															<span className="screen-reader-text">
																{p.comment_count} comment{p.comment_count === 1 ? "" : "s"}
															</span>
														</a>
													) : (
														<>
															<span aria-hidden="true">—</span>
															<span className="screen-reader-text">No comments</span>
														</>
													)}
												</div>
											</td>
											<td className="date column-date" data-colname="Date">
												{dateHeading}
												<br />
												{wpDate(dateValue)}
											</td>
										</tr>
									);
								})}
							</tbody>
							<tfoot>
								<tr>
									<td className="manage-column column-cb check-column">
										<label className="screen-reader-text" htmlFor="cb-select-all-2">
											Select All
										</label>
										<input id="cb-select-all-2" type="checkbox" />
									</td>
									<th scope="col" className="manage-column column-title column-primary sortable desc">
										<a href="/">
											<span>Title</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th scope="col" className="manage-column column-author">
										Author
									</th>
									<th scope="col" className="manage-column column-categories">
										Categories
									</th>
									<th scope="col" className="manage-column column-tags">
										Tags
									</th>
									<th scope="col" className="manage-column column-comments num sortable desc">
										<a href="/">
											<span>
												<span className="vers comment-grey-bubble" title="Comments" aria-hidden="true" />
												<span className="screen-reader-text">Comments</span>
											</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th scope="col" className="manage-column column-date sortable asc">
										<a href="/">
											<span>Date</span>
											<span className="sorting-indicator" />
										</a>
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
									<option>Bulk actions</option>
									<option value="edit" className="hide-if-no-js">
										Edit
									</option>
									<option value="trash">Move to Trash</option>
								</select>
								<input type="submit" id="doaction2" className="button action" defaultValue="Apply" />
							</div>
							<div className="alignleft actions"></div>
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
					<form method="get">
						<table style={{ display: "none" }}>
							<tbody id="inlineedit">
								<tr id="inline-edit" className="inline-edit-row inline-edit-row-post quick-edit-row quick-edit-row-post inline-edit-post" style={{ display: "none" }}>
									<td colSpan={7} className="colspanchange">
										<div className="inline-edit-wrapper" role="region" aria-labelledby="quick-edit-legend">
											<fieldset className="inline-edit-col-left">
												<legend className="inline-edit-legend" id="quick-edit-legend">
													Quick Edit
												</legend>
												<div className="inline-edit-col">
													<label>
														<span className="title">Title</span>
														<span className="input-text-wrap">
															<input type="text" name="post_title" className="ptitle" defaultValue="" />
														</span>
													</label>
													<label>
														<span className="title">Slug</span>
														<span className="input-text-wrap">
															<input type="text" name="post_name" defaultValue="" autoComplete="off" spellCheck="false" />
														</span>
													</label>
													<br className="clear" />
													<label className="inline-edit-author">
														<span className="title">Author</span>
														<select name="post_author" className="authors">
															{users.map((u) => (
																<option key={u.id} value={u.id}>
																	{u.display_name} ({u.username})
																</option>
															))}
														</select>
													</label>
													<div className="inline-edit-group wp-clearfix">
														<label className="alignleft">
															<span className="title">Password</span>
															<span className="input-text-wrap">
																<input type="text" name="post_password" className="inline-edit-password-input" defaultValue="" />
															</span>
														</label>
														<span className="alignleft inline-edit-or">–OR– </span>
														<label className="alignleft inline-edit-private">
															<input type="checkbox" name="keep_private" defaultValue="private" />
															<span className="checkbox-title">Private</span>
														</label>
													</div>
												</div>
											</fieldset>
											<fieldset className="inline-edit-col-center inline-edit-categories">
												<div className="inline-edit-col">
													<span className="title inline-edit-categories-label">Categories</span>
													<input type="hidden" name="post_category[]" defaultValue={0} />
													<ul className="cat-checklist category-checklist">
														{cats.map((c) => (
															<li key={c.id} id={`category-${c.id}`}>
																<label className="selectit">
																	<input defaultValue={c.id} type="checkbox" name="post_category[]" id={`in-category-${c.id}`} />
																	{c.name}
																</label>
															</li>
														))}
													</ul>
												</div>
											</fieldset>
											<fieldset className="inline-edit-col-right">
												<div className="inline-edit-col">
													<label className="inline-edit-tags">
														<span className="title">Tags</span>
														<textarea cols={22} rows={1} name="tax_input[post_tag]" className="tax_input_post_tag" aria-describedby="inline-edit-coltags-1" />
													</label>
													<div className="inline-edit-group wp-clearfix">
														<label className="alignleft">
															<input type="checkbox" name="comment_status" defaultValue="open" />
															<span className="checkbox-title">Allow Comments</span>
														</label>
														<label className="alignleft">
															<input type="checkbox" name="ping_status" defaultValue="open" />
															<span className="checkbox-title">Allow Pings</span>
														</label>
													</div>
													<div className="inline-edit-group wp-clearfix">
														<label className="inline-edit-status alignleft">
															<span className="title">Status</span>
															<select name="_status">
																<option value="publish">Published</option>
																<option value="future">Scheduled</option>
																<option value="pending">Pending Review</option>
																<option value="draft">Draft</option>
															</select>
														</label>
														<label className="alignleft inline-edit-sticky">
															<input type="checkbox" name="sticky" defaultValue="sticky" />
															<span className="checkbox-title">Make this post sticky</span>
														</label>
													</div>
												</div>
											</fieldset>
											<div className="submit inline-edit-save">
												<input type="hidden" id="_inline_edit" name="_inline_edit" defaultValue="6b94ed3de0" />
												<button type="button" className="button button-primary save">
													Update
												</button>
												<button type="button" className="button cancel">
													Cancel
												</button>
												<span className="spinner" />
												<input type="hidden" name="post_view" defaultValue="list" />
												<input type="hidden" name="screen" defaultValue="edit-post" />
												<div className="notice notice-error notice-alt inline hidden">
													<p className="error" />
												</div>
											</div>
										</div>
										{/* end of .inline-edit-wrapper */}
									</td>
								</tr>
							</tbody>
						</table>
					</form>
				</div>
			</div>
		</>
	);
}
