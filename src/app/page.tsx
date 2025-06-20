import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Code, Gauge, Layout, Zap, Users, Palette, Clock, RefreshCw, Github, Star, ArrowUpRight, Check, Shield, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Header */}
			<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-14 max-w-screen-2xl items-center">
					<div className="mr-4 hidden md:flex">
						<Link className="mr-6 flex items-center space-x-2" href="/">
							<div className="flex h-6 w-6 items-center justify-center rounded bg-black text-white dark:bg-white dark:text-black">
								<span className="text-sm font-bold">R</span>
							</div>
							<span className="hidden font-bold sm:inline-block">ReactPress</span>
						</Link>
						<nav className="flex items-center gap-6 text-sm">
							<Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#features">
								Features
							</Link>
							<Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#docs">
								Docs
							</Link>
							<Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/rp-admin">
								Demo
							</Link>
						</nav>
					</div>
					<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
						<div className="w-full flex-1 md:w-auto md:flex-none">
							<nav className="flex items-center gap-1">
								<Link href="https://github.com/byronwade/ReactPress" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 px-3">
									<Github className="h-4 w-4" />
									<span className="sr-only">GitHub</span>
								</Link>
								<Link href="/rp-admin">
									<Button size="sm">
										Get Started
										<ArrowRight className="ml-1 h-4 w-4" />
									</Button>
								</Link>
							</nav>
						</div>
					</div>
				</div>
			</header>

			<main className="flex-1">
				{/* Hero Section */}
				<section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
					<div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
						<div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
							🚧 Currently in development
							<ArrowUpRight className="ml-1 h-4 w-4" />
						</div>
						<h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
							The complete platform for <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">WordPress</span> reimagined.
						</h1>
						<p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">ReactPress provides the developer tools and modern infrastructure to build, scale, and secure a faster, more personalized WordPress experience.</p>
						<div className="flex gap-4">
							<Link href="/rp-admin">
								<Button size="lg" className="h-11">
									Start Building
								</Button>
							</Link>
							<Link href="https://github.com/byronwade/ReactPress" target="_blank" rel="noopener noreferrer">
								<Button variant="outline" size="lg" className="h-11">
									<Github className="mr-2 h-4 w-4" />
									View on GitHub
								</Button>
							</Link>
						</div>
					</div>
				</section>

				{/* Logos Section */}
				<section className="container py-8 md:py-12">
					<div className="mx-auto max-w-[980px]">
						<p className="text-center text-sm text-muted-foreground mb-8">Trusted by developers who want the best of both worlds</p>
						<div className="flex items-center justify-center gap-8 opacity-60">
							<div className="flex items-center gap-2">
								<div className="h-8 w-8 rounded bg-gradient-to-r from-blue-500 to-blue-600"></div>
								<span className="font-semibold">Next.js 15</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="h-8 w-8 rounded bg-gradient-to-r from-purple-500 to-purple-600"></div>
								<span className="font-semibold">React 18</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="h-8 w-8 rounded bg-gradient-to-r from-cyan-500 to-cyan-600"></div>
								<span className="font-semibold">Tailwind CSS</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="h-8 w-8 rounded bg-gradient-to-r from-blue-600 to-blue-700"></div>
								<span className="font-semibold">WordPress</span>
							</div>
						</div>
					</div>
				</section>

				{/* Features Grid */}
				<section id="features" className="container py-8 md:py-12 lg:py-24">
					<div className="mx-auto max-w-[980px]">
						<div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
							<h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
							<p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">Everything you need to build modern WordPress experiences.</p>
						</div>
						<div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-12">
							<div className="relative overflow-hidden rounded-lg border bg-background p-6">
								<div className="flex h-[180px] flex-col justify-between rounded-md">
									<Zap className="h-12 w-12" />
									<div className="space-y-2">
										<h3 className="font-bold">Lightning Fast</h3>
										<p className="text-sm text-muted-foreground">Built on Next.js 15 with server-side rendering and static generation for optimal performance.</p>
									</div>
								</div>
							</div>
							<div className="relative overflow-hidden rounded-lg border bg-background p-6">
								<div className="flex h-[180px] flex-col justify-between rounded-md">
									<Layout className="h-12 w-12" />
									<div className="space-y-2">
										<h3 className="font-bold">WordPress Compatible</h3>
										<p className="text-sm text-muted-foreground">Full compatibility with WordPress themes, plugins, and content management workflows.</p>
									</div>
								</div>
							</div>
							<div className="relative overflow-hidden rounded-lg border bg-background p-6">
								<div className="flex h-[180px] flex-col justify-between rounded-md">
									<Code className="h-12 w-12" />
									<div className="space-y-2">
										<h3 className="font-bold">Developer Experience</h3>
										<p className="text-sm text-muted-foreground">Modern React development with TypeScript, hot reloading, and component-based architecture.</p>
									</div>
								</div>
							</div>
							<div className="relative overflow-hidden rounded-lg border bg-background p-6">
								<div className="flex h-[180px] flex-col justify-between rounded-md">
									<Shield className="h-12 w-12" />
									<div className="space-y-2">
										<h3 className="font-bold">Enhanced Security</h3>
										<p className="text-sm text-muted-foreground">Built-in security features and modern authentication patterns to keep your site safe.</p>
									</div>
								</div>
							</div>
							<div className="relative overflow-hidden rounded-lg border bg-background p-6">
								<div className="flex h-[180px] flex-col justify-between rounded-md">
									<Gauge className="h-12 w-12" />
									<div className="space-y-2">
										<h3 className="font-bold">SEO Optimized</h3>
										<p className="text-sm text-muted-foreground">Server-side rendering and automatic SEO optimizations for better search engine rankings.</p>
									</div>
								</div>
							</div>
							<div className="relative overflow-hidden rounded-lg border bg-background p-6">
								<div className="flex h-[180px] flex-col justify-between rounded-md">
									<Globe className="h-12 w-12" />
									<div className="space-y-2">
										<h3 className="font-bold">Global CDN</h3>
										<p className="text-sm text-muted-foreground">Deploy globally with edge computing capabilities for users worldwide.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Admin Preview Section */}
				<section className="border-t bg-slate-50 dark:bg-slate-900/50 py-8 md:py-12 lg:py-24">
					<div className="container mx-auto max-w-[980px]">
						<div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
							<h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">From localhost to production, in seconds.</h2>
							<p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">Experience the familiar WordPress admin interface, reimagined with modern React components.</p>
						</div>
						<div className="mt-12">
							<div className="mx-auto max-w-4xl">
								<div className="rounded-lg border bg-background p-1 shadow-2xl">
									<div className="rounded-md bg-muted p-4">
										<div className="flex items-center gap-2 mb-4">
											<div className="h-3 w-3 rounded-full bg-red-500"></div>
											<div className="h-3 w-3 rounded-full bg-yellow-500"></div>
											<div className="h-3 w-3 rounded-full bg-green-500"></div>
											<div className="ml-4 text-sm text-muted-foreground">reactpress.byronwade.com/rp-admin</div>
										</div>
										<div className="rounded bg-background p-4 h-64 flex items-center justify-center">
											<div className="text-center">
												<h3 className="text-xl font-semibold mb-2">WordPress Admin Interface</h3>
												<p className="text-muted-foreground mb-4">Built with React components and modern design patterns</p>
												<Link href="/rp-admin">
													<Button>
														View Demo
														<ArrowRight className="ml-2 h-4 w-4" />
													</Button>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Performance Section */}
				<section className="container py-8 md:py-12 lg:py-24">
					<div className="mx-auto max-w-[980px]">
						<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
							<div className="flex flex-col justify-center space-y-4">
								<h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Scale without compromising performance.</h2>
								<p className="max-w-[600px] text-muted-foreground md:text-xl">Built on Next.js 15, ReactPress delivers WordPress functionality with modern web performance standards.</p>
								<div className="flex flex-col gap-4">
									<div className="flex items-center gap-2">
										<Check className="h-5 w-5 text-green-500" />
										<span>Server-side rendering</span>
									</div>
									<div className="flex items-center gap-2">
										<Check className="h-5 w-5 text-green-500" />
										<span>Static site generation</span>
									</div>
									<div className="flex items-center gap-2">
										<Check className="h-5 w-5 text-green-500" />
										<span>Edge computing ready</span>
									</div>
									<div className="flex items-center gap-2">
										<Check className="h-5 w-5 text-green-500" />
										<span>Automatic code splitting</span>
									</div>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<div className="relative">
									<div className="h-64 w-64 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-20"></div>
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="text-center">
											<div className="text-4xl font-bold">5x</div>
											<div className="text-sm text-muted-foreground">Faster than traditional WordPress</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="border-t bg-slate-50 dark:bg-slate-900/50 py-8 md:py-12 lg:py-24">
					<div className="container mx-auto max-w-[980px]">
						<div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
							<h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Deploy your first ReactPress site in seconds.</h2>
							<p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">Experience the future of WordPress development.</p>
							<div className="flex gap-4 mt-6">
								<Link href="/rp-admin">
									<Button size="lg" className="h-12 px-8">
										Try Demo
									</Button>
								</Link>
								<Link href="https://github.com/byronwade/ReactPress" target="_blank" rel="noopener noreferrer">
									<Button variant="outline" size="lg" className="h-12 px-8">
										<Github className="mr-2 h-4 w-4" />
										Star on GitHub
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="border-t py-6 md:px-8 md:py-0">
				<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
					<div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
						<div className="flex h-6 w-6 items-center justify-center rounded bg-black text-white dark:bg-white dark:text-black">
							<span className="text-sm font-bold">R</span>
						</div>
						<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
							Built by{" "}
							<Link href="https://twitter.com/byronwade" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
								Byron Wade
							</Link>
							. The source code is available on{" "}
							<Link href="https://github.com/byronwade/ReactPress" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
								GitHub
							</Link>
							.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}