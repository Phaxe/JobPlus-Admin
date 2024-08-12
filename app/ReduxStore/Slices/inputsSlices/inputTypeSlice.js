import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../apiService";

export const fetchDisabilityTypes = createAsyncThunk(
  "inputTypes/fetchDisabilityTypes",
  async (_, { getState }) => {
    const { auth } = getState();
    const response = await api.get("/api/v2/settings/disability-types", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });

    return response.data;
  }
);
export const fetchStudyMajors = createAsyncThunk(
  "inputTypes/fetchStudyMajors",
  async (_, { getState }) => {
    const { auth } = getState();
    const response = await api.get("/api/v2/settings/study-majors", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    return response.data;
  }
);
export const fetchStudyFields = createAsyncThunk(
  "inputTypes/fetchStudyFields",
  async (_, { getState }) => {
    const { auth } = getState();
    const response = await api.get("/api/v2/settings/qualifications", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    return response.data;
  }
);
export const fetchContract = createAsyncThunk(
  "inputTypes/fetchContract",
  async (_, { getState }) => {
    const { auth } = getState();
    const response = await api.get("/api/v2/settings/contract-types", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    console.log("Fetched jobs data:", response.data);
    return response.data;
  }
);
export const fetchLanguages = createAsyncThunk(
  "inputTypes/fetchLanguages",
  async (_, { getState }) => {
    const { auth } = getState();
    const response = await api.get("/api/v2/settings/languages", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    console.log("Fetched jobs data:", response.data);
    return response.data;
  }
);
export const fetchSkills = createAsyncThunk(
  "inputTypes/fetchSkills",
  async (_, { getState }) => {
    const { auth } = getState();
    const response = await api.get("/api/v2/settings/skills", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    console.log("Fetched jobs data:", response.data);
    return response.data;
  }
);
export const fetchCities = createAsyncThunk(
  "inputTypes/fetchCities",
  async (_, { getState }) => {
    const { auth } = getState();
    const response = await api.get("/api/v2/settings/cities", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    console.log("Fetched jobs data:", response.data);
    return response.data;
  }
);
export const fetchCountryCodes = createAsyncThunk(
  "inputTypes/fetchCountryCodes",
  async (_, { getState }) => {
    const { auth } = getState();
    const response = await api.get("/api/v2/settings/country-codes", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    console.log("Fetched jobs data:", response.data);
    return response.data;
  }
);
export const fetchCategories = createAsyncThunk(
  "inputTypes/fetchCategories",
  async (_, { getState }) => {
    const { auth } = getState();
    const response = await api.get("/api/v2/categories", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    console.log("Fetched jobs data:", response.data);
    return response.data;
  }
);
export const fetchWorkTimes = createAsyncThunk(
  "inputTypes/fetchWorkTimes",
  async (_, { getState }) => {
    const { auth } = getState();
    const response = await api.get("/api/company/settings/work-times", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    console.log("Fetched jobs data:", response.data);
    return response.data;
  }
);

// Create the slice
const inputTypesSlice = createSlice({
  name: "inputTypes",
  initialState: {
    disabilityTypes: [],
    studyMajors: [],
    studyFields: [],
    contractTypes: [],
    languagesTypes: [],
    skillsTypes: [],
    citiesTypes: [],
    countryCodes: [],
    categoriesTypes: [],
    workTimes:[],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDisabilityTypes.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(fetchDisabilityTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.disabilityTypes = action.payload;
      })
      .addCase(fetchDisabilityTypes.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchStudyMajors.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(fetchStudyMajors.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.studyMajors = action.payload;
      })
      .addCase(fetchStudyMajors.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchStudyFields.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(fetchStudyFields.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.studyFields = action.payload;
      })
      .addCase(fetchStudyFields.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchContract.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(fetchContract.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.contractTypes = action.payload;
      })
      .addCase(fetchContract.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchLanguages.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(fetchLanguages.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.languagesTypes = action.payload;
      })
      .addCase(fetchLanguages.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchSkills.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.skillsTypes = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.citiesTypes = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCountryCodes.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(fetchCountryCodes.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.countryCodes = action.payload;
      })
      .addCase(fetchCountryCodes.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.categoriesTypes = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchWorkTimes.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(fetchWorkTimes.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        state.workTimes = action.payload;
      })
      .addCase(fetchWorkTimes.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default inputTypesSlice.reducer;
