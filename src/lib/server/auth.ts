import { Lucia } from 'lucia';
import { dev } from '$app/environment';
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import { db } from './db';
import { sessionTable, userTable } from './schema';
import { Google } from 'arctic';
import { GOOGLE_ID, GOOGLE_SECRET } from '$env/static/private';

// your adapter
const adapter = new DrizzleSQLiteAdapter(db, sessionTable, userTable);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => {
		return {
			// attributes has the type of DatabaseUserAttributes
			githubId: attributes.github_id,
			username: attributes.username,
			email: attributes.email,
			admin: attributes.admin,
			stripeId: attributes.stripeId
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

export const google = new Google(GOOGLE_ID, GOOGLE_SECRET, '/api/login/google');

interface DatabaseUserAttributes {
	github_id: number;
	username: string;
	email: string;
	admin: boolean;
	stripeId: string | null;
}
