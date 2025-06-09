import getUserLanguage from "../../../shared/getUserLanguage.js"
import renderView from "./Views/renderView.js";

export default {
	async fetch(request, env) {
        const url = new URL(request.url);
        const path = url.pathname


    if (path === "/auth/google") {
      const { requestAuthFromGoogle } = await import("./Services/authGoogle.js");
      return requestAuthFromGoogle(url, env);
    }
    if (path === "/auth/ms") {
      const { requestAuthFromMs } = await import("./Services/authMs.js");
      return requestAuthFromMs(url, env);
    }
    if (path === "/auth/callback") {
      const { authCallback } = await import("./Services/authCallback.js");
      return authCallback(url, request, env);
    }

        const lang = getUserLanguage(request,url);

        const view = renderView(lang,url)
        return new Response (view, {
            headers: {
                "content-type":"text/html"
            }
        })
	},
};