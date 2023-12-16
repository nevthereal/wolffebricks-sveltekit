<script lang="ts">
	import type { Product } from '../app';

	export let product: Product;
</script>

<div class="card btn p-4">
	<a href={`products/${product.slug}`}>
		<img class="p-2 w-96 mx-auto rounded-3xl" src={product.img_main} alt="product" loading="lazy" />
		<h3 class="font-bold h3 text-center">{product.title}</h3>
		<h4 class="font-bold h4">
			{product.price.toFixed(2)} CHF
		</h4>
	</a>
</div>
