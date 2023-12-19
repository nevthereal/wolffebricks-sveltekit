import { get, type Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { CartItem } from '../app';
import triggerToast from '../routes/+layout.svelte';

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
	triggerToast('added to');
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
export const clearCart = () => {
	cartItems.set([]);
};
