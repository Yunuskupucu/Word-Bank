import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    setUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    setUserError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.currentUser = null;
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setUserStart, setUserSuccess, setUserError, logout } =
  userSlice.actions;
export default userSlice.reducer;
