import { useAppContext } from "../../Context/AppContext";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Confirm_to_send({ setConfirm_to_send_state, startResendTimer }) {
    const [loading_toSend, setloading_toSend] = useState(false);

    const { Email, FirstName, _id } = useAppContext();
    const handle_send_email = async (userId) => {
        setloading_toSend(true);
        try {
            const response = await axios.post(
                "http://localhost:3000/Send_Verification_Email",
                {
                    userId,
                },
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status == 200) {
                setloading_toSend(false);
                startResendTimer();
                setConfirm_to_send_state(true);
            } else if (response.status == 429) {
                Swal.fire(
                    "Error!",
                    "Error sending email , Too many Requests",
                    "error"
                );
                setloading_toSend(false);
            } else if (response.status == 401) {
                Swal.fire(
                    "Error!",
                    "Error sending email , Unauthorized action",
                    "error"
                );
                setloading_toSend(false);
            } else if (response.status == 409) {
                Swal.fire("Error!", `${response.data.message}`, "error");
                setloading_toSend(false);
            } else if (response.status == 404) {
                Swal.fire("Error!", "User not found", "error");
                setloading_toSend(false);
            } else if (response.status == 400) {
                Swal.fire("Error!", `${response.data.message}`, "error");
                setloading_toSend(false);
            } else if (response.status == 500) {
                Swal.fire("Error!", "Internal Server Error", "error");
                setloading_toSend(false);
            }
        } catch (error) {
            Swal.fire("Error!", "Error sending email", "error");
            setloading_toSend(false);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center text-black_text">
            <div className=" ml-5">
                <div className="text-lg font-bold mb-4 text-green">
                    Welcome to the Verification Page
                </div>
                <div className="mb-2 text-gray">Your Name: {FirstName}</div>
                <div className="mb-2 text-gray">Your Email: {Email}</div>
                <div className="mb-4">
                    Confirming your email will allow you to use the website
                    freely.
                </div>
                <div>
                    We will send you a code to your email. Please type it below.
                </div>
            </div>

            <button
                className={`mt-4 ${
                    loading_toSend ? "bg-gray" : "bg-green"
                }  text-white px-4 py-2 rounded-md cursor-pointer`}
                onClick={() => handle_send_email(_id)}
                disabled={loading_toSend}
            >
                {loading_toSend ? "Loading..." : "Send Email"}
            </button>
        </div>
    );
}

export default Confirm_to_send;
