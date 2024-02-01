import Axios from "axios";
import Swal from "sweetalert2";
export async function handleLogin(values, setSucceed_Login, { setSubmitting }) {
    try {
        let response = await Axios.post("http://localhost:3000/Login", values, {
            withCredentials: true,

            validateStatus: () => true,
        });

        if (response.status === 200) {
            Swal.fire("Done!", "Logged in Successfully", "success");
            // setSucceed_Login(true);
        } else if (response.status === 401) {
            console.log(response.data.error);
            Swal.fire(
                "Email already exists",
                `Please try to use another Email , ${response.data.error}`,
                "error"
            );
        } else if (response.status === 409) {
            console.log(response.data.error);
            Swal.fire(
                "Error!",
                `Missing Data ,  ${response.data.error}`,
                "error"
            );
        } else if (response.status === 500) {
            console.log(response.data.error);
            Swal.fire(
                "Error!",
                `Internal Server Error ,  ${response.data.error}`,
                "error"
            );
        } else {
            console.log(response.data.error);
            Swal.fire(
                "Error!",
                `Something Went Wrong ,${response.data.error}`,
                "error"
            );
        }
    } catch (error) {
        console.error("Error during registration:", error.message);
        Swal.fire("Error!", `Something Went Wrong ,${error.message}`, "error");
    }

    setSubmitting(false);
}
