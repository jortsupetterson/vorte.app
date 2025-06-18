import handleThemeChoice from './handleThemeChoice.js';
import handleContrastChoice from './handleContrastChoice.js';
import handleAccentColorChoices from './handleAccentColorChoices.js';
import handleStyleReset from './handleStyleReset.js';

handleAccentColorChoices();
handleThemeChoice();
handleContrastChoice();

document.getElementById('reset-styles').addEventListener('click', () => {
	handleStyleReset();
});

(function () {
	const aside = document.querySelector('.app-sidebar');
	const main = document.querySelector('main');
	const toggleBtn = document.getElementById('toggle');
	const appsBtn = document.getElementById('applications');
	const hideSidebarBtn = document.getElementById('hide-sidebar');
	const appBanner = document.querySelector('.app-banner');
	const burgerBtn = document.getElementById('burger');
	const hideBannerBtn = document.getElementById('hide-banner');
	if (!aside || !main || !toggleBtn || !appsBtn || !hideSidebarBtn || !appBanner || !burgerBtn || !hideBannerBtn) return;

	// merge and replace history.state
	function replaceState(partial) {
		const prev = history.state || {};
		history.replaceState({ ...prev, ...partial }, '', location.href);
	}

	// open===true means visible
	function setSidebar(open, push = true) {
		aside.classList.toggle('toggled', !open);
		toggleBtn.classList.toggle('toggled', !open);
		main.classList.toggle('toggled', !open);
		if (push) replaceState({ sidebarOpen: open });
	}

	function setBanner(open, push = true) {
		appBanner.classList.toggle('toggled', open);
		if (push) replaceState({ bannerOpen: open });
	}

	// apply saved state (or defaults) without pushing
	function applyState() {
		const s = history.state || {};
		setSidebar(s.sidebarOpen !== false, false);
		setBanner(s.bannerOpen === true, false);
	}

	// DOM load & history navigation
	window.addEventListener('DOMContentLoaded', applyState);
	window.addEventListener('popstate', applyState);

	// toggle handlers
	toggleBtn.addEventListener('click', () => {
		const isOpen = history.state?.sidebarOpen !== false;
		setSidebar(!isOpen, true);
	});
	appsBtn.addEventListener('click', () => {
		const isOpen = history.state?.sidebarOpen !== false;
		setSidebar(!isOpen, true);
	});
	hideSidebarBtn.addEventListener('click', () => {
		const isOpen = history.state?.sidebarOpen !== false;
		setSidebar(!isOpen, true);
	});
	burgerBtn.addEventListener('click', () => {
		const isOpen = history.state?.bannerOpen === true;
		setBanner(!isOpen, true);
	});
	hideBannerBtn.addEventListener('click', () => {
		const isOpen = history.state?.bannerOpen === true;
		setBanner(!isOpen, true);
	});

	// orientation handlers
	window.matchMedia('(orientation: landscape)').addEventListener('change', (e) => {
		if (e.matches) {
			applyState();
			appBanner.classList.remove('toggled');
			document.body.focus();
		}
	});
	window.matchMedia('(orientation: portrait)').addEventListener('change', (e) => {
		if (e.matches) {
			applyState();
			// reset to portrait defaults
			setBanner(false, false);
			setSidebar(true, false);
		}
	});
})();
