import { configureStore } from '@reduxjs/toolkit';
import levelReducer from './levelSlice';
import savedWordsReducer from './savedWordsSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    level: levelReducer,
    savedWords: savedWordsReducer,
    user: userReducer,
  },
});
