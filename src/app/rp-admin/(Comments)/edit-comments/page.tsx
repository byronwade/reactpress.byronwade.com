import React from "react";

export default function EditComments() {
	return (
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
								<li id="tab-link-moderating-comments">
									<a href="/" aria-controls="tab-panel-moderating-comments">
										Moderating Comments
									</a>
								</li>
							</ul>
						</div>
						<div className="contextual-help-sidebar">
							<p>
								<strong>For more information:</strong>
							</p>
							<p>
								<a href="/">Documentation on Comments</a>
							</p>
							<p>
								<a href="/">Documentation on Comment Spam</a>
							</p>
							<p>
								<a href="/">Support</a>
							</p>
						</div>
						<div className="contextual-help-tabs-wrap">
							<div id="tab-panel-overview" className="help-tab-content active">
								<p>You can manage comments made on your site similar to the way you manage posts and other content. This screen is customizable in the same ways as other management screens, and you can act on comments using the on-hover action links or the Bulk actions.</p>
							</div>
							<div id="tab-panel-moderating-comments" className="help-tab-content">
								<p>A red bar on the left means the comment is waiting for you to moderate it.</p>
								<p>In the Author column, in addition to the author’s name, email address, and site URL, the commenter’s IP address is shown. Clicking on this link shows you all the comments made from this IP address.</p>
								<p>In the Comment column, hovering over any comment gives you options to approve, reply (and approve), quick edit, edit, spam mark, or trash that comment.</p>
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
								<input className="hide-column-tog" name="response-hide" type="checkbox" id="response-hide" defaultValue="response" defaultChecked={true} />
								In Response To
							</label>
							<label>
								<input className="hide-column-tog" name="date-hide" type="checkbox" id="date-hide" defaultValue="date" defaultChecked={true} />
								Submitted On
							</label>
						</fieldset>
						<fieldset className="screen-options">
							<legend>Pagination</legend>
							<label htmlFor="edit_comments_per_page">Number of items per page:</label>
							<input type="number" step={1} min={1} max={999} className="screen-per-page" name="wp_screen_options[value]" id="edit_comments_per_page" maxLength={3} defaultValue={20} />
							<input type="hidden" name="wp_screen_options[option]" defaultValue="edit_comments_per_page" />
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
				<h1 className="wp-heading-inline">Comments</h1>
				<hr className="wp-header-end" />
				<h2 className="screen-reader-text">Filter comments list</h2>
				<ul className="subsubsub">
					<li className="all">
						<a href="/" className="current" aria-current="page">
							All <span className="count">(0)</span>
						</a>
						|
					</li>
					<li className="moderated">
						<a href="/">
							Pending <span className="count">(0)</span>
						</a>
						|
					</li>
					<li className="approved">
						<a href="/">
							Approved <span className="count">(0)</span>
						</a>
						|
					</li>
					<li className="spam">
						<a href="/">
							Spam <span className="count">(0)</span>
						</a>
						|
					</li>
					<li className="trash">
						<a href="/">
							Trash <span className="count">(0)</span>
						</a>
					</li>
				</ul>
				<form id="comments-form" method="get">
					<p className="search-box">
						<label className="screen-reader-text" htmlFor="comment-search-input">
							Search Comments:
						</label>
						<input type="search" id="comment-search-input" name="s" defaultValue="" />
						<input type="submit" id="search-submit" className="button" defaultValue="Search Comments" />
					</p>
					<input type="hidden" name="comment_status" defaultValue="all" />
					<input type="hidden" name="pagegen_timestamp" defaultValue="2023-02-17 10:07:38" />
					<input type="hidden" name="_total" defaultValue={0} />
					<input type="hidden" name="_per_page" defaultValue={20} />
					<input type="hidden" name="_page" defaultValue={1} />
					<input type="hidden" id="_ajax_fetch_list_nonce" name="_ajax_fetch_list_nonce" defaultValue="5aa80d7c1b" />
					<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/edit-comments.php" />
					<div className="tablenav top">
						<div className="alignleft actions bulkactions">
							<label htmlFor="bulk-action-selector-top" className="screen-reader-text">
								Select bulk action
							</label>
							<select name="action" id="bulk-action-selector-top">
								<option value="-1">Bulk actions</option>
								<option value="unapprove">Unapprove</option>
								<option value="approve">Approve</option>
								<option value="spam">Mark as spam</option>
								<option value="trash">Move to Trash</option>
							</select>
							<input type="submit" id="doaction" className="button action" defaultValue="Apply" />
						</div>
						<div className="alignleft actions">
							<label htmlFor="filter-by-comment-type" className="screen-reader-text">
								Filter by comment type
							</label>
							<select id="filter-by-comment-type" name="comment_type">
								<option value="">All comment types</option>
								<option value="comment">Comments</option>
								<option value="pings">Pings</option>
							</select>
							<input type="submit" id="post-query-submit" className="button" defaultValue="Filter" />
						</div>
						<div className="tablenav-pages no-pages">
							<span className="displaying-num">0 items</span>
						</div>
						<br className="clear" />
					</div>
					<h2 className="screen-reader-text">Comments list</h2>
					<table className="wp-list-table widefat fixed striped table-view-list comments">
						<thead>
							<tr>
								<td id="cb" className="manage-column column-cb check-column">
									<label className="screen-reader-text" htmlFor="cb-select-all-1">
										Select All
									</label>
									<input id="cb-select-all-1" type="checkbox" />
								</td>
								<th scope="col" id="author" className="manage-column column-author sortable desc">
									<a href="/">
										<span>Author</span>
										<span className="sorting-indicator" />
									</a>
								</th>
								<th scope="col" id="comment" className="manage-column column-comment column-primary sortable desc">
									<a href="/">
										<span>Comment</span>
										<span className="sorting-indicator" />
									</a>
								</th>
								<th scope="col" id="response" className="manage-column column-response sortable desc">
									<a href="/">
										<span>In response to</span>
										<span className="sorting-indicator" />
									</a>
								</th>
								<th scope="col" id="date" className="manage-column column-date sortable asc">
									<a href="/">
										<span>Submitted on</span>
										<span className="sorting-indicator" />
									</a>
								</th>
							</tr>
						</thead>
						<tbody id="the-comment-list" data-wp-lists="list:comment">
							<tr className="no-items">
								<td className="colspanchange" colSpan={5}>
									No comments found.
								</td>
							</tr>
						</tbody>
						<tbody id="the-extra-comment-list" data-wp-lists="list:comment" style={{ display: "none" }}>
							<tr className="no-items">
								<td className="colspanchange" colSpan={5}>
									No comments found.
								</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td className="manage-column column-cb check-column">
									<label className="screen-reader-text" htmlFor="cb-select-all-2">
										Select All
									</label>
									<input id="cb-select-all-2" type="checkbox" />
								</td>
								<th scope="col" className="manage-column column-author sortable desc">
									<a href="/">
										<span>Author</span>
										<span className="sorting-indicator" />
									</a>
								</th>
								<th scope="col" className="manage-column column-comment column-primary sortable desc">
									<a href="/">
										<span>Comment</span>
										<span className="sorting-indicator" />
									</a>
								</th>
								<th scope="col" className="manage-column column-response sortable desc">
									<a href="/">
										<span>In response to</span>
										<span className="sorting-indicator" />
									</a>
								</th>
								<th scope="col" className="manage-column column-date sortable asc">
									<a href="/">
										<span>Submitted on</span>
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
								<option value="-1">Bulk actions</option>
								<option value="unapprove">Unapprove</option>
								<option value="approve">Approve</option>
								<option value="spam">Mark as spam</option>
								<option value="trash">Move to Trash</option>
							</select>
							<input type="submit" id="doaction2" className="button action" defaultValue="Apply" />
						</div>
						<div className="tablenav-pages no-pages">
							<span className="displaying-num">0 items</span>
						</div>
						<br className="clear" />
					</div>
				</form>
				<div id="ajax-response" />
				<div id="trash-undo-holder" className="hidden">
					<div className="trash-undo-inside">
						Comment by <strong /> moved to the Trash.{" "}
						<span className="undo untrash">
							<a href="/">Undo</a>
						</span>
					</div>
				</div>
				<div id="spam-undo-holder" className="hidden">
					<div className="spam-undo-inside">
						Comment by <strong /> marked as spam.{" "}
						<span className="undo unspam">
							<a href="/">Undo</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
