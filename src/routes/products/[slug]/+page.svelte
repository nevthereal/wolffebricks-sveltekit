<script lang="ts">
	import { getProductPage, products } from '$lib/products';
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';

	let product: Product | undefined = getProductPage($page.params.slug);
	if (product === undefined) {
		throw error(404, 'Product not found');
	}
</script>

<div class="mx-4">
	{#if product}
		<div class="md:grid m-4 md:grid-cols-2">
			<img src={product.img_main} alt="" class="mx-auto rounded-xl" />
			<div class="my-auto">
				<h1 class="font-bold h1 m-6">{product.title}</h1>
				<h2 class="h2 font-bold">Short description:</h2>
				<p class="m-4">
					Designed by <span class="font-bold">{product.designer}</span> <br />
					{product.description}
					<span class="font-bold">{product.parts} Parts</span>
				</p>
				<button class="font-bold btn variant-ghost-primary">
					<span>CHF {product.price} - Add to cart</span>
				</button>
			</div>
		</div>
		<h2 class="h2 font-bold mb-4">Gallery:</h2>
		<div class="flex justify-center flex-wrap gap-4 w-full">
			<img class="md:w-[480px] rounded-xl" src={product.img_main} alt="" />
			<img class="md:w-[480px] rounded-xl" src={product.img_1} alt="" />
			<img class="md:w-[480px] rounded-xl" src={product.img_2} alt="" />
		</div>
	{/if}
</div>
