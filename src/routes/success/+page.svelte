<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { CheckoutSession } from '../../app';
	import { error } from '@sveltejs/kit';

	let sessionId = $page.url.searchParams.get('id');

	let checkoutSession: CheckoutSession | undefined;

	if (sessionId == undefined) {
		throw error(404, 'No order provided');
	}

	onMount(() => {
		if (sessionId) {
			fetch(`${$page.url.origin}/api/order?id=${sessionId}`)
				.then((data) => {
					return data.json();
				})
				.then((data) => {
					checkoutSession = data.session;
				})
				.catch(() => {
					checkoutSession = undefined;
				});
		}
	});
</script>

<div class="flex justify-center items-center">
	<div>
		<h1 class="h1 font-bold my-2">Your order was placed!</h1>
		{#if checkoutSession}
			<div class="mt-4">
				<h3 class="h3 font-bold">Summary:</h3>
				<p>
					Thank you for your order, <span class="font-bold"
						>{checkoutSession.customer_details.name}</span
					><br />
					Your checkout session ID: <span class="font-bold">{checkoutSession.id}</span>
				</p>
			</div>
			<div class="mt-4">
				<h3 class="h3 font-bold">Your order:</h3>
				<ol class="list-decimal list-inside">
					{#each checkoutSession.line_items.data as item}
						<li>
							<span class="font-bold">{item.description}</span> - Price: {(
								item.amount_subtotal /
								item.quantity /
								100
							).toFixed(2)} CHF
						</li>
					{/each}
				</ol>
				<div class="mt-2">
					<p>
						Subtotal:
						{(checkoutSession.amount_subtotal / 100).toFixed(2)} CHF
					</p>
					<p>
						Total (including coupons & taxes):
						{(checkoutSession.amount_total / 100).toFixed(2)} CHF
					</p>
				</div>
			</div>
			<p class="mt-4">
				You will soon get an email with your oders to <span class="font-bold"
					>{checkoutSession.customer_details.email}</span
				>
			</p>
		{:else}
			<p>Loading...</p>
		{/if}
		<a href="/"><button class="btn variant-ghost-primary my-4">Back to Home</button></a>
	</div>
</div>
