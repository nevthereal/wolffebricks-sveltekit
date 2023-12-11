<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<nav class="flex justify-between mx-4 h-[15vh] md:h-[10vh]">
	<a href="/" class="hover:scale-105 duration-200 text-6xl md:text-7xl my-auto">
		<i class="fa-brands fa-wolf-pack-battalion" />
	</a>
	<div class="text-lg md:text-xl flex my-auto gap-4">
		<p class="font-bold hover:scale-105 duration-200">
			<a href="/products">Products</a>
		</p>
		<p class="font-bold hover:scale-105 duration-200">
			<a href="/info">Info</a>
		</p>
	</div>
	<button class="my-aut hover:scale-105 duration-200 text-3xl md:text-4xl">
		<div class="flex gap-2 md:gap-3">
			<i class="fa-solid fa-cart-shopping" />
		</div>
	</button>
</nav>
<slot />
<footer>
	<div class="py-4 mt-8 mx-4">
		<p class="text-xl md:text-lg font-bold uppercase">©Neville Brem and William Tang</p>
		<div class="flex w-16 justify-center mx-auto my-4 text-5xl md:4xl space-x-2">
			<a
				href="https://instagram.com/wolffebricks_official"
				target="_blank"
				rel="noreferrer noopener"
			>
				<i class="fa-brands fa-instagram-square" />
			</a>
			<a href="https://twitter.com/wolffe_bricks" target="_blank" rel="noreferrer noopener">
				<i class="fa-brands fa-twitter-square" />
			</a>
			<a href="mailto:support@wolffebricks.store">
				<i class="fa-solid fa-envelope-square" />
			</a>
		</div>
	</div>
</footer>
