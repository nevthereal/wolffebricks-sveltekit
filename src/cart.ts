import { writable, get, type Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

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
	let itemPosition = items.findIndex((item) => {
		return item.id === id;
	});

	cartItems.update(() => {
		return items.splice(itemPosition, 1);
	});
};
