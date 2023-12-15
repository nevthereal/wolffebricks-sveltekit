// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { SupabaseClient } from '@supabase/supabase-js';

// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

interface Product {
	id: string;
	slug: string;
	title: string;
	price: number;
	designer: string;
	description: string;
	parts: number;
	img_main: ImageURL;
	img_1: ImageUrl;
	img_2: ImageUrl;
}

interface CartItem {
	id: string;
	quantity: number;
}

declare type ImageUrl = string;

declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: Session | null;
		}
	}
}
