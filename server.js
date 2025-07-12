// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zaiduroy@gmail.com',
    pass: 'Miya bhai',
  }
});

// API Route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'your.email@gmail.com',
    subject: `Portfolio Contact from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, message: 'Email failed to send' });
    } else {
      return res.status(200).send({ success: true, message: 'Email sent successfully!' });
    }
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
