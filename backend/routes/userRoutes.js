import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import {
  getProfile,
  addToWordBox,
  removeFromWordBox,
  getWordBox,
} from '../controllers/userController.js';

const router = express.Router();

// Profil bilgilerini getirme
router.get('/me', authenticateToken, getProfile);

// WordBox işlemleri
router.get('/wordbox', authenticateToken, getWordBox);
router.post('/wordbox', authenticateToken, addToWordBox);
router.delete('/wordbox/:word', authenticateToken, removeFromWordBox);

export default router;
