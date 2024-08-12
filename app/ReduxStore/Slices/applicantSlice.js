// redux/slices/applicantsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './apiService';

// Async thunk for fetching applicants
export const fetchApplicants = createAsyncThunk('applicants/fetchApplicants', async (_, { getState }) => {
  const { auth } = getState();
  const token = auth.token; // Extract the token from the auth slice
  
  // Ensure token is present
  if (!token) {
    throw new Error('No token available');
  }
  console.log('Fetching applicants with token:', token);
  // Set the Authorization header
  const response = await api.get('/api/company/applications/applicants', {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  });
  console.log('API Response:', response.data); a
  return response.data;
});

const applicantsSlice = createSlice({
  name: 'applicants',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Add any additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplicants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApplicants.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchApplicants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default applicantsSlice.reducer;
