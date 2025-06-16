/**
 * Generates the application banner markup with interactive controls and localization.
 *
 * This function builds a fully accessible banner including:
 * - A pair of menu buttons for opening the applications menu and banner.
 * - A close button to hide the banner.
 * - A logo link directing to the dashboard.
 * - A personal settings link, localized by language.
 * - A language selector to switch between FI, SV, and EN.
 * - A sign-out link that clears the session and redirects to login, with a localized title and aria-label.
 *
 * All IDs and CSS classes match the existing style rules:
 * - Menu buttons: #applications, #burger inside .menu-buttons
 * - Banner container: .app-banner with role="banner"
 * - Close button: #hide-banner
 * - Logo block: h1 > a[href=dashLinks[lang]]
 * - User settings: #user-settings
 * - Language selector: .language-selector
 * - Sign-out: #sign-out
 *
 * @param {string} lang  Two-letter language code ('fi', 'sv', 'en').
 * @returns {string}     HTML string for insertion into the page.
 */
export default function getAppBanner(lang) {
  const dashLinks = {
    fi: "/fi/ohjauspaneeli",
    sv: "/sv/kontrollpanel",
    en: "/en/control-panel"
  };

  const personalSettingsLinks = {
    fi: "/fi/omat-asetukset",
    sv: "/sv/mina-inställningar",
    en: "/en/my-settings"
  };

  const logOutLinks = {
    fi: "/fi/kirjaudu-ulos",
    sv: "/sv/logga-ut",
    en: "/en/sign-out"
  };

  return `
    <div class="menu-buttons" role="navigation" aria-label="main controls">
      <button id="applications" aria-label="open applications menu">
        <div class="rectangle"></div>
        <div class="triangle"></div>
        <div class="circle"></div>
        <div class="soft-rectangle"></div>
      </button>
      <button id="burger" aria-label="open banner">
        <div class="bun"></div>
        <div class="beef"></div>
        <div class="bun"></div>
      </button>
    </div>

    <header class="app-banner" role="banner">
      <button id="hide-banner" aria-label="close banner">✕</button>

      <div id="first-half">
        <h1>
          <span aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <!-- Font Awesome Free 6.7.2 by @fontawesome -->
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 …"/>
            </svg>
          </span>
          <a href="${dashLinks[lang]}" aria-label="go to dashboard">Botti Example</a>
        </h1>
        <a
          href="${personalSettingsLinks[lang]}"
          id="user-settings"
          aria-label="${{fi:'omat asetukset',sv:'mina inställningar',en:'my settings'}[lang]}"
        >
          ${{fi: "omat asetukset", sv: "mina inställningar", en: "my settings"}[lang]}
        </a>
      </div>

      <div id="second-half">
        <nav role="navigation" aria-label="language selector">
          <ul class="language-selector">
            <li><a href="${dashLinks.fi}">FI</a></li>
            <li><a href="${dashLinks.sv}">SV</a></li>
            <li><a href="${dashLinks.en}">EN</a></li>
          </ul>
        </nav>

        <a
          href="${logOutLinks[lang]}"
          id="sign-out"
          title="${{
            fi: 'Poistaa istuntoevästeen ja uudelleen ohjaa sisäänkirjautumissivulle',
            sv: 'Tar bort sessionskakan och omdirigerar till inloggningssidan',
            en: 'Removes the session cookie and redirects to the login page'
          }[lang]}"
          aria-label="${{fi:'kirjaudu ulos',sv:'logga ut',en:'sign out'}[lang]}"
        >
          <strong>${{fi: "kirjaudu ulos", sv: "logga ut", en: "sign out"}[lang]}</strong>
        </a>
      </div>
    </header>
  `;
}
