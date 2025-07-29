import jwt from 'jsonwebtoken';

export const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Yetkilendirme token\'ı gerekli' });
    }

    jwt.verify(token, process.env.JWT_SECRET || 'gizli_anahtar', (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Geçersiz token' });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası', error: error.message });
  }
};
