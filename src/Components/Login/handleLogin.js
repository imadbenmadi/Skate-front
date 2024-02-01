import Axios from "axios";
import Swal from "sweetalert2";
export async function handleLogin(
    values,
    setSucceed,
    { setSubmitting }
) {
    try {
        let response = await Axios.post(
            "http://localhost:3000/Register",
            values,
            {
                withCredentials: true,

                validateStatus: () => true,
            }
        );

        if (response.status === 401) {
            console.log(response.data.error);
            Swal.fire(
                "Email already exists",
                `Please try to use another Email , ${response.data.error}`,
                "error"
            );
        } else if (response.status === 200) {
            Swal.fire(
                "Done!",
                "Your account has been created Successfully",
                "success"
            );
            setSucceed(true);
        } else if (response.status === 400) {
            console.log(response.data.error);
            Swal.fire(
                "Error!",
                `Internal server error.${response.data.error}`,
                "error"
            );
        } else if (response.status === 409) {
            console.log(response.data.error);
            Swal.fire(
                "Error!",
                `Missing Data ,  ${response.data.error}`,
                "error"
            );
        } else {
            console.log(response.data.error);
            Swal.fire(
                "Error!",
                `Something Went Wrong. Please try again , ${response.data.error}`,
                "error"
            );
        }
    } catch (error) {
        console.error("Error during registration:", error.message);
        Swal.fire(
            "Error!",
            `Something Went Wrong. Please try again , ${error.message}`,
            "error"
        );
    }

    setSubmitting(false);
}
