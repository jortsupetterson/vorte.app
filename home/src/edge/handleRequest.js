import getNonce from "../../../shared/getNonce.js";
import getUserLanguage from "../../../shared/getUserLanguage.js";
import renderView from "./view/renderView.js";
import getPageResponseHeaders from "../../../shared/getPageResponseHeaders.js";


export default {
  async fetch(request, env) { 
  try {
    // alkuperäinen
    const url = new URL(request.url);
    const lang = await getUserLanguage(request,url);
    const nonce = await getNonce();
    const page = await renderView(lang, nonce, url);
    return new Response(page, { status: 200, headers: getPageResponseHeaders(lang, nonce) });
  } catch (e) {
    console.error("render error:", e);
    return new Response("Error: " + e.message + "\n" + e.stack, { status: 500 });
  }
}
};
