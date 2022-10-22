import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
		],
};

export default config;


// import preprocess from "svelte-preprocess";

// const config = {
//   preprocess: [
//     preprocess({
//       postcss: true,
//     }),
//   ],
// }