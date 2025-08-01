import User from '../models/User.js';

// Kullanıcı profilini getir
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası', error: error.message });
  }
};

// WordBox'a kelime ekleme
export const addToWordBox = async (req, res) => {
  try {
    const { word, mean_tr, example_en, example_tr, level } = req.body;

    if (!word || !mean_tr || !example_en || !example_tr || !level) {
      return res.status(400).json({
        message: 'Eksik bilgi',
        details:
          'Tüm alanlar (word, mean_tr, example_en, example_tr, level) gereklidir',
      });
    }

    // Kullanıcıyı bulma
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    // Kelime kontrolü
    const existingWord = user.wordBox.find((item) => item.word === word);
    if (existingWord) {
      return res.status(400).json({ message: 'Bu kelime zaten eklenmiş' });
    }

    // Yeni kelimeyi ekleme
    const newWord = {
      word: word.trim(),
      mean_tr: mean_tr.trim(),
      example_en: example_en.trim(),
      example_tr: example_tr.trim(),
      level: level.trim(),
    };

    user.wordBox.push(newWord);
    await user.save();

    res
      .status(201)
      .json({ message: 'Kelime başarıyla eklendi', wordBox: user.wordBox });
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası', error: error.message });
  }
};

// WordBox'tan kelime silme
export const removeFromWordBox = async (req, res) => {
  try {
    const { word } = req.params;

    if (!word) {
      return res.status(400).json({
        message: 'Eksik bilgi',
        details: 'Silinecek kelimenin belirtilmesi gerekir',
      });
    }

    // Kullanıcıyı bulma
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    // Kelimeyi kontrol etme
    const normalizedWord = word.trim();
    const wordExists = user.wordBox.some(
      (item) => item.word === normalizedWord
    );

    if (!wordExists) {
      return res.status(404).json({
        message: 'Kelime bulunamadı',
        details: `"${normalizedWord}" kelimesi kullanıcının kelime kutusunda bulunamadı`,
      });
    }

    // Kelimeyi silme
    user.wordBox = user.wordBox.filter((item) => item.word !== normalizedWord);
    await user.save();

    res.json({
      message: 'Kelime başarıyla silindi',
      deletedWord: normalizedWord,
      wordBox: user.wordBox,
    });
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası', error: error.message });
  }
};

// WordBox'ı listemele
export const getWordBox = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('wordBox');
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    res.json(user.wordBox);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası', error: error.message });
  }
};
