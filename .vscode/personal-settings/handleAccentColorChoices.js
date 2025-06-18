import getGhostFromHex from './getGhostFromHex.js';

/**
 * Initializes and binds color inputs for "primary" and "secondary" accents and their ghost variants.
 *
 * For each accent ("primary", "secondary"), this will:
 *  1. Look for two <input type="color"> elements with IDs:
 *     - `${accent}`            (e.g. "primary")
 *     - `${accent}-ghost`      (e.g. "primary-ghost")
 *  2. Load a saved hex value from localStorage under the same key. If none exists,
 *     fall back to the current CSS var `--${key}` on <html>.
 *  3. Apply the loaded value:
 *     - For the base accent: set CSS var `--${accent}` = hex
 *     - For the ghost accent: set CSS var `--${accent}-ghost` = rgba(hex, 0.6)
 *  4. Set the input’s value to the hex.
 *  5. On `input` events:
 *     - Update the corresponding CSS var.
 *     - Save the new hex to localStorage.
 *
 * Ghost CSS vars are computed via `getGhostFromHex(hex)` to ensure alpha=0.6.
 *
 * @function handleAccentColorChoices
 * @returns {void}
 */
export default function handleAccentColorChoices() {
	const root = document.documentElement;
	const accents = ['primary', 'secondary'];

	accents.forEach((accent) => {
		['', '-ghost'].forEach((suffix) => {
			const key = accent + (suffix || '');
			const input = document.getElementById(key);
			if (!input) return;

			const storageKey = key;
			const cssVar = `--${key}`;
			const savedHex = localStorage.getItem(storageKey);
			const fallback = window.getComputedStyle(root).getPropertyValue(cssVar).trim();
			const initialHex = savedHex || fallback;

			const apply = (hex) => {
				const value = suffix ? getGhostFromHex(hex) : hex;
				root.style.setProperty(cssVar, value);
				localStorage.setItem(storageKey, hex);
				input.value = hex;
			};
			apply(initialHex);

			input.addEventListener('input', (e) => apply(e.currentTarget.value));
		});
	});
}
