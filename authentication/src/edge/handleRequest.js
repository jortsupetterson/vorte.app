import getUserLanguage from "../../../shared/getUserLanguage.js"
import renderView from "./Views/renderView.js";

export default {
	async fetch(request, env) {
        const url = new URL(request.url);
        const path = url.pathname

    if (path === "/authn/magic-link") {
        const { requestAuthnViaMagicLink } = await import("./Services/authnMagicLink.js");
        return requestAuthnViaMagicLink(env)
    }
    if (path === "/authn/google") {
      const { requestAuthnViaGoogle } = await import("./Services/authnGoogle.js");
      return requestAuthnViaGoogle(url, env);
    }
    if (path === "/authn/ms") {
      const { requestAuthnViaMs } = await import("./Services/authnMs.js");
      return requestAuthnViaMs(url, env);
    }
    if (path === "/authn/callback") {
      const { authnCallback } = await import("./Services/authnCallback.js");
      return authnCallback(url, request, env);
    }
        const lang = getUserLanguage(request,url);

        const view = renderView(lang,url)
        return new Response (view, {
            headers: {
                "content-type":"text/html"
            }
        })
	}
};