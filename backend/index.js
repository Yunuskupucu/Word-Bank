import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoute.js';
import { connectDB } from './connect.js';

// .env dosyasını yükle
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// CORS ayarları
app.use(express.json()); // Body parse middleware
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

// Middleware

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: 'Bir şeyler ters gitti!', error: err.message });
});

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'WordBank Backend API çalışıyor!' });
});

// Server'ı başlat
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
