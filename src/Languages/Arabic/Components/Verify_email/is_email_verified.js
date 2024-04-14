import axios from "axios";
export const fetchEmailVerificationStatus = async (_id) => {
    try {
        let response = await axios.post(
            "http://localhost:3000/is_email_verified",
            {
                userId: _id,
            },
            {
                withCredentials: true,
                validateStatus: () => true,
            }
        );
        return response.data;
    } catch (error) {
        return error;
    }
};
