import React from "react";
import ToggleScreenOptionsAndHelp, { Help } from "../../../components/ToggleScreenOptionsAndHelp/ToggleScreenOptionsAndHelp";

export function MenuOptions() {
	return (
		<>
			<ToggleScreenOptionsAndHelp>
				<Help>
					<div className="flex">
						<div className="w-1/4 contextual-help-tabs">
							<ul className="p-0 m-0 list-none">
								<li id="tab-link-overview" className="mb-1 active">
									<a href="/" aria-controls="tab-panel-overview" className="block p-2 bg-secondary text-secondary-foreground hover:bg-secondary/80">
										Overview
									</a>
								</li>
								<li id="tab-link-how-to-update" className="mb-1">
									<a href="/" aria-controls="tab-panel-how-to-update" className="block p-2 bg-secondary text-secondary-foreground hover:bg-secondary/80">
										How to Update
									</a>
								</li>
								<li id="tab-link-plugins-themes-auto-updates" className="mb-1">
									<a href="/" aria-controls="tab-panel-plugins-themes-auto-updates" className="block p-2 bg-secondary text-secondary-foreground hover:bg-secondary/80">
										Auto-updates
									</a>
								</li>
							</ul>
						</div>
						<div className="w-1/4 p-4 contextual-help-sidebar">
							<p className="mb-2 font-bold">For more information:</p>
							<p className="mb-2">
								<a href="/" className="text-primary hover:underline">
									Documentation on Updating ReactPress
								</a>
							</p>
							<p className="mb-2">
								<a href="/" className="text-primary hover:underline">
									Learn more: Auto-updates documentation
								</a>
							</p>
							<p className="mb-2">
								<a href="/" className="text-primary hover:underline">
									Support
								</a>
							</p>
						</div>
						<div className="w-1/2 contextual-help-tabs-wrap">
							<div id="tab-panel-overview" className="p-4 help-tab-content active">
								<p className="mb-4">On this screen, you can update to the latest version of ReactPress, as well as update your themes, plugins, and translations from the ReactPress.org repositories.</p>
								<p className="mb-4">If an update is available, you&apos;ll see a notification appear in the Toolbar and navigation menu. Keeping your site updated is important for security. It also makes the internet a safer place for you and your readers.</p>
							</div>
							<div id="tab-panel-how-to-update" className="hidden p-4 help-tab-content">
								<p className="mb-4">
									<strong>ReactPress</strong> — Updating your ReactPress installation is a simple one-click procedure: just <strong>click on the &quot;Update now&quot; button</strong> when you are notified that a new version is available. In most cases, ReactPress will automatically apply maintenance and security updates in the background for you.
								</p>
								<p className="mb-4">
									<strong>Themes and Plugins</strong> — To update individual themes or plugins from this screen, use the checkboxes to make your selection, then <strong>click on the appropriate &quot;Update&quot; button</strong>. To update all of your themes or plugins at once, you can check the box at the top of the section to select all before clicking the update button.
								</p>
							</div>
							<div id="tab-panel-plugins-themes-auto-updates" className="hidden p-4 help-tab-content">
								<p className="mb-4">Auto-updates can be enabled or disabled for ReactPress major versions and for each individual theme or plugin. Themes or plugins with auto-updates enabled will display the estimated date of the next auto-update. Auto-updates depends on the WP-Cron task scheduling system.</p>
								<p className="mb-4">Please note: Third-party themes and plugins, or custom code, may override ReactPress scheduling.</p>
							</div>
						</div>
					</div>
				</Help>
			</ToggleScreenOptionsAndHelp>
		</>
	);
}
