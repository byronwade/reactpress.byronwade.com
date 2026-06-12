import React, { ReactNode } from "react";
import "./index.css";
import Sidebar from "../components/Admin/Common/sidebar";
import Toolbar from "../components/Admin/Common/toolbar";
import Footer from "../components/Admin/Common/Footer/Footer";

interface Props {
	children?: ReactNode;
	// any props that come into the component
}

export default function RPAdmin({ children }: Props) {
	return (
		<div className="wp-toolbar">
			<div className="wp-admin wp-core-ui js edit-php auto-fold admin-bar post-type-page branch-6-1 version-6-1-1 admin-color-fresh locale-en-us customize-support sticky-menu svg">
				<Toolbar />
				<div id="wpwrap" className="tw-relative tw-h-auto tw-min-h-full tw-w-full tw-[-webkit-font-smoothing:subpixel-antialiased]">
					<Sidebar />
					<div id="wpcontent" className="tw-ml-[160px] tw-h-full tw-pl-[20px]">
						<div id="wpbody" role="main" className="tw-relative">
							{children}
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</div>
	);
}
