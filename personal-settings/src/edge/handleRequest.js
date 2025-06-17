import getUserLanguage from '../../../shared/getUserLanguage.js';
import renderView from '../../../dashboard/src/edge/view/renderView.js';
import getAppPageResponseHeaders from '../../../shared/getUserDataRelatedPageResponseHeaders';
import getNonce from '../../../shared/getNonce';

export default {
	async fetch(request, env) {
		const url = request.url;
		const lang = getUserLanguage(request, url);
		const nonce = getNonce();

		const page = renderView(lang);

		return new Response(page, getAppPageResponseHeaders(lang, nonce));
	},
};
