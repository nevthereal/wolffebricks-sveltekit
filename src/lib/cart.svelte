<script lang="ts">
	import CartProduct from './cartProduct.svelte';
	import { cartItems } from '../cart';

	console.log($cartItems);
</script>

<div class=" bg-surface-100-800-token card p-8">
	<h1 class="h1 font-black mb-4">Your Cart:</h1>
	<ul>
		{#each $cartItems as item}
			<CartProduct itemId={item.id} />
		{/each}
	</ul>
	<p>Subtotal: CHF50</p>
	<button
		class="btn variant-ghost-primary mt-4 h3 font-bold"
		on:click={() => console.log('Checkout')}>Check out</button
	>
</div>
