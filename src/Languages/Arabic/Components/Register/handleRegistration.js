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

        if (response.status == 401) {
            Swal.fire(
                "Email already exists",
                `Please try to use another Email , ${response.data.message}`,
                "error"
            );
        } else if (response.status == 200) {
            setVerifyId(response.data._id);
            set_rigester_Date(response.data.Date);
            setSucced_Register(true);
        } else if (response.status == 400) {
            Swal.fire("Error!", `${response.data.message} `, "error");
        } else if (response.status == 409) {
            Swal.fire("Error!", `${response.data.message}`, "error");
        } else if (response.status == 429) {
            Swal.fire(
                "Error!",
                `warning! you created lot of accounts in a short time ,try again latter`,
                "error"
            );
        } else if (response.status == 500) {
            Swal.fire("Error!", `Internal server error.`, "error");
        } else {
            Swal.fire(
                "Error!",
                `Something Went Wrong. Please try again `,
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
