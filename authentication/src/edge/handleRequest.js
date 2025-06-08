import getUserLanguage from "../../../shared/getUserLanguage.js"
import renderView from "./Views/renderView.js";
import { authGoogle } from "./Services/authGoogle.js";
import { authCallback } from "./Services/authCallback.js";
export default {
	async fetch(request, env) {
        const url = new URL(request.url);
        const path = url.pathname
        const lang = getUserLanguage(request,url);

        if (path === "/auth/google")           return authGoogle(request, env);
        if (path === "/auth/callback/google")  return authCallback(request, env);

        const view = renderView(lang,url)
        return new Response (view, {
            headers: {
                "content-type":"text/html"
            }
        })
	},
};