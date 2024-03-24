<script lang="ts">
	export let product: Product;
</script>

<a class="card flex flex-col p-6" href={`products/${product.slug}`}>
	<img class="m-2 mx-auto w-96 rounded-token" src={product.img_main} alt="product" loading="lazy" />
	<h3 class="h3 text-center font-bold">{product.title}</h3>
	<h4 class="h4 font-bold">
		{product.price.toFixed(2)} CHF
	</h4>
</a>
