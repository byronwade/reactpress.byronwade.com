import React from "react";
import { getDb } from "@/lib/fakebase/client";
import { wpDate } from "@/lib/fakebase/format";
import type { CommentRow } from "@/lib/fakebase/schema";

export default async function EditComments() {
	const db = await getDb();
	const { data } = await db.from("comments").select("*").order("date", { ascending: false });
	const comments: CommentRow[] = data ?? [];

	const counts = {
		approved: comments.filter((c) => c.status === "approved").length,
		pending: comments.filter((c) => c.status === "pending").length,
		spam: comments.filter((c) => c.status === "spam").length,
		trash: comments.filter((c) => c.status === "trash").length,
	};
	// WordPress "All" excludes spam and trash.
	const visible = comments.filter((c) => c.status === "approved" || c.status === "pending");
	const allCount = visible.length;

	return (
		<div id="wpbody-content" className="p-4">
			<div id="screen-meta" className="hidden">
				{/* Screen meta content */}
			</div>
			<div id="screen-meta-links" className="flex justify-end mb-4">
				<div id="screen-options-link-wrap" className="mr-2">
					<button type="button" id="show-settings-link" className="px-3 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
						Screen Options
					</button>
				</div>
				<div id="contextual-help-link-wrap">
					<button type="button" id="contextual-help-link" className="px-3 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
						Help
					</button>
				</div>
			</div>

			<div className="wrap">
				<h1 className="mb-4 text-2xl font-normal wp-heading-inline">Comments</h1>
				<hr className="my-4 border-t border-gray-300 wp-header-end" />

				<h2 className="sr-only screen-reader-text">Filter comments list</h2>
				<ul className="flex flex-wrap mb-4 text-sm subsubsub">
					<li className="mr-3">
						<a href="/" className="font-medium text-blue-500 hover:underline">
							All <span className="text-gray-500 count">(<span className="all-count">{allCount}</span>)</span>
						</a> |
					</li>
					<li className="mr-3">
						<a href="/" className="text-blue-500 hover:underline">
							Pending <span className="text-gray-500 count">(<span className="pending-count">{counts.pending}</span>)</span>
						</a> |
					</li>
					<li className="mr-3">
						<a href="/" className="text-blue-500 hover:underline">
							Approved <span className="text-gray-500 count">(<span className="approved-count">{counts.approved}</span>)</span>
						</a> |
					</li>
					<li className="mr-3">
						<a href="/" className="text-blue-500 hover:underline">
							Spam <span className="text-gray-500 count">(<span className="spam-count">{counts.spam}</span>)</span>
						</a> |
					</li>
					<li>
						<a href="/" className="text-blue-500 hover:underline">
							Trash <span className="text-gray-500 count">(<span className="trash-count">{counts.trash}</span>)</span>
						</a>
					</li>
				</ul>

				<form id="comments-form" method="get" className="mb-4">
					<input type="hidden" name="comment_status" defaultValue="all" />
					<input type="hidden" name="_total" defaultValue={allCount} />
					<input type="hidden" name="_per_page" defaultValue={20} />
					<input type="hidden" name="_page" defaultValue={1} />
					<input type="hidden" id="_ajax_fetch_list_nonce" name="_ajax_fetch_list_nonce" defaultValue="5aa80d7c1b" />
					<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/edit-comments.php" />

					<div className="overflow-x-auto">
						<table className="fixed w-full border-collapse wp-list-table widefat striped table-view-list comments">
							<thead>
								<tr className="bg-white">
									<td id="cb" className="w-8 p-2 manage-column column-cb check-column">
										<label className="sr-only screen-reader-text" htmlFor="cb-select-all-1">Select All</label>
										<input id="cb-select-all-1" type="checkbox" className="border-gray-300 rounded" />
									</td>
									<th scope="col" id="author" className="p-2 text-left manage-column column-author sortable desc">
										<a href="/" className="flex items-center text-blue-500 hover:underline">
											<span>Author</span>
											<span className="ml-1 sorting-indicator">▼</span>
										</a>
									</th>
									<th scope="col" id="comment" className="p-2 text-left manage-column column-comment column-primary">
										<span className="text-gray-700">Comment</span>
									</th>
									<th scope="col" id="response" className="p-2 text-left manage-column column-response sortable desc">
										<a href="/" className="flex items-center text-blue-500 hover:underline">
											<span>In response to</span>
											<span className="ml-1 sorting-indicator">▼</span>
										</a>
									</th>
									<th scope="col" id="date" className="p-2 text-left manage-column column-date sortable desc">
										<a href="/" className="flex items-center text-blue-500 hover:underline">
											<span>Submitted on</span>
											<span className="ml-1 sorting-indicator">▼</span>
										</a>
									</th>
								</tr>
							</thead>

							<tbody id="the-comment-list" data-wp-lists="list:comment">
								{visible.length === 0 ? (
									<tr className="no-items">
										<td className="colspanchange" colSpan={5}>
											<p className="my-4 text-center text-gray-500">No comments found.</p>
										</td>
									</tr>
								) : (
									visible.map((c) => (
										<tr key={c.id} id={`comment-${c.id}`} className={`align-top ${c.status === "pending" ? "unapproved pending" : "approved"}`}>
											<th scope="row" className="p-2 check-column">
												<label className="sr-only screen-reader-text" htmlFor={`cb-select-${c.id}`}>
													Select comment
												</label>
												<input id={`cb-select-${c.id}`} type="checkbox" name="delete_comments[]" defaultValue={c.id} className="border-gray-300 rounded" />
											</th>
											<td className="p-2 author column-author">
												<strong>{c.author_name}</strong>
												<br />
												{c.author_email ? (
													<a href={`mailto:${c.author_email}`} className="text-blue-500 hover:underline">
														{c.author_email}
													</a>
												) : null}
												{c.author_url ? (
													<>
														<br />
														<a href={c.author_url} className="text-blue-500 hover:underline">
															{c.author_url.replace(/^https?:\/\//, "")}
														</a>
													</>
												) : null}
											</td>
											<td className="p-2 comment column-comment has-row-actions column-primary">
												{c.status === "pending" ? <p className="mb-1 text-xs font-semibold text-amber-600">Pending</p> : null}
												<p className="comment-content">{c.content}</p>
												<div className="text-sm row-actions">
													{c.status === "pending" ? (
														<span className="approve">
															<a href="/" className="text-blue-500 hover:underline">Approve</a> |{" "}
														</span>
													) : (
														<span className="unapprove">
															<a href="/" className="text-blue-500 hover:underline">Unapprove</a> |{" "}
														</span>
													)}
													<span className="reply">
														<a href="/" className="text-blue-500 hover:underline">Reply</a> |{" "}
													</span>
													<span className="edit">
														<a href="/" className="text-blue-500 hover:underline">Edit</a> |{" "}
													</span>
													<span className="spam">
														<a href="/" className="text-blue-500 hover:underline">Spam</a> |{" "}
													</span>
													<span className="trash">
														<a href="/" className="text-red-600 hover:underline">Trash</a>
													</span>
												</div>
											</td>
											<td className="p-2 response column-response">
												<a href="/" className="text-blue-500 hover:underline">
													{c.post_title}
												</a>
											</td>
											<td className="p-2 date column-date">{wpDate(c.date)}</td>
										</tr>
									))
								)}
							</tbody>

							<tfoot>
								<tr className="bg-white">
									<td className="w-8 p-2 manage-column column-cb check-column">
										<label className="sr-only screen-reader-text" htmlFor="cb-select-all-2">Select All</label>
										<input id="cb-select-all-2" type="checkbox" className="border-gray-300 rounded" />
									</td>
									<th scope="col" className="p-2 text-left manage-column column-author sortable desc">
										<a href="/" className="flex items-center text-blue-500 hover:underline">
											<span>Author</span>
											<span className="ml-1 sorting-indicator">▼</span>
										</a>
									</th>
									<th scope="col" className="p-2 text-left manage-column column-comment column-primary">
										<span className="text-gray-700">Comment</span>
									</th>
									<th scope="col" className="p-2 text-left manage-column column-response sortable desc">
										<a href="/" className="flex items-center text-blue-500 hover:underline">
											<span>In response to</span>
											<span className="ml-1 sorting-indicator">▼</span>
										</a>
									</th>
									<th scope="col" className="p-2 text-left manage-column column-date sortable desc">
										<a href="/" className="flex items-center text-blue-500 hover:underline">
											<span>Submitted on</span>
											<span className="ml-1 sorting-indicator">▼</span>
										</a>
									</th>
								</tr>
							</tfoot>
						</table>
					</div>
				</form>

				<div id="ajax-response"></div>
			</div>
		</div>
	);
}
