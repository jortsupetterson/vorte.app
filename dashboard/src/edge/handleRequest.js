import renderView from "./view/renderView.js";
import getAppPageResponseHeaders from "../../../shared/getAppPageResponseHeaders.js"
import getUserLanguage from "../../../shared/getUserLanguage.js";
import getNonce from "../../../shared/getNonce.js";

export default {
    async fetch(request,env) {
        const url = new URL(request.url);
        const path = url.pathname;
        const lang = getUserLanguage(request, url)
        const nonce = getNonce()

        const page = renderView()

        return new Response(page, { status: 200, headers: getAppPageResponseHeaders(lang, nonce) })
    }
}