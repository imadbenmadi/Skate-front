import React, { useState, useEffect } from "react";
import Logo from "../../../public/skate_circle.png";
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";
import Confirm_to_send from "./Confirm_to_send";
import { fetchEmailVerificationStatus } from "./is_email_verified";
import ForbiddenRoute from "../ForbiddenRoute";
import ErrorPage from "./ErrorPage";
function Verify_email() {
    const { Email, _id } = useAppContext();
    if (!Email || !_id) {
        return <ForbiddenRoute />;
    }
    const [error, setError] = useState(null);
    const [isEmailVerified, setIsEmailVerified] = useState(null);
    const [loading, setLoading] = useState(true);
    const [Confirm_to_send_state, setConfirm_to_send_state] = useState(false);
    useEffect(() => {
        const getEmailVerificationStatus = async () => {
            try {
                const response = await fetchEmailVerificationStatus(_id);
                console.log("response from verify email : ", response);
                if (response.IsEmailVerified !== null) {
                    setIsEmailVerified(response.IsEmailVerified);
                } else {
                    setError(response);
                    console.log("chopapi");
                    console.log("error in verify email : ", response);
                }
            } catch (error) {
                console.error(
                    "Error getting email verification status:",
                    error
                );
            }
            setLoading(false);
        };

        getEmailVerificationStatus();
    }, []);

    // console.log(Email, _id);
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
    useEffect(() => {}, [Confirm_to_send_state]);
    const handleSubmit = async () => {
        let response = await Axios.post(
            "http://localhost:3000/VerifyAccount",
            {
                Code: code,
                userId: _id,
            },
            {
                withCredentials: true,
                validateStatus: () => true,
            }
        );

        if (response.status === 200) {
            Swal.fire("Done!", "Email Verified Successfully", "success");
            Navigate("/");
        } else if (response.status === 401) {
            Swal.fire("Error!", "Invalid Code", "error");
        } else if (response.status === 500) {
            Swal.fire("Error!", "Internal Server Error", "error");
        } else if (response.status === 409) {
            Swal.fire("Error!", response.data.error, "error");
        }
        else if (response.status === 429) {
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

    if (loading) {
        return (
            <div className=" w-screen h-[300px] flex items-center justify-center ">
                <span className="loader"></span>
            </div>
        );
    }
    if (error) {
        return <ErrorPage />;
    }
    if (!isEmailVerified) {
        return (
            <div className="flex flex-col items-center justify-center pt-16">
                <img src={Logo} alt="Skate Logo" className="mt-8 w-[140px]" />
                <div className=" font-bold mb-4 text-xl text-green">
                    Skate Verification
                </div>
                {Confirm_to_send_state ? (
                    <>
                        <div className=" mb-8">
                            <div className="mb-4">
                                Enter the 6-digit code we sent to you in email
                            </div>

                            <div className=" text-gray text-sm">
                                {" "}
                                your Email : {Email}{" "}
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
                                <div>
                                    Sorry we did not finished this part yet{" "}
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <Confirm_to_send
                        setConfirm_to_send_state={setConfirm_to_send_state}
                    />
                )}
            </div>
        );
    }
    return <ForbiddenRoute />;
}

export default Verify_email;
