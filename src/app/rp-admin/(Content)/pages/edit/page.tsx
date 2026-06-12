import React from "react";
import { getDb } from "@/lib/fakebase/client";
import { items, wpDate } from "@/lib/fakebase/format";
import type { PostRow, UserRow } from "@/lib/fakebase/schema";

/** Order pages so children follow their parent, with a depth for indentation. */
function hierarchical(pages: PostRow[]): { page: PostRow; depth: number }[] {
	const byParent = new Map<number, PostRow[]>();
	for (const p of pages) {
		const list = byParent.get(p.parent_id) ?? [];
		list.push(p);
		byParent.set(p.parent_id, list);
	}
	const out: { page: PostRow; depth: number }[] = [];
	const walk = (parent: number, depth: number) => {
		for (const p of (byParent.get(parent) ?? []).sort((a, b) => a.menu_order - b.menu_order || a.id - b.id)) {
			out.push({ page: p, depth });
			walk(p.id, depth + 1);
		}
	};
	walk(0, 0);
	// include any orphans whose parent isn't in the set
	const seen = new Set(out.map((o) => o.page.id));
	for (const p of pages) if (!seen.has(p.id)) out.push({ page: p, depth: 0 });
	return out;
}

export default async function Edit() {
	const db = await getDb();
	const [pagesRes, usersRes] = await Promise.all([db.from("posts").select("*").eq("type", "page"), db.from("users").select("*")]);
	const pages: PostRow[] = pagesRes.data ?? [];
	const users: UserRow[] = usersRes.data ?? [];
	const userById = new Map(users.map((u) => [u.id, u]));
	const ordered = hierarchical(pages);

	const total = pages.length;
	const published = pages.filter((p) => p.status === "publish").length;
	const drafts = pages.filter((p) => p.status === "draft").length;

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
									<li id="tab-link-managing-pages">
										<a href="/" aria-controls="tab-panel-managing-pages">
											Managing Pages
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="/">Documentation on Managing Pages</a>
								</p>
								<p>
									<a href="/">Support</a>
								</p>
							</div>
							<div className="contextual-help-tabs-wrap">
								<div id="tab-panel-overview" className="help-tab-content active">
									<p>Pages are similar to posts in that they have a title, body text, and associated metadata, but they are different in that they are not part of the chronological blog stream, kind of like permanent posts. Pages are not categorized or tagged, but can have a hierarchy. You can nest pages under other pages by making one the “Parent” of the other, creating a group of pages.</p>
								</div>
								<div id="tab-panel-managing-pages" className="help-tab-content">
									<p>Managing pages is very similar to managing posts, and the screens can be customized in the same way.</p>
									<p>You can also perform the same types of actions, including narrowing the list by using the filters, acting on a page using the action links that appear when you hover over a row, or using the Bulk actions menu to edit the metadata for multiple pages at once.</p>
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
								<label htmlFor="edit_page_per_page">Number of items per page:</label>
								<input type="number" step={1} min={1} max={999} className="screen-per-page" name="wp_screen_options[value]" id="edit_page_per_page" maxLength={3} defaultValue={20} />
								<input type="hidden" name="wp_screen_options[option]" defaultValue="edit_page_per_page" />
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
					<h1 className="wp-heading-inline">Pages</h1>
					<a href="/rp-admin/pages/page-new" className="page-title-action">
						Add New
					</a>
					<hr className="wp-header-end" />
					<h2 className="screen-reader-text">Filter pages list</h2>
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
								Search Pages:
							</label>
							<input type="search" id="post-search-input" name="s" defaultValue="" />
							<input type="submit" id="search-submit" className="button" defaultValue="Search Pages" />
						</p>
						<input type="hidden" name="post_status" className="post_status_page" defaultValue="all" />
						<input type="hidden" name="post_type" className="post_type_page" defaultValue="page" />
						<input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="7de34e26bb" />
						<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/edit.php?post_type=page" />
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
						<h2 className="screen-reader-text">Pages list</h2>
						<table className="wp-list-table widefat fixed striped table-view-list pages">
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
								{ordered.map(({ page: p, depth }) => {
									const author = userById.get(p.author_id);
									const dateHeading = p.status === "publish" ? "Published" : p.status === "future" ? "Scheduled" : "Last Modified";
									const dateValue = p.status === "publish" ? p.date : p.modified;
									return (
										<tr key={p.id} id={`post-${p.id}`} className={`iedit author-self level-${depth} post-${p.id} type-page status-${p.status} hentry`}>
											<th scope="row" className="check-column">
												<label className="screen-reader-text" htmlFor={`cb-select-${p.id}`}>
													Select {p.title}
												</label>
												<input id={`cb-select-${p.id}`} type="checkbox" name="post[]" defaultValue={p.id} />
											</th>
											<td className="title column-title has-row-actions column-primary page-title" data-colname="Title">
												<strong>
													{depth > 0 ? <span aria-hidden="true">{"— ".repeat(depth)}</span> : null}
													<a className="row-title" href="/rp-admin/pages/edit" aria-label={`“${p.title}” (Edit)`}>
														{p.title}
													</a>
													{p.status === "draft" ? <span className="post-state"> — Draft</span> : null}
												</strong>
												<div className="row-actions">
													<span className="edit">
														<a href="/rp-admin/pages/edit" aria-label={`Edit “${p.title}”`}>
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
				</div>
			</div>
		</>
	);
}
