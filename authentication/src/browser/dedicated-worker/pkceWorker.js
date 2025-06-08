// Dedicated WebWorker: generoi PKCE + state
self.addEventListener('message', async e => {
  if (e.data.cmd !== 'generatePkce') return;

  // 1) code_verifier: satunnainen 128‐merkkinen base64url
  const array = new Uint8Array(96);
  crypto.getRandomValues(array);
  const codeVerifier = btoa(String.fromCharCode(...array))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  // 2) code_challenge: SHA256(verifier) → base64url
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier));
  const base64 = btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  // 3) state: satunnainen nonce 16 tavua hex
  const stateArray = new Uint8Array(16);
  crypto.getRandomValues(stateArray);
  const state = Array.from(stateArray).map(b => b.toString(16).padStart(2,'0')).join('');

  postMessage({ codeVerifier, codeChallenge: base64, state });
});