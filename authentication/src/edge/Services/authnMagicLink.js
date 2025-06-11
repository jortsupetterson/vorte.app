import getCachedAzureToken from "../../../../shared/getCachedAzureToken.js";

export async function requestAuthnViaMagicLink(env) {
    const token = await getCachedAzureToken(env);

    const emailPayload = {
      senderAddress: "DoNotReply@mail.vorte.app",
      content: {
        subject: "Vorte Tunnistautuminen",
    html: `
      <!DOCTYPE html>
      <html lang="fi">
      <head>
        <meta charset="UTF-8"/>
        <style>
          body { font-family: Arial, sans-serif; }
          .header { background: #005a9e; color: #fff; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .footer { font-size: 12px; color: #666; padding: 10px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Vorte ERP</h1>
        </div>
        <div class="content">
          <p>Klikkaa alla olevaa linkkiä vahvistaaksesi sähköpostiosoitteesi:</p>
          <p><a href="https://vorte.app/fi/kirjaudu-sisään>Vahvista sähköposti</a></p>
        </div>
        <div class="footer">
          <p>©2025 Vorte ERP. Kaikki oikeudet pidätetään.</p>
        </div>
      </body>
      </html>`
  },
      recipients: {
        to: [
          { address: "lehtinenjori03@gmail.com", displayName: "Jori Lehtinen" }
        ]
      }
    };

        const sendRes = await fetch(
      `${env.AZURE_COMMUNICATIONS_ENDPOINT}/emails:send?api-version=2023-03-31`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(emailPayload)
      }
    );


  const result = await sendRes.json();
    return new Response(JSON.stringify(result, null, 2), {
      status: sendRes.status,
      headers: { "Content-Type": "application/json" }
    });
  };
