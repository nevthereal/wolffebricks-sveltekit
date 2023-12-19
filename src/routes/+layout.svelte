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
		ModalStore,
		ToastSettings,
		ToastStore
	} from '@skeletonlabs/skeleton';
	import { Modal, Toast } from '@skeletonlabs/skeleton';
	import Cart from '$lib/cart.svelte';
	import logo from '$lib/img/wb_logo.png';
	import type { CartItem } from '../app';
	import { getProductData } from '$lib/products';

	initializeStores();

	// nav
	const drawerStore: DrawerStore = getDrawerStore();

	const triggerDrawer = (): void => {
		const s: DrawerSettings = { id: 'nav', position: 'top', height: 'h-auto' };
		drawerStore.open(s);
	};

	// cart
	const modalStore: ModalStore = getModalStore();
	const triggerCart = (): void => {
		const modalSettings: ModalSettings = {
			type: 'component',
			component: { ref: Cart }
		};
		modalStore.trigger(modalSettings);
	};

	// cart toasts
	const toastStore: ToastStore = getToastStore();
	export const triggerToast = (id: string, action: string) => {
		const item = getProductData(id)?.title;
		const t: ToastSettings = {
			message: `${item} was ${action} cart}`
		};
		toastStore.trigger(t);
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
<Modal />
<Toast />

<nav>
	<!-- Mobile: -->
	<div class="flex justify-between p-4 md:hidden">
		<button
			class="active:scale-95 ease-in-out duration-200 my-auto h1"
			on:click={() => triggerDrawer()}><i class="fa-solid fa-bars"></i></button
		>
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
