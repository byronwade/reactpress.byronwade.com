import React from "react";
import { getDb } from "@/lib/fakebase/client";
import { fileSize, items, wpDate } from "@/lib/fakebase/format";
import type { MediaRow, UserRow } from "@/lib/fakebase/schema";

function mediaType(mime: string): string {
	if (mime.startsWith("image/")) return "image";
	if (mime.startsWith("audio/")) return "audio";
	if (mime.startsWith("video/")) return "video";
	if (mime === "application/pdf") return "application/pdf";
	return "application";
}

function iconClass(mime: string): string {
	const t = mediaType(mime);
	if (t === "image") return "";
	if (t === "audio") return "dashicons dashicons-format-audio";
	if (t === "video") return "dashicons dashicons-format-video";
	if (t === "application/pdf") return "dashicons dashicons-media-document";
	return "dashicons dashicons-media-default";
}

export default async function Upload() {
	const db = await getDb();
	const [mediaRes, usersRes] = await Promise.all([db.from("media").select("*").order("date", { ascending: false }), db.from("users").select("*")]);
	const files: MediaRow[] = mediaRes.data ?? [];
	const users: UserRow[] = usersRes.data ?? [];
	const userById = new Map(users.map((u) => [u.id, u]));
	const total = files.length;

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
									<li id="tab-link-attachment-details">
										<a href="/" aria-controls="tab-panel-attachment-details">
											Attachment Details
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="/">Documentation on Media Library</a>
								</p>
								<p>
									<a href="/">Support</a>
								</p>
							</div>
							<div className="contextual-help-tabs-wrap">
								<div id="tab-panel-overview" className="help-tab-content active">
									<p>All the files you&apos;ve uploaded are listed in the Media Library, with the most recent uploads listed first.</p>
									<p>You can view your media in a simple visual grid or a list with columns. Switch between these views using the icons to the left above the media.</p>
									<p>To delete media items, click the Bulk Select button at the top of the screen. Select any items you wish to delete, then click the Delete Selected button. Clicking the Cancel Selection button takes you back to viewing your media.</p>
								</div>
								<div id="tab-panel-attachment-details" className="help-tab-content">
									<p>Clicking an item will display an Attachment Details dialog, which allows you to preview media and make quick edits. Any changes you make to the attachment details will be automatically saved.</p>
									<p>Use the arrow buttons at the top of the dialog, or the left and right arrow keys on your keyboard, to navigate between media items quickly.</p>
									<p>You can also delete individual items and access the extended edit screen from the details dialog.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="screen-meta-links">
					<div id="contextual-help-link-wrap" className="hide-if-no-js screen-meta-toggle">
						<button type="button" id="contextual-help-link" className="button show-settings" aria-controls="contextual-help-wrap" aria-expanded="false">
							Help
						</button>
					</div>
				</div>
				<div className="wrap">
					<h1 className="wp-heading-inline">Media Library</h1>
					<a href="/rp-admin/media-new" className="page-title-action">
						Add New Media File
					</a>
					<hr className="wp-header-end" />
					<form id="posts-filter" method="get">
						<div className="wp-filter">
							<div className="filter-items">
								<div className="view-switch media-grid-view-switch">
									<a href="/" className="view-list">
										<span className="screen-reader-text">List view</span>
									</a>
									<a href="/" className="view-grid current" aria-current="page">
										<span className="screen-reader-text">Grid view</span>
									</a>
								</div>
								<label htmlFor="filter-by-type" className="screen-reader-text">
									Filter by type
								</label>
								<select name="attachment-filter" id="filter-by-type">
									<option value="all">All media items</option>
									<option value="image">Images</option>
									<option value="audio">Audio</option>
									<option value="video">Video</option>
									<option value="application">Documents</option>
								</select>
								<label htmlFor="filter-by-date" className="screen-reader-text">
									Filter by date
								</label>
								<select name="m" id="filter-by-date">
									<option value={0}>All dates</option>
									<option value="202303">March 2023</option>
									<option value="202302">February 2023</option>
								</select>
								<input type="submit" id="post-query-submit" className="button" defaultValue="Filter" />
							</div>
							<p className="search-box">
								<label className="screen-reader-text" htmlFor="media-search-input">
									Search Media:
								</label>
								<input type="search" id="media-search-input" name="s" defaultValue="" />
								<input type="submit" id="search-submit" className="button" defaultValue="Search Media" />
							</p>
						</div>
						<div className="tablenav top">
							<div className="alignleft actions bulkactions">
								<label htmlFor="bulk-action-selector-top" className="screen-reader-text">
									Select bulk action
								</label>
								<select name="action" id="bulk-action-selector-top">
									<option value={-1}>Bulk actions</option>
									<option value="delete">Delete permanently</option>
								</select>
								<input type="submit" id="doaction" className="button action" defaultValue="Apply" />
							</div>
							<div className="tablenav-pages one-page">
								<span className="displaying-num">{items(total)}</span>
							</div>
							<br className="clear" />
						</div>
						<h2 className="screen-reader-text">Media list</h2>
						<table className="wp-list-table widefat fixed striped table-view-list media">
							<thead>
								<tr>
									<td id="cb" className="manage-column column-cb check-column">
										<label className="screen-reader-text" htmlFor="cb-select-all-1">
											Select All
										</label>
										<input id="cb-select-all-1" type="checkbox" />
									</td>
									<th scope="col" id="icon" className="manage-column column-icon">
										<span className="screen-reader-text">File thumbnail</span>
									</th>
									<th scope="col" id="title" className="manage-column column-title column-primary">
										File
									</th>
									<th scope="col" id="author" className="manage-column column-author">
										Author
									</th>
									<th scope="col" id="parent" className="manage-column column-parent">
										Uploaded to
									</th>
									<th scope="col" id="date" className="manage-column column-date sortable desc">
										<a href="/">
											<span>Date</span>
											<span className="sorting-indicator" />
										</a>
									</th>
								</tr>
							</thead>
							<tbody id="the-list">
								{files.map((f) => {
									const author = userById.get(f.author_id);
									const icon = iconClass(f.mime_type);
									const isImage = f.mime_type.startsWith("image/");
									return (
										<tr key={f.id} id={`post-${f.id}`} className="iedit author-self level-0 hentry">
											<th scope="row" className="check-column">
												<label className="screen-reader-text" htmlFor={`cb-select-${f.id}`}>
													Select {f.title}
												</label>
												<input type="checkbox" name="media[]" id={`cb-select-${f.id}`} defaultValue={f.id} />
											</th>
											<td className="icon column-icon">
												{isImage ? <img width={60} height={60} src={f.url} className="attachment-60x60 size-60x60" alt="" loading="lazy" decoding="async" /> : <span className={icon} aria-hidden="true" />}
											</td>
											<td className="title column-title has-row-actions column-primary" data-colname="File">
												<strong>
													<a href="/" aria-label={`“${f.title}” (Edit)`}>
														{f.title}
													</a>
												</strong>
												<p className="filename">
													<span className="screen-reader-text">File name: </span>
													{f.filename}
												</p>
												<div className="row-actions">
													<span className="edit">
														<a href="/" aria-label={`Edit “${f.title}”`}>
															Edit
														</a>
														|
													</span>
													<span className="delete">
														<a href="/" className="submitdelete aria-button-if-js" aria-label={`Delete “${f.title}” permanently`}>
															Delete Permanently
														</a>
														|
													</span>
													<span className="view">
														<a href={f.url} aria-label={`View “${f.title}”`}>
															View
														</a>
													</span>
												</div>
											</td>
											<td className="author column-author" data-colname="Author">
												<a href="/">{author?.display_name ?? "—"}</a>
											</td>
											<td className="parent column-parent" data-colname="Uploaded to">
												<span aria-hidden="true">— ({fileSize(f.file_size)})</span>
												<span className="screen-reader-text">Unattached, {fileSize(f.file_size)}</span>
											</td>
											<td className="date column-date" data-colname="Date">
												{wpDate(f.date)}
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
									<th scope="col" className="manage-column column-icon">
										<span className="screen-reader-text">File thumbnail</span>
									</th>
									<th scope="col" className="manage-column column-title column-primary">
										File
									</th>
									<th scope="col" className="manage-column column-author">
										Author
									</th>
									<th scope="col" className="manage-column column-parent">
										Uploaded to
									</th>
									<th scope="col" className="manage-column column-date sortable desc">
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
									<option value={-1}>Bulk actions</option>
									<option value="delete">Delete permanently</option>
								</select>
								<input type="submit" id="doaction2" className="button action" defaultValue="Apply" />
							</div>
							<div className="tablenav-pages one-page">
								<span className="displaying-num">{items(total)}</span>
							</div>
							<br className="clear" />
						</div>
					</form>
					<div className="clear" />
				</div>
			</div>
		</>
	);
}
