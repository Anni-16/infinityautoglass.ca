const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/quote', async (req, res) => {
  const { name, email, phone, brand, vin, damage } = req.body;

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Admin notification
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.MAIL_TO,
      subject: `New Quote Request — ${brand || 'Vehicle'}`,
      html: `
        <h2 style="color:#0a1628">New Quote Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Vehicle:</b> ${brand}</p>
        <p><b>VIN:</b> ${vin || 'N/A'}</p>
        <p><b>Damage:</b> ${damage || 'N/A'}</p>
      `,
    });

    // Customer thank you — sent to admin since free plan restricts recipient
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.MAIL_TO,
      subject: `[CUSTOMER COPY] Thank You — ${name}`,
      html: `
        <p style="color:#888;font-size:12px">Forward this to: ${email}</p>
        <h2 style="color:#0a1628">Hi ${name},</h2>
        <p>Thanks for reaching out to <b>Infinity Auto Glass</b>!</p>
        <p>We've received your quote request for your <b>${brand}</b> and will call you back within the hour.</p>
        <p>— The Infinity Auto Glass Team</p>
      `,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));
