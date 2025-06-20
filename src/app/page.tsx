import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			{/* Simple header */}
			<header className="border-b border-border/40">
				<div className="container max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<div className="flex h-6 w-6 items-center justify-center rounded bg-black text-white dark:bg-white dark:text-black">
							<span className="text-sm font-bold">R</span>
						</div>
						<span className="font-semibold">ReactPress</span>
					</div>
					<nav className="flex items-center gap-4">
						<Link href="https://github.com/byronwade/ReactPress" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
							GitHub
						</Link>
						<Link href="/rp-admin">
							<Button variant="outline" size="sm">
								Admin Demo
							</Button>
						</Link>
					</nav>
				</div>
			</header>

			{/* Main content */}
			<main className="container max-w-4xl mx-auto px-4 py-16">
				<div className="max-w-2xl">
					<h1 className="text-4xl font-bold tracking-tight mb-6">ReactPress</h1>

					<div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
						<p>WordPress reimagined with modern web technologies.</p>

						<p>ReactPress is a complete WordPress admin interface rebuilt from the ground up using Next.js 15, React 18, and Tailwind CSS. It maintains full compatibility with WordPress while delivering significantly better performance and developer experience.</p>

						<p>This project demonstrates how familiar WordPress workflows can be modernized without sacrificing functionality. Every page, component, and interaction has been carefully recreated with modern best practices.</p>
					</div>

					<div className="mt-12 space-y-4">
						<div className="flex items-center gap-4">
							<Link href="/rp-admin">
								<Button className="h-11">
									View Admin Demo
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
							<Link href="https://github.com/byronwade/ReactPress" target="_blank" rel="noopener noreferrer">
								<Button variant="outline" className="h-11">
									<Github className="mr-2 h-4 w-4" />
									Source Code
								</Button>
							</Link>
						</div>

						<p className="text-sm text-muted-foreground">Currently in development • Built with Next.js 15</p>
					</div>

					<div className="mt-16 pt-8 border-t border-border/40">
						<h2 className="text-xl font-semibold mb-4">For Developers</h2>
						<div className="space-y-4 text-muted-foreground">
							<p>ReactPress serves as a reference implementation for building complex admin interfaces with modern React patterns. The codebase includes examples of:</p>
							<ul className="list-disc pl-6 space-y-1">
								<li>Server-side rendering with Next.js 15</li>
								<li>Component composition and reusability</li>
								<li>WordPress-compatible design patterns</li>
								<li>Modern CSS with Tailwind</li>
								<li>TypeScript implementation</li>
							</ul>
							<p>All components are built with accessibility, performance, and maintainability in mind.</p>
						</div>
					</div>
				</div>
			</main>

			{/* Simple footer */}
			<footer className="border-t border-border/40 mt-24">
				<div className="container max-w-4xl mx-auto px-4 py-8">
					<div className="flex items-center justify-between text-sm text-muted-foreground">
						<div className="flex items-center gap-4">
							<span>© 2024 ReactPress</span>
							<span>•</span>
							<span>Built by Byron Wade</span>
						</div>
						<div className="flex items-center gap-4">
							<Link href="https://byronwade.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
								Website
							</Link>
							<Link href="https://twitter.com/byron_c_wade" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
								Twitter
							</Link>
							<Link href="https://github.com/byronwade/ReactPress" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
								GitHub
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}