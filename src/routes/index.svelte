<script>
	import ExampleComponent from "../components/ExampleComponent.svelte";
</script>

<style>
	.centerer {
		flex: 1 1 0%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.button {
		margin-top: 2.5rem;
		padding: 0.75rem;
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		transition-property: background-color, color, box-shadow;
		transition-duration: 200ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		text-decoration: none;
	}

	.button:focus {
		outline: 0;
		box-shadow: 0 0 0 3px rgba(118, 169, 250, 0.45);
	}

	.button-pink {
		color: #99154B;
		background-color: #FAD1E8;
	}

	.button-pink:hover, .button-pink:focus {
		background-color: #F8B4D9;
	}
</style>

<div class="centerer">
	<ExampleComponent
		title="🌐 Sapper with TypeScript and GraphQL project base"
		paragraph="This is an example route and component to make sure everything's working." />
	<a class="button button-pink" href="/graphql">Check out the GraphQL playground!</a>
</div>
