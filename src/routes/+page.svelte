<script lang="ts">
	import Panel from '$lib/panel.svelte';
	import { products } from '$lib/products';
</script>

<div>
	<div id="header" class="text-center bg-no-repeat bg-center bg-cover w-full bg-white">
		<div class="w-full bg-gray-800/25 dark:bg-black/70 h-[85vh] md:h-[90vh]">
			<div
				class="absolute top-[40vh] text-4xl md:text-6xl font-black text-white bg-cover w-full h-40"
			>
				<h1 class="uppercase">Wolffe Bricks</h1>
				<p class="text-base md:text-lg tracking-wider my-4">LEGO® MOCs from Switzerland!</p>
				<div
					class="text-base bg-orange-400 border-2 border-orange-600 w-fit mt-6 mb-2 md:mx-auto mx-6 my-8 p-3 rounded-2xl"
				>
					<h2 class="text-2xl">We're Back!</h2>
					<p class="font-semibold">
						To celebrate that we are back again, only selling instructions again, use the code
						COMEBACK15 to get 15% off of all your purchases.
					</p>
				</div>
				<a href="#featured">
					<i class="fa-solid fa-chevron-down text-3xl md:text-4xl hover:scale-110 duration-200" />
				</a>
			</div>
		</div>
	</div>
	<div id="featured">
		<h1 class="text-3xl font-bold uppercase my-4">Featured:</h1>
		<div class="flex justify-center gap-4 flex-wrap">
			<Panel product={products[2]} />
			<Panel product={products[3]} />
			<Panel product={products[4]} />
		</div>
	</div>
	<div class="py-8"></div>
</div>
