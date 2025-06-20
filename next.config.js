/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	// SEO and Performance Optimizations
	compress: true,
	poweredByHeader: false,
	generateEtags: true,

	// Experimental features for Next.js 15 and performance
	experimental: {
		// Partial Prerendering (PPR) - Only available in canary
		// ppr: true, // Disabled for stable version

		// Performance optimizations
		optimizeCss: true,
		optimizePackageImports: ["lucide-react", "@heroicons/react", "@radix-ui/react-icons", "framer-motion"],

		// Advanced caching and prefetching
		staleTimes: {
			dynamic: 30,
			static: 180,
		},

		// Server actions optimization
		serverActions: {
			allowedOrigins: ["localhost:3000", "localhost:3001", "reactpress.byronwade.com"],
		},

		// Memory optimization
		esmExternals: true,

		// WebAssembly support
		webVitalsAttribution: ["CLS", "LCP", "FCP", "FID", "TTFB"],
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

	// Headers for SEO, security, and performance
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
					{
						key: "Permissions-Policy",
						value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
					},
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					// Preload critical resources
					{
						key: "Link",
						value: "</logo192.png>; rel=preload; as=image",
					},
				],
			},
			{
				source: "/sitemap.xml",
				headers: [
					{
						key: "Content-Type",
						value: "application/xml",
					},
					{
						key: "Cache-Control",
						value: "public, max-age=86400, s-maxage=86400",
					},
				],
			},
			{
				source: "/robots.txt",
				headers: [
					{
						key: "Content-Type",
						value: "text/plain",
					},
					{
						key: "Cache-Control",
						value: "public, max-age=86400, s-maxage=86400",
					},
				],
			},
			{
				source: "/(.*)\\.(ico|png|jpg|jpeg|svg|webp|avif)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			// Font optimization headers
			{
				source: "/(.*)\\.(woff|woff2|eot|ttf|otf)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
					{
						key: "Access-Control-Allow-Origin",
						value: "*",
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

	// Advanced Webpack optimizations inspired by NextFaster
	webpack: (config, { isServer, dev, webpack }) => {
		if (!isServer) {
			config.resolve.fallback = {
				fs: false,
				path: false,
				os: false,
			};
		}

		// Optimize bundle for production
		if (!dev) {
			config.optimization.splitChunks = {
				chunks: "all",
				minSize: 20000,
				maxSize: 244000,
				cacheGroups: {
					default: {
						minChunks: 2,
						priority: -20,
						reuseExistingChunk: true,
					},
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: "vendors",
						priority: -10,
						chunks: "all",
					},
					// Separate chunk for large libraries
					react: {
						test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
						name: "react",
						chunks: "all",
						priority: 10,
					},
					// WordPress components chunk
					wordpress: {
						test: /[\\/]node_modules[\\/]@wordpress[\\/]/,
						name: "wordpress",
						chunks: "all",
						priority: 5,
					},
				},
			};

			// Module concatenation for better tree shaking
			config.optimization.concatenateModules = true;

			// Minimize CSS
			config.optimization.minimize = true;
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
		// React compiler optimizations (removed for stability)
	},

	// TypeScript configuration
	typescript: {
		ignoreBuildErrors: false,
		// Type checking optimization
		tsconfigPath: "./tsconfig.json",
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