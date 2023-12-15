<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let sessionId = $page.url.searchParams.get('id');

	let checkoutSession;

	console.log($page);
	onMount(() => {
		fetch(`${$page.url.origin}/api/order?id=${sessionId}`)
			.then((response) => {
				return response.json;
			})
			.then((session) => {
				return (checkoutSession = session);
			})
			.catch(() => {
				checkoutSession = undefined;
			});
	});
</script>

<div class="flex justify-center items-center">
	<div>
		<h1 class="h1 font-bold my-2">Your order was placed!</h1>
		<p>You will soon get an email with your oders...</p>
		<a href="/"><button class="btn variant-ghost-primary my-4">Back to Home</button></a>
	</div>
</div>
