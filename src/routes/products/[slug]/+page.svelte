<script lang="ts">
</script>

<div class="md:grid m-4 md:grid-cols-2">
	<img
		src={product.img_main}
		alt=""
		class="w-80 md:w-[720px] my-4 mx-auto border border-gray-300 rounded-xl"
	/>
	<div class="my-auto">
		<h1 class="font-bold text-2xl md:text-4xl m-4">{product.title}</h1>
		<div class="m-4 flex justify-center space-x-10">
			<button
				class="border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200 text-xl md:text-2xl font-bold"
			>
				<span>CHF {product.price} - Add to cart</span>
			</button>
			<!-- <button
                class='border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200 text-xl md:text-2xl font-bold'
                onClick={() => cart.deleteFromCart(product.id)}
              >
                Remove from Cart
              </button> -->
		</div>
		<h2 class="text-xl md:text-3xl text-gray-500 dark:text-gray-200 font-bold">
			Short description:
		</h2>
		<p class="text-sm md:text-lg m-4">
			Designed by <span class="font-bold">{product.designer}</span> <br />
			{product.description}
		</p>
		<h2 class="text-xl md:text-3xl text-gray-500 dark:text-gray-200 font-bold">Details:</h2>
		<ul class="text-sm md:text-lg list-disc mx-auto list-inside">
			<li>{product.parts} Parts</li>
		</ul>
	</div>
	<div id="gallery">
		<h2 class="text-xl md:text-3xl text-gray-500 dark:text-gray-200 font-bold">Gallery:</h2>
		<div class="flex flex-wrap justify-center gap-2 m-4">
			<img
				class="w-[480px] my-4 border border-gray-300 dark:border-gray-600 rounded-xl"
				src={product.img_main}
				alt=""
			/>
			<img
				class="w-[480px] my-4 border border-gray-300 dark:border-gray-600 rounded-xl"
				src={product.img_1}
				alt=""
			/>
			<img
				class="w-[480px] my-4 border border-gray-300 dark:border-gray-600 rounded-xl"
				src={product.img_2}
				alt=""
			/>
		</div>
	</div>
</div>
