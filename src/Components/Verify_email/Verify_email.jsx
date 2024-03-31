import { useState, useEffect } from "react";
import Logo from "../../../public/skate_circle.png";
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";
import Confirm_to_send from "./Confirm_to_send";
import { fetchEmailVerificationStatus } from "./is_email_verified";
import ForbiddenRoute from "../ForbiddenRoute";
import ErrorPage from "../ErrorPage";
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
                if (response.IsEmailVerified !== null) {
                    setIsEmailVerified(response.IsEmailVerified);
                } else {
                    setError(response);
                }
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };

        getEmailVerificationStatus();
    }, []);

    const [RemainingSeconds, setRemainingSeconds] = useState(0);
    const [ResendLoading, setResendLoading] = useState(false);
    const [SubmitLoading, setSubmitLoading] = useState(false);
    function startResendTimer() {
        // Set the initial remaining time to 60 seconds
        setRemainingSeconds(60);
        // Update the remaining time every second
        const timerInterval = setInterval(() => {
            setRemainingSeconds((prevSeconds) => {
                // Decrease the remaining seconds by 1
                const newSeconds = prevSeconds - 1;

                // If the remaining time reaches 0, enable the resend button and clear the interval
                if (newSeconds == 0) {
                    clearInterval(timerInterval);
                }

                // Return the new remaining seconds
                return newSeconds;
            });
        }, 1000); // Update every 1 second
    }
    // function () {
    //     setShow_not_finished(true);
    // }
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
        setSubmitLoading(true);
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
        } else if (response.status === 404) {
            Swal.fire("Error!", "Verification token not found", "error");
        } else if (response.status === 409) {
            Swal.fire("Error!", response.data.message, "error");
        } else if (response.status === 500) {
            Swal.fire("Error!", "Internal Server Error", "error");
        } else if (response.status === 429) {
            Swal.fire(
                "Error!",
                `Too many requests, try again later\n${response.data.message}`,
                "error"
            );
        } else {
            Swal.fire("Error!", "Something Went Wrong", "error");
        }

        setSubmitLoading(false);
        setCode("");
    };
    const handleResendClick = async () => {
        setResendLoading(true);
        let response = await Axios.post(
            "http://localhost:3000/ReSend_Verification_Email",
            {
                userId: _id,
            },
            {
                withCredentials: true,
                validateStatus: () => true,
            }
        );

        if (response.status == 200) {
            Swal.fire(
                "Email Sendeed Successfully",
                "Check Out Your Email , we resend a new verification Code to you",
                "success"
            );
            startResendTimer();
        } else if (response.status == 401) {
            Swal.fire("Error!", "Unauthorized", "error");
        } else if (response.status == 400) {
            Swal.fire("Error!", "Internal Server Error", "error");
        } else if (response.status == 429) {
            Swal.fire(
                "Error!",
                `Too many requests ,try again latter\n  ${response.data.message}`,
                "error"
            );
        } else {
            Swal.fire("Error!", "Something Went Wrong", "error");
        }
        setResendLoading(false);
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
                            className="form-control border border-gray rounded w-24 h-12 text-center mb-4"
                            maxLength={6}
                        />

                        <button
                            onClick={handleSubmit}
                            className={`mt-4 ${
                                SubmitLoading ? "bg-gray" : "bg-green"
                            }  text-white px-4 py-2 rounded-md cursor-pointer`}
                            disabled={SubmitLoading}
                        >
                            {SubmitLoading ? "Sending..." : "Send Email"}
                        </button>

                        <div className="mt-8 color-gray text-xl">
                            Didn’t receive verification code?
                        </div>
                        <div className="text-center text-gray  text-xl">
                            {RemainingSeconds == 0 ? (
                                <>
                                    <button
                                        onClick={handleResendClick}
                                        className={` underline cursor-pointer`}
                                        disabled={ResendLoading}
                                    >
                                        {ResendLoading
                                            ? "Sending..."
                                            : "Resend"}
                                    </button>
                                </>
                            ) : (
                                <span>
                                    {RemainingSeconds} seconds left to resend
                                </span>
                            )}
                        </div>
                    </>
                ) : (
                    <Confirm_to_send
                        setConfirm_to_send_state={setConfirm_to_send_state}
                        startResendTimer={startResendTimer}
                    />
                )}
            </div>
        );
    }
    return <ForbiddenRoute />;
}

export default Verify_email;
