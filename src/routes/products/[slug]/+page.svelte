<script lang="ts">
	import { getProductPage } from '$lib/cart/products';
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import { addToCart, cartItems, removeFromCart } from '$lib/cart/cart';
	import { writable } from 'svelte/store';

	let product = getProductPage($page.params.slug)!;
	if (product === undefined) {
		error(404, 'Product not found');
	}

	let inCart = writable(false);

	const isInCart = (items: CartItem[]) => {
		inCart.set($cartItems.some((item) => item.id == product.id));
	};

	$: isInCart($cartItems);
</script>

<svelte:head>
	<title>Wolffe Bricks - {product.title}</title>
	<meta name="description" content={product.description} />
</svelte:head>

<div class="mx-4">
	<div class="md:grid m-4 md:grid-cols-2">
		<img src={product.img_main} alt="" class="mx-auto rounded-token" />
		<div class="my-auto">
			<h1 class="font-bold h1 m-6">{product.title}</h1>
			<h2 class="h2 font-bold">Short description:</h2>
			<p class="m-4">
				Designed by <span class="font-bold">{product.designer}</span> <br />
				{product.description}
				<span class="font-bold">{product.parts} Parts</span>
			</p>
			{#if $inCart}
				<button
					class="font-bold btn variant-ghost-error"
					on:click={() => removeFromCart(product.id)}
				>
					Remove From Cart
				</button>
			{:else}
				<button class="font-bold btn variant-ghost-success" on:click={() => addToCart(product.id)}>
					CHF {product.price.toFixed(2)} - Add to cart
				</button>
			{/if}
		</div>
	</div>
	<h2 class="h2 font-bold mb-4">Gallery:</h2>
	<div class="flex justify-center flex-wrap gap-4 w-full">
		<img class="md:w-[480px] rounded-token" src={product.img_main} alt="" />
		<img class="md:w-[480px] rounded-token" src={product.img_1} alt="" />
		<img class="md:w-[480px] rounded-token" src={product.img_2} alt="" />
	</div>
</div>
