import React from "react";

export default function Footer() {
	return (
		<div id="wpfooter" role="contentinfo" className="tw-absolute tw-right-0 tw-bottom-0 tw-left-0 tw-py-[10px] tw-px-[20px] tw-text-wp-text-subtle max-[782px]:tw-hidden">
			<p id="footer-left" className="alignleft tw-m-0 tw-text-[13px] tw-leading-[1.55]">
				<span id="footer-thankyou" className="tw-italic">
					Thank you for creating with <a href="/">ReactPress</a>.
				</span>
			</p>
			<p id="footer-upgrade" className="alignright tw-m-0 tw-text-[13px] tw-leading-[1.55]">
				Version 6.1.1
			</p>
			<div className="clear" />
		</div>
	);
}
