<script lang="ts">
	import { focusTrap } from '@skeletonlabs/skeleton';
	import { removeFromCart } from './cart';
	import { getProductData } from './products';

	export let itemId: string;

	const item = getProductData(itemId)!;

	if (item === undefined) {
		removeFromCart(itemId);
	}
</script>

<div class="flex justify-between card p-4 my-2">
	<div class="flex gap-8">
		<img src={item.img_main} alt={item.title} class="h-24 rounded-2xl" />
		<div class="my-auto text-left">
			<h3 class="h3 my-auto font-bold">{item.title}</h3>
			<h4 class="h4">CHF {item.price}</h4>
		</div>
	</div>
	<button class="btn h4 my-auto" on:click={() => removeFromCart(item.id)}>
		<i class="fa-solid fa-trash"></i>
	</button>
</div>
