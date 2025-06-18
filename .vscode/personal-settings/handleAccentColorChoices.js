export default function handleAccentColorChoices() {
	const accentColors = ['primary', 'secondary', 'primary-ghost', 'secondary-ghost'];

	accentColors.forEach((accentColor) => {
		const current = document.getElementById(accentColor);
		const saved = localStorage.getItem(accentColor);

		if (saved) {
			current.setAttribute('value', saved);
		}

		current.addEventListener('input', (e) => {
			document.documentElement.style.setProperty(`--${accentColor}`, e.target.value);
			localStorage.setItem(accentColor, e.target.value);
		});
	});
}
