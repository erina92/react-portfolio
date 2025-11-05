// Netlify Function to send emails via SendGrid
// Requires these environment variables set in Netlify UI:
// SENDGRID_API_KEY, TO_EMAIL, FROM_EMAIL (optional)

const fetch = require('node-fetch');

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

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const TO_EMAIL = process.env.TO_EMAIL;
    const FROM_EMAIL = process.env.FROM_EMAIL || 'no-reply@portfolio';

    if (!SENDGRID_API_KEY || !TO_EMAIL) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'SendGrid API key or TO_EMAIL not configured in environment' }),
      };
    }

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.4;color:#222;">
        <h2>New contact form message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <div>${escapeHtml(message).replace(/\n/g, '<br/>')}</div>
      </div>
    `;

    const payload = {
      personalizations: [
        {
          to: [{ email: TO_EMAIL }],
          subject: `Portfolio contact — ${subject}`,
        },
      ],
      from: { email: FROM_EMAIL, name: 'Portfolio Contact' },
      reply_to: { email },
      content: [{ type: 'text/html', value: html }],
    };

    const resp = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return { statusCode: resp.status, body: JSON.stringify({ error: text }) };
    }

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
