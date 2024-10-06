import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './apiService';


export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async ({locale,page}, { getState }) => {
  const { auth } = getState();
  const response = await api.get(`/api/admin/jobs?page=${page}`, {
    headers: {
      Authorization: `Bearer ${auth.token}`,
      'Accept-Language': locale,
    },
  });
  return response.data;
});
export const fetchAllJobs = createAsyncThunk('jobs/fetchAllJobs', async ( { getState }) => {
  const { auth } = getState();
  const response = await api.get(`/api/company/jobs`, {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  });
  console.log('Fetched jobs data:', response.data)
  return response.data;
});
export const fetchJobsID = createAsyncThunk('jobs/fetchJobsID', async ({ locale, id }, { getState }) => {
  const { auth } = getState();
  const response = await api.get(`/api/company/jobs/${id}`, {
    headers: {
      Authorization: `Bearer ${auth.token}`,
      'Accept-Language': locale,
    },
  });
  console.log('Fetched jobs data:', response.data);
  return response.data;
});

export const createJob = createAsyncThunk(
  'jobs/createJob',
  async (jobData, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await api.post('/api/company/jobs', jobData, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        // Reject with the specific error message from the backend
        return rejectWithValue(error.response.data.message);
      }
      // Default to a generic error message if none is available
      return rejectWithValue('An unknown error occurred');
    }
  }
);

export const updateJob = createAsyncThunk('jobs/updateJob', async ({ id, jobData }, { getState }) => {
  const { auth } = getState();
  const url = `/api/company/jobs/${id}`;
  
  
  try {
    const response = await api.put(url, jobData, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // Reject with the specific error message from the backend
      return rejectWithValue(error.response.data.message);
    }
    // Default to a generic error message if none is available
    return rejectWithValue('An unknown error occurred');
  }
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
// Change job status
export const changeJobStatus = createAsyncThunk(
  'jobs/changeJobStatus',
  async ({ id, status }, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await api.put(`/api/company/jobs/status/${id}`, { status }, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

// Change job visibility
export const changeJobVisibility = createAsyncThunk(
  'jobs/changeJobVisibility',
  async ({ id, visibility }, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await api.put(`/api/company/jobs/visibility/${id}`, { visibility }, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    data: [],
    allJobs: [],
    pagination: {},
    loading: false,
    error: null,
    errorMessage: null,
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
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAllJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.allJobs = action.payload.data;
      })
      .addCase(fetchAllJobs.rejected, (state, action) => {
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
    
        // Ensure state.data is an array
        if (!Array.isArray(state.data)) {
            state.data = [];
        }
    
        // Assuming action.payload.data contains the new job object
        // Make sure to push the correct structure
        if (action.payload && action.payload.data) {
            state.data.push(action.payload.data);
        } else {
            console.error("Unexpected payload structure:", action.payload);
        }
    })
      .addCase(createJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.errorMessage = action.payload; // Store detailed error message
      })
      .addCase(updateJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // .addCase(updateJob.fulfilled, (state, action) => {
      //   state.loading = false;
      //   const index = state.data.findIndex(job => job.id === action.payload.data.id);
      //   if (index !== -1) {
      //     state.data[index] = action.payload.data;
      //   }
      // })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.loading = false;
    
        // Ensure state.data is an array
        if (!Array.isArray(state.data)) {
            state.data = []; // Reset to an array if necessary
        }
    
        // Ensure action.payload contains the updated job
        if (action.payload && action.payload.data) {
            const index = state.data.findIndex(job => job.id === action.payload.data.id);
            if (index !== -1) {
                // Update the job at the found index
                state.data[index] = action.payload.data;
            } else {
                console.error("Job not found for update:", action.payload.data.id);
            }
        } else {
            console.error("Unexpected payload structure:", action.payload);
        }
    })
    
      .addCase(updateJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.errorMessage = action.payload;
      })
      .addCase(deleteJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.loading = false;
        state.data = Array.isArray(state.data) ? state.data.filter(job => job.id !== action.payload) : []; // Ensure data is an array
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(changeJobStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeJobStatus.fulfilled, (state, action) => {
        state.loading = false;
        if (!Array.isArray(state.data)) {
          state.data = []; // Reset to an array if state.data is not an array
        }
        const index = state.data.findIndex(job => job.id === action.payload.data.id);
        if (index !== -1) {
          state.data[index] = action.payload.data;
        }
      })
      
      .addCase(changeJobStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.errorMessage = action.payload;
      })
      .addCase(changeJobVisibility.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeJobVisibility.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.data.findIndex(job => job.id === action.payload.data.id);
        if (index !== -1) {
          state.data[index] = action.payload.data;
        }
      })
      .addCase(changeJobVisibility.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.errorMessage = action.payload;
      });
  },
});

export default jobsSlice.reducer;

