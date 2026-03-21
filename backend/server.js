const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Contact route
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Configure transporter (use Gmail or your SMTP provider)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,      // replace with your email
        pass: process.env.EMAIL_PASS          // use App Password, not your real password
      }
    });

    // Email content
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,          // where you want to receive messages
      subject: `Portfolio Contact Form: ${name}`,
      text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
