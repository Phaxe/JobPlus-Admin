// import usePostUser from "@/app/(hooks)/CompanyUserPost/usePostUser";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Thunk for user sign-up

// export const registerCompany = createAsyncThunk('profile/registerCompany', async (formData, { getState }) => {
//   const { auth } = getState();
//   const response = await api.post('/api/company/auth/signup', formData, {
//     headers: {
//       Authorization: `Bearer ${auth.token}`,
//     },
//   });
//   return response.data;
// });

// // Thunk for user login
// export const loginUser = createAsyncThunk(
//   "user/login",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "https://testing.jobplus.sa/api/v2/auth/login",
//         formData,
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );
//       const { token } = response.data;
//       localStorage.setItem("jwt", token); // Store JWT in localStorage
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     user: null,
//     loading: false,
//     error: null,
//     isAuthenticated: false,
//   },
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem("jwt"); // Remove JWT from localStorage
//       state.user = null;
//       state.isAuthenticated = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerCompany.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(registerCompany.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.user = action.payload.user;
//       })
//       .addCase(registerCompany.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = userSlice.actions;
// export default userSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from './apiService';
// Thunk for company registration
export const registerCompany = createAsyncThunk(
  'user/registerCompany',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post('api/company/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("jwt");
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerCompany.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(registerCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
