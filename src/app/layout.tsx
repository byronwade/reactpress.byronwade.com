import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	colorScheme: "light dark",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#000000" },
	],
};

export const metadata: Metadata = {
	title: {
		default: "ReactPress - Modern WordPress Admin Interface | Next.js WordPress Alternative 2024",
		template: "%s | ReactPress - WordPress Reimagined",
	},
	description: "ReactPress is the fastest WordPress admin interface built with Next.js 15, React 18, and TypeScript. Experience 5x faster performance than traditional WordPress admin. Perfect for developers building headless WordPress, WordPress alternatives, and modern CMS solutions. Open source WordPress dashboard reimagined for 2024.",
	keywords: [
		// Primary WordPress keywords
		"WordPress alternative 2024",
		"WordPress admin interface",
		"modern WordPress admin",
		"WordPress dashboard alternative",
		"WordPress admin panel",
		"WordPress headless admin",
		"WordPress CMS alternative",

		// Technology-specific WordPress keywords
		"Next.js WordPress",
		"React WordPress admin",
		"TypeScript WordPress",
		"WordPress with React",
		"WordPress Next.js integration",
		"WordPress React components",

		// Performance-focused WordPress keywords
		"fast WordPress admin",
		"WordPress performance optimization",
		"WordPress speed improvement",
		"WordPress admin speed",
		"lightweight WordPress admin",

		// Developer-focused WordPress keywords
		"WordPress developer tools",
		"WordPress admin customization",
		"WordPress UI components",
		"WordPress design system",
		"WordPress component library",
		"WordPress admin theme",

		// Headless/Modern WordPress keywords
		"headless WordPress admin",
		"WordPress REST API admin",
		"WordPress GraphQL admin",
		"decoupled WordPress",
		"JAMstack WordPress",
		"serverless WordPress",

		// Specific product keywords
		"ReactPress",
		"WordPress clone",
		"WordPress recreation",
		"WordPress rebuild",
		"open source WordPress alternative",
	],
	authors: [
		{
			name: "Byron Wade",
			url: "https://byronwade.com",
		},
	],
	creator: "Byron Wade",
	publisher: "Byron Wade",
	applicationName: "ReactPress",
	generator: "Next.js 15",
	referrer: "origin-when-cross-origin",
	verification: {
		google: "google-site-verification-code", // You'll need to add your actual verification code
	},
	metadataBase: new URL("https://reactpress.byronwade.com"),
	alternates: {
		canonical: "https://reactpress.byronwade.com",
		languages: {
			"en-US": "https://reactpress.byronwade.com",
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://reactpress.byronwade.com",
		title: "ReactPress - Modern WordPress Admin Interface | 5x Faster WordPress Alternative",
		description: "The fastest WordPress admin interface ever built. ReactPress delivers familiar WordPress workflows with Next.js 15 performance. Open source WordPress alternative for modern developers.",
		siteName: "ReactPress",
		images: [
			{
				url: "/Optimized Image-02.png",
				width: 1200,
				height: 630,
				alt: "ReactPress - Modern WordPress Admin Interface Dashboard",
				type: "image/png",
			},
			{
				url: "/HighRes-02.jpg",
				width: 1920,
				height: 1080,
				alt: "ReactPress WordPress Alternative Interface",
				type: "image/jpeg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@byron_c_wade",
		creator: "@byron_c_wade",
		title: "ReactPress - WordPress Admin Reimagined with Next.js 15",
		description: "Experience WordPress admin 5x faster. Built with Next.js 15, React 18, and TypeScript. The modern WordPress alternative developers love.",
		images: ["/Optimized Image-02.png"],
	},
	icons: {
		icon: [
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		shortcut: "/favicon.ico",
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
		other: [
			{
				rel: "mask-icon",
				url: "/safari-pinned-tab.svg",
				color: "#0073aa",
			},
		],
	},
	manifest: "/manifest.json",
	other: {
		"msapplication-TileColor": "#0073aa",
		"msapplication-config": "/browserconfig.xml",
		"apple-mobile-web-app-capable": "yes",
		"apple-mobile-web-app-status-bar-style": "default",
		"format-detection": "telephone=no",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	category: "Technology",
	classification: "WordPress Alternative, Admin Interface, Developer Tools",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{/* Enhanced structured data for maximum SEO impact */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@graph": [
								{
									"@type": "WebSite",
									"@id": "https://reactpress.byronwade.com/#website",
									url: "https://reactpress.byronwade.com/",
									name: "ReactPress",
									alternateName: "ReactPress WordPress Alternative",
									description: "Modern WordPress Admin Interface built with Next.js 15",
									publisher: {
										"@id": "https://reactpress.byronwade.com/#person",
									},
									potentialAction: [
										{
											"@type": "SearchAction",
											target: {
												"@type": "EntryPoint",
												urlTemplate: "https://reactpress.byronwade.com/?q={search_term_string}",
											},
											"query-input": "required name=search_term_string",
										},
									],
									inLanguage: "en-US",
									copyrightYear: "2024",
									dateCreated: "2024-10-01",
									dateModified: "2024-12-01",
								},
								{
									"@type": "WebPage",
									"@id": "https://reactpress.byronwade.com/#webpage",
									url: "https://reactpress.byronwade.com/",
									name: "ReactPress - Modern WordPress Admin Interface | Next.js WordPress Alternative 2024",
									isPartOf: {
										"@id": "https://reactpress.byronwade.com/#website",
									},
									about: [
										{
											"@type": "Thing",
											name: "WordPress Alternative",
											description: "Modern alternative to WordPress admin interface",
										},
										{
											"@type": "Thing",
											name: "React Admin Interface",
											description: "Admin interface built with React and Next.js",
										},
									],
									description: "ReactPress is a modern WordPress admin interface built with Next.js 15, React 18, and TypeScript. Experience 5x faster performance with familiar WordPress workflows.",
									breadcrumb: {
										"@id": "https://reactpress.byronwade.com/#breadcrumb",
									},
									inLanguage: "en-US",
									potentialAction: [
										{
											"@type": "ReadAction",
											target: ["https://reactpress.byronwade.com/"],
										},
									],
									speakable: {
										"@type": "SpeakableSpecification",
										cssSelector: ["h1", "h2", ".changelog"],
									},
								},
								{
									"@type": "SoftwareApplication",
									"@id": "https://reactpress.byronwade.com/#software",
									name: "ReactPress",
									alternateName: "ReactPress WordPress Alternative",
									description: "Modern WordPress admin interface built with Next.js 15, React 18, and TypeScript. The fastest WordPress alternative for developers.",
									url: "https://reactpress.byronwade.com",
									downloadUrl: "https://github.com/byronwade/ReactPress",
									applicationCategory: ["DeveloperApplication", "ProductivityApplication", "WebApplication"],
									applicationSubCategory: "Content Management System",
									operatingSystem: ["Web Browser", "Cross-platform"],
									programmingLanguage: ["TypeScript", "JavaScript", "React", "Next.js"],
									runtimePlatform: "Node.js",
									softwareVersion: "1.2.0",
									dateCreated: "2024-10-01",
									dateModified: "2024-12-01",
									datePublished: "2024-10-01",
									license: "https://opensource.org/licenses/MIT",
									offers: {
										"@type": "Offer",
										price: "0",
										priceCurrency: "USD",
										availability: "https://schema.org/InStock",
									},
									author: {
										"@id": "https://reactpress.byronwade.com/#person",
									},
									creator: {
										"@id": "https://reactpress.byronwade.com/#person",
									},
									maintainer: {
										"@id": "https://reactpress.byronwade.com/#person",
									},
									codeRepository: "https://github.com/byronwade/ReactPress",
									targetProduct: {
										"@type": "SoftwareApplication",
										name: "WordPress",
										applicationCategory: "Content Management System",
									},
									featureList: ["5x faster than WordPress admin", "Modern React components", "TypeScript support", "Responsive design", "WordPress-compatible interface", "Open source", "Next.js 15 powered", "Tailwind CSS styling"],
									screenshot: "https://reactpress.byronwade.com/Optimized Image-02.png",
									softwareHelp: {
										"@type": "CreativeWork",
										url: "https://github.com/byronwade/ReactPress/blob/main/README.md",
									},
									releaseNotes: "https://reactpress.byronwade.com/#changelog",
								},
								{
									"@type": "Person",
									"@id": "https://reactpress.byronwade.com/#person",
									name: "Byron Wade",
									givenName: "Byron",
									familyName: "Wade",
									url: "https://byronwade.com",
									sameAs: ["https://twitter.com/byron_c_wade", "https://github.com/byronwade", "https://linkedin.com/in/byronwade"],
									jobTitle: "Software Developer",
									worksFor: {
										"@type": "Organization",
										name: "Byron Wade Development",
									},
									alumniOf: {
										"@type": "Organization",
										name: "Self-taught Developer",
									},
									knowsAbout: ["WordPress Development", "React Development", "Next.js", "TypeScript", "Web Development", "Frontend Development"],
								},
								{
									"@type": "Organization",
									"@id": "https://reactpress.byronwade.com/#organization",
									name: "ReactPress",
									alternateName: "ReactPress Project",
									url: "https://reactpress.byronwade.com",
									logo: {
										"@type": "ImageObject",
										url: "https://reactpress.byronwade.com/logo192.png",
										width: 192,
										height: 192,
									},
									sameAs: ["https://github.com/byronwade/ReactPress"],
									founder: {
										"@id": "https://reactpress.byronwade.com/#person",
									},
								},
								{
									"@type": "BreadcrumbList",
									"@id": "https://reactpress.byronwade.com/#breadcrumb",
									itemListElement: [
										{
											"@type": "ListItem",
											position: 1,
											name: "Home",
											item: "https://reactpress.byronwade.com/",
										},
									],
								},
							],
						}),
					}}
				/>

				{/* Additional SEO meta tags */}
				<meta name="geo.region" content="US" />
				<meta name="geo.placename" content="United States" />
				<meta name="ICBM" content="39.8283, -98.5795" />

				{/* Performance and technical SEO */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://www.google-analytics.com" />
				<link rel="dns-prefetch" href="//github.com" />

				{/* WordPress-specific meta tags */}
				<meta name="generator" content="ReactPress 1.2.0 - WordPress Alternative" />
				<meta name="software" content="ReactPress" />
				<meta name="web_author" content="Byron Wade" />

				{/* Rich snippets support */}
				<meta property="product:brand" content="ReactPress" />
				<meta property="product:availability" content="in stock" />
				<meta property="product:condition" content="new" />
				<meta property="product:price:amount" content="0" />
				<meta property="product:price:currency" content="USD" />
			</head>
			<body>
				<GoogleAnalytics gaId="G-WE1RMQ935W" />
				{children}
				<PerformanceMonitor showInDev={true} position="bottom-right" />
			</body>
		</html>
	);
}
