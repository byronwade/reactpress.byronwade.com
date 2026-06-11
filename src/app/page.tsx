import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ArrowRight, Github, Heart, Calendar, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
	return (
		<div className="tw-min-h-screen tw-bg-background tw-text-foreground">
			{/* Simple header */}
			<header className="tw-border-b tw-border-border/40">
				<div className="tw-container tw-flex tw-justify-between tw-items-center tw-px-4 tw-py-4 tw-mx-auto tw-max-w-4xl">
					<div className="tw-flex tw-items-center tw-space-x-3">
						<Image src="/logo192.png" alt="ReactPress logo" width={32} height={32} className="tw-w-8 tw-h-8" priority />
						<span className="tw-text-xl tw-font-semibold">ReactPress</span>
					</div>
					<nav className="tw-flex tw-gap-4 tw-items-center" role="navigation" aria-label="Main navigation">
						<Link href="https://github.com/byronwade/ReactPress" target="_blank" rel="noopener noreferrer" className="tw-text-sm tw-transition-colors tw-text-muted-foreground hover:tw-text-foreground">
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
			<main className="tw-container tw-px-4 tw-py-16 tw-mx-auto tw-max-w-4xl">
				<article className="tw-max-w-2xl">
					<header>
						<p className="tw-flex tw-gap-2 tw-items-center tw-mb-4 tw-text-sm tw-font-medium tw-text-muted-foreground">
							<Heart className="tw-w-4 tw-h-4 tw-text-red-500" aria-hidden="true" />
							A passion project — for the fun of it
						</p>
						<h1 className="tw-mb-6 tw-text-4xl tw-font-bold tw-tracking-tight">Rebuilding the WordPress admin, pixel for pixel</h1>
					</header>

					<section className="tw-space-y-6 tw-text-lg tw-leading-relaxed tw-text-muted-foreground" aria-labelledby="about-reactpress">
						<h2 id="about-reactpress" className="tw-sr-only">
							About ReactPress
						</h2>

						<p>
							<strong className="tw-text-foreground">ReactPress is my attempt to rebuild the WordPress admin panel from scratch</strong> with Next.js, React, and TypeScript — recreating it as faithfully as I can, right down to the pixel.
						</p>

						<p>
							There&apos;s no grand master plan. It started as a fun challenge: take an interface millions of people know by heart, recreate it honestly in a modern stack, and then <em>slowly</em> modernize the styling underneath — converting the original CSS to Tailwind bit by bit — without changing a single pixel of how it looks.
						</p>

						<p>
							It&apos;s an ongoing experiment and a bit of a love letter to a UI I&apos;ve spent way too many hours in. Click around the admin, read the source, file an issue if something looks off. That&apos;s the whole point.
						</p>
					</section>

					<section className="tw-mt-12 tw-space-y-4" aria-labelledby="get-started">
						<h2 id="get-started" className="tw-sr-only">
							Take a look
						</h2>
						<div className="tw-flex tw-flex-wrap tw-gap-4 tw-items-center">
							<Link href="/rp-admin">
								<Button className="tw-h-11">
									Explore the admin
									<ArrowRight className="tw-ml-2 tw-w-4 tw-h-4" />
								</Button>
							</Link>
							<Link href="https://github.com/byronwade/ReactPress" target="_blank" rel="noopener noreferrer">
								<Button variant="outline" className="tw-h-11">
									<Github className="tw-mr-2 tw-w-4 tw-h-4" />
									Source code
								</Button>
							</Link>
						</div>

						<p className="tw-text-sm tw-text-muted-foreground">An ongoing experiment • Next.js · React · TypeScript • Built for fun</p>
					</section>

					{/* Project log */}
					<section className="tw-pt-8 tw-mt-16 tw-border-t tw-border-border/40" aria-labelledby="project-log">
						<h2 id="project-log" className="tw-mb-6 tw-text-xl tw-font-semibold">
							Project log
						</h2>
						<div className="tw-space-y-6">
							<article className="tw-flex tw-gap-4">
								<div className="tw-flex-shrink-0">
									<Calendar className="tw-mt-1 tw-w-4 tw-h-4 tw-text-muted-foreground" />
								</div>
								<div>
									<header className="tw-flex tw-gap-2 tw-items-center tw-mb-1">
										<time dateTime="2026" className="tw-text-sm tw-font-medium">
											2026 — now
										</time>
										<span className="tw-text-xs tw-bg-blue-100 tw-text-blue-800 tw-px-2 tw-py-0.5 tw-rounded">cleanup</span>
									</header>
									<ul className="tw-space-y-1 tw-text-sm tw-text-muted-foreground">
										<li className="tw-flex tw-gap-2 tw-items-start">
											<CheckCircle className="tw-h-3 tw-w-3 tw-text-green-500 tw-mt-0.5 tw-flex-shrink-0" />
											<span>Documented the WordPress admin design system so the rebuild stays honest</span>
										</li>
										<li className="tw-flex tw-gap-2 tw-items-start">
											<CheckCircle className="tw-h-3 tw-w-3 tw-text-green-500 tw-mt-0.5 tw-flex-shrink-0" />
											<span>Started methodically converting the original admin CSS to Tailwind, pixel for pixel</span>
										</li>
										<li className="tw-flex tw-gap-2 tw-items-start">
											<CheckCircle className="tw-h-3 tw-w-3 tw-text-green-500 tw-mt-0.5 tw-flex-shrink-0" />
											<span>Tidying up the codebase and chasing down little bits of drift</span>
										</li>
									</ul>
								</div>
							</article>

							<article className="tw-flex tw-gap-4">
								<div className="tw-flex-shrink-0">
									<Calendar className="tw-mt-1 tw-w-4 tw-h-4 tw-text-muted-foreground" />
								</div>
								<div>
									<header className="tw-flex tw-gap-2 tw-items-center tw-mb-1">
										<time dateTime="2024-11" className="tw-text-sm tw-font-medium">
											Late 2024
										</time>
										<span className="tw-text-xs tw-bg-green-100 tw-text-green-800 tw-px-2 tw-py-0.5 tw-rounded">v1.1</span>
									</header>
									<ul className="tw-space-y-1 tw-text-sm tw-text-muted-foreground">
										<li className="tw-flex tw-gap-2 tw-items-start">
											<CheckCircle className="tw-h-3 tw-w-3 tw-text-green-500 tw-mt-0.5 tw-flex-shrink-0" />
											<span>Faithful recreation of the WordPress admin screens and navigation</span>
										</li>
										<li className="tw-flex tw-gap-2 tw-items-start">
											<CheckCircle className="tw-h-3 tw-w-3 tw-text-green-500 tw-mt-0.5 tw-flex-shrink-0" />
											<span>Wired up the Dashicons font for authentic WordPress iconography</span>
										</li>
										<li className="tw-flex tw-gap-2 tw-items-start">
											<CheckCircle className="tw-h-3 tw-w-3 tw-text-green-500 tw-mt-0.5 tw-flex-shrink-0" />
											<span>Responsive behavior for smaller screens</span>
										</li>
									</ul>
								</div>
							</article>

							<article className="tw-flex tw-gap-4">
								<div className="tw-flex-shrink-0">
									<Calendar className="tw-mt-1 tw-w-4 tw-h-4 tw-text-muted-foreground" />
								</div>
								<div>
									<header className="tw-flex tw-gap-2 tw-items-center tw-mb-1">
										<time dateTime="2024-10" className="tw-text-sm tw-font-medium">
											Where it began
										</time>
										<span className="tw-text-xs tw-bg-purple-100 tw-text-purple-800 tw-px-2 tw-py-0.5 tw-rounded">v1.0</span>
									</header>
									<ul className="tw-space-y-1 tw-text-sm tw-text-muted-foreground">
										<li className="tw-flex tw-gap-2 tw-items-start">
											<CheckCircle className="tw-h-3 tw-w-3 tw-text-green-500 tw-mt-0.5 tw-flex-shrink-0" />
											<span>First commit: a Next.js + React + TypeScript foundation</span>
										</li>
										<li className="tw-flex tw-gap-2 tw-items-start">
											<CheckCircle className="tw-h-3 tw-w-3 tw-text-green-500 tw-mt-0.5 tw-flex-shrink-0" />
											<span>The basic admin layout and navigation skeleton</span>
										</li>
									</ul>
								</div>
							</article>
						</div>
					</section>

					{/* Under the hood */}
					<section className="tw-pt-8 tw-mt-16 tw-border-t tw-border-border/40" aria-labelledby="under-the-hood">
						<h2 id="under-the-hood" className="tw-mb-4 tw-text-xl tw-font-semibold">
							Under the hood
						</h2>
						<div className="tw-space-y-4 tw-text-muted-foreground">
							<p>If you&apos;re curious how it&apos;s put together, the codebase is a decent tour of a few things I enjoy:</p>
							<ul className="tw-pl-6 tw-space-y-1 tw-list-disc">
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
					<section className="tw-pt-8 tw-mt-16 tw-border-t tw-border-border/40" aria-labelledby="faq">
						<h2 id="faq" className="tw-mb-6 tw-text-xl tw-font-semibold">
							A few honest answers
						</h2>
						<div className="tw-space-y-6">
							<details className="tw-group">
								<summary className="tw-flex tw-justify-between tw-items-center tw-text-base tw-font-medium tw-list-none tw-cursor-pointer">
									<span>Is this trying to replace WordPress?</span>
									<span className="tw-transition-transform group-open:tw-rotate-180">▼</span>
								</summary>
								<div className="tw-mt-3 tw-text-sm tw-text-muted-foreground">
									<p>Nope. WordPress is great and powers a huge chunk of the web. This is a passion project built for fun and learning — not a product, not a pitch.</p>
								</div>
							</details>

							<details className="tw-group">
								<summary className="tw-flex tw-justify-between tw-items-center tw-text-base tw-font-medium tw-list-none tw-cursor-pointer">
									<span>Does it actually do anything?</span>
									<span className="tw-transition-transform group-open:tw-rotate-180">▼</span>
								</summary>
								<div className="tw-mt-3 tw-text-sm tw-text-muted-foreground">
									<p>Right now it&apos;s a faithful front-end recreation — the screens, navigation, and styling of wp-admin. Think of it as a detailed sandbox rather than a working CMS.</p>
								</div>
							</details>

							<details className="tw-group">
								<summary className="tw-flex tw-justify-between tw-items-center tw-text-base tw-font-medium tw-list-none tw-cursor-pointer">
									<span>Why build this?</span>
									<span className="tw-transition-transform group-open:tw-rotate-180">▼</span>
								</summary>
								<div className="tw-mt-3 tw-text-sm tw-text-muted-foreground">
									<p>Because faithfully rebuilding a familiar, battle-tested interface is a genuinely fun engineering puzzle — and a great excuse to dig into Next.js, React, and the wonderfully weird corners of WordPress&apos;s CSS.</p>
								</div>
							</details>
						</div>
					</section>
				</article>
			</main>

			{/* Footer */}
			<footer className="tw-mt-24 tw-border-t tw-border-border/40" role="contentinfo">
				<div className="tw-container tw-px-4 tw-py-8 tw-mx-auto tw-max-w-4xl">
					<div className="tw-flex tw-flex-wrap tw-gap-4 tw-justify-between tw-items-center tw-text-sm tw-text-muted-foreground">
						<div className="tw-flex tw-gap-4 tw-items-center">
							<span>© 2026 ReactPress</span>
							<span>•</span>
							<span>
								Made by{" "}
								<Link href="https://byronwade.com" target="_blank" rel="noreferrer" className="tw-transition-colors hover:tw-text-foreground">
									Byron Wade
								</Link>
							</span>
						</div>
						<div className="tw-flex tw-gap-4 tw-items-center">
							<Link href="https://byronwade.com" target="_blank" rel="noreferrer" className="tw-transition-colors hover:tw-text-foreground">
								Website
							</Link>
							<Link href="https://twitter.com/byron_c_wade" target="_blank" rel="noreferrer" className="tw-transition-colors hover:tw-text-foreground">
								Twitter
							</Link>
							<Link href="https://github.com/byronwade/ReactPress" target="_blank" rel="noreferrer" className="tw-transition-colors hover:tw-text-foreground">
								GitHub
							</Link>
						</div>
					</div>
					<div className="tw-mt-4 tw-text-xs tw-text-center tw-text-muted-foreground">
						<p>A for-fun rebuild of the WordPress admin, made with Next.js and a lot of coffee.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
