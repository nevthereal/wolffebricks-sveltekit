<script lang="ts">
	export let product: Product;
</script>

<div class="card p-4 btn">
	<a href={`products/${product.slug}`}>
		<img class="p-2 w-96 mx-auto rounded-3xl" src={product.img_main} alt="" />
		<h3 class="font-bold h3 text-center">{product.title}</h3>
		<h4 class="font-bold h4">
			{product.price} CHF
		</h4>
	</a>
</div>
