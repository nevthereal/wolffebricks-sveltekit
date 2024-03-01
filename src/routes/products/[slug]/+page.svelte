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
	<div class="m-4 md:grid md:grid-cols-2">
		<img src={product.img_main} alt="" class="mx-auto rounded-token" />
		<div class="my-auto">
			<h1 class="h1 m-6 font-bold">{product.title}</h1>
			<h2 class="h2 font-bold">Short description:</h2>
			<p class="m-4">
				Designed by <span class="font-bold">{product.designer}</span> <br />
				{product.description}
				<span class="font-bold">{product.parts} Parts</span>
			</p>
			{#if $inCart}
				<button
					class="variant-ghost-error btn font-bold"
					on:click={() => removeFromCart(product.id)}
				>
					Remove From Cart
				</button>
			{:else}
				<button class="variant-ghost-primary btn font-bold" on:click={() => addToCart(product.id)}>
					CHF {product.price.toFixed(2)} - Add to cart
				</button>
			{/if}
		</div>
	</div>
	<h2 class="h2 mb-4 font-bold">Gallery:</h2>
	<div class="flex w-full flex-wrap justify-center gap-4">
		<img class="rounded-token md:w-[480px]" src={product.img_main} alt="" />
		<img class="rounded-token md:w-[480px]" src={product.img_1} alt="" />
		<img class="rounded-token md:w-[480px]" src={product.img_2} alt="" />
	</div>
</div>
