declare global {
	interface Window {
		gtag: (
			command: "config" | "event" | "js" | "set",
			targetId: string | Date,
			config?: {
				[key: string]: any;
			}
		) => void;

		va: (
			command: "track",
			eventName: string,
			properties?: {
				[key: string]: any;
			}
		) => void;

		// Performance API extensions
		PerformanceObserver: typeof PerformanceObserver;
		performance: Performance;
	}

	// Next.js specific types
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "development" | "production" | "test";
			NEXT_PUBLIC_GA_ID?: string;
			NEXT_PUBLIC_VERCEL_ANALYTICS_ID?: string;
			ANALYZE?: "true" | "false";
		}
	}
}

export {};
