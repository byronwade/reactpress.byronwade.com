import React from "react";
import { MenuOptions } from "./MenuOptions";

export default function Update() {
	return (
		<div id="wpbody-content">
			<MenuOptions />
			<div className="wrap">
				<h1>ReactPress Updates</h1>
				<p>Here you can find information about updates, set auto-updates and see what plugins or themes need updating.</p>
				<h2 className="wp-current-version">Current version: 6.1.1</h2>
				<p className="update-last-checked">
					Last checked on February 17, 2023 at 9:43 am GMT+0000.{" "}
					<a href="/">Check again.</a>
				</p>
				<p className="auto-update-status">This site will not receive automatic updates for new versions of ReactPress. </p>
				<h2 className="response">You have the latest version of ReactPress.</h2>
				<ul className="core-updates">
					<li>
						<p />
						<form method="post" action="#" name="upgrade" className="upgrade">
							<input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="01913a925f" />
							<input type="hidden" name="_wp_http_referer" defaultValue="/wp-admin/update-core.php" />
							<p>
								<input name="version" defaultValue="6.1.1" type="hidden" />
								<input name="locale" defaultValue="en_US" type="hidden" />
								<input type="submit" name="upgrade" id="upgrade" className="button" defaultValue="Re-install version 6.1.1" />
							</p>
						</form>
					</li>
				</ul>
				<h2>Plugins</h2>
				<p>Your plugins are all up to date.</p>
				<h2>Themes</h2>
				<p>Your themes are all up to date.</p>
			</div>
			<div className="clear" />
		</div>
	);
}
