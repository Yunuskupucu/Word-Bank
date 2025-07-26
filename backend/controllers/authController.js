import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'gizliKelimeDegistirBunu'; // ENV dosyasına koymayı unutma

// Kullanıcı kaydı
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  //   try {
  //     const { username, email, password } = req.body;
  //     const existingUser = await User.findOne({ email });
  //     if (existingUser)
  //       return res.status(400).json({ message: 'Email zaten kayıtlı.' });
  //     const hashedPassword = await bcrypt.hash(password, 10);
  //     const newUser = new User({
  //       username,
  //       email,
  //       password: hashedPassword,
  //       wordBox: [],
  //     });
  //     await newUser.save();
  //     res.status(201).json({ message: 'Kayıt başarılı!' });
  //   } catch (err) {
  //     res.status(500).json({ message: 'Sunucu hatası', error: err.message });
  //   }
};

// Kullanıcı girişi
export const login = async (req, res) => {
  const { email, password } = req.body;
  //   try {
  //     const { email, password } = req.body;

  //     const user = await User.findOne({ email });
  //     if (!user) return res.status(400).json({ message: 'Email bulunamadı.' });

  //     const isMatch = await bcrypt.compare(password, user.password);
  //     if (!isMatch) return res.status(400).json({ message: 'Şifre hatalı.' });

  //     const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
  //       expiresIn: '7d',
  //     });

  //     res.status(200).json({ token, userId: user._id, username: user.username });
  //   } catch (err) {
  //     res.status(500).json({ message: 'Sunucu hatası', error: err.message });
  //   }
};
