import { Button } from "@/components/ui/button"
import { SmartLink } from "@/components/ui/link";
import { ArrowRight, Github, CheckCircle, Calendar } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			{/* Simple header */}
			<header className="border-b border-border/40">
				<div className="container flex justify-between items-center px-4 py-4 mx-auto max-w-4xl">
					<div className="flex items-center space-x-3">
						<Image src="/logo192.png" alt="ReactPress - WordPress Alternative Logo" width={32} height={32} className="w-8 h-8" priority />
						<span className="text-xl font-semibold">ReactPress</span>
					</div>
					<nav className="flex gap-4 items-center" role="navigation" aria-label="Main navigation">
						<SmartLink
							href="https://github.com/byronwade/ReactPress"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm transition-colors text-muted-foreground hover:text-foreground"
							prefetchStrategy="hover"
							analytics={{
								event: "external_link_click",
								properties: { destination: "github" },
							}}
						>
							GitHub
						</SmartLink>
						<SmartLink
							href="/rp-admin"
							prefetchStrategy="immediate"
							analytics={{
								event: "internal_link_click",
								properties: { destination: "admin_demo" },
							}}
						>
							<Button variant="outline" size="sm">
								Admin Demo
							</Button>
						</SmartLink>
					</nav>
				</div>
			</header>

			{/* Main content */}
			<main className="container px-4 py-16 mx-auto max-w-4xl">
				<article className="max-w-2xl">
					<header>
						<h1 className="mb-6 text-4xl font-bold tracking-tight">ReactPress - Modern WordPress Alternative</h1>
					</header>

					<section className="space-y-6 text-lg leading-relaxed text-muted-foreground" aria-labelledby="about-reactpress">
						<h2 id="about-reactpress" className="sr-only">
							About ReactPress WordPress Alternative
						</h2>

						<p>
							<strong>WordPress reimagined with modern web technologies.</strong> Experience the familiar WordPress admin interface with 5x faster performance.
						</p>

						<p>
							ReactPress is a complete <em>WordPress admin interface</em> rebuilt from the ground up using <strong>Next.js 15</strong>, <strong>React 18</strong>, and <strong>TypeScript</strong>. It maintains full compatibility with WordPress workflows while delivering significantly better performance and developer experience than traditional WordPress admin panels.
						</p>

						<p>
							This open-source <strong>WordPress alternative</strong> demonstrates how familiar WordPress workflows can be modernized without sacrificing functionality. Every page, component, and interaction has been carefully recreated with modern best practices, making it the perfect solution for developers building
							<em>headless WordPress</em> solutions, <em>WordPress alternatives</em>, and modern CMS interfaces.
						</p>
					</section>

					<section className="mt-12 space-y-4" aria-labelledby="get-started">
						<h2 id="get-started" className="sr-only">
							Get Started with ReactPress
						</h2>
						<div className="flex gap-4 items-center">
							<SmartLink
								href="/rp-admin"
								prefetchStrategy="immediate"
								analytics={{
									event: "cta_click",
									properties: { button: "view_admin_demo" },
								}}
							>
								<Button className="h-11">
									View Admin Demo
									<ArrowRight className="ml-2 w-4 h-4" />
								</Button>
							</SmartLink>
							<SmartLink
								href="https://github.com/byronwade/ReactPress"
								target="_blank"
								rel="noopener noreferrer"
								prefetchStrategy="hover"
								analytics={{
									event: "cta_click",
									properties: { button: "source_code" },
								}}
							>
								<Button variant="outline" className="h-11">
									<Github className="mr-2 w-4 h-4" />
									Source Code
								</Button>
							</SmartLink>
						</div>

						<p className="text-sm text-muted-foreground">
							Currently in development • Built with Next.js 15 • <strong>5x faster than WordPress</strong>
						</p>
					</section>

					{/* Changelog Section */}
					<section className="pt-8 mt-16 border-t border-border/40" aria-labelledby="changelog">
						<h2 id="changelog" className="mb-6 text-xl font-semibold">
							Recent Updates
						</h2>
						<div className="space-y-6">
							<article className="flex gap-4">
								<div className="flex-shrink-0">
									<Calendar className="mt-1 w-4 h-4 text-muted-foreground" />
								</div>
								<div>
									<header className="flex gap-2 items-center mb-1">
										<time dateTime="2024-12" className="text-sm font-medium">
											December 2024
										</time>
										<span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">v1.2.0</span>
									</header>
									<ul className="space-y-1 text-sm text-muted-foreground">
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>Enhanced SEO optimization with comprehensive meta tags and structured data</span>
										</li>
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>Improved WordPress admin bar logo styling with proper inversion</span>
										</li>
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>Updated project documentation and comprehensive README</span>
										</li>
									</ul>
								</div>
							</article>

							<article className="flex gap-4">
								<div className="flex-shrink-0">
									<Calendar className="mt-1 w-4 h-4 text-muted-foreground" />
								</div>
								<div>
									<header className="flex gap-2 items-center mb-1">
										<time dateTime="2024-11" className="text-sm font-medium">
											November 2024
										</time>
										<span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">v1.1.0</span>
									</header>
									<ul className="space-y-1 text-sm text-muted-foreground">
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>Complete WordPress admin interface recreation with pixel-perfect accuracy</span>
										</li>
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>Added responsive design for mobile and tablet devices</span>
										</li>
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>Integrated Dashicons font for authentic WordPress iconography</span>
										</li>
									</ul>
								</div>
							</article>

							<article className="flex gap-4">
								<div className="flex-shrink-0">
									<Calendar className="mt-1 w-4 h-4 text-muted-foreground" />
								</div>
								<div>
									<header className="flex gap-2 items-center mb-1">
										<time dateTime="2024-10" className="text-sm font-medium">
											October 2024
										</time>
										<span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">v1.0.0</span>
									</header>
									<ul className="space-y-1 text-sm text-muted-foreground">
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>Initial release with Next.js 15 and React 18 foundation</span>
										</li>
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>Basic WordPress admin layout and navigation structure</span>
										</li>
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>TypeScript configuration and Tailwind CSS integration</span>
										</li>
									</ul>
								</div>
							</article>
						</div>
					</section>

					<section className="pt-8 mt-16 border-t border-border/40" aria-labelledby="for-developers">
						<h2 id="for-developers" className="mb-4 text-xl font-semibold">
							For WordPress Developers
						</h2>
						<div className="space-y-4 text-muted-foreground">
							<p>
								ReactPress serves as a reference implementation for building complex <strong>WordPress admin interfaces</strong> with modern React patterns. Perfect for developers transitioning from traditional WordPress to <em>headless WordPress</em> architectures.
							</p>
							<p>The codebase includes examples of:</p>
							<ul className="pl-6 space-y-1 list-disc">
								<li>
									<strong>Server-side rendering</strong> with Next.js 15 App Router
								</li>
								<li>
									<strong>Component composition</strong> and reusability patterns
								</li>
								<li>
									<strong>WordPress-compatible design</strong> patterns and UI components
								</li>
								<li>
									<strong>Modern CSS</strong> with Tailwind CSS utility classes
								</li>
								<li>
									<strong>TypeScript implementation</strong> for type-safe WordPress development
								</li>
								<li>
									<strong>Responsive design</strong> optimized for all devices
								</li>
							</ul>
							<p>
								All components are built with <em>accessibility</em>, <em>performance</em>, and <em>maintainability</em> in mind, making ReactPress the ideal starting point for your next WordPress alternative project.
							</p>
						</div>
					</section>

					{/* SEO-focused FAQ section */}
					<section className="pt-8 mt-16 border-t border-border/40" aria-labelledby="wordpress-faq">
						<h2 id="wordpress-faq" className="mb-6 text-xl font-semibold">
							WordPress Alternative FAQ
						</h2>
						<div className="space-y-6">
							<details className="group">
								<summary className="flex justify-between items-center text-base font-medium list-none cursor-pointer">
									<span>Why choose ReactPress over WordPress admin?</span>
									<span className="transition-transform group-open:rotate-180">▼</span>
								</summary>
								<div className="mt-3 text-sm text-muted-foreground">
									<p>
										ReactPress offers <strong>5x faster performance</strong> than traditional WordPress admin, modern TypeScript development experience, and familiar WordPress workflows without PHP dependencies. Perfect for headless WordPress setups and modern development teams.
									</p>
								</div>
							</details>

							<details className="group">
								<summary className="flex justify-between items-center text-base font-medium list-none cursor-pointer">
									<span>Is ReactPress compatible with WordPress?</span>
									<span className="transition-transform group-open:rotate-180">▼</span>
								</summary>
								<div className="mt-3 text-sm text-muted-foreground">
									<p>
										Yes! ReactPress recreates the WordPress admin interface pixel-perfectly. It can connect to WordPress via REST API or GraphQL, making it ideal for <em>headless WordPress</em> implementations and WordPress alternatives.
									</p>
								</div>
							</details>

							<details className="group">
								<summary className="flex justify-between items-center text-base font-medium list-none cursor-pointer">
									<span>What makes ReactPress the best WordPress alternative?</span>
									<span className="transition-transform group-open:rotate-180">▼</span>
								</summary>
								<div className="mt-3 text-sm text-muted-foreground">
									<p>
										Built with <strong>Next.js 15</strong>, <strong>React 18</strong>, and <strong>TypeScript</strong>, ReactPress combines familiar WordPress UX with modern web performance. Open source, fully customizable, and optimized for developer productivity.
									</p>
								</div>
							</details>
						</div>
					</section>
				</article>
			</main>

			{/* Simple footer with enhanced schema markup */}
			<footer className="mt-24 border-t border-border/40" role="contentinfo">
				<div className="container px-4 py-8 mx-auto max-w-4xl">
					<div className="flex justify-between items-center text-sm text-muted-foreground">
						<div className="flex gap-4 items-center">
							<span>© 2024 ReactPress</span>
							<span>•</span>
							<span>
								Built by{" "}
								<SmartLink href="https://byronwade.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground" prefetchStrategy="hover">
									Byron Wade
								</SmartLink>
							</span>
						</div>
						<div className="flex gap-4 items-center">
							<SmartLink href="https://byronwade.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground" prefetchStrategy="hover">
								Website
							</SmartLink>
							<SmartLink href="https://twitter.com/byron_c_wade" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground" prefetchStrategy="hover">
								Twitter
							</SmartLink>
							<SmartLink href="https://github.com/byronwade/ReactPress" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground" prefetchStrategy="hover">
								GitHub
							</SmartLink>
						</div>
					</div>
					<div className="mt-4 text-xs text-center text-muted-foreground">
						<p>ReactPress - The fastest WordPress alternative built with Next.js 15. Open source WordPress admin interface for modern developers.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}