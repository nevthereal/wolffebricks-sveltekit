import { get, type Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const cartItems: Writable<CartItem[]> = localStorageStore<CartItem[]>('cartItems', []);

export const addToCart = (id: string) => {
	const items = get(cartItems);
	const itemPosition = items.findIndex((item) => {
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
	const items = get(cartItems);
	const itemPosition = items.findIndex((item) => item.id === id);

	if (itemPosition !== -1) {
		cartItems.update((cartItems) => {
			return cartItems.filter((item) => item.id !== id);
		});
	}
};
export const clearCart = () => {
	cartItems.set([]);
};
