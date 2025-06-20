"use client";

import { useEffect, useState } from "react";

interface PerformanceMetrics {
	lcp?: number;
	fid?: number;
	cls?: number;
	fcp?: number;
	ttfb?: number;
}

// Performance monitoring hook
export const usePerformanceMonitor = () => {
	const [metrics, setMetrics] = useState<PerformanceMetrics>({});

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

interface PerformanceMonitorProps {
	showInDev?: boolean;
	position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export function PerformanceMonitor({ showInDev = true, position = "bottom-right" }: PerformanceMonitorProps) {
	const metrics = usePerformanceMonitor();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Only show in development or when explicitly enabled
		if (process.env.NODE_ENV === "development" && showInDev) {
			setIsVisible(true);
		}
	}, [showInDev]);

	if (!isVisible || Object.keys(metrics).length === 0) {
		return null;
	}

	const getScoreColor = (value: number, thresholds: { good: number; needs: number }) => {
		if (value <= thresholds.good) return "text-green-500";
		if (value <= thresholds.needs) return "text-yellow-500";
		return "text-red-500";
	};

	const formatValue = (value: number, unit: string = "ms") => {
		return `${Math.round(value)}${unit}`;
	};

	const positionClasses = {
		"top-left": "top-4 left-4",
		"top-right": "top-4 right-4",
		"bottom-left": "bottom-4 left-4",
		"bottom-right": "bottom-4 right-4",
	};

	return (
		<div className={`fixed ${positionClasses[position]} z-50 bg-black/80 text-white p-3 rounded-lg text-xs font-mono backdrop-blur-sm`} style={{ minWidth: "200px" }}>
			<div className="flex items-center justify-between mb-2">
				<span className="font-semibold">Web Vitals</span>
				<button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-white">
					×
				</button>
			</div>

			<div className="space-y-1">
				{metrics.lcp && (
					<div className="flex justify-between">
						<span>LCP:</span>
						<span className={getScoreColor(metrics.lcp, { good: 2500, needs: 4000 })}>{formatValue(metrics.lcp)}</span>
					</div>
				)}

				{metrics.fid && (
					<div className="flex justify-between">
						<span>FID:</span>
						<span className={getScoreColor(metrics.fid, { good: 100, needs: 300 })}>{formatValue(metrics.fid)}</span>
					</div>
				)}

				{metrics.cls && (
					<div className="flex justify-between">
						<span>CLS:</span>
						<span className={getScoreColor(metrics.cls * 1000, { good: 100, needs: 250 })}>{(metrics.cls * 1000).toFixed(0)}</span>
					</div>
				)}

				{metrics.fcp && (
					<div className="flex justify-between">
						<span>FCP:</span>
						<span className={getScoreColor(metrics.fcp, { good: 1800, needs: 3000 })}>{formatValue(metrics.fcp)}</span>
					</div>
				)}

				{metrics.ttfb && (
					<div className="flex justify-between">
						<span>TTFB:</span>
						<span className={getScoreColor(metrics.ttfb, { good: 800, needs: 1800 })}>{formatValue(metrics.ttfb)}</span>
					</div>
				)}
			</div>

			<div className="mt-2 pt-2 border-t border-gray-600 text-[10px] text-gray-400">
				<div>🟢 Good | 🟡 Needs Improvement | 🔴 Poor</div>
			</div>
		</div>
	);
}

// Hook to send performance data to analytics
export function usePerformanceAnalytics() {
	const metrics = usePerformanceMonitor();

	useEffect(() => {
		// Send metrics to analytics when they're available
		if (Object.keys(metrics).length > 0) {
			// Google Analytics 4
			if (typeof window !== "undefined" && window.gtag) {
				Object.entries(metrics).forEach(([key, value]) => {
					if (value) {
						window.gtag("event", "web_vitals", {
							metric_name: key.toUpperCase(),
							metric_value: Math.round(value),
							metric_id: `${key}_${Date.now()}`,
						});
					}
				});
			}

			// Vercel Analytics
			if (typeof window !== "undefined" && window.va) {
				window.va("track", "Web Vitals", metrics);
			}

			// Console logging for development
			if (process.env.NODE_ENV === "development") {
				console.group("🚀 Web Vitals Performance Metrics");
				Object.entries(metrics).forEach(([key, value]) => {
					if (value) {
						const unit = key === "cls" ? "" : "ms";
						const displayValue = key === "cls" ? (value * 1000).toFixed(0) : Math.round(value);
						console.log(`${key.toUpperCase()}: ${displayValue}${unit}`);
					}
				});
				console.groupEnd();
			}
		}
	}, [metrics]);

	return metrics;
}
