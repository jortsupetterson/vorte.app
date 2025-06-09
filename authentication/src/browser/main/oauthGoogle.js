export function startGoogleLogin() {
  const pkceWorker = new Worker('/pkceWorker.js');
  pkceWorker.postMessage({ cmd: 'generatePkce' });
  pkceWorker.onmessage = e => {
    const { codeVerifier, codeChallenge, state } = e.data;

    // Tallenna tiukasti cookieihin
 const attrs = location.protocol === "https:" ? "Secure; SameSite=Lax" : "SameSite=Lax";
  document.cookie = `pkce_verifier=${codeVerifier}; Path=/; ${attrs}`;
  document.cookie = `oauth_state=${state}; Path=/; ${attrs}`;

    // Ohjataan backend‐endpointille
    window.location.href =
      `/auth/google?code_challenge=${codeChallenge}&state=${state}`;
  };
}
