<script lang="ts">
	import '../app.postcss';
	import { Drawer, getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';

	initializeStores();
	const drawerStore: DrawerStore = getDrawerStore();

	const triggerDrawer = (): void => {
		const s: DrawerSettings = { id: 'nav', position: 'top', height: 'h-auto' };
		drawerStore.open(s);
	};

	const triggerCart = (): void => {
		console.log('Cart opens');
	};
</script>

<Drawer>
	{#if $drawerStore.id === 'nav'}
		<div class="p-6">
			<a href="/" on:click={() => drawerStore.close()}
				><h1 class="h1 font-black">Wolffe Bricks</h1></a
			>
			<ul class="my-6 text-left w-[75%] mx-auto grid grid-cols-2">
				<a href="/products" class="anchor h3 mx-auto" on:click={() => drawerStore.close()}
					>Products</a
				>
				<a href="/info" class="anchor h3 mx-auto" on:click={() => drawerStore.close()}>Info</a>
			</ul>
		</div>
	{/if}
</Drawer>

<nav>
	<!-- Mobile: -->
	<div class="flex justify-between p-4 md:hidden">
		<button class="btn my-auto" on:click={() => triggerDrawer()}
			><i class="fa-solid fa-bars"></i></button
		>
		<button class="btn my-auto" on:click={() => triggerCart()}
			><i class="fa-solid fa-cart-shopping"></i></button
		>
	</div>
	<!-- Desktop: -->
	<div class="justify-between hidden md:flex">
		<a href="/" class="hover:scale-105 duration-200 h1 md:text-7xl my-auto btn">
			<i class="fa-brands fa-wolf-pack-battalion" />
		</a>
		<div class="text-lg md:text-xl flex my-auto gap-4">
			<a href="/products" class="btn font-bold hover:scale-105 duration-200">Products </a>
			<a href="/info" class="btn font-bold hover:scale-105 duration-200">Info </a>
		</div>
		<button
			class="my-aut hover:scale-105 duration-200 h1 md:text-4xl btn"
			on:click={() => triggerCart()}
		>
			<i class="fa-solid fa-cart-shopping" />
		</button>
	</div>
</nav>
<slot />
<footer>
	<div class="py-4 mx-4">
		<p class="text-xl md:text-lg font-bold uppercase">©Neville Brem and William Tang</p>
		<div class="flex justify-center mx-auto my-4">
			<a href="https://instagram.com/wolffebricks_official" target="_blank" class="h1 btn">
				<i class="fa-brands fa-instagram-square" />
			</a>
			<a href="https://twitter.com/wolffe_bricks" target="_blank" class="h1 btn">
				<i class="fa-brands fa-twitter-square" />
			</a>
			<a href="mailto:support@wolffebricks.store" class="h1 btn">
				<i class="fa-solid fa-envelope-square" />
			</a>
		</div>
	</div>
</footer>
