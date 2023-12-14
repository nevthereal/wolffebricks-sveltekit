<script lang="ts">
	import { removeFromCart } from '../cart';
	import { getProductData } from '../routes/products';

	export let itemId: string;

	const item = getProductData(itemId);
</script>

<div class="flex justify-between card p-4 my-2">
	<div class="flex gap-2">
		<img src={item.img_main} alt={item.title} class="h-24 rounded-2xl" />
		<h3 class="h3 my-auto">{item.title}</h3>
	</div>
	<button class="btn h4 my-auto" on:click={() => removeFromCart(item.id)}>
		<i class="fa-solid fa-trash"></i>
	</button>
</div>
