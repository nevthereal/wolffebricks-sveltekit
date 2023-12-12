<script lang="ts">
	import { removeFromCart } from '../cart';
	import { getProductData } from '../routes/products';

	export let itemId: string;

	const item = getProductData(itemId);
</script>

<div class="flex justify-between card p-2">
	<h3 class="h3">{item.title}</h3>
	<button class="btn h4" on:click={() => removeFromCart(item.id)}>
		<i class="fa-solid fa-trash"></i>
	</button>
</div>
