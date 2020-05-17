<script lang="typescript">
	export let title: string;
	export let paragraph: string;
</script>

<svelte:options immutable />

<style>
	h1 {
		color: #4299E1;
		font-size: 1.875rem;
		font-weight: 200;
	}

	p {
		color: #4A5568;
		margin-top: 1rem;
	}
</style>

<h1>{title}</h1>
<p>{paragraph}</p>
