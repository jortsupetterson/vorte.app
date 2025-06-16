export default function getDashSideBar(lang) {
	return `
    <aside class="app-sidebar">
      <button id="hide-sidebar">✕</button>
      <header>
        <p class="heading">${
					{
						fi: 'SOVELLUKSET:',
						sv: 'APPAR:',
						en: 'APPS:',
					}[lang]
				}</p>
      </header>
      <nav>
        <ul>
          <li>
            <a 
              href="${
								{
									fi: '/fi/polku-yrittäjäksi',
									sv: '/sv/vägen-till-företagande',
									en: '/en/road-to-entrepreneurship',
								}[lang]
							}"
              title="${
								{
									fi: 'Kaikki vaiheet yrittäjäksi ryhtymisessä Suomessa',
									sv: 'Alla steg för att bli företagare i Finland',
									en: 'All steps to become an entrepreneur in Finland',
								}[lang]
							}"
            >
              ${
								{
									fi: 'Polku yrittäjäksi',
									sv: 'Vägen till företagande',
									en: 'Road to Entrepreneurship',
								}[lang]
							}
            </a>
          </li>
          <li>
            <a 
              href="${
								{
									fi: '/fi/oma-talous',
									sv: '/sv/min-ekonomi',
									en: '/en/personal-finance',
								}[lang]
							}"
              title="${
								{
									fi: 'Seuraa omaa talouttasi ja kuluja, tee älykkäitä hankintoja',
									sv: 'Följ din ekonomi och dina utgifter, gör smarta inköp',
									en: 'Track your personal finances and expenses, and make smart purchases',
								}[lang]
							}"
            >
              ${
								{
									fi: 'Oma talous',
									sv: 'Min ekonomi',
									en: 'Personal Finance',
								}[lang]
							}
            </a>
          </li>
          <li>
            <a 
              href="${
								{
									fi: '/fi/tehtavalista',
									sv: '/sv/att-göra-lista',
									en: '/en/to-do-list',
								}[lang]
							}"
              title="${
								{
									fi: 'Hallitse tehtäviä ja suunnitelmia',
									sv: 'Hantera dina uppgifter och planer',
									en: 'Manage your tasks and plans',
								}[lang]
							}"
            >
              ${
								{
									fi: 'To-Do',
									sv: 'To-Do',
									en: 'To-Do',
								}[lang]
							}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  `;
}
