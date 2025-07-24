import { configureStore } from '@reduxjs/toolkit';
import levelReducer from './levelSlice';
export const store = configureStore({
  reducer: { level: levelReducer },
});
