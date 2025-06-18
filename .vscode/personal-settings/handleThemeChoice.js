export default function handleThemeChoice() {
	document.getElementById('dark').addEventListener('click', () => {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	});

	document.getElementById('light').addEventListener('click', () => {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	});
}
