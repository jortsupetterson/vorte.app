addEventListener("fetch", ev => {
  if (ev.request.url.startsWith("https://yourapp.com/auth/callback/google")) {
    const { code, state } = Object.fromEntries(
      new URL(ev.request.url).searchParams
    );
    // 1) Hae talletettu session-objekti { state:orig, code_verifier }
    if (state !== session.state) throw new Error("Invalid state");
    // 2) Exchange code for tokens
    const tokenResp = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type":"application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id:     GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        code,
        grant_type:   "authorization_code",
        redirect_uri: "https://yourapp.com/auth/callback/google",
        code_verifier: session.code_verifier
      })
    }).then(r=>r.json());
    // tokenResp = { access_token, id_token, refresh_token, expires_in, … }
    
    // 3) Verifioi id_token allekirjoitus + claimit
    const payload = await verifyJwt(
      tokenResp.id_token,
      "https://oauth2.googleapis.com/v3/certs",
      GOOGLE_CLIENT_ID,
      ["https://accounts.google.com","accounts.google.com"]
    );
    
    // 4) Luo oma session-cookie
    const sub      = payload.sub;        // Googlen pysyvä käyttäjä-ID
    const email   = payload.email;
    const aliasUid = `google:${sub}`;    // provider-prefiksi
    const sessToken= signHmac({ uid:aliasUid, exp:now+1800 }, SECRET);
    return new Response("OK", {
      headers:{
        "Set-Cookie":`vorte-session=${sessToken}; Path=/; Secure; HttpOnly; SameSite=Strict`
      }
    });
  }
});
