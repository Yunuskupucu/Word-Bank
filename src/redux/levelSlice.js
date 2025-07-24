import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedLevel: 'CEFR: All',
};

const levelSlice = createSlice({
  name: 'level',
  initialState,
  reducers: {
    setSelectedLevel: (state, action) => {
      state.selectedLevel = action.payload;
    },
  },
});

export const { setSelectedLevel } = levelSlice.actions;
export default levelSlice.reducer;
