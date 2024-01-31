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
	import Cart from '$lib/components/cart.svelte';
	import logo from '$lib/img/wb_logo.png';
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

	// cart
	const modalStore: ModalStore = getModalStore();
	const triggerCart = (): void => {
		const modalSettings: ModalSettings = {
			type: 'component',
			component: { ref: Cart, props: { classes: 'card p-8 w-[90%] max-h-[70dvh] relative' } }
		};
		pushState('/cart', {});
		modalStore.trigger(modalSettings);
	};
</script>

<Drawer>
	{#if $drawerStore.id === 'nav'}
		<ul class="m-8 flex justify-center items-center gap-6 h1 font-bold">
			<a href="/products" on:click={() => drawerStore.close()}>Products</a>
			<a href="/info" on:click={() => drawerStore.close()}>Info</a>
		</ul>
	{/if}
</Drawer>
<Modal />
<Toast />

<nav>
	<!-- Mobile: -->
	<div class="flex justify-between px-4 py-8 md:hidden items-center">
		<button
			class="active:scale-95 ease-in-out duration-200 my-auto h1"
			on:click={() => triggerDrawer()}><i class="fa-solid fa-bars"></i></button
		>
		<a href="/"><h1 class="h1 font-black">Wolffe Bricks</h1></a>
		<button
			class="active:scale-95 ease-in-out duration-200 my-auto h1"
			on:click={() => triggerCart()}><i class="fa-solid fa-cart-shopping"></i></button
		>
	</div>
	<!-- Desktop: -->
	<div class="justify-between hidden md:flex p-4">
		<a href="/">
			<img src={logo} alt="logo" loading="eager" class="btn w-32 p-2" />
		</a>
		<div class="text-lg md:text-xl flex my-auto gap-8">
			<a href="/products" class="hover:scale-105 active:scale-95 ease-in-out duration-200 font-bold"
				><h3 class="h3">Products</h3></a
			>
			<a href="/info" class="hover:scale-105 active:scale-95 ease-in-out font-bold duration-200"
				><h3 class="h3">Info</h3></a
			>
		</div>
		<button
			class="my-aut hover:scale-105 duration-200 h2 md:text-4xl active:scale-95 ease-in-out"
			on:click={() => triggerCart()}
		>
			<i class="fa-solid fa-cart-shopping" />
		</button>
	</div>
</nav>

<!-- Content: -->
<slot />

<!-- Footer: -->
<footer>
	<div class="py-4 mx-4">
		<p class="text-xl md:text-lg font-bold uppercase">©Neville Brem and William Tang</p>
		<div class="flex justify-center mx-auto my-4 gap-2">
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
