// axios.js
import Axios from "axios";
import { setTokens } from "./authSlice"; // Update the path to your auth slice

const axiosInstance = Axios.create({
    baseURL: "http://localhost:3000", // Replace with your API base URL
    withCredentials: true, // Include cookies in requests
});

// Add an interceptor to handle token refresh
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If the error is due to an expired access token
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Trigger a refresh token request
                const refreshResponse = await axiosInstance.get("/Refresh", {});

                // Update the access token in the store
                setTokens(refreshResponse.data);

                // Retry the original request with the new access token
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                // Handle refresh error (e.g., redirect to login)
                console.error("Refresh token request failed:", refreshError);
                // You may want to redirect to the login page or handle the error in another way
                throw refreshError; // Re-throw the error to handle it further in the application
            }
        }

        // Pass the error along if not related to token refresh
        return Promise.reject(error);
    }
);

export default axiosInstance;
