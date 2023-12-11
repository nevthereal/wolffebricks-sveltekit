<script>
	import { page } from '$app/stores';
</script>

<div class="flex justify-center items-center">
	<div>
		<h1 class="h1 font-bold my-2">Whoopsa!</h1>
		<p>
			Something went wrong... <br />
			Error Message: <span class="font-bold">{$page.status} - {$page.error?.message}</span>
		</p>
		<a href="/"><button class="btn variant-ghost-primary my-4">Back to Home</button></a>
	</div>
</div>
