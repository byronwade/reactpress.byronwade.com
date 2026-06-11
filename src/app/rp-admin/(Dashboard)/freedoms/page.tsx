import React from "react";

export default function Freedoms() {
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
						<a href="/rp-admin/freedoms" className="nav-tab nav-tab-active" aria-current="page">
							Freedoms
						</a>
						<a href="/rp-admin/privacy" className="nav-tab">
							Privacy
						</a>
					</nav>
				</div>
				<div className="about__section">
					<div className="column">
						<p className="about__description">
							ReactPress is Free and open source software, built by a distributed community of volunteers. It is released under the <a href="/rp-admin/freedoms">GNU General Public License</a> (GPL), which means there are four core freedoms, and the bedrock of what ReactPress stands for.
						</p>
					</div>
				</div>
				<div className="about__section has-2-columns">
					<div className="column">
						<h3>The 1st Freedom</h3>
						<p>To run the program for any purpose.</p>
					</div>
					<div className="column">
						<h3>The 2nd Freedom</h3>
						<p>To study how the program works and change it to make it do what you wish.</p>
					</div>
				</div>
				<div className="about__section has-2-columns">
					<div className="column">
						<h3>The 3rd Freedom</h3>
						<p>To redistribute.</p>
					</div>
					<div className="column">
						<h3>The 4th Freedom</h3>
						<p>To distribute copies of your modified versions to others.</p>
					</div>
				</div>
				<div className="about__section">
					<div className="column">
						<p>
							Every plugin and theme in ReactPress&apos;s directory is 100% GPL or a similarly free and compatible license, so you can feel safe finding plugins and themes there. If you get a plugin or theme from another source, make sure to ask them if it&apos;s GPL first. If they don&apos;t respect the ReactPress license, we don&apos;t recommend them.
						</p>
						<p>
							It&apos;s important to share these freedoms because together we can do more than we can apart. We hope you join us in spreading them far and wide.
						</p>
					</div>
				</div>
			</div>
			<div className="clear" />
		</div>
	);
}
