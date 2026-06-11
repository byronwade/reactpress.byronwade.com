import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ArrowRight, Github, Heart, Calendar, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			{/* Simple header */}
			<header className="border-b border-border/40">
				<div className="container flex justify-between items-center px-4 py-4 mx-auto max-w-4xl">
					<div className="flex items-center space-x-3">
						<Image src="/logo192.png" alt="ReactPress logo" width={32} height={32} className="w-8 h-8" priority />
						<span className="text-xl font-semibold">ReactPress</span>
					</div>
					<nav className="flex gap-4 items-center" role="navigation" aria-label="Main navigation">
						<Link href="https://github.com/byronwade/ReactPress" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
							GitHub
						</Link>
						<Link href="/rp-admin">
							<Button variant="outline" size="sm">
								Explore the admin
							</Button>
						</Link>
					</nav>
				</div>
			</header>

			{/* Main content */}
			<main className="container px-4 py-16 mx-auto max-w-4xl">
				<article className="max-w-2xl">
					<header>
						<p className="flex gap-2 items-center mb-4 text-sm font-medium text-muted-foreground">
							<Heart className="w-4 h-4 text-red-500" aria-hidden="true" />
							A passion project — for the fun of it
						</p>
						<h1 className="mb-6 text-4xl font-bold tracking-tight">Rebuilding the WordPress admin, pixel for pixel</h1>
					</header>

					<section className="space-y-6 text-lg leading-relaxed text-muted-foreground" aria-labelledby="about-reactpress">
						<h2 id="about-reactpress" className="sr-only">
							About ReactPress
						</h2>

						<p>
							<strong className="text-foreground">ReactPress is my attempt to rebuild the WordPress admin panel from scratch</strong> with Next.js, React, and TypeScript — recreating it as faithfully as I can, right down to the pixel.
						</p>

						<p>
							There&apos;s no grand master plan. It started as a fun challenge: take an interface millions of people know by heart, recreate it honestly in a modern stack, and then <em>slowly</em> modernize the styling underneath — converting the original CSS to Tailwind bit by bit — without changing a single pixel of how it looks.
						</p>

						<p>
							It&apos;s an ongoing experiment and a bit of a love letter to a UI I&apos;ve spent way too many hours in. Click around the admin, read the source, file an issue if something looks off. That&apos;s the whole point.
						</p>
					</section>

					<section className="mt-12 space-y-4" aria-labelledby="get-started">
						<h2 id="get-started" className="sr-only">
							Take a look
						</h2>
						<div className="flex flex-wrap gap-4 items-center">
							<Link href="/rp-admin">
								<Button className="h-11">
									Explore the admin
									<ArrowRight className="ml-2 w-4 h-4" />
								</Button>
							</Link>
							<Link href="https://github.com/byronwade/ReactPress" target="_blank" rel="noopener noreferrer">
								<Button variant="outline" className="h-11">
									<Github className="mr-2 w-4 h-4" />
									Source code
								</Button>
							</Link>
						</div>

						<p className="text-sm text-muted-foreground">An ongoing experiment • Next.js · React · TypeScript • Built for fun</p>
					</section>

					{/* Project log */}
					<section className="pt-8 mt-16 border-t border-border/40" aria-labelledby="project-log">
						<h2 id="project-log" className="mb-6 text-xl font-semibold">
							Project log
						</h2>
						<div className="space-y-6">
							<article className="flex gap-4">
								<div className="flex-shrink-0">
									<Calendar className="mt-1 w-4 h-4 text-muted-foreground" />
								</div>
								<div>
									<header className="flex gap-2 items-center mb-1">
										<time dateTime="2026" className="text-sm font-medium">
											2026 — now
										</time>
										<span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">cleanup</span>
									</header>
									<ul className="space-y-1 text-sm text-muted-foreground">
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>Documented the WordPress admin design system so the rebuild stays honest</span>
										</li>
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>Started methodically converting the original admin CSS to Tailwind, pixel for pixel</span>
										</li>
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>Tidying up the codebase and chasing down little bits of drift</span>
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
											Late 2024
										</time>
										<span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">v1.1</span>
									</header>
									<ul className="space-y-1 text-sm text-muted-foreground">
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>Faithful recreation of the WordPress admin screens and navigation</span>
										</li>
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>Wired up the Dashicons font for authentic WordPress iconography</span>
										</li>
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>Responsive behavior for smaller screens</span>
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
											Where it began
										</time>
										<span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">v1.0</span>
									</header>
									<ul className="space-y-1 text-sm text-muted-foreground">
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>First commit: a Next.js + React + TypeScript foundation</span>
										</li>
										<li className="flex gap-2 items-start">
											<CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
											<span>The basic admin layout and navigation skeleton</span>
										</li>
									</ul>
								</div>
							</article>
						</div>
					</section>

					{/* Under the hood */}
					<section className="pt-8 mt-16 border-t border-border/40" aria-labelledby="under-the-hood">
						<h2 id="under-the-hood" className="mb-4 text-xl font-semibold">
							Under the hood
						</h2>
						<div className="space-y-4 text-muted-foreground">
							<p>If you&apos;re curious how it&apos;s put together, the codebase is a decent tour of a few things I enjoy:</p>
							<ul className="pl-6 space-y-1 list-disc">
								<li>
									The Next.js <strong>App Router</strong> with React Server Components
								</li>
								<li>
									Recreating a real, complex UI from <strong>component composition</strong>
								</li>
								<li>
									A careful, ongoing <strong>CSS → Tailwind</strong> migration that has to stay pixel-perfect
								</li>
								<li>
									<strong>TypeScript</strong> throughout
								</li>
								<li>Wrangling ~18k lines of original WordPress admin CSS into something maintainable</li>
							</ul>
							<p>It&apos;s a sandbox as much as anything — a place to try ideas on an interface I already know inside and out.</p>
						</div>
					</section>

					{/* FAQ */}
					<section className="pt-8 mt-16 border-t border-border/40" aria-labelledby="faq">
						<h2 id="faq" className="mb-6 text-xl font-semibold">
							A few honest answers
						</h2>
						<div className="space-y-6">
							<details className="group">
								<summary className="flex justify-between items-center text-base font-medium list-none cursor-pointer">
									<span>Is this trying to replace WordPress?</span>
									<span className="transition-transform group-open:rotate-180">▼</span>
								</summary>
								<div className="mt-3 text-sm text-muted-foreground">
									<p>Nope. WordPress is great and powers a huge chunk of the web. This is a passion project built for fun and learning — not a product, not a pitch.</p>
								</div>
							</details>

							<details className="group">
								<summary className="flex justify-between items-center text-base font-medium list-none cursor-pointer">
									<span>Does it actually do anything?</span>
									<span className="transition-transform group-open:rotate-180">▼</span>
								</summary>
								<div className="mt-3 text-sm text-muted-foreground">
									<p>Right now it&apos;s a faithful front-end recreation — the screens, navigation, and styling of wp-admin. Think of it as a detailed sandbox rather than a working CMS.</p>
								</div>
							</details>

							<details className="group">
								<summary className="flex justify-between items-center text-base font-medium list-none cursor-pointer">
									<span>Why build this?</span>
									<span className="transition-transform group-open:rotate-180">▼</span>
								</summary>
								<div className="mt-3 text-sm text-muted-foreground">
									<p>Because faithfully rebuilding a familiar, battle-tested interface is a genuinely fun engineering puzzle — and a great excuse to dig into Next.js, React, and the wonderfully weird corners of WordPress&apos;s CSS.</p>
								</div>
							</details>
						</div>
					</section>
				</article>
			</main>

			{/* Footer */}
			<footer className="mt-24 border-t border-border/40" role="contentinfo">
				<div className="container px-4 py-8 mx-auto max-w-4xl">
					<div className="flex flex-wrap gap-4 justify-between items-center text-sm text-muted-foreground">
						<div className="flex gap-4 items-center">
							<span>© 2026 ReactPress</span>
							<span>•</span>
							<span>
								Made by{" "}
								<Link href="https://byronwade.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
									Byron Wade
								</Link>
							</span>
						</div>
						<div className="flex gap-4 items-center">
							<Link href="https://byronwade.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
								Website
							</Link>
							<Link href="https://twitter.com/byron_c_wade" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
								Twitter
							</Link>
							<Link href="https://github.com/byronwade/ReactPress" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
								GitHub
							</Link>
						</div>
					</div>
					<div className="mt-4 text-xs text-center text-muted-foreground">
						<p>A for-fun rebuild of the WordPress admin, made with Next.js and a lot of coffee.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
