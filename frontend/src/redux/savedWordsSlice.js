import { createSlice } from '@reduxjs/toolkit';

const savedWordsSlice = createSlice({
  name: 'savedWords',
  initialState: {
    words: [],
  },

  reducers: {
    addWord: (state, action) => {
      if (!state.words.find((word) => word.word === action.payload.word)) {
        state.words.push(action.payload);
      }
    },
    removeWord: (state, action) => {
      state.words = state.words.filter(
        (word) => word.word !== action.payload.word
      );
    },
  },
});

export const { addWord, removeWord } = savedWordsSlice.actions;
export default savedWordsSlice.reducer;
