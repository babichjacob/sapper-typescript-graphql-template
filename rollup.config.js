import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import config from "sapper/config/rollup";
import pkg from "./package.json";

const { preprocess } = require("./svelte.config");

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const sourcemap = !dev;
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn_) => (warning.code === "CIRCULAR_DEPENDENCY" && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn_(warning);

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				"process.browser": true,
				"process.env.NODE_ENV": JSON.stringify(mode),
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true,
				preprocess,
			}),
			resolve({
				browser: true,
				dedupe: ["svelte"],
			}),
			commonjs(),

			legacy && babel({
				extensions: [".js", ".mjs", ".html", ".svelte"],
				runtimeHelpers: true,
				exclude: ["node_modules/@babel/**"],
				presets: [
					["@babel/preset-env", {
						targets: "> 0.25%, not dead",
					}],
				],
				plugins: [
					"@babel/plugin-syntax-dynamic-import",
					["@babel/plugin-transform-runtime", {
						useESModules: true,
					}],
				],
			}),

			!dev && terser({
				module: true,
			}),
		],

		onwarn,

		// https://github.com/babichjacob/sapper-postcss-template/pull/5#issuecomment-623172265
		preserveEntrySignatures: "strict",
	},

	server: {
		input: config.server.input(),
		output: { ...config.server.output(), sourcemap },
		plugins: [
			replace({
				"process.browser": false,
				"process.env.NODE_ENV": JSON.stringify(mode),
			}),
			svelte({
				generate: "ssr",
				dev,
				preprocess,
			}),
			resolve({
				dedupe: ["svelte"],
			}),
			commonjs(),
		],
		external: Object.keys(pkg.dependencies).concat(
			require("module").builtinModules || Object.keys(process.binding("natives")), // eslint-disable-line global-require
		),

		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				"process.browser": true,
				"process.env.NODE_ENV": JSON.stringify(mode),
			}),
			commonjs(),
			!dev && terser(),
		],

		onwarn,
	},
};
