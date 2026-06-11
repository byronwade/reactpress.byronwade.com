import React from "react";

export default function ThemeInstall() {
	return (
		<div id="wpbody-content">
			<div className="wrap">
				<h1 className="wp-heading-inline">Add Themes</h1>
				<a href="/rp-admin/theme-install" className="upload-view-toggle page-title-action" aria-expanded="false">
					Upload Theme
				</a>
				<div className="upload-theme">
					<div className="upload-theme-wrap">
						<p className="install-help">If you have a theme in a .zip format, you may install or update it by uploading it here.</p>
						<form method="post" encType="multipart/form-data" className="wp-upload-form" action="#">
							<input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="b6f8a1d2c3" />
							<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/theme-install.php" />
							<label className="screen-reader-text" htmlFor="themezip">
								Theme zip file
							</label>
							<input type="file" id="themezip" name="themezip" accept=".zip" />
							<input type="submit" name="install-theme-submit" id="install-theme-submit" className="button" defaultValue="Install Now" disabled={true} />
						</form>
					</div>
				</div>
				<hr className="wp-header-end" />
				<div className="wp-filter">
					<div className="filter-count">
						<span className="count theme-count" />
					</div>
					<ul className="filter-links">
						<li>
							<a href="/rp-admin/theme-install" data-sort="featured" className="current" aria-current="page">
								Featured
							</a>
						</li>
						<li>
							<a href="/rp-admin/theme-install" data-sort="popular">
								Popular
							</a>
						</li>
						<li>
							<a href="/rp-admin/theme-install" data-sort="new">
								Latest
							</a>
						</li>
						<li>
							<a href="/rp-admin/theme-install" data-sort="favorites">
								Favorites
							</a>
						</li>
					</ul>
					<a className="drawer-toggle" href="/rp-admin/theme-install" aria-expanded="false">
						Feature Filter
					</a>
					<div className="search-form">
						<label className="screen-reader-text" htmlFor="wp-filter-search-input">
							Search Themes
						</label>
						<input placeholder="Search themes..." type="search" aria-describedby="live-search-desc" id="wp-filter-search-input" className="wp-filter-search" />
						<p className="screen-reader-text" id="live-search-desc">
							The search results will be updated as you type.
						</p>
					</div>
				</div>
				<h2 className="screen-reader-text">Themes list</h2>
				<div className="theme-browser content-filterable">
					<div className="themes wp-clearfix">
						<div className="theme" tabIndex={0} aria-describedby="twentytwentythree-action twentytwentythree-name">
							<div className="theme-screenshot">
								<img src="https://i0.wp.com/themes.svn.wordpress.org/twentytwentythree/1.0/screenshot.png" alt="" />
							</div>
							<button type="button" aria-label="Install Twenty Twenty-Three" className="more-details" id="twentytwentythree-action">
								Theme Details
							</button>
							<div className="theme-author">By the WordPress team</div>
							<h3 className="theme-name" id="twentytwentythree-name">
								Twenty Twenty-Three
							</h3>
							<div className="theme-actions">
								<a className="button button-primary theme-install" data-name="Twenty Twenty-Three" data-slug="twentytwentythree" href="/rp-admin/theme-install" aria-label="Install Twenty Twenty-Three">
									Install
								</a>
								<button className="button preview install-theme-preview">Preview</button>
							</div>
						</div>
						<div className="theme" tabIndex={0} aria-describedby="twentytwentytwo-action twentytwentytwo-name">
							<div className="theme-screenshot">
								<img src="https://i0.wp.com/themes.svn.wordpress.org/twentytwentytwo/1.3/screenshot.png" alt="" />
							</div>
							<button type="button" aria-label="Install Twenty Twenty-Two" className="more-details" id="twentytwentytwo-action">
								Theme Details
							</button>
							<div className="theme-author">By the WordPress team</div>
							<h3 className="theme-name" id="twentytwentytwo-name">
								Twenty Twenty-Two
							</h3>
							<div className="theme-actions">
								<a className="button button-primary theme-install" data-name="Twenty Twenty-Two" data-slug="twentytwentytwo" href="/rp-admin/theme-install" aria-label="Install Twenty Twenty-Two">
									Install
								</a>
								<button className="button preview install-theme-preview">Preview</button>
							</div>
						</div>
						<div className="theme" tabIndex={0} aria-describedby="twentytwentyone-action twentytwentyone-name">
							<div className="theme-screenshot">
								<img src="https://i0.wp.com/themes.svn.wordpress.org/twentytwentyone/1.7/screenshot.png" alt="" />
							</div>
							<button type="button" aria-label="Install Twenty Twenty-One" className="more-details" id="twentytwentyone-action">
								Theme Details
							</button>
							<div className="theme-author">By the WordPress team</div>
							<h3 className="theme-name" id="twentytwentyone-name">
								Twenty Twenty-One
							</h3>
							<div className="theme-actions">
								<a className="button button-primary theme-install" data-name="Twenty Twenty-One" data-slug="twentytwentyone" href="/rp-admin/theme-install" aria-label="Install Twenty Twenty-One">
									Install
								</a>
								<button className="button preview install-theme-preview">Preview</button>
							</div>
						</div>
					</div>
				</div>
				<div className="theme-install-overlay wp-full-overlay expanded" />
				<p className="no-themes">No themes found. Try a different search.</p>
				<span className="spinner" />
				<br className="clear" />
			</div>
		</div>
	);
}
