import type { Config } from 'drizzle-kit';
import 'dotenv/config';

export default {
	schema: './src/lib/server/schema.ts',
	out: './migrations',
	driver: 'turso',
	dbCredentials: {
		url: 'file:./local.db'
	}
} satisfies Config;
