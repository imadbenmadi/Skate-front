import Axios from "axios";
import Swal from "sweetalert2";

export async function handleContact(values, { setSubmitting, onSuccess }) {
    try {
        let response = await Axios.post(
            "https://backend.skate.dz/Contact",
            values,
            {
                withCredentials: true,
                validateStatus: () => true,
            }
        );

        if (response.status == 200) {
            onSuccess();
            Swal.fire("تم", " تم إرسال رسالتك بنجاح", "success");
        } else if (response.status == 500) {
            Swal.fire("خطأ", `خطأ داخلي في الخادم `, "error");
        } else if (response.status == 409) {
            Swal.fire("خطأ", `بيانات مفقودة `);
        } else if (response.status == 429) {
            Swal.fire(
                "خطأ",
                ` الكثير من الطلبات، يرجى المحاولة مرة أخرى  `,
                "error"
            );
        } else {
            Swal.fire(
                "خطأ",
                `حدث خطأ ما. يرجى المحاولة مرة أخرى  `,
                "error"
            );
        }
    } catch (error) {
        console.log(error);
        Swal.fire("خطأ", `حدث خطأ ما. يرجى المحاولة مرة أخرى `, "error");
    }

    setSubmitting(false);
}
