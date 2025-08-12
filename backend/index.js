import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoute.js';
import userRoutes from './routes/userRoutes.js';
import { connectDB } from './connect.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(
  cors({
    origin: [
      'https://word-bank-frontend.onrender.com',
      'http://localhost:5173',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Bir şeyler ters gitti!',
    error: err.message,
  });
});

app.get('/', (req, res) => {
  res.json({ message: 'WordBank Backend API çalışıyor!' });
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB bağlantısı başarısız:', err);
    process.exit(1);
  });
