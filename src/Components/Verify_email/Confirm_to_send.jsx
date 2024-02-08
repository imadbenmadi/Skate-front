import React from "react";
import { useAppContext } from "../../Context/AppContext";

function Confirm_to_send({ setConfirm_to_send_state }) {
    const { Email, FirstName } = useAppContext();

    return (
        <div className="flex flex-col items-center justify-center text-black_text">
            <div className="text-lg font-bold mb-4 text-green">
                Welcome to the Verification Page
            </div>
            <div className="mb-2 text-gray">Your Name: {FirstName}</div>
            <div className="mb-2 text-gray">Your Email: {Email}</div>
            <div className="mb-4">
                Confirming your email will allow you to use the website freely.
            </div>
            <div>
                We will send you a code to your email. Please type it below.
            </div>
            <button
                className="mt-4 bg-green text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setConfirm_to_send_state(true)}
            >
                Send Email
            </button>
        </div>
    );
}

export default Confirm_to_send;
