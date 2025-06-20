"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { forwardRef, useRef, useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SmartLinkProps extends React.ComponentProps<typeof Link> {
	children: React.ReactNode;
	className?: string;
	prefetchStrategy?: "hover" | "viewport" | "immediate" | "none";
	prefetchDelay?: number;
	analytics?: {
		event: string;
		properties?: Record<string, any>;
	};
}

const SmartLink = forwardRef<HTMLAnchorElement, SmartLinkProps>(({ children, className, prefetchStrategy = "hover", prefetchDelay = 100, analytics, ...props }, ref) => {
	const router = useRouter();
	const linkRef = useRef<HTMLAnchorElement>(null);
	const [isPrefetched, setIsPrefetched] = useState(false);
	const [isIntersecting, setIsIntersecting] = useState(false);
	const prefetchTimeoutRef = useRef<NodeJS.Timeout>();

	// Prefetch function with better error handling
	const prefetchRoute = useCallback(() => {
		if (!isPrefetched && typeof props.href === "string") {
			try {
				router.prefetch(props.href);
				setIsPrefetched(true);

				// Log prefetch for debugging
				if (process.env.NODE_ENV === "development") {
					console.log(`🚀 Prefetched: ${props.href}`);
				}
			} catch (error) {
				console.warn(`Failed to prefetch ${props.href}:`, error);
			}
		}
	}, [router, props.href, isPrefetched]);

	// Intersection Observer for viewport-based prefetching (like NextFaster)
	useEffect(() => {
		if (prefetchStrategy !== "viewport" || !linkRef.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
				if (entry.isIntersecting) {
					prefetchRoute();
				}
			},
			{
				rootMargin: "200px", // Prefetch when link is 200px away from viewport
				threshold: 0.1,
			}
		);

		observer.observe(linkRef.current);

		return () => observer.disconnect();
	}, [prefetchStrategy, prefetchRoute]);

	// Immediate prefetching for critical links
	useEffect(() => {
		if (prefetchStrategy === "immediate") {
			prefetchRoute();
		}
	}, [prefetchStrategy, prefetchRoute]);

	// Hover-based prefetching with delay (like NextFaster)
	const handleMouseEnter = useCallback(() => {
		if (prefetchStrategy === "hover") {
			prefetchTimeoutRef.current = setTimeout(prefetchRoute, prefetchDelay);
		}
	}, [prefetchStrategy, prefetchRoute, prefetchDelay]);

	const handleMouseLeave = useCallback(() => {
		if (prefetchTimeoutRef.current) {
			clearTimeout(prefetchTimeoutRef.current);
		}
	}, []);

	// Touch-based prefetching for mobile (immediate on touch)
	const handleTouchStart = useCallback(() => {
		if (prefetchStrategy === "hover") {
			prefetchRoute();
		}
	}, [prefetchStrategy, prefetchRoute]);

	// Analytics tracking
	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement>) => {
			if (analytics) {
				// Track analytics event
				if (typeof window !== "undefined" && window.gtag) {
					window.gtag("event", analytics.event, analytics.properties);
				}
			}

			// Call original onClick if provided
			if (props.onClick) {
				props.onClick(e);
			}
		},
		[analytics, props.onClick]
	);

	// Clean up timeout on unmount
	useEffect(() => {
		return () => {
			if (prefetchTimeoutRef.current) {
				clearTimeout(prefetchTimeoutRef.current);
			}
		};
	}, []);

	return (
		<Link
			{...props}
			ref={(node) => {
				// Handle both forwarded ref and internal ref
				if (typeof ref === "function") {
					ref(node);
				} else if (ref && typeof ref === "object") {
					(ref as React.MutableRefObject<HTMLAnchorElement | null>).current = node;
				}
				if (linkRef.current !== node) {
					(linkRef as React.MutableRefObject<HTMLAnchorElement | null>).current = node;
				}
			}}
			className={cn(className)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onTouchStart={handleTouchStart}
			onClick={handleClick}
			// Disable Next.js default prefetching if we're handling it ourselves
			prefetch={prefetchStrategy === "none" ? false : undefined}
		>
			{children}
		</Link>
	);
});

SmartLink.displayName = "SmartLink";

export { SmartLink };

// Hook for programmatic prefetching
export const usePrefetch = () => {
	const router = useRouter();

	return useCallback(
		(href: string) => {
			try {
				router.prefetch(href);
				if (process.env.NODE_ENV === "development") {
					console.log(`🚀 Programmatic prefetch: ${href}`);
				}
			} catch (error) {
				console.warn(`Failed to prefetch ${href}:`, error);
			}
		},
		[router]
	);
};

// Advanced prefetching hook for multiple routes
export const useAdvancedPrefetch = () => {
	const router = useRouter();

	return useCallback(
		(routes: string[]) => {
			routes.forEach((route) => {
				try {
					router.prefetch(route);
				} catch (error) {
					console.warn(`Failed to prefetch ${route}:`, error);
				}
			});
		},
		[router]
	);
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
	const [metrics, setMetrics] = useState<{
		lcp?: number;
		fid?: number;
		cls?: number;
		fcp?: number;
		ttfb?: number;
	}>({});

	useEffect(() => {
		// Monitor Web Vitals
		if (typeof window !== "undefined" && "PerformanceObserver" in window) {
			// Largest Contentful Paint
			const lcpObserver = new PerformanceObserver((list) => {
				const entries = list.getEntries();
				const lastEntry = entries[entries.length - 1] as any;
				setMetrics((prev) => ({ ...prev, lcp: lastEntry.startTime }));
			});
			lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

			// First Input Delay
			const fidObserver = new PerformanceObserver((list) => {
				const entries = list.getEntries();
				entries.forEach((entry: any) => {
					setMetrics((prev) => ({ ...prev, fid: entry.processingStart - entry.startTime }));
				});
			});
			fidObserver.observe({ entryTypes: ["first-input"] });

			// Cumulative Layout Shift
			const clsObserver = new PerformanceObserver((list) => {
				let clsValue = 0;
				const entries = list.getEntries();
				entries.forEach((entry: any) => {
					if (!entry.hadRecentInput) {
						clsValue += entry.value;
					}
				});
				setMetrics((prev) => ({ ...prev, cls: clsValue }));
			});
			clsObserver.observe({ entryTypes: ["layout-shift"] });

			return () => {
				lcpObserver.disconnect();
				fidObserver.disconnect();
				clsObserver.disconnect();
			};
		}
	}, []);

	return metrics;
};
