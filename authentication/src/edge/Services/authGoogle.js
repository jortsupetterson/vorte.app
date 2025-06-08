export function authGoogle(request, env) {
  const url = new URL(request.url);
  const challenge = url.searchParams.get("code_challenge");
  const state     = url.searchParams.get("state");
  if (!challenge || !state) {
    return new Response("Missing code_challenge or state", { status: 400 });
  }
  const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  authUrl.searchParams.set("client_id",             env.GOOGLE_CLIENT_ID);
  authUrl.searchParams.set("redirect_uri",          env.GOOGLE_AUTH_REDIRECT_URI);
  authUrl.searchParams.set("response_type",         "code");
  authUrl.searchParams.set("scope",                 "openid email profile");
  authUrl.searchParams.set("code_challenge",        challenge);
  authUrl.searchParams.set("code_challenge_method", "S256");
  authUrl.searchParams.set("state",                 state);
  return Response.redirect(authUrl, 302);
}
