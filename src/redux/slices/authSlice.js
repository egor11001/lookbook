import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'UAuth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload;
      state.error = '';
    },

    logOut(state) {
      state.user = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectUser = (state) => state.auth.user;
