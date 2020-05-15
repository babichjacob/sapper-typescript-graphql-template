<script>
	import ExampleComponent from "../components/ExampleComponent.svelte";
</script>

<style lang="postcss">
	.centerer {
		@apply flex-1 flex flex-col items-center justify-center;
	}
</style>

<div class:centerer={true}> <!-- Here's how you could extract conditional class groups with @apply -->
	<ExampleComponent
		title="🌐 Sapper with PostCSS project base"
		paragraph="This is an example route and component to make sure everything's working." />
</div>
