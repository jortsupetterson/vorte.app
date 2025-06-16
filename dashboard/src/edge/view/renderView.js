import getAppBanner from '../../../../shared/getAppBanner.js';
import getDashMain from './sections/getDashMain.js';
import getDashSideBar from './sections/getDashSidebar.js';

export default function renderView(lang, url) {
	return `
    <!DOCTYPE html>
    <html lang="fi" data-theme="dark" data-contrast="normal">
    <head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex, follow">
    <link rel="stylesheet" href="/dash/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1, user-scalable=no">
    <title>${
			{
				fi: 'Ohjauspaneeli | Vorte',
				sv: 'Kontrollpanel | Vorte',
				en: 'Control panel | Vorte',
			}[lang]
		}</title>
</head>
<body>
    ${getAppBanner(lang)}
    ${getDashMain(lang)}
    ${getDashSideBar(lang)}
<script type="module" src="/dash/app.js" defer></script>
</body>
</html>
    `;
}
