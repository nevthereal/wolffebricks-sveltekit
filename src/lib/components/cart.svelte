<script lang="ts">
	import { page } from '$app/stores';
	import CartProduct from './cartProduct.svelte';
	import { cartItems, clearCart } from '../cart/cart';
	import { get, writable } from 'svelte/store';
	import { getProductData } from '../cart/products';
	import type { CssClasses } from '@skeletonlabs/skeleton';

	export let classes: CssClasses = '';

	let subtotal = writable(0);
	const getSubtotal = (items: CartItem[]) => {
		let total = 0;
		items.forEach((item) => {
			if (item && item.id) {
				const productData = getProductData(item.id);
				if (productData) {
					total += productData.price * item.quantity;
				}
			}
		});
		subtotal.set(total);
	};

	$: getSubtotal($cartItems);

	let loading = false;

	const checkout = async () => {
		loading = true;
		await fetch(`${$page.url.origin}/checkout`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ items: get(cartItems) })
		})
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				clearCart();
				window.location.replace(data.url);
			});
	};
</script>
