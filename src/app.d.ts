declare global {
	// namespace App {}
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
