<script lang="ts">
	import Panel from '$lib/panel.svelte';
	import { products } from '$lib/products';
</script>

<div>
	<h1 class="h1 font-black uppercase my-16">Products</h1>
	<div id="products" class="flex justify-center gap-4 flex-wrap md:max-w-[75%] my-4 mx-auto px-4">
		{#each products as product}
			<Panel {product} />
		{/each}
	</div>
</div>
