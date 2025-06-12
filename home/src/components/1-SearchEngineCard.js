export default function searchEngineCard(lang){
  return`
  <title>
    ${{
      fi: "Ota taloutesi ohjat omiin käsiisi | Vorte",
      sv: "Ta kontroll över din ekonomi | Vorte",
      en: "Take Control of Your Finances | Vorte",
    }[lang]}
  </title>

<meta
  name="description"
  content="${{
    fi: "Vorte ERP auttaa hallitsemaan taloutta ja etenemään uralla tehokkaasti, olitpa työntekijä, yrittäjä, freelancer tai organisaatio. Selkeät raportit, fiksu automaatio ja pilvipalvelun vapaus tekevät arjesta järkevämpää.",
    sv: "Vorte ERP hjälper dig att smart och effektivt hantera ekonomi och karriär, oavsett om du är anställd, företagare, frilansare eller organisation. Klara rapporter, smart automatisering och molntjänstens frihet gör vardagen enklare.",
    en: "Vorte ERP makes managing your finances and career straightforward, whether you're an employee, entrepreneur, freelancer, or organization. Clear reports, intelligent automation, and cloud flexibility simplify your daily tasks.",
  }[lang]}"
/>


  <link rel="canonical" href="/fi" />
  <link rel="alternate" hreflang="fi" href="/fi" />
  <link rel="alternate" hreflang="sv" href="/sv" />
  <link rel="alternate" hreflang="en" href="/en" />
`}