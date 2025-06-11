import getCachedAzureToken from "../../../../shared/getCachedAzureToken.js";

export async function requestAuthnViaMagicLink(env) {
    const token = await getCachedZureToken(env);

    const emailPayload = {
      senderAddress: "noreply@mail.vorte.app",
      content: {
        subject: "Testi: noreply@mail.vorte.app",
        plainText: "Tämä on testi viesti Azure Communication Servicesillä."
      },
      recipients: {
        to: [
          { address: "vastaanottaja@esimerkki.com", displayName: "Esimerkki Mies" }
        ]
      }
    };

    const sendRes = await fetch(
      `${env.AZURE_ENDPOINT}/emails:send?api-version=2023-03-31`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
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
