import React from "react";

export default function PrivacyAbout() {
	return (
		<div id="wpbody-content">
			<div className="wrap about__container">
				<div className="about__header">
					<div className="about__header-title">
						<h1>ReactPress 6.1.1 </h1>
					</div>
					<div className="about__header-text" />
					<nav className="about__header-navigation nav-tab-wrapper wp-clearfix" aria-label="Secondary menu">
						<a href="/rp-admin/about" className="nav-tab">
							What&apos;s New
						</a>
						<a href="/rp-admin/credits" className="nav-tab">
							Credits
						</a>
						<a href="/rp-admin/freedoms" className="nav-tab">
							Freedoms
						</a>
						<a href="/rp-admin/privacy" className="nav-tab nav-tab-active" aria-current="page">
							Privacy
						</a>
					</nav>
				</div>
				<div className="about__section">
					<div className="column">
						<p className="about__description">From time to time, your ReactPress site may send data to ReactPress.org — including, but not limited to — the version you are using, and a list of installed plugins and themes.</p>
					</div>
				</div>
				<div className="about__section">
					<div className="column">
						<p>
							This data is used to provide general enhancements to ReactPress, which includes helping to protect your site by finding and automatically installing new updates. It is also used to calculate statistics, such as those shown on the <a href="/rp-admin/privacy">ReactPress.org statistics page</a>.
						</p>
						<p>
							We take privacy and transparency very seriously. To learn more about what data is collected, and how it is used, please visit the <a href="/rp-admin/privacy">ReactPress Privacy Policy</a>.
						</p>
					</div>
				</div>
				<div className="about__section">
					<div className="column">
						<h2>Your Site &amp; the personal data law</h2>
						<p>
							ReactPress provides tools to help you manage personal data and comply with privacy laws. Under Tools you will find features to <a href="/rp-admin/export-personal-data">export</a> and <a href="/rp-admin/erase-personal-data">erase</a> personal data, and under Settings &gt; <a href="/rp-admin/options-privacy">Privacy</a> you can designate a privacy policy page and use the suggested policy text as a starting point.
						</p>
					</div>
				</div>
			</div>
			<div className="clear" />
		</div>
	);
}
