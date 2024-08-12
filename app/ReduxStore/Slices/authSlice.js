import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './apiService';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await api.post('api/company/auth/signin', credentials);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
    refreshToken: null,
    expiredAt: null,
    isLoggedIn: typeof window !== 'undefined' ? !!localStorage.getItem('token') : false,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.token = null;
      state.refreshToken = null;
      state.expiredAt = null;
      state.isLoggedIn = false;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        const { token, refresh_token, expired_at } = action.payload.data.data;
        state.token = token;
        state.refreshToken = refresh_token;
        state.expiredAt = expired_at;
        state.isLoggedIn = true;
        localStorage.setItem('token', token);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
