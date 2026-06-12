"use client";
import React from "react";

export default function Page() {
	return (
		<div id="wpbody-content">
			<div className="wrap">
				<h1 className="wp-heading-inline">Add New Post</h1>
				<hr className="wp-header-end" />
				<form name="post" id="post" method="post">
					<div id="poststuff">
						<div id="post-body" className="metabox-holder columns-2">
							<div id="post-body-content">
								<div id="titlediv">
									<div id="titlewrap">
										<label className="screen-reader-text" id="title-prompt-text" htmlFor="title">
											Add title
										</label>
										<input type="text" name="post_title" size={30} defaultValue="" id="title" spellCheck="true" autoComplete="off" placeholder="Add title" />
									</div>
								</div>
								<div id="postdivrich" className="postarea wp-editor-expand">
									<textarea className="wp-editor-area" rows={20} cols={40} name="content" id="content" placeholder="Start writing or type / to choose a block" defaultValue={""} />
								</div>
							</div>
							<div id="postbox-container-1" className="postbox-container">
								<div id="submitdiv" className="postbox">
									<div className="postbox-header">
										<h2 className="hndle">Publish</h2>
									</div>
									<div className="inside">
										<div className="submitbox" id="submitpost">
											<div id="minor-publishing">
												<div id="misc-publishing-actions">
													<div className="misc-pub-section misc-pub-post-status">
														Status: <span id="post-status-display">Draft</span>
													</div>
													<div className="misc-pub-section misc-pub-visibility">
														Visibility: <span id="post-visibility-display">Public</span>
													</div>
												</div>
												<div className="clear" />
											</div>
											<div id="major-publishing-actions">
												<div id="delete-action">
													<a className="submitdelete deletion" href="/">
														Move to Trash
													</a>
												</div>
												<div id="publishing-action">
													<span className="spinner" />
													<input type="submit" name="publish" id="publish" className="button button-primary button-large" defaultValue="Publish" />
												</div>
												<div className="clear" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
