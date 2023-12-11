<script lang="ts">
	import Panel from '$lib/panel.svelte';
	import { products } from '$lib/products';
</script>

<div>
	<h1 class="text-4xl md:text-6xl font-black uppercase my-16">Products</h1>
	<div id="products" class="flex justify-center gap-4 flex-wrap my-4 2xl:max-w-[90%] mx-auto">
		{#each products as product}
			<Panel {product} />
		{/each}
	</div>
</div>
