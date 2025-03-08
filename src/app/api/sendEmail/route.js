import sendgrid from '@sendgrid/mail';

// Hämta API-nyckeln från miljövariabel
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message, honeypot, formLoadedAt } = await req.json();

    // Kontrollera om alla fält finns
    if (!email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Honeypot-fält kontroll (Om honeypot-fältet är ifyllt, avvisa förfrågan)
    if (honeypot) {
      return new Response(JSON.stringify({ error: 'Spam-bot upptäckt' }), { status: 400 });
    }

    // Kontrollera tidsbegränsning (om formuläret skickades för snabbt)
    const formSubmissionTime = Date.now() - formLoadedAt;
    if (formSubmissionTime < 2000) { // Mindre än två sekunder
      return new Response(JSON.stringify({ error: 'Formuläret skickades för snabbt' }), { status: 400 });
    }

    // Inkludera användarens e-post i meddelandets innehåll
    const msg = {
      to: 'nils-emil1337@hotmail.se',  // Mottagarens e-postadress
      from: {
        email: 'emil.arrenius@student.kyh.se',  // Din verifierade SendGrid-e-postadress
        name: 'Mitt Företag'  // Namnet du vill visa som avsändare
      },
      subject: subject,
      html: `
        <p><strong>Från:</strong> ${email}</p>
        <p><strong>Meddelande:</strong></p>
        <p>${message}</p>
      `,  // Inkludera användarens e-post i själva meddelandet
    };

    const response = await sendgrid.send(msg);

    if (response[0].statusCode === 202) {
      return new Response(JSON.stringify({ success: true, message: 'E-post skickades framgångsrikt!' }), { status: 200 });
    } else {
      console.error('SendGrid error:', response);
      return new Response(JSON.stringify({ error: 'Misslyckades att skicka e-post.' }), { status: response[0].statusCode });
    }

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Misslyckades att skicka e-post.' }), { status: 500 });
  }
}
