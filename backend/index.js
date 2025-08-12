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
      'http://localhost:5173',
      'https://word-bank-frontend.onrender.com',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

console.log('Environment check:', {
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI: process.env.MONGODB_URI ? 'Defined' : 'Undefined',
  PORT: process.env.PORT || 'Using default 5001',
});

app.get('/', (req, res) => {
  res.json({ message: 'WordBank Backend API çalışıyor!' });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
  console.error('Error stack:', err.stack);
  res.status(500).json({
    message: 'Bir şeyler ters gitti!',
    error:
      process.env.NODE_ENV === 'production'
        ? 'Internal Server Error'
        : err.message,
  });
});

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route bulunamadı' });
});

const startServer = async () => {
  try {
    await connectDB();
    console.log('MongoDB bağlantısı başarılı');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server başlatma hatası:', error);
    process.exit(1);
  }
};

startServer();
