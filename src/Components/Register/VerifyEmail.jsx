import React, { useState } from "react";
import Logo from "../../../public/skate_circle.png";
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Formate_Date } from "../../Logic/Formate_Date";

function Verification({
    Verify_id,
    Verify_email,
    Verify_Password,
    rigester_Date,
}) {
    const [show_not_finished, setShow_not_finished] = useState(false);
    function open_not_finished() {
        setShow_not_finished(true);
    }
    const [code, setCode] = useState("");
    const Navigate = useNavigate();
    const handleChange = (e) => {
        const { value } = e.target;
        // Ensure the entered value is only numeric and has a maximum length of 6
        if (/^\d{0,6}$/.test(value)) {
            setCode(value);
        }
    };

    const handleSubmit = async () => {
        
        let response = await Axios.post(
            "http://localhost:3000/VerifyAccount",
            {
                Code: code,
                userId: Verify_id,
            },
            {
                withCredentials: true,
                validateStatus: () => true,
            }
        );

        if (response.status === 200) {
            Swal.fire("Done!", "Email Verified Successfully", "success");
            try {
                let response = await Axios.post(
                    "http://localhost:3000/Login",
                    {
                        Email: Verify_email,
                        Password: Verify_Password,
                    },
                    {
                        withCredentials: true,
                        validateStatus: () => true,
                    }
                );
                if (response.status === 200) {
                    console.log("Done!", "Logged in Successfully", "success");
                    Navigate("/");
                } else if (response.status === 401) {
                    console.log(response.data.error);
                    Navigate("/Login");
                } else if (response.status === 409) {
                    console.log(response.data.error);
                    Navigate("/Login");
                } else if (response.status === 500) {
                    console.log(response.data.error);
                    Navigate("/Login");
                } else if (response.status === 429) {
                    console.log("Too many requests");
                    Swal.fire(
                        "Error!",
                        `Too many requests ,try again latter\n  ${response.data.error}`,
                        "error"
                    );
                } else {
                    console.log(response.data.error);
                    Navigate("/Login");
                }
            } catch (error) {
                console.error("Error during Login:", error.message);
            }
        } else if (response.status === 401) {
            Swal.fire("Error!", "Invalid Code", "error");
        } else if (response.status === 500) {
            Swal.fire("Error!", "Internal Server Error", "error");
        } else if (response.status === 429) {
            console.log("Too many requests");
            Swal.fire(
                "Error!",
                `Too many requests ,try again latter\n  ${response.data.error}`,
                "error"
            );
        } else {
            Swal.fire("Error!", "Something Went Wrong", "error");
        }
        console.log(response);
        // Reset the code after submission (optional)
        setCode("");
    };
    const Sended_Date = Formate_Date(rigester_Date);
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={Logo} alt="Skate Logo" className="mt-8 w-[140px]" />
            <div className=" font-bold mb-4 text-xl text-green">
                Skate Verification
            </div>
            <div className=" mb-8">
                <div className="mb-4">
                    Enter the 6-digit code we sent to you in email
                </div>
                <div className=" text-gray text-sm">
                    {" "}
                    Message Sended at : {Sended_Date}{" "}
                </div>
                <div className=" text-gray text-sm">
                    {" "}
                    your Email : {Verify_email}{" "}
                </div>
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
            <div
                className=" text-center text-gray underline cursor-pointer text-sm"
                onClick={open_not_finished}
            >
                resend it
            </div>
            {show_not_finished && (
                <div className="mt-4 bg-red-500 opacity-70  p-4 rounded-2xl text-white">
                    <div>Sorry we did not finished this part yet </div>
                </div>
            )}
        </div>
    );
}

export default Verification;
