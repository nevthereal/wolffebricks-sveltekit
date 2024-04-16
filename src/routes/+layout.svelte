<script lang="ts">
	import '../app.postcss';
	import {
		Drawer,
		getDrawerStore,
		getModalStore,
		getToastStore,
		initializeStores
	} from '@skeletonlabs/skeleton';
	import type {
		DrawerSettings,
		DrawerStore,
		ModalSettings,
		ModalStore
	} from '@skeletonlabs/skeleton';
	import { Modal, Toast } from '@skeletonlabs/skeleton';
	import logo from '$lib/img/wb_logo.png?enhanced';
	import { pushState } from '$app/navigation';

	initializeStores();

	// nav
	const drawerStore: DrawerStore = getDrawerStore();

	const triggerDrawer = (): void => {
		const s: DrawerSettings = {
			id: 'nav',
			position: 'top',
			height: 'h-auto',
			rounded: 'rounded-none',
			bgDrawer: 'bg-surface-900'
		};
		drawerStore.open(s);
	};
</script>

<Drawer>
	{#if $drawerStore.id === 'nav'}
		<ul class="h1 m-8 flex items-center justify-center gap-6 font-bold">
			<a href="/products" on:click={() => drawerStore.close()}>Products</a>
			<a href="/info" on:click={() => drawerStore.close()}>Info</a>
		</ul>
	{/if}
</Drawer>
<Modal />
<Toast />

<nav>
	<!-- Mobile: -->
	<div class="flex items-center justify-between px-4 py-8 md:hidden">
		<button
			class="h1 my-auto duration-200 ease-in-out active:scale-95"
			on:click={() => triggerDrawer()}><i class="fa-solid fa-bars"></i></button
		>
		<a href="/"><h1 class="h1 font-black">Wolffe Bricks</h1></a>
		<a href="/cart" class="h1 my-auto duration-200 ease-in-out active:scale-95"
			><i class="fa-solid fa-cart-shopping"></i></a
		>
	</div>
	<!-- Desktop: -->
	<div class="hidden justify-between p-4 md:flex">
		<a href="/">
			<enhanced:img src={logo} alt="logo" loading="eager" class="btn w-32 p-2" />
		</a>
		<div class="my-auto flex text-lg md:text-xl">
			<a href="/products" class="btn btn-xl font-bold duration-200 ease-in-out"
				><h3 class="h3">Products</h3></a
			>
			<a href="/info" class="btn btn-xl font-bold duration-200 ease-in-out"
				><h3 class="h3">Info</h3></a
			>
		</div>
		<a href="/cart" class="h2 btn btn-xl my-auto duration-200 ease-in-out md:text-4xl">
			<i class="fa-solid fa-cart-shopping" />
		</a>
	</div>
</nav>

<!-- Content: -->
<slot />

<!-- Footer: -->
<footer>
	<div class="mx-4 py-4">
		<p class="text-xl font-bold uppercase md:text-lg">©Neville Brem and William Tang</p>
		<div class="mx-auto my-4 flex justify-center gap-2">
			<a href="https://instagram.com/wolffebricks_official" target="_blank" class="h1">
				<i class="fa-brands fa-instagram-square" />
			</a>
			<a href="https://twitter.com/wolffe_bricks" target="_blank" class="h1">
				<i class="fa-brands fa-twitter-square" />
			</a>
			<a href="mailto:support@wolffebricks.store" class="h1">
				<i class="fa-solid fa-envelope-square" />
			</a>
		</div>
	</div>
</footer>
