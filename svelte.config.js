const preprocess = require("svelte-preprocess");

module.exports = {
	preprocess: [
		// You could have more preprocessors, like MDsveX
		preprocess({
			postcss: true,
		}),
	],
};
