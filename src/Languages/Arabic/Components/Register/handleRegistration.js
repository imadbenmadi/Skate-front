import Axios from "axios";
import Swal from "sweetalert2";
export async function handleRegistration(
    values,
    { setSubmitting, setSucced_Register, setVerifyId, set_rigester_Date }
) {
    try {
        let response = await Axios.post(
            "https://backend.skate.dz/Register",
            values,
            {
                withCredentials: true,
                validateStatus: () => true,
            }
        );

        if (response.status == 401) {
            Swal.fire(
                "البريد الإلكتروني مستعمل من قبل!",
                `يرجى محاولة استخدام بريد إلكتروني آخر. ${response.data.message}`,
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
            Swal.fire("خطأ!", `خطأ داخلي في الخادم".`, "error");
        } else {
            Swal.fire("خطأ!", `حدث خطأ ما. يرجى المحاولة" `, "error");
        }
    } catch (error) {
        Swal.fire(
            "خطأ!",
            `حدث خطأ ما. يرجى المحاولة" , ${error.message}`,
            "error"
        );
    }

    setSubmitting(false);
}
