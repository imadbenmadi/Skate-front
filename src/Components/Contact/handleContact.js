import Axios from "axios";
import Swal from "sweetalert2";

export async function handleContact(values, { setSubmitting, onSuccess }) {
    try {
        let response = await Axios.post(
            "http://localhost:3000/Contact",
            values,
            {
                withCredentials: true,
                validateStatus: () => true,
            }
        );

        if (response.status == 200) {
            onSuccess();
            Swal.fire(
                "Done!",
                "Your Message has been Sended Successfully",
                "success"
            );
        } else if (response.status == 500) {
            Swal.fire("Error!", `Internal server error. `, "error");
        } else if (response.status == 409) {
            Swal.fire("Error!", `Missing Data  `);
        } else if (response.status == 429) {
            Swal.fire(
                "Error!",
                `Too many requests ,try again latter\n  `,
                "error"
            );
        } else {
            Swal.fire(
                "Error!",
                `Something Went Wrong. Please try again , `,
                "error"
            );
        }
    } catch (error) {
        Swal.fire("Error!", `Something Went Wrong. Please try again `, "error");
    }

    setSubmitting(false);
}
