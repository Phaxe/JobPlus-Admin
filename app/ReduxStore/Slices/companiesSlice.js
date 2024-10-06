import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './apiService';

  export const fetchCompanies = createAsyncThunk('jobs/fetchCompanies', async ({locale,page}, { getState }) => {
    const { auth } = getState();
    const response = await api.get(`/api/admin/companies?page=${page}`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Accept-Language': locale,
      },
    });
    return response.data;
  });
  
const companiesSlice = createSlice({
    name: 'companies',
    initialState: {
      data: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCompanies.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCompanies.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload.data;
        })
        .addCase(fetchCompanies.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
    },
  });
  
  export default companiesSlice.reducer;
  