import express from 'express';
import { register, login } from '../controllers/authController.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import { getProfile } from '../controllers/userController.js';

import User from '../models/User.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/profile', verifyToken, getProfile);

// 🛡️ Token ile erişilebilen profil route'u
router.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user)
      return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: 'Sunucu hatası', error: err.message });
  }
});

export default router;
