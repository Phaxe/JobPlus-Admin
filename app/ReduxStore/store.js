// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice';
import profileReducer from './Slices/profileSlice';
import applicantsReducer from "./Slices/applicantSlice"
import jobsReducer from "./Slices/jobsSlice"
import inputTypesSliceReducer from "./Slices/inputsSlices/inputTypeSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    applicants: applicantsReducer,
    jobs: jobsReducer,
    inputTypes: inputTypesSliceReducer
  },
});

export default store;
