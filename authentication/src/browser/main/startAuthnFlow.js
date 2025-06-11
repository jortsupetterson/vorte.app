export async function startAuthnFlow({ method, email=null }) {
  // 1) Generoi PKCE + CSRF-state WebWorkerilla
  const { codeVerifier, codeChallenge, state } = await new Promise(resolve => {
    pkceWorker.postMessage({ cmd: 'generatePkce' });
    pkceWorker.onmessage = e => resolve(e.data);
  });

  // 2) Tallenna evästeisiin
  const secureAttrs = location.protocol === 'https:' 
    ? 'Secure; SameSite=Lax' 
    : 'SameSite=Lax';

  document.cookie = `pkce_verifier=${codeVerifier}; Path=/; ${secureAttrs}`;
  document.cookie = `oauth_state=${state}; Path=/; ${secureAttrs}`;
  document.cookie = `authn_method=${method}; Path=/; ${secureAttrs}`;

  // 3) Ohjaa oikeaan endpointiin
  let url = `/authn/${method}?code_challenge=${codeChallenge}&state=${state}`;
  if (method === 'magic-link') {
    // magic-link vaatii myös emailin queryssa
    url += `&email=${encodeURIComponent(email)}`;
  window.location.href = url;
}
window.location.href = url;
}
