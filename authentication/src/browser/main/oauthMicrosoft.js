export function startMsLogin() {
  pkceWorker.postMessage({ cmd: 'generatePkce' });
  pkceWorker.onmessage = e => {
    const { codeVerifier, codeChallenge, state } = e.data;

    // Tallenna tiukasti cookieihin
 const attrs = location.protocol === "https:" ? "Secure; SameSite=Lax" : "SameSite=Lax";
  document.cookie = `pkce_verifier=${codeVerifier}; Path=/; ${attrs}`;
  document.cookie = `oauth_state=${state}; Path=/; ${attrs}`;
  document.cookie = `auth_provider=ms; Path=/; ${attrs}`;

    // Ohjataan backend‐endpointille
    window.location.href =
      `/auth/ms?code_challenge=${codeChallenge}&state=${state}`;
  };
}
