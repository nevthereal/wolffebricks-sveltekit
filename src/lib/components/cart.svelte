<script lang="ts">
	import { page } from '$app/stores';
	import CartProduct from './cartProduct.svelte';
	import { cartItems, clearCart } from '../cart';
	import { get, writable } from 'svelte/store';
	import { getProductData } from '../products';
	import type { CartItem } from '../../app';

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

<div class="bg-surface-100-800-token card p-8 w-[90%] max-h-[70dvh] relative">
	<h1 class="h1 font-black mb-4">Your Cart:</h1>
	{#if $cartItems.length > 0}
		<div class="overflow-auto max-h-[40dvh]">
			{#each $cartItems as item (item.id)}
				<CartProduct itemId={item.id} />
			{/each}
		</div>
		{#if $subtotal > 0}
			<p>Subtotal: CHF {$subtotal.toFixed(2)}</p>
			<button class="btn variant-ghost-primary mt-4 h3 font-bold" on:click={() => checkout()}
				>{#if !loading}
					Check Out
				{:else}
					Loading ...
				{/if}</button
			>
		{/if}
	{:else if $cartItems.length === 0}
		<p>Your cart is empty</p>
	{/if}
</div>
