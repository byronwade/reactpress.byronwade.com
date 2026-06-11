import React from "react";

export default function Credits() {
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
						<a href="/rp-admin/credits" className="nav-tab nav-tab-active" aria-current="page">
							Credits
						</a>
						<a href="/rp-admin/freedoms" className="nav-tab">
							Freedoms
						</a>
						<a href="/rp-admin/privacy" className="nav-tab">
							Privacy
						</a>
					</nav>
				</div>
				<div className="about__section">
					<div className="column">
						<p className="about__description">ReactPress is created by a worldwide team of passionate individuals.</p>
					</div>
				</div>
				<div className="about__section">
					<div className="column">
						<h2 className="wp-people-group">Project Leaders</h2>
						<ul className="wp-people-group" id="wp-people-group-project-leaders">
							<li className="wp-person" id="wp-person-byronwade">
								<a href="/rp-admin/credits" className="web">
									Byron Wade
								</a>
								<span className="title">Lead Developer</span>
							</li>
						</ul>
						<h2 className="wp-people-group">Core Contributors</h2>
						<p className="wp-credits-list">
							The ReactPress community, the <a href="/rp-admin/credits">WordPress project</a>, and everyone who has contributed code, documentation, and design.
						</p>
						<h2 className="wp-people-group">External Libraries</h2>
						<p className="wp-credits-list">
							ReactPress is built on the shoulders of giants, including <a href="/rp-admin/credits">Next.js</a>, <a href="/rp-admin/credits">React</a>, <a href="/rp-admin/credits">Tailwind CSS</a>, and the original WordPress admin interface.
						</p>
					</div>
				</div>
			</div>
			<div className="clear" />
		</div>
	);
}
