import getSearchEngineCard from "../../../../shared/getSearchEngineCard.js"
import getOpenGraphCard from "../../../../shared/getOpenGraphCard.js"
import getTwitterCard from "../../../../shared/getTwitterCard.js";
import getSchemaLD from "../../../../shared/getSchemaLD.js";
import renderHeroSection from "./sections/1-HeroSection.js";
export default function renderView(lang, nonce, url) {
const title = {
      fi: "Ota taloutesi haltuun ja etene urallasi | Vorte",
      sv: "Ta kontroll över din ekonomi och karriär | Vorte",
      en: "Master Your Finances and Career | Vorte",
    };

const description = {
      fi: "Vorte auttaa ottamaan talouden hallintaan ja saavuttamaan tavoitteesi työelämässä. Sopii työntekijöille, yrittäjille ja freelancereille – selkeät raportit ja älykäs automaatio tuovat järkeä arkeen.",
      sv: "Vorte hjälper dig att ta kontroll över ekonomin och nå dina karriärmål. Perfekt för anställda, företagare och frilansare – tydliga rapporter och smart automatisering gör vardagen enklare.",
      en: "Vorte helps you master your finances and achieve your career goals. Ideal for employees, entrepreneurs, and freelancers – clear reports and smart automation simplify daily tasks.",
    };

const urls = {
  fi: "/fi",
  sv: "/sv",
  en: "/en"
};

return `
  <!DOCTYPE html>
  <html lang="${lang}" data-theme="dark" data-contrast="normal">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/home/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${getSearchEngineCard(lang,title,description,urls)}
    ${getOpenGraphCard(lang,title,description,urls)}
    ${getTwitterCard(lang,title,description,urls)}
    ${getSchemaLD(lang,nonce, title,description,urls)}
  </head>
  <body>
    ${renderHeroSection(url,lang)}
  </body>
  </html>
`
};