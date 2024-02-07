import React, { useState } from "react";
import Logo from "../../../public/skate_circle.png";
import { useAppContext } from "../../Context/AppContext";
import Axios from "axios";


function Verification() {
    const [code, setCode] = useState("");

    const {
        Verify_id,
        Verify_email,
        Verify_FirstName,
        Verify_LastName,
        Verify_Password,
    } = useAppContext();
    const handleChange = (e) => {
        const { value } = e.target;
        // Ensure the entered value is only numeric and has a maximum length of 6
        if (/^\d{0,6}$/.test(value)) {
            setCode(value);
        }
    };

    const handleSubmit = async () => {
        // console.log("Sending code to server:", code);
        // console.log("Sending user id to server:", Verify_id);
        let response = await Axios.post(
            "http://localhost:3000/VerifyAccount",
            {
                Code : code,
                userId: Verify_id,
            },
            {
                withCredentials: true,
                validateStatus: () => true,
            }
        );
        console.log(response);
        // Reset the code after submission (optional)
        setCode("");
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <img src={Logo} alt="Skate Logo" className="mt-8 w-[140px]" />
            <div className=" font-bold mb-4 text-xl text-green">
                Skate Verification
            </div>

            <div className="mb-4">
                Enter the 6-digit code we sent to you in email
            </div>
            <input
                type="text"
                value={code}
                onChange={handleChange}
                className="form-control border border-gray-300 rounded w-24 h-12 text-center mb-4"
                maxLength={6}
            />
            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white bg-green px-4 py-2 rounded disabled:opacity-50"
                disabled={code.length !== 6}
            >
                Submit
            </button>
            <div className="mt-8 color-gray text-sm">
                Didn’t receive verification code?
            </div>
            <div className=" text-center text-gray underline cursor-pointer text-sm">
                resend it
            </div>
        </div>
    );
}

export default Verification;
