import getEnvironmentBasedURL from "../../../../shared/js/getEnviromentBasedURL.js"

export default function tldrSection(url,lang){
    return `
<section id="tldr">
  <div class="info-box">
      <label for="info">
        ${{
          fi: "MIKÄ ON VORTE?",
          sv: "VAD ÄR VORTE?",
          en: "WHAT IS VORTE?"
        }[lang]}
      </label>
      <p id="info">
        ${{
          fi: `
            Vorte on moderni ja skaalautuva toiminnanohjausjärjestelmä, joka yhdistää 
            henkilökohtaisen ja yrityksen talouden hallinnan yhteen helppokäyttöiseen 
            ja suorituskykyiseen kokonaisuuteen.<br><br>
            Älä enää hukkaa aikaa erillisiin talous- ja toimintotyökaluihin – Vorte tarjoaa 
            reaaliaikaiset näkymät menoihin ja tuloihin, automatisoidut raportit ja 
            vahvan tietoturvan avaimet käteen -ratkaisuna. Olipa kyseessä yksinyrittäjä 
            tai kasvava organisaatio, Vorte skaalautuu liiketoimintasi mukana ja varmistaa, 
            että kaikki resurssit kohdistuvat aina tehokkaimmin oikeisiin kohteisiin.<br><br>
            Liity tuhansien tyytyväisten käyttäjien joukkoon, jotka ovat tehostaneet 
            päätöksentekoaan ja vapauttaneet arvokasta aikaansa keskittymällä olennaiseen – 
            meille tärkeintä on tuoda järjestelmällisyyttä, läpinäkyvyyttä ja suorituskykyä 
            juuri sinun tarpeisiisi.
          `,
          sv: `
            Vorte är ett modernt och skalbart affärssystem som förenar 
            privat ekonomi och företags ekonomi i en användarvänlig och 
            högpresterande helhetslösning.<br><br>
            Slösa inte längre tid på separata verktyg för ekonomi och verksamhet – 
            Vorte ger dig realtidsinsikter i kostnader och intäkter, automatiserade 
            rapporter och förstklassig säkerhet som en komplett nyckelfärdig 
            lösning. Oavsett om du är ensamföretagare eller växande organisation 
            anpassar sig Vorte till din verksamhet och ser till att alla 
            resurser alltid används på bästa sätt.<br><br>
            Gå med i tusentals nöjda användare som har effektiviserat sitt beslutsfattande 
            och frigjort värdefull tid genom att fokusera på det som verkligen är 
            viktigt – vår starkaste drivkraft är att skapa ordning, transparens och 
            prestanda skräddarsydd för dina behov.
          `,
          en: `
            Vorte is a modern, scalable ERP system that unifies personal and enterprise 
            financial management into one intuitive, high-performance platform.<br><br>
            Stop juggling multiple finance and operations tools—Vorte delivers real-time 
            visibility into expenses and revenues, automated reporting, and enterprise-grade 
            security as a turnkey solution. Whether you’re an individual entrepreneur 
            or a growing organization, Vorte scales with your business to ensure 
            resources are always allocated for maximum impact.<br><br>
            Join thousands of satisfied users who have optimized their decision-making 
            and reclaimed valuable time by focusing on what truly matters—our mission 
            is to bring structure, transparency, and performance fine-tuned to your needs.
          `
        }[lang]}
      </p>
  </div>

  <div class="info-box">
  <details>
  <summary>
    ${{
    fi:"MITÄ VORTE MAKSAA?",
    sv:"VAD KOSTAR VORTE?",
    en:"WHAT DOES VORTE COST?"
  }[lang]}
  </summary>
  <p>
  ${{
    fi:"",
    sv:"",
    en:""
  }[lang]}
  </p>
  </details>
  </div>
</section>

    `
}