// slices/profileSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './apiService';

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async (_, { getState }) => {
  const { auth } = getState();
  const response = await api.get('/api/company/dashboard/profile', {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  });

  return response.data;
});

// Update profile
export const updateProfile = createAsyncThunk('profile/updateProfile', async (profileData, { getState }) => {
    const { auth } = getState();
    const response = await api.put('api/company/dashboard/profile', profileData, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    return response.data;
  });
  
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      // Update profile
    builder
    .addCase(updateProfile.pending, (state) => {
      state.updateStatus = 'loading';
    })
    .addCase(updateProfile.fulfilled, (state, action) => {
      state.updateStatus = 'succeeded';
      state.data = action.payload.data; // Update the profile data
    })
    .addCase(updateProfile.rejected, (state, action) => {
      state.updateStatus = 'failed';
      state.error = action.error.message;
    });
  },
});


export default profileSlice.reducer;
