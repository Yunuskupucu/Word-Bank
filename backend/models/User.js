import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  wordBox: [{ type: String }], // Kullanıcının işaretlediği kelimeler burada tutulur
});

const User = mongoose.model('User', userSchema);

export default mongoose.model('User', userSchema);
