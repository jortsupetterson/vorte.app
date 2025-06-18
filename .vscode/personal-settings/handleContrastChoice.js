export default function handleContrastChoice() {
	document.getElementById('low').addEventListener('click', () => {
		document.documentElement.setAttribute('data-contrast', 'low');
		localStorage.setItem('contrast', 'low');
	});

	document.getElementById('normal').addEventListener('click', () => {
		document.documentElement.setAttribute('data-contrast', 'normal');
		localStorage.setItem('contrast', 'normal');
	});

	document.getElementById('high').addEventListener('click', () => {
		document.documentElement.setAttribute('data-contrast', 'high');
		localStorage.setItem('contrast', 'high');
	});
}
