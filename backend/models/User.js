import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema(
  {
    word: { type: String, required: true },
    mean_tr: { type: String, required: true },
    example_en: { type: String, required: true },
    example_tr: { type: String, required: true },
    level: { type: String, required: true },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  wordBox: [wordSchema],
});

const User = mongoose.model('User', userSchema);
export default User;
