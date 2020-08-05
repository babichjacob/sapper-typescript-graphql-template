<script>
	export let status: string;
	export let error: Error;
	
	const mode = process.env.NODE_ENV;
	const dev = mode === "development";
</script>

<style>
	section {
		flex: 1 1 0%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	h1, h2 {
		color: #C81E1E;
	}

	h1 {
		margin-top: 0.25rem;
		font-size: 1.5rem;
	}

	h2 {
		font-size: 1.125rem;
	}
</style>

<section>
	<h1>{error.message}</h1>
	<h2>{status}</h2>
</section>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
