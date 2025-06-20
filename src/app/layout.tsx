import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "ReactPress - WordPress Reimagined with Next.js",
		template: "%s | ReactPress",
	},
	description: "The complete platform for WordPress reimagined. ReactPress provides developer tools and modern infrastructure to build, scale, and secure faster WordPress experiences with Next.js 15.",
	keywords: ["WordPress", "React", "Next.js", "CMS", "Admin Panel", "Modern WordPress", "ReactPress"],
	authors: [
		{
			name: "Byron Wade",
			url: "https://twitter.com/byronwade",
		},
	],
	creator: "Byron Wade",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://reactpress.byronwade.com",
		title: "ReactPress - WordPress Reimagined with Next.js",
		description: "The complete platform for WordPress reimagined. Built with Next.js 15 for unparalleled performance.",
		siteName: "ReactPress",
	},
	twitter: {
		card: "summary_large_image",
		title: "ReactPress - WordPress Reimagined with Next.js",
		description: "The complete platform for WordPress reimagined. Built with Next.js 15 for unparalleled performance.",
		creator: "@byronwade",
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/manifest.json",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<GoogleAnalytics gaId="G-WE1RMQ935W" />
				{children}
			</body>
		</html>
	);
}
