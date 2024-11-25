import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email endpoint
app.post('/send-email', async (req, res) => {
  const { nombre, correo, telefono, motivo } = req.body;

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Gmail's SMTP server
    port: 465, // Secure SMTP (SSL)
    secure: true, // Use SSL
    auth: {
      user: 'ventas@jarutanystrade.com',
      pass: 'hrqv wpns oohx waxq',
    },
  });

  // Configure the email
  const mailOptions = {
    from: correo,
    to: 'ventas@jarutanystrade.com',
    subject: `Nuevo mensaje de ${nombre}`,
    text: `
      Nombre: ${nombre}
      Correo: ${correo}
      Teléfono: ${telefono}
      Motivo: ${motivo}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
