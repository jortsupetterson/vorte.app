export default function handleContrastChoice() {
	const contrastOptions = ['low', 'normal', 'high'];

	contrastOptions.forEach((contrastOption) => {
		document.getElementById(contrastOption).addEventListener('click', () => {
			document.documentElement.setAttribute('data-contrast', contrastOption);
		});
		localStorage.setItem('contrast', contrastOption);
	});
}
