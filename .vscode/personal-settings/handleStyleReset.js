import getGhostFromHex from './getGhostFromHex.js';

/**
 * Resets the document’s theme defaults and syncs them to CSS vars, localStorage, and color inputs.
 *
 * Behavior:
 * 1. Sets data-theme="dark" and data-contrast="normal" on <html>, persists to localStorage.
 * 2. For each accent ("primary", "secondary"):
 *    - Sets --${accent} to its hex value.
 *    - Sets --${accent}-ghost to its rgba(hex, 0.6) value.
 *    - Persists the base hex to localStorage under key ${accent}.
 *    - Updates any <input type="color" id="${accent}"> and <input type="color" id="${accent}-ghost"> to the same hex.
 *
 * @function handleStyleReset
 * @returns {void}
 */
export default function handleStyleReset() {
	const root = document.documentElement;

	Object.entries({ theme: 'dark', contrast: 'normal' }).forEach(([k, v]) => {
		root.setAttribute(`data-${k}`, v);
		localStorage.setItem(k, v);
	});

	const baseColors = {
		primary: '#199473',
		secondary: '#0B4F60',
	};

	Object.entries(baseColors).forEach(([name, hex]) => {
		['', '-ghost'].forEach((suffix) => {
			const cssVar = `--${name}${suffix}`;
			const isGhost = Boolean(suffix);
			const value = isGhost ? getGhostFromHex(hex) : hex;

			root.style.setProperty(cssVar, value);

			if (!isGhost) {
				localStorage.setItem(name, hex);
			}

			const input = document.getElementById(`${name}${suffix}`);
			if (input) {
				input.value = hex;
			}
		});
	});
}
