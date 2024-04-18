<script lang="ts">
	import Panel from '$lib/components/panel.svelte';
	import { products } from '$lib/cart/products';
	import banner from '$lib/img/wb_banner.svg';
	import Cart from '$lib/components/Cart.svelte';
</script>

<svelte:head>
	<title>Wolffe Bricks - Home</title>
	<meta name="description" content="Wolffe Bricks - Custom LEGO Sets" />
</svelte:head>

<div class="w-full bg-white bg-cover bg-center bg-no-repeat text-center">
	<div
		style={`background-image: url(${banner});`}
		class="flex h-screen w-full bg-cover bg-fixed bg-top bg-no-repeat"
	>
		<div class="my-auto w-full bg-cover font-black text-white">
			<h1 class="h1 uppercase">Wolffe Bricks</h1>
			<h2 class="h2 my-4 text-base tracking-wider md:text-lg">LEGO® MOCs from Switzerland!</h2>
			<div
				class="card variant-glass-warning mx-auto my-8 w-fit max-w-[90%] p-6 rounded-token md:max-w-[70%]"
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
	<h2 class="h2 mb-4 mt-16 font-bold">Featured Products:</h2>
	<div class="flex flex-wrap justify-center gap-4 px-4">
		<Panel product={products[2]} />
		<Panel product={products[3]} />
		<Panel product={products[4]} />
	</div>
</div>
