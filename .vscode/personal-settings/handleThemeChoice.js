export default function handleThemeChoice() {
	const themeOptions = ['dark', 'light'];

	themeOptions.forEach((themeOption) => {
		document.getElementById(themeOption).addEventListener('click', () => {
			document.documentElement.setAttribute('data-theme', themeOption);
			localStorage.setItem('theme', themeOption);
		});
	});
}