import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./apiService";

// Async thunk for fetching applicants by ID
export const fetchApplicantId = createAsyncThunk(
  "jobs/fetchApplicantId",
  async ({  APPLICATION_ID, locale }, { getState }) => {
    const { auth } = getState();
    const response = await api.get(
      `/api/admin/applications/applicants/cv/${APPLICATION_ID}`,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
          "Accept-Language": locale,
        },
      }
    );
    console.log("Fetched applicant data:", response.data);
    return response.data; // Assuming the API returns applicant data here
  }
);
export const fetchApplicantInteview = createAsyncThunk(
  "jobs/fetchApplicantInteview",
  async ({ CVid }, { getState }) => {
    const { auth } = getState();
    const response = await api.get(
      `/api/company/applications/applicants/cv/${CVid}`,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    console.log("Fetched applicant data:", response.data);
    return response.data; // Assuming the API returns applicant data here
  }
);

// Async thunk for canceling interview
export const fetchCancelInterview = createAsyncThunk(
  "jobs/fetchCancelInterview",
  async (id, { getState }) => {
    const { auth } = getState();
    const response = await api.put(
      `/api/company/interviews/${id}/cancel`,
      {},
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
          "Accept-Language": locale,
        },
      }
    );
    console.log("Cancel interview response:", response.data);
    return response.data; // Assuming the API returns some success message or status
  }
);
export const fetchApplicantCv = createAsyncThunk(
  "jobs/fetchApplicantCv",
  async ({ id, locale }, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const response = await api.post(
        `/api/company/applications/applicants/generate-cv`,
        { id }, // Assuming you need to send `id` in the body
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
            "Accept-Language": locale,
          },
        }
      );
      console.log("fetch CV:", response.data);
      return response.data; // Assuming the API returns the CV data
    } catch (error) {
      console.error("Error fetching CV:", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
export const acceptApplicant = createAsyncThunk(
  "jobs/acceptApplicant",
  async ({ id, status }, { getState }) => {
    const { auth } = getState();
    const response = await api.put(
      `/api/company/applications/applicants/${id}`,
      { status }, // Sending the status in the body
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
          Accept: "application/json",
        },
      }
    );
    console.log("Accept applicant response:", response.data);
    return response.data;
  }
);

const applicantsbyIdSlice = createSlice({
  name: "applicantsId",
  initialState: {
    data: null,
    loading: false,
    error: null,
    cvUrl: {},
  },
  reducers: {
    // Add any additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      // Fetch applicant by ID
      .addCase(fetchApplicantId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApplicantId.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data; // Store the fetched applicant data
      })
      .addCase(fetchApplicantId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchApplicantCv.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.cv = null; // Reset CV data when a new fetch is initiated
      })
      .addCase(fetchApplicantCv.fulfilled, (state, action) => {
        state.loading = false;
        state.cvUrl = action.payload.url; 
      })
      .addCase(fetchApplicantCv.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch applicant CV"; // Store the error message
      })
      .addCase(fetchApplicantInteview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApplicantInteview.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data; // Store the fetched applicant data
      })
      .addCase(fetchApplicantInteview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(acceptApplicant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(acceptApplicant.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data; // Store the fetched applicant data
      })
      .addCase(acceptApplicant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Cancel interview
      .addCase(fetchCancelInterview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCancelInterview.fulfilled, (state, action) => {
        state.loading = false;
        // Check the structure of the response and store relevant data
        if (action.payload.success) {
          // If the response is simply a success message
          state.data = { ...state.data, interviewStatus: "cancelled" }; // Update relevant data if needed
        } else {
          state.error = "Unexpected response structure"; // Handle unexpected structure
        }
      })
      .addCase(fetchCancelInterview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default applicantsbyIdSlice.reducer;
