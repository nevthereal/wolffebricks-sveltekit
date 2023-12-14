<script lang="ts">
	import CartProduct from './cartProduct.svelte';
	import { cartItems, getSubtotal } from './cart';
	import { getProductData } from '../routes/products';
	import { get } from 'svelte/store';

	let subtotal = $getSubtotal();
</script>

<div class="bg-surface-100-800-token card p-8 w-[90%] max-h-[70dvh] relative">
	<h1 class="h1 font-black mb-4">Your Cart:</h1>
	<div class="overflow-auto max-h-[40dvh]">
		{#each $cartItems as item}
			<CartProduct itemId={item.id} />
		{/each}
	</div>
	<p>Subtotal: {getSubtotal()}</p>
	<button
		class="btn variant-ghost-primary mt-4 h3 font-bold"
		on:click={() => console.log('Checkout')}>Check out</button
	>
</div>
