<script lang="ts">
	import { page } from '$app/stores';
	import CartProduct from '$lib/components/cartProduct.svelte';
	import { cartItems, clearCart } from '$lib/cart/cart';
	import { get, writable } from 'svelte/store';
	import { getProductData } from '$lib/cart/products';
	import { getModalStore, type CssClasses } from '@skeletonlabs/skeleton';
	import { pushState } from '$app/navigation';

	export let classes: CssClasses;
	export let modal = false;

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

	const modalStore = getModalStore();

	const closeCart = () => {
		modalStore.close();
		history.back();
	};
</script>

<div class={classes}>
	{#if modal}
		<div class="flex w-full justify-end">
			<button on:click={closeCart} class="btn"><i class="fa-solid fa-xmark"></i></button>
		</div>
	{/if}
	<div class="mb-4">
		<h1 class="h1 font-black">Your Cart:</h1>
	</div>
	{#if $cartItems.length > 0}
		<div class="max-h-[40dvh] overflow-auto">
			{#each $cartItems as item (item.id)}
				<CartProduct itemId={item.id} />
			{/each}
		</div>
		{#if $subtotal > 0}
			<p>Subtotal: CHF {$subtotal.toFixed(2)}</p>
			<button class="variant-ghost-primary h3 btn mt-4 font-bold" on:click={() => checkout()}>
				{#if !loading}
					Check Out
				{:else}
					Loading ...
				{/if}
			</button>
		{/if}
	{:else if $cartItems.length === 0}
		<h3 class="h3 font-bold">Your cart is empty</h3>
	{/if}
</div>
