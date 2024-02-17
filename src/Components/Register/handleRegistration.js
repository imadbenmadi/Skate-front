import Axios from "axios";
import Swal from "sweetalert2";
export async function handleRegistration(
    values,
    { setSubmitting, setSucced_Register, setVerifyId, set_rigester_Date }
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
            Swal.fire(
                "Email already exists",
                `Please try to use another Email , ${response.data.error}`,
                "error"
            );
        } else if (response.status === 200) {
            setVerifyId(response.data._id);
            set_rigester_Date(response.data.Date);
            setSucced_Register(true);
            // Swal.fire(
            //     "Done!",
            //     "Your account has been created Successfully",
            //     "success"
            // );
        } else if (response.status === 400) {
            Swal.fire(
                "Error!",
                `Internal server error.${response.data.error}`,
                "error"
            );
        } else if (response.status === 409) {
            Swal.fire(
                "Error!",
                `Missing Data ,  ${response.data.error}`,
                "error"
            );
        } else if (response.status === 429) {
            Swal.fire(
                "Error!",
                `warning! you created lot of accounts in 3mins , ${response.data.error}`,
                "error"
            );
        } else if (response.status === 500) {
            Swal.fire(
                "Error!",
                `Internal server error.${response.data.error}`,
                "error"
            );
        } else {
            Swal.fire(
                "Error!",
                `Something Went Wrong. Please try again , ${response.data.error}`,
                "error"
            );
        }
    } catch (error) {
        Swal.fire(
            "Error!",
            `Something Went Wrong. Please try again , ${error.message}`,
            "error"
        );
    }

    setSubmitting(false);
}
