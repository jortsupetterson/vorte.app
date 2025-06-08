import { getCookies } from "../../../../shared/getCookies.js";

export async function authCallback(request, env) {
  const url     = new URL(request.url);
  const code    = url.searchParams.get("code");
  const state   = url.searchParams.get("state");
  const cookies = getCookies(request.headers.get("Cookie"));

  if (!code
    || state !== cookies.oauth_state
    || !cookies.pkce_verifier
  ) {
    return new Response("Invalid state or missing PKCE verifier", { status: 400 });
  }

  // Hae client_secret Secret Storesta
  const clientSecret = await env.GOOGLE_OAUTH_CLIENT_SECRET.get();

  // Vaihda authorization code tokeneiksi
  const params = new URLSearchParams({
    code,
    client_id:     env.GOOGLE_CLIENT_ID,
    client_secret: clientSecret,
    redirect_uri:  env.GOOGLE_AUTH_REDIRECT_URI,
    grant_type:    "authorization_code",
    code_verifier: cookies.pkce_verifier
  });
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method:  "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body:    params
  });
  if (!tokenRes.ok) {
    const msg = await tokenRes.text();
    return new Response(`Token exchange failed: ${msg}`, { status: 502 });
  }

  // Luo oma sessio-ID
  const sessionId = crypto.randomUUID();
  const setCookies = [
    `vorte-session=${sessionId}; HttpOnly; Secure; SameSite=Strict; Path=/`,
    `pkce_verifier=; Max-Age=0; Path=/`,
    `oauth_state=;   Max-Age=0; Path=/`
  ];

  return new Response(null, {
    status: 302,
    headers: {
      "Set-Cookie": setCookies,
      "Location":   "/dash"
    }
  });
}
