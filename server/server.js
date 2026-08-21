const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

app.post('/api/quote', async (req, res) => {
  const { name, email, phone, brand, vin, damage } = req.body;

  try {
    // Email to admin
    await transporter.sendMail({
      from: `"Infinity Auto Glass" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: `New Quote Request — ${brand || 'Vehicle'}`,
      html: `
        <h2>New Quote Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Vehicle:</b> ${brand}</p>
        <p><b>VIN:</b> ${vin || 'N/A'}</p>
        <p><b>Damage:</b> ${damage || 'N/A'}</p>
      `,
    });

    // Confirmation email to customer
    await transporter.sendMail({
      from: `"Infinity Auto Glass" <${process.env.MAIL_USER}>`,
      to: email,
      subject: 'We received your quote request!',
      html: `
        <h2>Hi ${name},</h2>
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

app.listen(3001, () => console.log('Mailer server running on http://localhost:3001'));
