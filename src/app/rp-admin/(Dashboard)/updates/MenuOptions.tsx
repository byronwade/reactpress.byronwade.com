import React from "react";
import ToggleScreenOptionsAndHelp, { Help } from "../../../components/ToggleScreenOptionsAndHelp/ToggleScreenOptionsAndHelp";

export function MenuOptions() {
	return (
		<ToggleScreenOptionsAndHelp>
			<Help>
				<div id="contextual-help-columns">
					<div className="contextual-help-tabs">
						<ul>
							<li id="tab-link-overview" className="active">
								<a href="/" aria-controls="tab-panel-overview">
									Overview
								</a>
							</li>
							<li id="tab-link-how-to-update">
								<a href="/" aria-controls="tab-panel-how-to-update">
									How to Update
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
							<a href="/">Documentation on Updating ReactPress</a>
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
							<p>On this screen, you can update to the latest version of ReactPress, as well as update your themes, plugins, and translations from the ReactPress.org repositories.</p>
							<p>If an update is available, you&apos;ll see a notification appear in the Toolbar and navigation menu. Keeping your site updated is important for security. It also makes the internet a safer place for you and your readers.</p>
						</div>
						<div id="tab-panel-how-to-update" className="help-tab-content">
							<p>
								<strong>ReactPress</strong> — Updating your ReactPress installation is a simple one-click procedure: just <strong>click on the &quot;Update now&quot; button</strong> when you are notified that a new version is available. In most cases, ReactPress will automatically apply maintenance and security updates in the background for you.
							</p>
							<p>
								<strong>Themes and Plugins</strong> — To update individual themes or plugins from this screen, use the checkboxes to make your selection, then <strong>click on the appropriate &quot;Update&quot; button</strong>. To update all of your themes or plugins at once, you can check the box at the top of the section to select all before clicking the update button.
							</p>
						</div>
						<div id="tab-panel-plugins-themes-auto-updates" className="help-tab-content">
							<p>Auto-updates can be enabled or disabled for ReactPress major versions and for each individual theme or plugin. Themes or plugins with auto-updates enabled will display the estimated date of the next auto-update. Auto-updates depends on the WP-Cron task scheduling system.</p>
							<p>Please note: Third-party themes and plugins, or custom code, may override ReactPress scheduling.</p>
						</div>
					</div>
				</div>
			</Help>
		</ToggleScreenOptionsAndHelp>
	);
}
