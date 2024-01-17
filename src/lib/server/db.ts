import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const { DB_URL, DB_TOKEN } = import.meta.env;

const client = createClient({ url: DB_URL, authToken: DB_TOKEN });

export const db = drizzle(client);
