/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	// SEO and Performance Optimizations
	compress: true,
	poweredByHeader: false,
	generateEtags: true,

	// Simplified experimental features
	experimental: {
		optimizeCss: true,
	},

	// Enhanced image optimization for SEO and performance
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
		],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		formats: ["image/webp", "image/avif"],
		minimumCacheTTL: 31536000, // 1 year
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		// Loader optimization
		loader: "default",
	},

	// Basic headers
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
				],
			},
		];
	},

	// Redirects for SEO (if needed)
	async redirects() {
		return [
			// Add any necessary redirects here
		];
	},

	// Rewrites for clean URLs and API optimization
	async rewrites() {
		return [
			// Add any URL rewrites here if needed
		];
	},

	// Simplified webpack config
	webpack: (config, { isServer, dev }) => {
		// Disable webpack cache to prevent hanging
		config.cache = false;

		if (!isServer) {
			config.resolve.fallback = {
				fs: false,
				path: false,
				os: false,
			};
		}

		// Bundle analyzer
		if (process.env.ANALYZE === "true") {
			const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
			config.plugins.push(
				new BundleAnalyzerPlugin({
					analyzerMode: "server",
					analyzerPort: isServer ? 8888 : 8889,
					openAnalyzer: true,
				})
			);
		}

		return config;
	},

	// Output configuration for optimal deployment
	output: "standalone",

	// Compiler optimizations
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},

	// TypeScript configuration
	typescript: {
		ignoreBuildErrors: false,
	},

	// ESLint configuration
	eslint: {
		ignoreDuringBuilds: false,
		dirs: ["src"],
	},

	// Logging for debugging performance
	logging: {
		fetches: {
			fullUrl: true,
		},
	},

	// Development optimizations
	...(process.env.NODE_ENV === "development" && {
		devIndicators: {
			position: "bottom-right",
		},
	}),
};

module.exports = nextConfig;