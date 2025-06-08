// worker.js
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI } = env;
    const COOKIE_HEADER = request.headers.get('Cookie') || '';

    // Helper: hae nimetty cookie
    const getCookie = (name) => {
      const match = COOKIE_HEADER.match(
        new RegExp('(?:^|; )' + name + '=([^;]*)')
      );
      return match ? decodeURIComponent(match[1]) : null;
    };

    // 1) Aloita OAuth (redirect Googlelle)
    if (url.pathname === '/auth/google') {
      const code_challenge = url.searchParams.get('code_challenge');
      const state = url.searchParams.get('state');
      if (!code_challenge || !state) {
        return new Response('Missing code_challenge or state', { status: 400 });
      }
      const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
      authUrl.searchParams.set('client_id', GOOGLE_CLIENT_ID);
      authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
      authUrl.searchParams.set('response_type', 'code');
      authUrl.searchParams.set('scope', 'openid email profile');
      authUrl.searchParams.set('code_challenge', code_challenge);
      authUrl.searchParams.set('code_challenge_method', 'S256');
      authUrl.searchParams.set('state', state);
      return Response.redirect(authUrl.toString(), 302);
    }

    // 2) Callback from Google → token exchange + session cookie + redirect dash
    if (url.pathname === '/auth/google/callback') {
      const code = url.searchParams.get('code');
      const state = url.searchParams.get('state');
      const pkceVerifier = getCookie('pkce_verifier');
      const oauthState = getCookie('oauth_state');

      if (!code || !state || state !== oauthState || !pkceVerifier) {
        return new Response('Invalid state or missing parameters', { status: 400 });
      }

      // Exchange code for tokens
      const params = new URLSearchParams();
      params.set('code', code);
      params.set('client_id', GOOGLE_CLIENT_ID);
      params.set('client_secret', GOOGLE_CLIENT_SECRET);
      params.set('redirect_uri', REDIRECT_URI);
      params.set('grant_type', 'authorization_code');
      params.set('code_verifier', pkceVerifier);

      const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params
      });
      if (!tokenRes.ok) {
        const err = await tokenRes.text();
        return new Response(`Token exchange failed: ${err}`, { status: 502 });
      }
      const tokens = await tokenRes.json();
      // tokens.access_token, tokens.refresh_token, tokens.id_token…

      // Tässä kohtaa loisi oman Vorte-session (ID voi olla JWT tai oma sessio-ID)
      const sessionId = /* generoidaan/haetaan oma sessio-ID */ crypto.randomUUID();

      // Valmistele vastauksen cookiet
      const setCookies = [
        // Oma istunto
        `vorte-session=${sessionId}; HttpOnly; Secure; SameSite=Strict; Path=/`,
        // Poistetaan PKCE-cookiet
        `pkce_verifier=; Max-Age=0; Path=/`,
        `oauth_state=; Max-Age=0; Path=/`
      ];

      // (Halutessasi tallenna tokens ja sessionId esim. KV:hen)

      return new Response(null, {
        status: 302,
        headers: {
          'Set-Cookie': setCookies,
          'Location': '/dash'
        }
      });
    }

    // 3) Suojattu dash
    if (url.pathname === '/dash') {
      const session = getCookie('vorte-session');
      if (!session) {
        return Response.redirect('/', 302);
      }
      // Voi halutessa hakea sessionin tiedot KV:stä tms.
      return new Response('🚀 Tervetuloa dashboardille!', {
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
      });
    }

    // 4) Muut: oletusarvoisesti välitä pyynnöt staattiseen fronttiin tai Pagesiin
    return fetch(request);
  }
};
