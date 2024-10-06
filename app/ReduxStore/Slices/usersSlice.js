import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './apiService';

  export const fetchUsers = createAsyncThunk('jobs/fetchUsers', async ({locale,page}, { getState }) => {
    const { auth } = getState();
    const response = await api.get(`/api/admin/users?page=${page}`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Accept-Language': locale,
      },
    });
    return response.data;
  });
  
const userSlice = createSlice({
    name: 'users',
    initialState: {
      data: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload.data;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
    },
  });
  
  export default userSlice.reducer;
  