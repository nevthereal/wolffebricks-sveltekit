import { get, writable, type Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
import { getProductData } from '../routes/products';

export const cartItems: Writable<CartItem[]> = localStorageStore<CartItem[]>('cartItems', []);

export const addToCart = (id: string) => {
	let items = get(cartItems);
	let itemPosition = items.findIndex((item) => {
		return item.id === id;
	});

	if (itemPosition === -1) {
		cartItems.update(() => {
			return [...items, { id: id, quantity: 1 }];
		});
	} else {
		return items;
	}
};

export const removeFromCart = (id: string) => {
	let items = get(cartItems);
	let itemPosition = items.findIndex((item) => item.id === id);

	if (itemPosition !== -1) {
		cartItems.update((cartItems) => {
			return cartItems.filter((item) => item.id !== id);
		});
	}
};
