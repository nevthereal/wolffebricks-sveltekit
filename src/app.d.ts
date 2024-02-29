declare global {
	namespace App {
		interface Locals {
			user: import('lucia').User | null;
			session: import('lucia').Session | null;
		}
	}
	interface Product {
		id: string;
		slug: string;
		title: string;
		price: number;
		designer: string;
		description: string;
		parts: number;
		img_main: string;
		img_1: string;
		img_2: string;
	}
	interface CartItem {
		id: string;
		quantity: number;
	}
}

export {};
