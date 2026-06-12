/**
 * Mock seed data for the ReactPress admin. Inserted into the in-memory
 * Fakebase kernel once per server process (see `client.ts`).
 */
import type { CommentRow, MediaRow, PluginRow, PostRow, TermRow, UserRow } from "./schema";

export const users: UserRow[] = [
	{ id: 1, username: "byron", email: "bcw1995@gmail.com", display_name: "Byron Wade", role: "administrator", url: "https://byronwade.com", registered_at: "2023-01-04T15:12:00Z", post_count: 3 },
	{ id: 2, username: "editor_jane", email: "jane@example.com", display_name: "Jane Editor", role: "editor", url: null, registered_at: "2023-02-01T09:30:00Z", post_count: 2 },
	{ id: 3, username: "author_mike", email: "mike@example.com", display_name: "Mike Author", role: "author", url: null, registered_at: "2023-02-20T18:05:00Z", post_count: 1 },
];

export const posts: PostRow[] = [
	{ id: 1, title: "Hello world!", slug: "hello-world", type: "post", status: "publish", author_id: 1, content: "Welcome to ReactPress. This is your first post.", excerpt: "", comment_status: "open", ping_status: "open", parent_id: 0, menu_order: 0, sticky: false, categories: ["Uncategorized"], tags: [], comment_count: 1, date: "2023-02-16T19:33:13Z", modified: "2023-02-16T19:33:13Z" },
	{ id: 2, title: "Getting started with blocks", slug: "getting-started-with-blocks", type: "post", status: "publish", author_id: 2, content: "The block editor makes building content easy.", excerpt: "", comment_status: "open", ping_status: "open", parent_id: 0, menu_order: 0, sticky: true, categories: ["News"], tags: ["editor", "blocks"], comment_count: 0, date: "2023-03-02T11:00:00Z", modified: "2023-03-02T11:00:00Z" },
	{ id: 3, title: "Designing your theme", slug: "designing-your-theme", type: "post", status: "draft", author_id: 3, content: "A work in progress about theme design.", excerpt: "", comment_status: "closed", ping_status: "closed", parent_id: 0, menu_order: 0, sticky: false, categories: ["Design"], tags: ["themes"], comment_count: 0, date: "2023-03-10T08:45:00Z", modified: "2023-03-11T10:15:00Z" },
	{ id: 4, title: "Sample Page", slug: "sample-page", type: "page", status: "publish", author_id: 1, content: "This is an example page.", excerpt: "", comment_status: "closed", ping_status: "closed", parent_id: 0, menu_order: 0, sticky: false, categories: [], tags: [], comment_count: 0, date: "2023-02-16T19:33:13Z", modified: "2023-02-16T19:33:13Z" },
	{ id: 5, title: "About", slug: "about", type: "page", status: "publish", author_id: 1, content: "About this site.", excerpt: "", comment_status: "closed", ping_status: "closed", parent_id: 0, menu_order: 1, sticky: false, categories: [], tags: [], comment_count: 0, date: "2023-02-18T14:20:00Z", modified: "2023-02-18T14:20:00Z" },
	{ id: 6, title: "Team", slug: "team", type: "page", status: "draft", author_id: 2, content: "Meet the team.", excerpt: "", comment_status: "closed", ping_status: "closed", parent_id: 5, menu_order: 0, sticky: false, categories: [], tags: [], comment_count: 0, date: "2023-03-05T16:00:00Z", modified: "2023-03-05T16:00:00Z" },
];

export const terms: TermRow[] = [
	{ id: 1, name: "Uncategorized", slug: "uncategorized", taxonomy: "category", description: "", parent_id: 0, count: 1 },
	{ id: 2, name: "News", slug: "news", taxonomy: "category", description: "Site news and announcements.", parent_id: 0, count: 1 },
	{ id: 3, name: "Design", slug: "design", taxonomy: "category", description: "", parent_id: 0, count: 1 },
	{ id: 4, name: "editor", slug: "editor", taxonomy: "post_tag", description: "", parent_id: 0, count: 1 },
	{ id: 5, name: "blocks", slug: "blocks", taxonomy: "post_tag", description: "", parent_id: 0, count: 1 },
	{ id: 6, name: "themes", slug: "themes", taxonomy: "post_tag", description: "", parent_id: 0, count: 1 },
];

export const comments: CommentRow[] = [
	{ id: 1, post_id: 1, post_title: "Hello world!", author_name: "A ReactPress Commenter", author_email: "wapuu@wordpress.example", author_url: "https://wordpress.org/", content: "Hi, this is a comment. To get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.", status: "approved", type: "comment", date: "2023-02-16T19:33:13Z" },
	{ id: 2, post_id: 2, post_title: "Getting started with blocks", author_name: "Jane Editor", author_email: "jane@example.com", author_url: null, content: "Great overview — the block inserter is a game changer.", status: "approved", type: "comment", date: "2023-03-02T12:10:00Z" },
	{ id: 3, post_id: 2, post_title: "Getting started with blocks", author_name: "spammy_bot", author_email: "spam@spam.example", author_url: "https://spam.example", content: "Check out my cheap deals!!!", status: "spam", type: "comment", date: "2023-03-03T03:22:00Z" },
	{ id: 4, post_id: 1, post_title: "Hello world!", author_name: "Mike Author", author_email: "mike@example.com", author_url: null, content: "Looking forward to writing more here.", status: "pending", type: "comment", date: "2023-03-04T09:00:00Z" },
];

export const plugins: PluginRow[] = [
	{ id: 1, name: "Akismet Anti-spam", slug: "akismet", description: "Used by millions, Akismet is quite possibly the best way in the world to protect your blog from spam.", version: "5.1", author: "Automattic", author_url: "https://automattic.com/wordpress-plugins/", active: true, update_available: false },
	{ id: 2, name: "Hello Dolly", slug: "hello-dolly", description: "This is not just a plugin, it symbolizes the hope and enthusiasm of an entire generation summed up in two words sung most famously by Louis Armstrong: Hello, Dolly.", version: "1.7.2", author: "Matt Mullenweg", author_url: "https://ma.tt/", active: false, update_available: false },
	{ id: 3, name: "WPGraphQL", slug: "wp-graphql", description: "A GraphQL API for WordPress.", version: "1.13.8", author: "WPGraphQL", author_url: "https://www.wpgraphql.com", active: true, update_available: true },
	{ id: 4, name: "Custom Post Type UI", slug: "custom-post-type-ui", description: "Admin UI for creating custom post types and custom taxonomies for ReactPress.", version: "1.13.0", author: "WebDevStudios", author_url: "https://webdevstudios.com/", active: false, update_available: false },
];

export const media: MediaRow[] = [
	{ id: 101, title: "hero-banner", filename: "hero-banner.jpg", mime_type: "image/jpeg", url: "/uploads/hero-banner.jpg", author_id: 1, file_size: 248320, date: "2023-02-17T10:00:00Z" },
	{ id: 102, title: "team-photo", filename: "team-photo.png", mime_type: "image/png", url: "/uploads/team-photo.png", author_id: 2, file_size: 519400, date: "2023-03-05T16:05:00Z" },
	{ id: 103, title: "brochure", filename: "brochure.pdf", mime_type: "application/pdf", url: "/uploads/brochure.pdf", author_id: 1, file_size: 1048576, date: "2023-03-08T13:30:00Z" },
];
