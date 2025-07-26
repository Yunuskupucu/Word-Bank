import { configureStore } from '@reduxjs/toolkit';
import levelReducer from './levelSlice';
import savedWordsReducer from './savedWordsSlice';
export const store = configureStore({
  reducer: { level: levelReducer, savedWords: savedWordsReducer },
});
