<script lang="ts">
	export let product: Product;
</script>

<div
	class="border border-gray-300 dark:border-gray-500 bg-gray-200 dark:bg-gray-700 rounded-2xl w-9/12 md:w-auto p-4 hover:scale-105 duration-200 mx-auto md:mx-0"
>
	<a href={`products/${product.slug}`}>
		<img class="p-2 w-96 mx-auto rounded-3xl" src={product.img_main} alt="" />
		<h1 class="font-bold text-2xl text-center">{product.title}</h1>
		<p class="font-bold">
			{product.price} CHF
		</p>
	</a>
</div>
