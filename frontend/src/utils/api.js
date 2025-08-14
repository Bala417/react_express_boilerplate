import axios from "axios";
const BASEURL = import.meta.env.VITE_APP_BASEURL;

// Create an Axios instance
const api = axios.create({
  baseURL: `${BASEURL}`,
  withCredentials: true, // Ensures cookies (for JWT tokens) are sent
});

// Add an interceptor to check for token expiry
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response?.status === 401) {
      console.warn(error);
      console.warn("Token expired. Logging out...");
      // Remove token from storage

      window.location.href = "/"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default api;
