<script lang="ts">
	import Panel from '$lib/panel.svelte';
	import { products } from '../products';
</script>

<div>
	<h1 class="h1 font-black uppercase my-16">Products</h1>
	<div class="flex">
		<div id="products" class="flex justify-center flex-wrap my-4 px-4 mx-auto">
			{#each products as product}
				<Panel {product} />
			{/each}
		</div>
	</div>
</div>
