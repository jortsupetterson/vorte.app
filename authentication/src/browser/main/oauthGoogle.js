export function startGoogleLogin() {
  const pkceWorker = new Worker('/pkceWorker.js');
  pkceWorker.postMessage({ cmd: 'generatePkce' });
  pkceWorker.onmessage = e => {
    const { codeVerifier, codeChallenge, state } = e.data;

    // Tallenna tiukasti cookieihin
    document.cookie = `pkce_verifier=${encodeURIComponent(codeVerifier)}; Path=/; Secure; SameSite=Strict`;
    document.cookie = `oauth_state=${state}; Path=/; Secure; SameSite=Strict`;

    // Ohjataan backend‐endpointille
    window.location.href =
      `/auth/google?code_challenge=${codeChallenge}&state=${state}`;
  };
}
