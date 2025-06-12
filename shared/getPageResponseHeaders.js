export default function responseHeaders(lang, nonce) {
  return {

    "Content-Security-Policy": 
      `default-src 'self'; base-uri 'none'; form-action 'self'; ` +
      `script-src 'self' 'nonce-${nonce}'; style-src 'self' 'nonce-${nonce}'; ` +
      `img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; object-src 'none'`,

    "X-Content-Type-Options":       "nosniff",
    "X-Frame-Options":             "DENY",
    "X-XSS-Protection":            "0",
    "Permissions-Policy":          "geolocation=(), microphone=(), camera=(), payment=(), usb=()",
    "Referrer-Policy":             "strict-origin-when-cross-origin",
    "Strict-Transport-Security":   "max-age=63072000; includeSubDomains; preload",
    "Cross-Origin-Embedder-Policy":"require-corp",
    "Cross-Origin-Opener-Policy":  "same-origin",
    "Cross-Origin-Resource-Policy":"same-origin",
    "X-UA-Compatible":             "IE=edge",
    "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=30",
    "ETag": `"autogenerate-if-needed"`,
    "Vary": "Accept-Encoding",            
    "Content-Type": "text/html; charset=utf-8",
    "Content-Language": lang
  };
}
