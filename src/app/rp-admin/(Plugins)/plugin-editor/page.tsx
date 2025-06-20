import React from "react";
export default function PluginEditor() {
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
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="/">Documentation on Editing Plugins</a>
								</p>
								<p>
									<a href="/">Documentation on Writing Plugins</a>
								</p>
								<p>
									<a href="/">Support</a>
								</p>
							</div>
							<div className="contextual-help-tabs-wrap">
								<div id="tab-panel-overview" className="help-tab-content active">
									<p>You can use the plugin file editor to make changes to any of your plugins&apos; individual PHP files. Be aware that if you make changes, plugins updates will overwrite your customizations.</p>
									<p>Choose a plugin to edit from the dropdown menu and click the Select button. Click once on any file name to load it in the editor, and make your changes. Do not forget to save your changes (Update File) when you are finished.</p>
									<p>The documentation menu below the editor lists the PHP functions recognized in the plugin file. Clicking Look Up takes you to a web page about that particular function.</p>
									<p id="editor-keyboard-trap-help-1">When using a keyboard to navigate:</p>
									<ul>
										<li id="editor-keyboard-trap-help-2">In the editing area, the Tab key enters a tab character.</li>
										<li id="editor-keyboard-trap-help-3">To move away from this area, press the Esc key followed by the Tab key.</li>
										<li id="editor-keyboard-trap-help-4">Screen reader users: when in forms mode, you may need to press the Esc key twice.</li>
									</ul>
									<p>If you want to make changes but do not want them to be overwritten when the plugin is updated, you may be ready to think about writing your own plugin. For information on how to edit plugins, write your own from scratch, or just better understand their anatomy, check out the links below.</p>
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
					<h1>Edit Plugins</h1>
					<div className="fileedit-sub">
						<div className="alignleft">
							<h2>
								Editing <strong>custom-post-type-ui/custom-post-type-ui.php</strong> (active)
							</h2>
						</div>
						<div className="alignright">
							<form action="#" method="get">
								<label htmlFor="plugin" id="theme-plugin-editor-selector">
									Select plugin to edit:
								</label>
								<select name="plugin" id="plugin">
									<option value="custom-post-type-ui/custom-post-type-ui.php" selected={true}>
										Custom Post Type UI
									</option>
									<option value="headless-mode/headless-mode.php">Headless Mode</option>
									<option value="integrate-firebase/init.php">Integrate Firebase</option>
									<option value="pageviews/post-views-total-views-wpgraphql.php">Post Views and Total Views for WPGraphQL</option>
									<option value="reactpress-importer/reactpress-importer.php">ReactPress Importer</option>
									<option value="wp-graphql/wp-graphql.php">WP GraphQL</option>
									<option value="wpgraphql-smart-cache/wp-graphql-smart-cache.php">WPGraphQL Smart Cache</option>
								</select>
								<input type="submit" name="Submit" id="Submit" className="button" defaultValue="Select" />
							</form>
						</div>
						<br className="clear" />
					</div>
					<div id="templateside">
						<h2 id="plugin-files-label">Plugin Files</h2>
						<ul role="tree" aria-labelledby="plugin-files-label">
							<li role="treeitem" tabIndex={-1} aria-expanded="true" aria-level={1} aria-posinset={1} aria-setsize={1}>
								<ul role="group">
									<li role="none" className="current-file">
										<a role="treeitem" tabIndex={0} href="/" aria-level={2} aria-setsize={1} aria-posinset={6}>
											<span className="notice notice-info">custom-post-type-ui.php</span>
										</a>
									</li>
									<li role="treeitem" aria-expanded="false" tabIndex={-1} aria-level={2} aria-setsize={6} aria-posinset={2}>
										<span className="folder-label">
											classes <span className="screen-reader-text">folder</span>
											<span aria-hidden="true" className="icon" />
										</span>
										<ul role="group" className="tree-folder">
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={1} aria-posinset={2}>
													class.cptui_debug_info.php
												</a>
											</li>
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={2} aria-posinset={2}>
													class.cptui_admin_ui.php
												</a>
											</li>
										</ul>
									</li>
									<li role="treeitem" aria-expanded="false" tabIndex={-1} aria-level={2} aria-setsize={6} aria-posinset={3}>
										<span className="folder-label">
											external <span className="screen-reader-text">folder</span>
											<span aria-hidden="true" className="icon" />
										</span>
										<ul role="group" className="tree-folder">
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={1} aria-posinset={1}>
													wpgraphql.php
												</a>
											</li>
										</ul>
									</li>
									<li role="treeitem" aria-expanded="false" tabIndex={-1} aria-level={2} aria-setsize={6} aria-posinset={4}>
										<span className="folder-label">
											inc <span className="screen-reader-text">folder</span>
											<span aria-hidden="true" className="icon" />
										</span>
										<ul role="group" className="tree-folder">
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={1} aria-posinset={9}>
													support.php
												</a>
											</li>
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={2} aria-posinset={9}>
													tools.php
												</a>
											</li>
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={3} aria-posinset={9}>
													utility.php
												</a>
											</li>
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={4} aria-posinset={9}>
													about.php
												</a>
											</li>
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={5} aria-posinset={9}>
													wp-cli.php
												</a>
											</li>
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={6} aria-posinset={9}>
													post-types.php
												</a>
											</li>
											<li role="treeitem" aria-expanded="false" tabIndex={-1} aria-level={3} aria-setsize={9} aria-posinset={7}>
												<span className="folder-label">
													tools-sections <span className="screen-reader-text">folder</span>
													<span aria-hidden="true" className="icon" />
												</span>
												<ul role="group" className="tree-folder">
													<li role="none" className="">
														<a role="treeitem" tabIndex={-1} href="/" aria-level={4} aria-setsize={1} aria-posinset={4}>
															tools-post-types.php
														</a>
													</li>
													<li role="none" className="">
														<a role="treeitem" tabIndex={-1} href="/" aria-level={4} aria-setsize={2} aria-posinset={4}>
															tools-debug.php
														</a>
													</li>
													<li role="none" className="">
														<a role="treeitem" tabIndex={-1} href="/" aria-level={4} aria-setsize={3} aria-posinset={4}>
															tools-get-code.php
														</a>
													</li>
													<li role="none" className="">
														<a role="treeitem" tabIndex={-1} href="/" aria-level={4} aria-setsize={4} aria-posinset={4}>
															tools-taxonomies.php
														</a>
													</li>
												</ul>
											</li>
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={8} aria-posinset={9}>
													taxonomies.php
												</a>
											</li>
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={9} aria-posinset={9}>
													listings.php
												</a>
											</li>
										</ul>
									</li>
									<li role="treeitem" aria-expanded="false" tabIndex={-1} aria-level={2} aria-setsize={6} aria-posinset={5}>
										<span className="folder-label">
											build <span className="screen-reader-text">folder</span>
											<span aria-hidden="true" className="icon" />
										</span>
										<ul role="group" className="tree-folder">
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={1} aria-posinset={6}>
													cptui-scripts.js
												</a>
											</li>
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={2} aria-posinset={6}>
													dashicons-picker.js
												</a>
											</li>
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={3} aria-posinset={6}>
													cptui-scripts.min.js
												</a>
											</li>
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={4} aria-posinset={6}>
													dashicons-picker.min.js
												</a>
											</li>
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={5} aria-posinset={6}>
													cptui-styles.min.css
												</a>
											</li>
											<li role="none" className="">
												<a role="treeitem" tabIndex={-1} href="/" aria-level={3} aria-setsize={6} aria-posinset={6}>
													cptui-styles.css
												</a>
											</li>
										</ul>
									</li>
									<li role="none" className="">
										<a role="treeitem" tabIndex={-1} href="/" aria-level={2} aria-setsize={6} aria-posinset={6}>
											readme.txt
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<form name="template" id="template" action="#" method="post">
						<input type="hidden" id="nonce" name="nonce" defaultValue="37d486131e" />
						<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/plugin-editor.php" />
						<div>
							<label htmlFor="newcontent" id="theme-plugin-editor-label">
								Selected file content:
							</label>
							<textarea cols={70} rows={25} name="newcontent" id="newcontent" aria-describedby="editor-keyboard-trap-help-1 editor-keyboard-trap-help-2 editor-keyboard-trap-help-3 editor-keyboard-trap-help-4" style={{ display: "none" }} defaultValue={"some code here I think"} />
							<div className="CodeMirror cm-s-default CodeMirror-wrap">
								<div
									className="CodeMirror-vscrollbar"
									cm-not-content="true"
									style={{
										display: "block",
										bottom: 0,
										width: 18,
										pointerEvents: "none",
									}}
								>
									<div style={{ minWidth: 1 }} />
								</div>
								<div
									className="CodeMirror-hscrollbar"
									cm-not-content="true"
									style={{
										height: 18,
										pointerEvents: "none",
									}}
								>
									<div
										style={{
											height: "100%",
											minHeight: 1,
											width: 0,
										}}
									/>
								</div>
								<div className="CodeMirror-scrollbar-filler" cm-not-content="true" />
								<div className="CodeMirror-gutter-filler" cm-not-content="true" />
								<div className="CodeMirror-scroll" tabIndex={-1}>
									<div
										className="CodeMirror-sizer"
										style={{
											marginLeft: 41,
											marginBottom: 0,
											borderRightWidth: 30,
											paddingRight: 0,
											paddingBottom: 0,
										}}
									>
										<div
											style={{
												position: "relative",
												top: 0,
											}}
										>
											<div className="CodeMirror-lines" role="presentation">
												<div
													role="presentation"
													style={{
														position: "relative",
														outline: "none",
													}}
												>
													<div className="CodeMirror-measure">
														<span>
															<span>​</span>x
														</span>
													</div>
													<div className="CodeMirror-measure" />
													<div
														style={{
															position: "relative",
															zIndex: 1,
														}}
													/>
													<div className="CodeMirror-cursors" />
													<div className="CodeMirror-code" role="textbox" autoCorrect="off" autoCapitalize="off" spellCheck="false" contentEditable="true" tabIndex={0} aria-multiline="true" aria-labelledby="theme-plugin-editor-label" aria-describedby="editor-keyboard-trap-help-1 editor-keyboard-trap-help-2 editor-keyboard-trap-help-3 editor-keyboard-trap-help-4" style={{ height: 300 }}>
														<div
															className="CodeMirror-activeline"
															style={{
																position: "relative",
															}}
														>
															<div className="CodeMirror-activeline-background CodeMirror-linebackground" contentEditable="false" />
															<div
																className="CodeMirror-gutter-background CodeMirror-activeline-gutter"
																contentEditable="false"
																style={{
																	left: "-41px",
																	width: 41,
																}}
															/>
															<div
																className="CodeMirror-gutter-wrapper CodeMirror-activeline-gutter"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	1
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-meta">&lt;?php</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	2
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">**</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	3
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* Custom Post Type UI.</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	4
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">*</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	5
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* For all your post type and taxonomy needs.</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	6
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">*</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	7
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* @package CPTUI</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	8
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* @subpackage Loader</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	9
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* @author WebDevStudios</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	10
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* @since 0.1.0.0</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	11
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* @license GPL-2.0+</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	12
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">*/</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	13
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span cm-text="">​</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	14
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">**</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	15
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* Plugin Name: Custom Post Type UI</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	16
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* Plugin URI: https://github.com/WebDevStudios/custom-post-type-ui/</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	17
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* Description: Admin UI panel for registering custom post types and taxonomies in ReactPress</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	18
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* Author: WebDevStudios</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	19
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* Version: 1.13.4</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	20
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* Author URI: https://webdevstudios.com/</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	21
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* Text Domain: custom-post-type-ui</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	22
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* Domain Path: /languages</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	23
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* License: GPL-2.0+</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	24
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">*/</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	25
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span cm-text="">​</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	26
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">phpcs:disable WebDevStudios.All.RequireAuthor</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	27
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">phpcs:set ReactPress.WP.I18n check_translator_comments false</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	28
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span cm-text="">​</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	29
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">Exit if accessed directly.</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	30
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-keyword">if</span> ( <span className="cm-operator">!</span> <span className="cm-builtin">defined</span>( <span className="cm-string">&apos;ABSPATH&apos;</span> ) ) {"{"}
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	31
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-tab" role="presentation" cm-text="	">
																		{"    "}
																	</span>
																	<span className="cm-keyword">exit</span>;
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	32
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	{"}"}
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	33
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span cm-text="">​</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	34
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-builtin">define</span>( <span className="cm-string">&apos;CPT_VERSION&apos;</span>, <span className="cm-string">&apos;1.13.4&apos;</span> ); <span className="cm-comment">Left for legacy purposes.</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	35
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-builtin">define</span>( <span className="cm-string">&apos;CPTUI_VERSION&apos;</span>, <span className="cm-string">&apos;1.13.4&apos;</span> );
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	36
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-builtin">define</span>( <span className="cm-string">&apos;CPTUI_WP_VERSION&apos;</span>, <span className="cm-variable">get_bloginfo</span>( <span className="cm-string">&apos;version&apos;</span> ) );
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	37
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span cm-text="">​</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	38
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">**</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	39
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* Load our Admin UI class that powers our form inputs.</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	40
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">*</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	41
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* @since 1.0.0</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	42
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">*</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position: "relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	43
																</div>
															</div>
															<pre className="CodeMirror-line" role="presentation">
																<span
																	role="presentation"
																	style={{
																		paddingRight: "0.1px",
																	}}
																>
																	<span className="cm-comment">* @internal</span>
																</span>
															</pre>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										style={{
											position: "absolute",
											height: 30,
											width: 1,
											borderBottom: "0px solid transparent",
										}}
									/>
									<div className="CodeMirror-gutters">
										<div className="CodeMirror-gutter CodeMirror-linenumbers" style={{ width: 40 }} />
									</div>
								</div>
							</div>
							<input type="hidden" name="action" defaultValue="update" />
							<input type="hidden" name="file" defaultValue="custom-post-type-ui/custom-post-type-ui.php" />
							<input type="hidden" name="plugin" defaultValue="custom-post-type-ui/custom-post-type-ui.php" />
						</div>
						<div id="documentation" className="hide-if-no-js">
							<label htmlFor="docs-list">Documentation:</label>
							<select name="docs-list" id="docs-list">
								<option value="">Function Name…</option>
								<option value="__">__()</option>
								<option value="add_action">add_action()</option>
								<option value="add_menu_page">add_menu_page()</option>
								<option value="add_query_arg">add_query_arg()</option>
								<option value="add_submenu_page">add_submenu_page()</option>
								<option value="apply_filters">apply_filters()</option>
								<option value="array_keys">array_keys()</option>
								<option value="array_map">array_map()</option>
								<option value="array_merge">array_merge()</option>
								<option value="array_slice">array_slice()</option>
								<option value="class_exists">class_exists()</option>
								<option value="count">count()</option>
								<option value="cptui_admin_url">cptui_admin_url()</option>
								<option value="cptui_is_new_install">cptui_is_new_install()</option>
								<option value="cptui_menu_icon">cptui_menu_icon()</option>
								<option value="define">define()</option>
								<option value="defined">defined()</option>
								<option value="delete_transient">delete_transient()</option>
								<option value="disp_boolean">disp_boolean()</option>
								<option value="do_action">do_action()</option>
								<option value="esc_attr">esc_attr()</option>
								<option value="explode">explode()</option>
								<option value="flush_rewrite_rules">flush_rewrite_rules()</option>
								<option value="get_bloginfo">get_bloginfo()</option>
								<option value="get_disp_boolean">get_disp_boolean()</option>
								<option value="get_option">get_option()</option>
								<option value="get_transient">get_transient()</option>
								<option value="implode">implode()</option>
								<option value="in_array">in_array()</option>
								<option value="is_array">is_array()</option>
								<option value="is_network_admin">is_network_admin()</option>
								<option value="load_plugin_textdomain">load_plugin_textdomain()</option>
								<option value="plugin_basename">plugin_basename()</option>
								<option value="plugin_dir_path">plugin_dir_path()</option>
								<option value="plugins_url">plugins_url()</option>
								<option value="printf">printf()</option>
								<option value="register_deactivation_hook">register_deactivation_hook()</option>
								<option value="register_post_type">register_post_type()</option>
								<option value="register_taxonomy">register_taxonomy()</option>
								<option value="remove_submenu_page">remove_submenu_page()</option>
								<option value="set_transient">set_transient()</option>
								<option value="sprintf">sprintf()</option>
								<option value="strpos">strpos()</option>
								<option value="trim">trim()</option>
								<option value="update_option">update_option()</option>
								<option value="wp_doing_ajax">wp_doing_ajax()</option>
								<option value="wp_register_script">wp_register_script()</option>
								<option value="wp_register_style">wp_register_style()</option>
								<option value="wp_safe_redirect">wp_safe_redirect()</option>
							</select>
						</div>
						<div className="editor-notices">
							<div className="inline notice notice-warning active-plugin-edit-warning">
								<p>
									<strong>Warning:</strong> Making changes to active plugins is not recommended.
								</p>
							</div>
						</div>
						<p className="submit">
							<input type="submit" name="submit" id="submit" className="button button-primary" defaultValue="Update File" /> <span className="spinner" />
						</p>
					</form>
					<br className="clear" />
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
