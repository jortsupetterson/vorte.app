export default async function getCachedAzureToken(env) {
  const TOKEN_CACHE_KEY = new Request("https://token.mail.vorte.app/");
  const cache = caches.default;
  let res = await cache.match(TOKEN_CACHE_KEY);
  if (res) {
    return await res.text();
  }

  const params = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: env.AZURE_CLIENT_ID,
    client_secret: env.AZURE_CLIENT_SECRET,
    scope: "https://communication.azure.com/.default"
  });

  const tokenRes = await fetch(
    `https://login.microsoftonline.com/${env.AZURE_TENANT_ID}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params
    }
  );
  const { access_token, expires_in } = await tokenRes.json();

  const ttl = Math.max(expires_in - 60, 0);
  res = new Response(access_token, {
    headers: { "Cache-Control": `public, max-age=${ttl}` }
  });
  await cache.put(TOKEN_CACHE_KEY, res.clone());

  return access_token;
}