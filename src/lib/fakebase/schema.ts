/**
 * Fakebase schema (Postgres IR) for the ReactPress admin.
 *
 * This describes the tables the admin screens read from. It is consumed by
 * `createMemoryKernel` in `client.ts`. Keep column names snake_case to mirror
 * a real Supabase/Postgres project.
 */
import type { ColumnIR, ColumnType, ProjectSchemaIR, TableIR } from "@byronwade/core";

type ColOpts = Partial<Omit<ColumnIR, "name" | "type">>;

function col(name: string, type: ColumnType, opts: ColOpts = {}): ColumnIR {
	return { name, type, nullable: opts.primaryKey ? false : opts.nullable ?? true, ...opts };
}

function table(name: string, columns: ColumnIR[], primaryKey = "id"): TableIR {
	return { schema: "public", name, columns, indexes: [], policies: [], rlsEnabled: false, primaryKey };
}

export const schema: ProjectSchemaIR = {
	version: 1,
	enums: [],
	functions: [],
	tables: [
		table("users", [
			col("id", "int4", { primaryKey: true }),
			col("username", "text", { nullable: false }),
			col("email", "text", { nullable: false }),
			col("display_name", "text", { nullable: false }),
			col("role", "text", { nullable: false, defaultSql: "'subscriber'" }),
			col("url", "text"),
			col("registered_at", "timestamptz", { nullable: false }),
			col("post_count", "int4", { nullable: false, defaultSql: "0" }),
		]),
		table("posts", [
			col("id", "int4", { primaryKey: true }),
			col("title", "text", { nullable: false }),
			col("slug", "text", { nullable: false }),
			col("type", "text", { nullable: false, defaultSql: "'post'" }), // post | page
			col("status", "text", { nullable: false, defaultSql: "'publish'" }), // publish | draft | pending | future | trash
			col("author_id", "int4", { nullable: false, references: { table: "users", column: "id" } }),
			col("content", "text", { defaultSql: "''" }),
			col("excerpt", "text", { defaultSql: "''" }),
			col("comment_status", "text", { nullable: false, defaultSql: "'open'" }),
			col("ping_status", "text", { nullable: false, defaultSql: "'open'" }),
			col("parent_id", "int4", { defaultSql: "0" }),
			col("menu_order", "int4", { nullable: false, defaultSql: "0" }),
			col("sticky", "bool", { nullable: false, defaultSql: "false" }),
			col("categories", "jsonb", { defaultSql: "'[]'" }), // string[] of category names
			col("tags", "jsonb", { defaultSql: "'[]'" }), // string[] of tag names
			col("comment_count", "int4", { nullable: false, defaultSql: "0" }),
			col("date", "timestamptz", { nullable: false }),
			col("modified", "timestamptz", { nullable: false }),
		]),
		table("terms", [
			col("id", "int4", { primaryKey: true }),
			col("name", "text", { nullable: false }),
			col("slug", "text", { nullable: false }),
			col("taxonomy", "text", { nullable: false }), // category | post_tag
			col("description", "text", { defaultSql: "''" }),
			col("parent_id", "int4", { defaultSql: "0" }),
			col("count", "int4", { nullable: false, defaultSql: "0" }),
		]),
		table("comments", [
			col("id", "int4", { primaryKey: true }),
			col("post_id", "int4", { nullable: false, references: { table: "posts", column: "id" } }),
			col("post_title", "text", { nullable: false }),
			col("author_name", "text", { nullable: false }),
			col("author_email", "text"),
			col("author_url", "text"),
			col("content", "text", { nullable: false }),
			col("status", "text", { nullable: false, defaultSql: "'approved'" }), // approved | pending | spam | trash
			col("type", "text", { nullable: false, defaultSql: "'comment'" }),
			col("date", "timestamptz", { nullable: false }),
		]),
		table("plugins", [
			col("id", "int4", { primaryKey: true }),
			col("name", "text", { nullable: false }),
			col("slug", "text", { nullable: false }),
			col("description", "text", { defaultSql: "''" }),
			col("version", "text", { nullable: false }),
			col("author", "text", { nullable: false }),
			col("author_url", "text"),
			col("active", "bool", { nullable: false, defaultSql: "false" }),
			col("update_available", "bool", { nullable: false, defaultSql: "false" }),
		]),
		table("media", [
			col("id", "int4", { primaryKey: true }),
			col("title", "text", { nullable: false }),
			col("filename", "text", { nullable: false }),
			col("mime_type", "text", { nullable: false }),
			col("url", "text", { nullable: false }),
			col("author_id", "int4", { nullable: false, references: { table: "users", column: "id" } }),
			col("file_size", "int4", { nullable: false, defaultSql: "0" }),
			col("date", "timestamptz", { nullable: false }),
		]),
	],
};

/** Row types mirroring the schema, for typed client calls. */
export type UserRow = {
	id: number;
	username: string;
	email: string;
	display_name: string;
	role: string;
	url: string | null;
	registered_at: string;
	post_count: number;
}
export type PostRow = {
	id: number;
	title: string;
	slug: string;
	type: "post" | "page";
	status: string;
	author_id: number;
	content: string;
	excerpt: string;
	comment_status: string;
	ping_status: string;
	parent_id: number;
	menu_order: number;
	sticky: boolean;
	categories: string[];
	tags: string[];
	comment_count: number;
	date: string;
	modified: string;
}
export type TermRow = {
	id: number;
	name: string;
	slug: string;
	taxonomy: "category" | "post_tag";
	description: string;
	parent_id: number;
	count: number;
}
export type CommentRow = {
	id: number;
	post_id: number;
	post_title: string;
	author_name: string;
	author_email: string | null;
	author_url: string | null;
	content: string;
	status: string;
	type: string;
	date: string;
}
export type PluginRow = {
	id: number;
	name: string;
	slug: string;
	description: string;
	version: string;
	author: string;
	author_url: string | null;
	active: boolean;
	update_available: boolean;
}
export type MediaRow = {
	id: number;
	title: string;
	filename: string;
	mime_type: string;
	url: string;
	author_id: number;
	file_size: number;
	date: string;
}

export type Database = {
	public: {
		Tables: {
			users: { Row: UserRow; Insert: UserRow; Update: Partial<UserRow> };
			posts: { Row: PostRow; Insert: PostRow; Update: Partial<PostRow> };
			terms: { Row: TermRow; Insert: TermRow; Update: Partial<TermRow> };
			comments: { Row: CommentRow; Insert: CommentRow; Update: Partial<CommentRow> };
			plugins: { Row: PluginRow; Insert: PluginRow; Update: Partial<PluginRow> };
			media: { Row: MediaRow; Insert: MediaRow; Update: Partial<MediaRow> };
		};
		Views: Record<string, { Row: Record<string, unknown> }>;
	};
}
