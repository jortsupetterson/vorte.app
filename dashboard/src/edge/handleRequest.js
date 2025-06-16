import renderView from './view/renderView.js';
import getUserDataRelatedPageResponseHeaders from '../../../shared/getUserDataRelatedPageResponseHeaders.js';
import getUserLanguage from '../../../shared/getUserLanguage.js';
import getNonce from '../../../shared/getNonce.js';

export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		const lang = getUserLanguage(request, url);
		const nonce = getNonce();

		const page = renderView(lang);

		return new Response(page, { status: 200, headers: getUserDataRelatedPageResponseHeaders(lang, nonce) });
	},
};
