<script>
	export let title: string;
	export let paragraph: string;
</script>

<svelte:options immutable />

<style>
	h1 {
		color: #3F83F8;
		font-size: 1.875rem;
		font-weight: 200;
		margin: 0;
	}

	p {
		color: #374151;
		margin: 0;
		margin-top: 1rem;
	}
</style>

<h1>{title}</h1>
<p>{paragraph}</p>
