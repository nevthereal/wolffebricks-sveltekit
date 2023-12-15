<script lang="ts">
	import { page } from '$app/stores';
	import CartProduct from './cartProduct.svelte';
	import { cartItems } from './cart';
	import { get, writable } from 'svelte/store';
	import { getProductData } from './products';
	import type { CartItem } from '../app';

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

	const checkout = async () => {
		await fetch(`${$page.url.origin}/api/checkout`, {
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
				window.location.replace(data.url);
			});
	};
</script>

<div class="bg-surface-100-800-token card p-8 w-[90%] max-h-[70dvh] relative">
	<h1 class="h1 font-black mb-4">Your Cart:</h1>
	<div class="overflow-auto max-h-[40dvh]">
		{#each $cartItems as item}
			<CartProduct itemId={item.id} />
		{/each}
	</div>
	<p>Subtotal: {$subtotal}</p>
	<button class="btn variant-ghost-primary mt-4 h3 font-bold" on:click={() => checkout()}
		>Check out</button
	>
</div>
