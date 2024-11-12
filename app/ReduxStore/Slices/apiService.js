// // api/apiService.js
import axios from 'axios';
import { stripLocalePrefix } from '../../utils/stripLocalePrefix';

// const api = axios.create({
//   baseURL: process.env.BASE_URL, // Your base URL without locale prefix
// });

// // Intercept requests to remove locale prefix
// api.interceptors.request.use((config) => {
//   if (config.url) {
//     config.url = stripLocalePrefix(config.url); // Remove locale prefix from URL
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// export default api;

const api = axios.create({
    baseURL: 'https://api.jobplus.sa/'  // Your base URL without locale prefix
  });
  
  api.interceptors.request.use((config) => {
    if (config.url) {
      config.url = stripLocalePrefix(config.url); // Strip locale prefix
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  
  export default api;