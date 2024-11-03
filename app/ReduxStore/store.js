// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice';
import profileReducer from './Slices/profileSlice';
import applicantsReducer from "./Slices/applicantSlice"
import jobsReducer from "./Slices/jobsSlice"
import companiesReducer from "./Slices/companiesSlice"
import userReducer from "./Slices/usersSlice"
import inputTypesSliceReducer from "./Slices/inputsSlices/inputTypeSlice"
import applicantsByIdReducer from "./Slices/applicantByIdSlice"
const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    applicants: applicantsReducer,
    jobs: jobsReducer,
    companies: companiesReducer,
    users : userReducer,
    inputTypes: inputTypesSliceReducer,
    applicantsById: applicantsByIdReducer,
  },
});

export default store;

