export default function getAppPageResponseHeaders(lang, nonce) {
  const cacheControlValue = 'private, no-cache, must-revalidate';
  const varyValue = 'Accept-Encoding'; // Lisää ', Accept-Language' jos sama URL palvelee eri kieliä
  const referrerPolicyValue = 'no-referrer'; // tai 'strict-origin' jos analytiikka vaatii
  // Estetään indeksointi mutta sallitaan linkkien seuraaminen:
  const robotsTagValue = 'noindex, follow';

  // Esimerkki connect-src, laajenna tarvittaessa:
  const connectSrcValue = `'self'`;

  return {
    "Content-Security-Policy":
      `default-src 'self'; base-uri 'none'; form-action 'self'; ` +
      `script-src 'self' 'nonce-${nonce}'; style-src 'self' 'nonce-${nonce}'; ` +
      `img-src 'self' data: https://assets.vorte.app; font-src 'self' https://assets.vorte.app; ` +
      `connect-src ${connectSrcValue}; frame-ancestors 'none'; object-src 'none'`,
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "0",
    "Permissions-Policy": "geolocation=(), microphone=(), camera=(), payment=(), usb=()",
    "Referrer-Policy": referrerPolicyValue,
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    "Cross-Origin-Embedder-Policy": "require-corp",
    "Cross-Origin-Opener-Policy": "same-origin",
    "Cross-Origin-Resource-Policy": "same-origin",
    "X-UA-Compatible": "IE=edge",

    // Estä indeksointi, mutta salli linkkien seuraaminen:
    "X-Robots-Tag": robotsTagValue,

    // Dynaaminen, käyttäjäkohtainen sisältö: yksityinen cache, revalidointi aina
    "Cache-Control": cacheControlValue,
    // ETag-arvo generoitava sisällön tilan mukaan tuotannossa:
    "ETag": `"autogenerate-if-needed"`,
    "Vary": varyValue,

    "Content-Type": "text/html; charset=utf-8",
    "Content-Language": lang
  };
}
