<script lang="ts">
	import CartProduct from './cartProduct.svelte';
	import { cartItems } from '../cart';
</script>

<div>
	<h1>Your Cart:</h1>
	<ul>
		{#each $cartItems as item}
			<CartProduct itemId={item.id} />
		{/each}
	</ul>
</div>
