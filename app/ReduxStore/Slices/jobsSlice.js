import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './apiService';

// Fetch all jobs
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async (_, { getState }) => {
  const { auth } = getState();
  const response = await api.get('/api/company/jobs', {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  });
  
  return response.data;
});
export const fetchJobsID = createAsyncThunk('jobs/fetchJobsID', async (id, { getState }) => {
  const { auth } = getState();
  const response = await api.get(`/api/company/jobs/${id}`, {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  });
  console.log('Fetched jobs data:', response.data)
  return response.data;
});

// Post a new job
export const createJob = createAsyncThunk('jobs/createJob', async (jobData, { getState }) => {
  const { auth } = getState();
  const response = await api.post('/api/company/jobs', jobData, {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  });
  return response.data;
});

// Update a specific job by ID
export const updateJob = createAsyncThunk('jobs/updateJob', async ({ id, jobData }, { getState }) => {
  const { auth } = getState();
  const response = await api.put(`https://testing.jobplus.sa/api/company/jobs/${id}`, jobData, {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  });
  return response.data;
});

// Delete a specific job by ID
export const deleteJob = createAsyncThunk('jobs/deleteJob', async (id, { getState }) => {
  const { auth } = getState();
  await api.delete(`https://testing.jobplus.sa/api/company/jobs/${id}`, {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  });
  return id;
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchJobsID.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobsID.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchJobsID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload.data);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.data.findIndex(job => job.id === action.payload.data.id);
        if (index !== -1) {
          state.data[index] = action.payload.data;
        }
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter(job => job.id !== action.payload);
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
