<script lang="ts">
	import { removeFromCart } from '../cart/cart';
	import { getProductData } from '../cart/products';

	export let itemId: string;

	const item = getProductData(itemId)!;

	if (item === undefined) {
		removeFromCart(itemId);
	}
</script>

<div class="card my-2 flex justify-between p-4">
	<a href={`/products/${item.slug}`} class="flex items-center gap-8">
		<img src={item.img_main} alt={item.title} class="hidden h-24 rounded-token md:block" />
		<div class="my-auto text-left">
			<h3 class="h3 my-auto font-bold">{item.title}</h3>
			<h4 class="h4">CHF {item.price}</h4>
		</div>
	</a>
	<button class="h4 btn my-auto" on:click={() => removeFromCart(item.id)}>
		<i class="fa-solid fa-trash"></i>
	</button>
</div>
