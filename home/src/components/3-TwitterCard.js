export default function twitterCard(lang) {
  return `
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${{
      fi: "Ota taloutesi haltuun ja menesty urallasi | Vorte",
      sv: "Ta kontroll över din ekonomi och lyckas i karriären | Vorte",
      en: "Master Your Finances and Boost Your Career | Vorte",
    }[lang]}" />

    <meta name="twitter:description" content="${{
      fi: "Vorte tekee talouden hallinnasta ja urakehityksestä helppoa, järkevää ja selkeää – työntekijälle, yrittäjälle ja freelancerille.",
      sv: "Vorte gör ekonomi- och karriärhantering enkel, smart och tydlig – perfekt för anställda, företagare och frilansare.",
      en: "Vorte simplifies managing finances and advancing your career – easy, smart, and clear for employees, entrepreneurs, and freelancers.",
    }[lang]}" />

    <meta name="twitter:url" content="https://vorte.app/${lang}" />
    <meta name="twitter:image" content="https://vorte.app/vorte_social_sharing_image.png" />

    <meta name="twitter:image:alt" content="${{
      fi: "Hallitse talouttasi helposti Vorte-sovelluksella",
      sv: "Hantera din ekonomi enkelt med Vorte-appen",
      en: "Easily manage your finances with Vorte",
    }[lang]}" />

    <meta name="twitter:site" content="@vorteapp" />
    <meta name="twitter:creator" content="@vorteapp" />
  `;
}
