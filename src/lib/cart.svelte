<script lang="ts">
	import CartProduct from './cartProduct.svelte';
	import { cartItems } from '../cart';

	let items: CartItem[];
	cartItems.subscribe((i) => {
		items = i;
	});
</script>

<div class="bg-surface-100-800-token card p-8 w-[90%] max-h-[70dvh] relative">
	<h1 class="h1 font-black mb-4">Your Cart:</h1>
	<div class="overflow-auto max-h-[40dvh]">
		{#each items as item}
			<CartProduct itemId={item.id} />
		{/each}
	</div>
	<p>Subtotal: CHF50</p>
	<button
		class="btn variant-ghost-primary mt-4 h3 font-bold"
		on:click={() => console.log('Checkout')}>Check out</button
	>
</div>
