import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  isLoading: false,
  error: '',
};

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {});
export const fetchLogout = createAsyncThunk('auth/fetchLogout', async () => {});

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [checkAuth.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
    },
    [checkAuth.pending]: (state, action) => {
      state.isLoading = true;
    },
    [checkAuth.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = 'Auth Error';
    },
    [fetchLogout.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
    },
    [fetchLogout.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchLogout.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = 'Auth Error';
    },
  },
});

export default auth.reducer;
