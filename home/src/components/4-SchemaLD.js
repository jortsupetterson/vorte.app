export default function schemaLD(lang, nonce) {
  return `
<script type="application/ld+json" nonce="${nonce}">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": "${{
    fi: "https://vorte.app/fi/#vorte",
    sv: "https://vorte.app/sv/#vorte",
    en: "https://vorte.app/en/#vorte"
  }[lang]}",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "${{
      fi: "https://vorte.app/fi",
      sv: "https://vorte.app/sv",
      en: "https://vorte.app/en"
    }[lang]}"
  },
  "name": "Vorte",
  "alternateName": "${{
    fi: "Vorte ura-alusta",
    sv: "Vorte karriärplattform",
    en: "Vorte Career Platform"
  }[lang]}",
  "description": "${{
    fi: "Vorte on suomalainen uranrakennukseen tarkoitettu verkkosovellus, joka sopii kaikille Suomessa asuville – työntekijöille, freelancereille, yksityisyrittäjille ja yrittäjille. Vorte tarjoaa automatisoidut laskutus-, kirjanpito- ja CRM-toiminnot sekä suorat integraatiot suomalaisiin pankkeihin. Sovellus toimii sekä verkossa että offline-tilassa.",
    sv: "Vorte är en finsk webbapplikation för karriärbyggande och ekonomi som passar alla som bor i Finland – anställda, frilansare, egenföretagare och entreprenörer. Vorte erbjuder automatiserad fakturering, bokföring och CRM samt direkta integrationer med finska banker. Applikationen fungerar både online och offline.",
    en: "Vorte is a Finnish career-building web application designed for everyone living in Finland, including employees, freelancers, sole proprietors, entrepreneurs, and individuals. Vorte offers automated invoicing, bookkeeping, CRM, and direct integrations with Finnish banks – fully functional both online and offline."
  }[lang]}",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": [
  "AccountingSoftware",
  "CRMSoftware",
  "PointOfSaleSystem",
  "HumanResourcesSoftware",
  "FinancialManagementSoftware",
  "MarketingAutomation",
  "ManufacturingSoftware",
  "ProjectManagementSoftware",
  "InventoryManagement",
  "AnalyticsSoftware",
  "PayrollManagement",
  "TaxComplianceSoftware"
],
  "operatingSystem": "All",
  "browserRequirements": "${{
    fi: "JavaScript vaaditaan. Optimoitu moderneille selaimille.",
    sv: "JavaScript krävs. Optimerad för moderna webbläsare.",
    en: "JavaScript required. Optimized for modern browsers."
  }[lang]}",
  "url": "${{
    fi: "https://vorte.app/fi",
    sv: "https://vorte.app/sv",
    en: "https://vorte.app/en"
  }[lang]}",
  "installUrl": "${{
    fi: "https://vorte.app/fi/asenna",
    sv: "https://vorte.app/sv/installera",
    en: "https://vorte.app/en/install"
  }[lang]}",
  "screenshot": "https://vorte.app/images/screenshot.jpg",
  "softwareVersion": "1.0.0",
  "softwareHelp": "${{
    fi: "https://vorte.app/fi/tuki",
    sv: "https://vorte.app/sv/support",
    en: "https://vorte.app/en/help"
  }[lang]}",
  "inLanguage": ["fi", "en", "sv"],
  "isAccessibleForFree": true,
  "offersFreeTrial": true,
  "audience": {
    "@type": "Audience",
    "name": "${{
      fi: "Kaikille Suomessa asuville",
      sv: "Alla som bor i Finland",
      en: "All people living in Finland"
    }[lang]}",
    "geographicArea": {
      "@type": "Country",
      "name": "${{
        fi: "Suomi",
        sv: "Finland",
        en: "Finland"
      }[lang]}"
    }
  },
  "featureList": [
    "${{
      fi: "Automaattinen kirjanpito",
      sv: "Automatiserad bokföring",
      en: "Automated bookkeeping"
    }[lang]}",
    "${{
      fi: "Toistuvat laskutukset",
      sv: "Återkommande fakturering",
      en: "Recurring invoicing"
    }[lang]}",
    "${{
      fi: "Asiakassuhteiden hallinta (CRM)",
      sv: "Kundrelationshantering (CRM)",
      en: "Customer Relationship Management (CRM)"
    }[lang]}",
    "${{
      fi: "Suorat integraatiot suomalaisiin pankkeihin",
      sv: "Direkta integrationer med finska banker",
      en: "Direct integrations with Finnish banks"
    }[lang]}",
    "${{
      fi: "Turvallinen WebAuthn-kirjautuminen ilman salasanaa",
      sv: "Säker WebAuthn-inloggning utan lösenord",
      en: "Secure WebAuthn passwordless login"
    }[lang]}",
    "${{
      fi: "Offline-tila tuki -toiminnallisuus",
      sv: "Offline support-funktionalitet",
      en: "Offline-support functionality"
    }[lang]}"
  ],
  "offers": [
    {
      "@type": "Offer",
      "name": "${{
        fi: "Personal Vorte - Henkilökohtainen suunnitelma",
        sv: "Personal Vorte - Personlig plan",
        en: "Personal Vorte - Personal Plan"
      }[lang]}",
      "price": "0.00",
      "priceCurrency": "EUR",
      "eligibleCustomerType": "https://schema.org/Individual",
      "eligibleRegion": {
        "@type": "Country",
        "name": "${{
          fi: "Suomi",
          sv: "Finland",
          en: "Finland"
        }[lang]}"
      },
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "${{
        fi: "Organisaatio Vorte",
        sv: "Organisations Vorte",
        en: "Organization Vorte"
      }[lang]}",
      "price": "19.90",
      "priceCurrency": "EUR",
      "eligibleCustomerType": "https://schema.org/Organization",
      "eligibleRegion": {
        "@type": "Country",
        "name": "${{
          fi: "Suomi",
          sv: "Finland",
          en: "Finland"
        }[lang]}"
      },
      "availability": "https://schema.org/InStock"
    }
  ],
  "author": {
    "@type": "Organization",
    "name": "J&J Commerce Oy",
    "url": "${{
      fi: "https://vorte.app/fi/about",
      sv: "https://vorte.app/sv/about",
      en: "https://vorte.app/en/about"
    }[lang]}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "J&J Commerce Oy",
    "url": "${{
      fi: "https://vorte.app/fi",
      sv: "https://vorte.app/sv",
      en: "https://vorte.app/en"
    }[lang]}",
    "logo": {
      "@type": "ImageObject",
      "url": "https://vorte.app/images/logo.png",
      "width": 500,
      "height": 500
    }
  }</script>`}
