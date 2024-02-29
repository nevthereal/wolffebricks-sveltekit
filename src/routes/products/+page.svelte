<script lang="ts">
	import Panel from '$lib/components/panel.svelte';
	import { products } from '$lib/cart/products';
</script>

<svelte:head>
	<title>Wolffe Bricks - Products</title>
</svelte:head>

<div>
	<h1 class="h1 font-black uppercase my-16">Products</h1>
	<div class="flex">
		<div id="products" class="flex justify-center flex-wrap my-4 px-4 mx-auto gap-8">
			{#each products as product}
				<Panel {product} />
			{/each}
		</div>
	</div>
</div>
