export default function openGraphCard(lang) {
  return `
    <meta property="og:locale" content="${{ fi: "fi_FI", sv: "sv_SE", en: "en_US" }[lang]}" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Vorte" />
    <meta property="og:title" content="${{
      fi: "Ota taloutesi haltuun ja etene urallasi | Vorte",
      sv: "Ta kontroll över din ekonomi och karriär | Vorte",
      en: "Master Your Finances and Career | Vorte",
    }[lang]}" />

    <meta property="og:description" content="${{
      fi: "Vorte auttaa ottamaan talouden hallintaan ja saavuttamaan tavoitteesi työelämässä. Sopii työntekijöille, yrittäjille ja freelancereille – selkeät raportit ja älykäs automaatio tuovat järkeä arkeen.",
      sv: "Vorte hjälper dig att ta kontroll över ekonomin och nå dina karriärmål. Perfekt för anställda, företagare och frilansare – tydliga rapporter och smart automatisering gör vardagen enklare.",
      en: "Vorte helps you master your finances and achieve your career goals. Ideal for employees, entrepreneurs, and freelancers – clear reports and smart automation simplify daily tasks.",
    }[lang]}" />

    <meta property="og:url" content="https://vorte.app/${lang}" />
    <meta property="og:image" content="https://vorte.app/images/vorte_social_sharing_image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    
    <meta property="og:image:alt" content="${{
      fi: "Ole oman elämäsi pomo - Vorte auttaa",
      sv: "Var din egen chef - Vorte hjälper dig",
      en: "Be your own boss with Vorte",
    }[lang]}" />
  `;
}
