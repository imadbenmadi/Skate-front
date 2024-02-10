import React from "react";
import { useAppContext } from "../../Context/AppContext";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Confirm_to_send({ setConfirm_to_send_state }) {
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
            if (response.status === 200) {
                console.log("Email sent successfully");
                setloading_toSend(false);
                setConfirm_to_send_state(true);
            } else if (response.status === 429) {
                console.error("Error sending email");
                Swal.fire(
                    "Error!",
                    "Error sending email , Too many Requests",
                    "error"
                );
                setloading_toSend(false);
            }
            else if (response.status === 401) {
                console.error("Error sending email");
                Swal.fire(
                    "Error!",
                    "Error sending email , Unauthorized",
                    "error"
                );
                setloading_toSend(flase);
            }
        } catch (error) {
            console.error("Error sending email:", error);
            Swal.fire("Error!", "Error sending email", "error");
            setloading_toSend(false);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center text-black_text">
            <div className="">
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
                {loading_toSend ? "Sending..." : "Send Email"}
            </button>
        </div>
    );
}

export default Confirm_to_send;