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
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use((err, res) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: 'Bir şeyler ters gitti!', error: err.message });
});

app.get('/', (res) => {
  res.json({ message: 'WordBank Backend API çalışıyor!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});

app.use('/api/auth', authRoutes);
