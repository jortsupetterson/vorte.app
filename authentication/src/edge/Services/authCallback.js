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
    
// ... tokenRes tarkistus pysyy ennallaan
const tokenData = await tokenRes.json();           // <- ota JSON, älä .text()
const idToken   = tokenData.id_token;              // JWT-merkkijono

// Base64URL-dekoodaus ilman ulkoisia kirjastoja
function b64urlDecode(b64url) {
  return atob(b64url.replace(/-/g, '+').replace(/_/g, '/'));
}

const [, payloadB64] = idToken.split('.');         // header.payload.signature
const payload       = JSON.parse(b64urlDecode(payloadB64));

const { sub, email, name, picture } = payload;

const reponse = JSON.stringify(payload)

  return new Response(reponse,{ 
    headers: {
      "content-type":"text"
    }
  });
}
