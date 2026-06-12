/**
 * Fakebase client for the ReactPress admin.
 *
 * Provides a Supabase-shaped, in-memory backend so the admin screens can read
 * real (mock) data with the same `from().select()...` API you'd use against a
 * live Supabase project. Swapping to real Supabase later is a one-line change
 * (import `createClient` from `@supabase/supabase-js` instead).
 *
 * The kernel and seed state are cached on `globalThis` so Next.js dev HMR and
 * multiple route renders share one dataset instead of re-seeding each time.
 */
import { createClient, createMemoryKernel, type FakebaseClient } from "@byronwade/fakebase";
import { schema, type Database } from "./schema";
import * as seed from "./seed-data";

type Db = FakebaseClient<Database>;

interface FakebaseGlobal {
	client?: Db;
	seeded?: Promise<void>;
}

const store = globalThis as typeof globalThis & { __reactpress_fakebase?: FakebaseGlobal };
const g: FakebaseGlobal = (store.__reactpress_fakebase ??= {});

function getClient(): Db {
	if (!g.client) {
		const kernel = createMemoryKernel<Database>(schema);
		g.client = createClient<Database>("http://localhost", "local-anon-key", { kernel });
	}
	return g.client;
}

async function seedOnce(db: Db): Promise<void> {
	// Order matters for foreign keys: users -> terms -> posts -> comments.
	await db.from("users").insert(seed.users);
	await db.from("terms").insert(seed.terms);
	await db.from("posts").insert(seed.posts);
	await db.from("comments").insert(seed.comments);
	await db.from("plugins").insert(seed.plugins);
	await db.from("media").insert(seed.media);
}

/**
 * Returns the seeded Fakebase client. Always `await` this in a Server
 * Component before querying so the mock data is guaranteed to be loaded.
 */
export async function getDb(): Promise<Db> {
	const db = getClient();
	g.seeded ??= seedOnce(db);
	await g.seeded;
	return db;
}
