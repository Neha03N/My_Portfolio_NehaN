const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/send', (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'nikhade.neha20@gmail.com',
      pass: 'pcqd dxnr ybab vany', // Update this with your app-specific password
    },
  });

  const mailOptions = {
    from: email,
    to: 'nikhade.neha20@gmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: error.toString() }); // Respond with JSON
    }
    res.status(200).json({ message: 'Message sent successfully!' }); // Respond with JSON
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});