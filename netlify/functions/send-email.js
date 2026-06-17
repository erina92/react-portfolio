// Netlify Function to send emails via Gmail SMTP (nodemailer)
// Requires these environment variables set in Netlify UI:
// GMAIL_USER, GMAIL_APP_PASSWORD, TO_EMAIL

const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const data = JSON.parse(event.body || '{}');
    const name = data.user_name || 'No name';
    const email = data.user_email || 'no-reply@example.com';
    const subject = data.subject || 'Contact form message';
    const message = data.message || '';

    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
    const TO_EMAIL = process.env.TO_EMAIL;

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !TO_EMAIL) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'GMAIL_USER, GMAIL_APP_PASSWORD or TO_EMAIL not configured in environment' }),
      };
    }

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
    @media only screen and (max-width: 620px) {
      .email-wrapper { padding: 16px 0 !important; }
      .email-card { border-radius: 0 !important; }
      .email-header { padding: 28px 20px 24px !important; }
      .email-header h1 { font-size: 22px !important; }
      .email-body { padding: 24px 20px !important; }
      .email-footer { padding: 20px !important; }
      .sender-card td { padding: 16px !important; }
      .reply-btn { display: block !important; text-align: center !important; padding: 14px 20px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f8;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" class="email-wrapper" style="background-color:#f4f4f8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table cellpadding="0" cellspacing="0" class="email-card" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- HEADER -->
          <tr>
            <td class="email-header" bgcolor="#a855b5" style="background:#a855b5;padding:32px 24px;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;color:rgba(255,255,255,0.8);letter-spacing:3px;text-transform:uppercase;">Portfolio</p>
              <h1 style="margin:0;font-size:24px;color:#ffffff;font-weight:700;">Nuovo messaggio ricevuto</h1>
              <p style="margin:10px 0 0;font-size:13px;color:rgba(255,255,255,0.85);">Qualcuno ha compilato il tuo form di contatto</p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td class="email-body" style="padding:40px;">

              <!-- Sender card -->
              <table width="100%" cellpadding="0" cellspacing="0" class="sender-card" style="background:#f8f5ff;border-radius:12px;margin-bottom:24px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 16px;font-size:11px;color:#a855b5;letter-spacing:2px;text-transform:uppercase;font-weight:700;">Chi ti scrive</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid #ede9f7;">
                          <span style="font-size:12px;color:#888;display:block;margin-bottom:2px;">Nome</span>
                          <span style="font-size:16px;color:#1a1a2e;font-weight:600;">${escapeHtml(name)}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;">
                          <span style="font-size:12px;color:#888;display:block;margin-bottom:2px;">Email</span>
                          <a href="mailto:${escapeHtml(email)}" style="font-size:15px;color:#cb70aa;text-decoration:none;font-weight:600;word-break:break-all;">${escapeHtml(email)}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Subject -->
              <p style="margin:0 0 6px;font-size:11px;color:#a855b5;letter-spacing:2px;text-transform:uppercase;font-weight:700;">Oggetto</p>
              <p style="margin:0 0 24px;font-size:18px;color:#1a1a2e;font-weight:600;word-break:break-word;">${escapeHtml(subject)}</p>

              <!-- Message -->
              <p style="margin:0 0 10px;font-size:11px;color:#a855b5;letter-spacing:2px;text-transform:uppercase;font-weight:700;">Messaggio</p>
              <div style="background:#f8f5ff;border-left:4px solid #cb70aa;border-radius:0 12px 12px 0;padding:20px 24px;margin-bottom:32px;">
                <p style="margin:0;font-size:15px;color:#333;line-height:1.7;word-break:break-word;">${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
              </div>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(email)}"
                       class="reply-btn"
                       style="display:inline-block;background:linear-gradient(135deg,#cb70aa,#7c3aed);color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:50px;letter-spacing:0.5px;">
                      &#x21A9; Rispondi a ${escapeHtml(name)}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td class="email-footer" bgcolor="#f0ebfb" style="background:#f0ebfb;padding:20px 24px;text-align:center;border-top:1px solid #e8e0f5;">
              <p style="margin:0;font-size:12px;color:#999;line-height:1.6;">
                Generata automaticamente dal form di contatto di<br/>
                <strong style="color:#cb70aa;">erikamiglietta.netlify.app</strong>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Portfolio contact — ${subject}`,
      html,
    });

    return { statusCode: 200, body: JSON.stringify({ message: 'Email sent' }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
