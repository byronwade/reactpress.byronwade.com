import React from "react";
import { getDb } from "@/lib/fakebase/client";
import { items } from "@/lib/fakebase/format";
import type { TermRow } from "@/lib/fakebase/schema";

export default async function EditTags() {
	const db = await getDb();
	const { data } = await db.from("terms").select("*").eq("taxonomy", "post_tag").order("name", { ascending: true });
	const tags: TermRow[] = data ?? [];
	const total = tags.length;
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
									<li id="tab-link-adding-terms">
										<a href="/" aria-controls="tab-panel-adding-terms">
											Adding Tags
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="/">Documentation on Tags</a>
								</p>
								<p>
									<a href="/">Support</a>
								</p>
							</div>
							<div className="contextual-help-tabs-wrap">
								<div id="tab-panel-overview" className="help-tab-content active">
									<p>You can assign keywords to your posts using tags. Unlike categories, tags have no hierarchy, meaning there is no relationship from one tag to another.</p>
									<p>What&apos;s the difference between categories and tags? Normally, tags are ad-hoc keywords that identify important information in your post (names, subjects, etc) that may or may not recur in other posts, while categories are pre-determined sections. If you think of your site like a book, the categories are like the Table of Contents and the tags are like the terms in the index.</p>
								</div>
								<div id="tab-panel-adding-terms" className="help-tab-content">
									<p>When adding a new tag on this screen, you&apos;ll fill in the following fields:</p>
									<ul>
										<li>
											<strong>Name</strong> — The name is how it appears on your site.
										</li>
										<li>
											<strong>Slug</strong> — The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.
										</li>
										<li>
											<strong>Description</strong> — The description is not prominent by default; however, some themes may display it.
										</li>
									</ul>
									<p>You can change the display of this screen using the Screen Options tab to set how many items are displayed per screen and to display/hide columns in the table.</p>
								</div>
							</div>
						</div>
					</div>
					<div id="screen-options-wrap" className="hidden" tabIndex={-1} aria-label="Screen Options Tab">
						<form id="adv-settings" method="post">
							<fieldset className="metabox-prefs">
								<legend>Columns</legend>
								<label>
									<input className="hide-column-tog" name="description-hide" type="checkbox" id="description-hide" defaultValue="description" defaultChecked={true} />
									Description
								</label>
								<label>
									<input className="hide-column-tog" name="slug-hide" type="checkbox" id="slug-hide" defaultValue="slug" defaultChecked={true} />
									Slug
								</label>
								<label>
									<input className="hide-column-tog" name="posts-hide" type="checkbox" id="posts-hide" defaultValue="posts" defaultChecked={true} />
									Count
								</label>
							</fieldset>
							<fieldset className="screen-options">
								<legend>Pagination</legend>
								<label htmlFor="edit_post_tag_per_page">Number of items per page:</label>
								<input type="number" step={1} min={1} max={999} className="screen-per-page" name="wp_screen_options[value]" id="edit_post_tag_per_page" maxLength={3} defaultValue={20} />
								<input type="hidden" name="wp_screen_options[option]" defaultValue="edit_post_tag_per_page" />
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
					<h1 className="wp-heading-inline">Tags</h1>
					<hr className="wp-header-end" />
					<div id="ajax-response" />
					<form className="search-form wp-clearfix" method="get">
						<input type="hidden" name="taxonomy" defaultValue="post_tag" />
						<input type="hidden" name="post_type" defaultValue="post" />
						<p className="search-box">
							<label className="screen-reader-text" htmlFor="tag-search-input">
								Search Tags:
							</label>
							<input type="search" id="tag-search-input" name="s" defaultValue="" />
							<input type="submit" id="search-submit" className="button" defaultValue="Search Tags" />
						</p>
					</form>
					<div id="col-container" className="wp-clearfix">
						<div id="col-left">
							<div className="col-wrap">
								<div className="form-wrap">
									<h2>Add New Tag</h2>
									<form id="addtag" method="post" action="#" className="validate">
										<input type="hidden" name="action" defaultValue="add-tag" />
										<input type="hidden" name="screen" defaultValue="edit-post_tag" />
										<input type="hidden" name="taxonomy" defaultValue="post_tag" />
										<input type="hidden" name="post_type" defaultValue="post" />
										<input type="hidden" id="_wpnonce_add-tag" name="_wpnonce_add-tag" defaultValue="bce515f182" />
										<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/edit-tags.php?taxonomy=post_tag" />
										<div className="form-field form-required term-name-wrap">
											<label htmlFor="tag-name">Name</label>
											<input name="tag-name" id="tag-name" type="text" defaultValue="" size={40} aria-required="true" aria-describedby="name-description" />
											<p id="name-description">The name is how it appears on your site.</p>
										</div>
										<div className="form-field term-slug-wrap">
											<label htmlFor="tag-slug">Slug</label>
											<input name="slug" id="tag-slug" type="text" defaultValue="" size={40} aria-describedby="slug-description" />
											<p id="slug-description">The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.</p>
										</div>
										<div className="form-field term-description-wrap">
											<label htmlFor="tag-description">Description</label>
											<textarea name="description" id="tag-description" rows={5} cols={40} aria-describedby="description-description" defaultValue={""} />
											<p id="description-description">The description is not prominent by default; however, some themes may show it.</p>
										</div>
										<p className="submit">
											<input type="submit" name="submit" id="submit" className="button button-primary" defaultValue="Add New Tag" /> <span className="spinner" />
										</p>
									</form>
								</div>
							</div>
						</div>
						{/* /col-left */}
						<div id="col-right">
							<div className="col-wrap">
								<form id="posts-filter" method="post">
									<input type="hidden" name="taxonomy" defaultValue="post_tag" />
									<input type="hidden" name="post_type" defaultValue="post" />
									<input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="b9c8da4c70" />
									<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/edit-tags.php?taxonomy=post_tag" />
									<div className="tablenav top">
										<div className="alignleft actions bulkactions">
											<label htmlFor="bulk-action-selector-top" className="screen-reader-text">
												Select bulk action
											</label>
											<select name="action" id="bulk-action-selector-top">
												<option value={-1}>Bulk actions</option>
												<option value="delete">Delete</option>
											</select>
											<input type="submit" id="doaction" className="button action" defaultValue="Apply" />
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
									<h2 className="screen-reader-text">Tags list</h2>
									<table className="wp-list-table widefat fixed striped table-view-list tags">
										<thead>
											<tr>
												<td id="cb" className="manage-column column-cb check-column">
													<label className="screen-reader-text" htmlFor="cb-select-all-1">
														Select All
													</label>
													<input id="cb-select-all-1" type="checkbox" />
												</td>
												<th scope="col" id="name" className="manage-column column-name column-primary sortable desc">
													<a href="/">
														<span>Name</span>
														<span className="sorting-indicator" />
													</a>
												</th>
												<th scope="col" id="description" className="manage-column column-description sortable desc">
													<a href="/">
														<span>Description</span>
														<span className="sorting-indicator" />
													</a>
												</th>
												<th scope="col" id="slug" className="manage-column column-slug sortable desc">
													<a href="/">
														<span>Slug</span>
														<span className="sorting-indicator" />
													</a>
												</th>
												<th scope="col" id="posts" className="manage-column column-posts num sortable desc">
													<a href="/">
														<span>Count</span>
														<span className="sorting-indicator" />
													</a>
												</th>
											</tr>
										</thead>
										<tbody id="the-list" data-wp-lists="list:tag">
											{tags.map((t) => (
												<tr key={t.id} id={`tag-${t.id}`} className="level-0">
													<th scope="row" className="check-column">
														<label className="screen-reader-text" htmlFor={`cb-select-${t.id}`}>
															Select {t.name}
														</label>
														<input type="checkbox" name="delete_tags[]" defaultValue={t.id} id={`cb-select-${t.id}`} />
													</th>
													<td className="name column-name has-row-actions column-primary" data-colname="Name">
														<strong>
															<a className="row-title" href="/" aria-label={`“${t.name}” (Edit)`}>
																{t.name}
															</a>
														</strong>
														<br />
														<div className="hidden" id={`inline_${t.id}`}>
															<div className="name">{t.name}</div>
															<div className="slug">{t.slug}</div>
														</div>
														<div className="row-actions">
															<span className="edit">
																<a href="/" aria-label={`Edit “${t.name}”`}>
																	Edit
																</a>
																|
															</span>
															<span className="inline hide-if-no-js">
																<button type="button" className="button-link editinline" aria-label={`Quick edit “${t.name}” inline`} aria-expanded="false">
																	Quick&nbsp;Edit
																</button>
																|
															</span>
															<span className="delete">
																<a href="/" className="delete-tag aria-button-if-js" aria-label={`Delete “${t.name}”`} role="button">
																	Delete
																</a>
																|
															</span>
															<span className="view">
																<a href="/" aria-label={`View “${t.name}” archive`}>
																	View
																</a>
															</span>
														</div>
														<button type="button" className="toggle-row">
															<span className="screen-reader-text">Show more details</span>
														</button>
													</td>
													<td className="description column-description" data-colname="Description">
														{t.description ? (
															t.description
														) : (
															<>
																<span aria-hidden="true">—</span>
																<span className="screen-reader-text">No description</span>
															</>
														)}
													</td>
													<td className="slug column-slug" data-colname="Slug">
														{t.slug}
													</td>
													<td className="posts column-posts" data-colname="Count">
														<a href="/">{t.count}</a>
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
												<th scope="col" className="manage-column column-name column-primary sortable desc">
													<a href="/">
														<span>Name</span>
														<span className="sorting-indicator" />
													</a>
												</th>
												<th scope="col" className="manage-column column-description sortable desc">
													<a href="/">
														<span>Description</span>
														<span className="sorting-indicator" />
													</a>
												</th>
												<th scope="col" className="manage-column column-slug sortable desc">
													<a href="/">
														<span>Slug</span>
														<span className="sorting-indicator" />
													</a>
												</th>
												<th scope="col" className="manage-column column-posts num sortable desc">
													<a href="/">
														<span>Count</span>
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
												<option value={-1}>Bulk actions</option>
												<option value="delete">Delete</option>
											</select>
											<input type="submit" id="doaction2" className="button action" defaultValue="Apply" />
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
							</div>
						</div>
						{/* /col-right */}
					</div>
					{/* /col-container */}
				</div>
				{/* /wrap */}
				<form method="get">
					<table style={{ display: "none" }}>
						<tbody id="inlineedit">
							<tr id="inline-edit" className="inline-edit-row" style={{ display: "none" }}>
								<td colSpan={5} className="colspanchange">
									<div className="inline-edit-wrapper">
										<fieldset>
											<legend className="inline-edit-legend">Quick Edit</legend>
											<div className="inline-edit-col">
												<label>
													<span className="title">Name</span>
													<span className="input-text-wrap">
														<input type="text" name="name" className="ptitle" defaultValue="" />
													</span>
												</label>
												<label>
													<span className="title">Slug</span>
													<span className="input-text-wrap">
														<input type="text" name="slug" className="ptitle" defaultValue="" />
													</span>
												</label>
											</div>
										</fieldset>
										<div className="inline-edit-save submit">
											<button type="button" className="save button button-primary">
												Update Tag
											</button>
											<button type="button" className="cancel button">
												Cancel
											</button>
											<span className="spinner" />
											<input type="hidden" id="_inline_edit" name="_inline_edit" defaultValue="dbfcafcc56" /> <input type="hidden" name="taxonomy" defaultValue="post_tag" />
											<input type="hidden" name="post_type" defaultValue="post" />
											<div className="notice notice-error notice-alt inline hidden">
												<p className="error" />
											</div>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
				<div className="clear" />
			</div>
		</>
	);
}
