/** @type {import('./$types').PageLoad} */

export function load({ params }) {
	console.log(params);
	return {
		post: {
			title: `Title for p goes here`,
			content: `Content for ${params} goes here`
		}
	};
}
