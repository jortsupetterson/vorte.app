import getNonce from "../../../shared/js/getNonce.js";
import progressiveWebApp from "../../../shared/html/pwa.js";
import getPageResponseHeaders from "../../../shared/js/getPageResponseHeaders.js";
import searchEngineCard from "../components/1-SearchEngineCard.js";
import openGraphCard from "../components/2-OpenGraphCard.js";
import twitterCard from "../components/3-TwitterCard.js";
import schemaLD from "../components/4-SchemaLD.js";
import heroSection from "../components/5-HeroSection.js";
import tldrSection from "../components/6-InfoSection.js"


export default {
  async fetch(request, env) {
    const nonce = await getNonce();

    const url = new URL(request.url);
    const pathLang = url.pathname.split("/")[1];

    const supportedLanguages = ["fi", "sv", "en"];
    const acceptLangHeader = request.headers.get("accept-language") || "";
    const browserLang = acceptLangHeader.split(",")[0].split("-")[0];

    const lang = supportedLanguages.includes(pathLang)
      ? pathLang
      : supportedLanguages.includes(browserLang)
      ? browserLang
      : "fi";
      

    const page = `
<!DOCTYPE html>
<html  lang="${lang}" data-theme="dark" data-contrast="normal">
<head>
<script async nonce="${nonce}">const dQ=window.matchMedia("(prefers-color-scheme: dark)"),lQ=window.matchMedia("(prefers-color-scheme: light)"),applyTheme=t=>document.documentElement.setAttribute("data-theme",t),sT=localStorage.getItem("theme");sT?applyTheme(sT):applyTheme(dQ.matches?"dark":"light"),dQ.addEventListener("change",e=>{localStorage.getItem("theme")||applyTheme(e.matches?"dark":"light")}),lQ.addEventListener("change",e=>{localStorage.getItem("theme")||applyTheme(e.matches?"light":"dark")});const cHQ=window.matchMedia("(prefers-contrast: high)"),cLQ=window.matchMedia("(prefers-contrast: low)"),applyContrast=t=>document.documentElement.setAttribute("data-contrast",t),sC=localStorage.getItem("contrast");sC?applyContrast(sC):cHQ.matches?applyContrast("high"):cLQ.matches?applyContrast("low"):applyContrast("normal"),cHQ.addEventListener("change",e=>{localStorage.getItem("contrast")||applyContrast(e.matches?"high":"normal")}),cLQ.addEventListener("change",e=>{localStorage.getItem("contrast")||applyContrast(e.matches?"low":"normal")});</script>

  <meta charset="UTF-8">
  <link rel="stylesheet" href="/styles/home.css">
  <meta name="robots" content="index, follow">
  <meta name="author" content="J&J Commerce Oy">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${searchEngineCard(lang)}
  ${openGraphCard(lang)}
  ${twitterCard(lang)}
  ${progressiveWebApp(lang)}
  ${schemaLD(lang, nonce)}
</head>
<body>
        ${heroSection(url,lang)}
        <script type="module" src="/scripts/home.js"></script>
</body>
</html>
    `;

    return new Response(page, {status: 200, headers: getPageResponseHeaders(lang, nonce) });
  }
};
