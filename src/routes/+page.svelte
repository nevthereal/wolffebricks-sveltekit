<script lang="ts">
	import Panel from '$lib/components/panel.svelte';
	import { products } from '$lib/cart/products';
</script>

<svelte:head>
	<title>Wolffe Bricks - Home</title>
	<meta name="description" content="Wolffe Bricks - Custom LEGO Sets" />
</svelte:head>

<div class="text-center bg-no-repeat bg-center bg-cover w-full bg-white">
	<div id="hero" class="w-full h-screen flex bg-fixed">
		<div class="font-black text-white bg-cover w-full my-auto">
			<h1 class="uppercase h1">Wolffe Bricks</h1>
			<h2 class="text-base md:text-lg tracking-wider my-4 h2">LEGO® MOCs from Switzerland!</h2>
			<div
				class="card variant-glass-warning w-fit mx-auto max-w-[90%] md:max-w-[70%] my-8 p-6 rounded-token"
			>
				<h2 class="text-2xl">We're Back!</h2>
				<p class="font-semibold">
					To celebrate that we are back again, only selling instructions again, use the code
					COMEBACK15 to get 15% off of all your purchases.
				</p>
			</div>
		</div>
	</div>
</div>
<div id="featured">
	<h2 class="h2 font-bold mb-4 mt-16">Featured Products:</h2>
	<div class="flex justify-center gap-4 flex-wrap px-4">
		<Panel product={products[2]} />
		<Panel product={products[3]} />
		<Panel product={products[4]} />
	</div>
</div>
