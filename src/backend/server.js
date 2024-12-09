import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://jarutanystrade.com.mx'], // Allow both local and production domains
  methods: ['GET', 'POST'],  // Allow both GET and POST methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allow specific headers
}));
app.use(bodyParser.json());
app.use(morgan('combined'));

// Email endpoint
app.post('/send-email', async (req, res) => {
  const { nombre, correo, telefono, motivo } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Gmail's SMTP server
    port: 465, // Secure SMTP (SSL)
    secure: true, // Use SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

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
    res.status(500).send({ error: 'Failed to send email. Please try again later.' });
  }
});

// Catch-all for invalid routes
app.use((req, res) => {
  res.status(404).send({ error: 'Route not found' });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
