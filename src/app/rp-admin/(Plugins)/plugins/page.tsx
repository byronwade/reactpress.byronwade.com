import React from "react";
import { getDb } from "@/lib/fakebase/client";
import { items } from "@/lib/fakebase/format";
import type { PluginRow } from "@/lib/fakebase/schema";

export default async function Plugins() {
	const db = await getDb();
	const { data } = await db.from("plugins").select("*").order("name", { ascending: true });
	const plugins: PluginRow[] = data ?? [];

	const total = plugins.length;
	const active = plugins.filter((p) => p.active).length;
	const inactive = total - active;
	const updates = plugins.filter((p) => p.update_available).length;

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
									<li id="tab-link-compatibility-problems">
										<a href="/" aria-controls="tab-panel-compatibility-problems">
											Troubleshooting
										</a>
									</li>
									<li id="tab-link-plugins-themes-auto-updates">
										<a href="/" aria-controls="tab-panel-plugins-themes-auto-updates">
											Auto-updates
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="/">Documentation on Managing Plugins</a>
								</p>
								<p>
									<a href="/">Learn more: Auto-updates documentation</a>
								</p>
								<p>
									<a href="/">Support</a>
								</p>
							</div>
							<div className="contextual-help-tabs-wrap">
								<div id="tab-panel-overview" className="help-tab-content active">
									<p>Plugins extend and expand the functionality of ReactPress. Once a plugin is installed, you may activate it or deactivate it here.</p>
									<p>
										The search for installed plugins will search for terms in their name, description, or author.
										<span id="live-search-desc" className="hide-if-no-js">
											The search results will be updated as you type.
										</span>
									</p>
									<p>
										If you would like to see more plugins to choose from, click on the “Add New” button and you will be able to browse or search for additional plugins from the <a href="/">ReactPress Plugin Directory</a>. Plugins in the ReactPress Plugin Directory are designed and developed by third parties, and are compatible with the license ReactPress uses. Oh, and they&apos;re free!
									</p>
								</div>
								<div id="tab-panel-compatibility-problems" className="help-tab-content">
									<p>Most of the time, plugins play nicely with the core of ReactPress and with other plugins. Sometimes, though, a plugin&apos;s code will get in the way of another plugin, causing compatibility issues. If your site starts doing strange things, this may be the problem. Try deactivating all your plugins and re-activating them in various combinations until you isolate which one(s) caused the issue.</p>
									<p>If something goes wrong with a plugin and you cannot use ReactPress, delete or rename that plugin&apos;s folder in the plugins directory and it will be automatically deactivated.</p>
								</div>
								<div id="tab-panel-plugins-themes-auto-updates" className="help-tab-content">
									<p>Auto-updates can be enabled or disabled for each individual plugin. Plugins with auto-updates enabled will display the estimated date of the next auto-update. Auto-updates depends on the WP-Cron task scheduling system.</p>
									<p>Auto-updates are only available for plugins recognized by ReactPress.org, or that include a compatible update system.</p>
									<p>Please note: Third-party themes and plugins, or custom code, may override ReactPress scheduling.</p>
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
									<input className="hide-column-tog" name="auto-updates-hide" type="checkbox" id="auto-updates-hide" defaultValue="auto-updates" defaultChecked={true} />
									Automatic Updates
								</label>
							</fieldset>
							<fieldset className="screen-options">
								<legend>Pagination</legend>
								<label htmlFor="plugins_per_page">Number of items per page:</label>
								<input type="number" step={1} min={1} max={999} className="screen-per-page" name="wp_screen_options[value]" id="plugins_per_page" maxLength={3} defaultValue={999} />
								<input type="hidden" name="wp_screen_options[option]" defaultValue="plugins_per_page" />
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
					<h1 className="wp-heading-inline">Plugins</h1>
					<a href="/rp-admin/plugin-install" className="page-title-action">
						Add New
					</a>
					<hr className="wp-header-end" />
					<h2 className="screen-reader-text">Filter plugins list</h2>
					<ul className="subsubsub">
						<li className="all">
							<a href="/" className="current" aria-current="page">
								All <span className="count">({total})</span>
							</a>
							{active > 0 || inactive > 0 ? " |" : ""}
						</li>
						{active > 0 ? (
							<li className="active">
								<a href="/">
									Active <span className="count">({active})</span>
								</a>
								{inactive > 0 || updates > 0 ? " |" : ""}
							</li>
						) : null}
						{inactive > 0 ? (
							<li className="inactive">
								<a href="/">
									Inactive <span className="count">({inactive})</span>
								</a>
								{updates > 0 ? " |" : ""}
							</li>
						) : null}
						{updates > 0 ? (
							<li className="upgrade">
								<a href="/">
									Update Available <span className="count">({updates})</span>
								</a>
							</li>
						) : null}
					</ul>
					<form className="search-form search-plugins" method="get">
						<p className="search-box">
							<label className="screen-reader-text" htmlFor="plugin-search-input">
								Search Installed Plugins:
							</label>
							<input type="search" id="plugin-search-input" className="wp-filter-search" name="s" defaultValue="" placeholder="Search installed plugins..." aria-describedby="live-search-desc" />
							<input type="submit" id="search-submit" className="button hide-if-js" defaultValue="Search Installed Plugins" />
						</p>
					</form>
					<form method="post" id="bulk-action-form">
						<input type="hidden" name="plugin_status" defaultValue="all" />
						<input type="hidden" name="paged" defaultValue={1} />
						<input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="b93b04ef3b" />
						<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/plugins.php" />
						<div className="tablenav top">
							<div className="alignleft actions bulkactions">
								<label htmlFor="bulk-action-selector-top" className="screen-reader-text">
									Select bulk action
								</label>
								<select name="action" id="bulk-action-selector-top">
									<option value={-1}>Bulk actions</option>
									<option value="activate-selected">Activate</option>
									<option value="deactivate-selected">Deactivate</option>
									<option value="update-selected">Update</option>
									<option value="delete-selected">Delete</option>
									<option value="enable-auto-update-selected">Enable Auto-updates</option>
									<option value="disable-auto-update-selected">Disable Auto-updates</option>
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
						<h2 className="screen-reader-text">Plugins list</h2>
						<table className="wp-list-table widefat plugins">
							<thead>
								<tr>
									<td id="cb" className="manage-column column-cb check-column">
										<label className="screen-reader-text" htmlFor="cb-select-all-1">
											Select All
										</label>
										<input id="cb-select-all-1" type="checkbox" />
									</td>
									<th scope="col" id="name" className="manage-column column-name column-primary">
										Plugin
									</th>
									<th scope="col" id="description" className="manage-column column-description">
										Description
									</th>
									<th scope="col" id="auto-updates" className="manage-column column-auto-updates">
										Automatic Updates
									</th>
								</tr>
							</thead>
							<tbody id="the-list">
								{plugins.map((p) => {
									const file = `${p.slug}/${p.slug}.php`;
									return (
										<tr key={p.id} className={p.active ? "active" : "inactive"} data-slug={p.slug} data-plugin={file}>
											<th scope="row" className="check-column">
												<label className="screen-reader-text" htmlFor={`checkbox_${p.id}`}>
													Select {p.name}
												</label>
												<input type="checkbox" name="checked[]" defaultValue={file} id={`checkbox_${p.id}`} />
											</th>
											<td className="plugin-title column-primary">
												<strong>{p.name}</strong>
												<div className="row-actions visible">
													{p.active ? (
														<span className="deactivate">
															<a href="/" id={`deactivate-${p.slug}`} aria-label={`Deactivate ${p.name}`}>
																Deactivate
															</a>
														</span>
													) : (
														<>
															<span className="activate">
																<a href="/" id={`activate-${p.slug}`} className="edit" aria-label={`Activate ${p.name}`}>
																	Activate
																</a>
																{" | "}
															</span>
															<span className="delete">
																<a href="/" id={`delete-${p.slug}`} aria-label={`Delete ${p.name}`}>
																	Delete
																</a>
															</span>
														</>
													)}
												</div>
												<button type="button" className="toggle-row">
													<span className="screen-reader-text">Show more details</span>
												</button>
											</td>
											<td className="column-description desc">
												<div className="plugin-description">
													<p>{p.description}</p>
												</div>
												<div className={`${p.active ? "active" : "inactive"} second plugin-version-author-uri`}>
													Version {p.version} | By{" "}
													<a href={p.author_url ?? "/"}>{p.author}</a> |{" "}
													<a href="/" className="thickbox open-plugin-details-modal" aria-label={`More information about ${p.name}`} data-title={p.name}>
														View details
													</a>
													{p.update_available ? (
														<div className="update-message notice inline notice-warning notice-alt">
															<p>
																There is a new version of {p.name} available. <a href="/">View details</a> or <a href="/">update now</a>.
															</p>
														</div>
													) : null}
												</div>
											</td>
											<td className="column-auto-updates">
												<a href="/" className="toggle-auto-update aria-button-if-js" data-wp-action="#" role="button">
													<span className="dashicons dashicons-update spin hidden" aria-hidden="true" />
													<span className="label">{p.update_available ? "Enable auto-updates" : "Disable auto-updates"}</span>
												</a>
												<div className="notice notice-error notice-alt inline hidden">
													<p />
												</div>
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
									<th scope="col" className="manage-column column-name column-primary">
										Plugin
									</th>
									<th scope="col" className="manage-column column-description">
										Description
									</th>
									<th scope="col" className="manage-column column-auto-updates">
										Automatic Updates
									</th>
								</tr>
							</tfoot>
						</table>
					</form>
				</div>
			</div>
		</>
	);
}
