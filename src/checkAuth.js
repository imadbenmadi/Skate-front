import axios from "axios";

export async function checkAuth() {
    try {
        const response = await axios.get("http://localhost:3000/check_Auth", {
            withCredentials: true,
            validateStatus: () => true,
        });

        if (response.status === 200) {
            return { status: "success", message: "Access token is valid" };
        } else if (response.status === 401) {
            // Access token expired, try refreshing it
            const refreshResponse = await axios.post(
                "http://localhost:3000/Refresh",
                {},
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (refreshResponse.data && refreshResponse.data.accessToken) {
                return {
                    status: "success",
                    message: "Access token refreshed successfully",
                };
            } else {
                return {
                    status: "error",
                    message: "Failed to refresh access token",
                };
            }
        } else {
            return {
                status: "error",
                message: "Unexpected response from server",
            };
        }
    } catch (error) {
        if (error.response) {
            return {
                status: "error",
                message: `Server responded with status ${error.response.status}`,
            };
        } else if (error.request) {
            return {
                status: "error",
                message: "No response received from the server",
            };
        } else {
            return { status: "error", message: "An unexpected error occurred" };
        }
    }
}
