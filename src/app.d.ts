// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// and what to do when importing types

declare interface Product {
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

declare interface CartItem {
	id: string;
	quantity: number;
}

declare type ImageUrl = string;
