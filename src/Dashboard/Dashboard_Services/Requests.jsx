import React from "react";
import { IoWarning } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorPage from "../../Components/ErrorPage";
import Swal from "sweetalert2";
function Requests() {
    const [Requests, setRequests] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const fetch_Requests = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                "http://localhost:3000/Dashboard/Services/Requests",
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status == 200) {
                setRequests(response.data.requests);
            } else {
                setError(response.data);
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetch_Requests();
    }, []);
    async function handle_accept_request(UserId, ServiceId) {
        try {
            const response = await axios.post(
                "http://localhost:3000/Dashboard/Services/Requests/Accept",
                { UserId, ServiceId },
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            console.log(response);
            if (response.status == 200) {
                Swal.fire({ icon: "success", title: "Request Accepted" });
            } else if (response.status == 404) {
                Swal.fire("Error", `${response.data.message}`, "error");
            } else if (response.status == 400) {
                Swal.fire(
                    "Error!",
                    `Internal server error : ${response.data.message}`,
                    "error"
                );
            } else if (response.status == 401) {
                Swal.fire({
                    title: "Unauthorised Action",
                    text: "You should Login again ",
                    icon: "error",
                    confirmButtonColor: "#3085d6",

                    confirmButtonText: "Go to Admin Login Page",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Navigate("/Dashboard_Login");
                    }
                });
            } else if (response.status == 409) {
                Swal.fire("Error!", `${response.data}`, "error");
            } else if (response.status == 429) {
                Swal.fire(
                    "Error!",
                    `Too many Requests , ${response.data.message}`,
                    "error"
                );
            } else if (response.status == 500) {
                Swal.fire(
                    "Error!",
                    `Internal server error : ${response.data.message}`,
                    "error"
                );
            } else {
                Swal.fire(
                    "Error!",
                    `Something Went Wrong. Please try again , ${response.data.message}`,
                    "error"
                );
            }
        } catch (error) {
            Swal.fire("Error!", "Failed to Accept the Request.", "error");
        }
    }
    async function handle_reject_request(UserId, ServiceId) {
        try {
            const response = await axios.post(
                "http://localhost:3000/Dashboard/Services/Requests/Reject",
                { UserId, ServiceId },
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status == 200) {
                Swal.fire({ icon: "success", title: "Request Rejected" });
                fetch_Requests();
            } else if (response.status == 404) {
                Swal.fire("Error", `${response.data.message}`, "error");
            } else if (response.status == 400) {
                Swal.fire(
                    "Error!",
                    `Internal server error : ${response.data.message}`,
                    "error"
                );
            } else if (response.status == 401) {
                Swal.fire({
                    title: "Unauthorised Action",
                    text: "You should Login again ",
                    icon: "error",
                    confirmButtonColor: "#3085d6",

                    confirmButtonText: "Go to Admin Login Page",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Navigate("/Dashboard_Login");
                    }
                });
            } else if (response.status == 409) {
                Swal.fire("Error!", `${response.data}`, "error");
            } else if (response.status == 429) {
                Swal.fire(
                    "Error!",
                    `Too many Requests , ${response.data.message}`,
                    "error"
                );
            } else if (response.status == 500) {
                Swal.fire(
                    "Error!",
                    `Internal server error : ${response.data.message}`,
                    "error"
                );
            } else {
                Swal.fire(
                    "Error!",
                    `Something Went Wrong. Please try again , ${response.data.message}`,
                    "error"
                );
            }
        } catch (error) {
            Swal.fire("Error!", "Failed to Reject the Request", "error");
        }
    }

    if (loading)
        return (
            <div className=" w-[100%] h-[200px] flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    if (error) {
        return <ErrorPage />;
    }
    if (!Requests) return null;
    if (Requests.length === 0)
        return (
            <div className=" flex justify-center items-center gap-1 text-2xl text-gray pt-8">
                <IoWarning />
                No Services Requests for the moment
            </div>
        );
    return (
        <div className="relative shadow-md mt-[20px]">
            <table className="w-full text-sm rtl:text-right text-black_text relative  ">
                <thead className="text-xs uppercase text-center h-[40px] sticky top-0 bg-white">
                    <tr className="border-y-2">
                        <th scope="col" className="border">
                            User name
                        </th>
                        <th scope="col" className="border">
                            Telephone
                        </th>
                        <th scope="col" className="border">
                            Email
                        </th>
                        <th scope="col" className="border">
                            Status
                        </th>
                        <th scope="col" className=" border">
                            Service Title
                        </th>
                        <th scope="col" className=" border">
                            Service Price
                        </th>
                        <th scope="col" className="border">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Requests.length == 0 && (
                        <tr className="bg-gray_white  h-[40px] text-center">
                            <td
                                colSpan="8"
                                className="border-y-2 py-2 text-sm text-gray"
                            >
                                <div className="  flex justify-center items-center gap-1">
                                    <IoWarning />
                                    No Request found
                                </div>
                            </td>
                        </tr>
                    )}
                    {Requests.map((request) => (
                        <tr
                            key={request._id}
                            className="bg-gray_white hover:bg-white cursor-pointer h-[40px] text-center"
                        >
                            <td
                                style={{ maxWidth: "180px" }}
                                className="w-[180px] whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-green scrollbar-track-slate-300"
                            >
                                {request.User.FirstName !== undefined
                                    ? request.User.FirstName
                                    : "none"}{" "}
                                {request.User.LastName
                                    ? request.User.LastName
                                    : "none"}
                            </td>
                            <td
                                style={{ maxWidth: "90px" }}
                                className="w-[90px] whitespace-nowrap break-words border overflow-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-green scrollbar-track-slate-300"
                            >
                                {request.User.Telephone
                                    ? request.User.Telephone
                                    : "none"}
                            </td>
                            <td
                                style={{ maxWidth: "150px" }}
                                className="w-[150px] whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-green scrollbar-track-slate-300"
                            >
                                {request.User.Email
                                    ? request.User.Email
                                    : "none"}
                            </td>
                            <td
                                style={{ maxWidth: "90px" }}
                                className={`w-[90px] whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-green scrollbar-track-slate-300 ${
                                    request.User.IsEmailVerified
                                        ? "text-green"
                                        : "text-red-600"
                                }`}
                            >
                                {request.User.IsEmailVerified
                                    ? "Verified"
                                    : "Not Verified"}
                            </td>

                            <td
                                style={{ maxWidth: "150px" }}
                                className="w-[150px] whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-green scrollbar-track-slate-300"
                            >
                                {request.Service.Title
                                    ? request.Service.Title
                                    : "none"}
                            </td>
                            <td
                                style={{ maxWidth: "70px" }}
                                className="w-[70px] whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-green scrollbar-track-slate-300"
                            >
                                {request.Service.Price
                                    ? request.Service.Price + " DA"
                                    : "none"}
                            </td>
                            <td
                                style={{ maxWidth: "150px" }}
                                className="w-[150px] whitespace-nowrap border overflow-auto 
                                scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-green scrollbar-track-slate-300
                                "
                            >
                                <div className="flex  justify-center gap-1 items-center m-auto ">
                                    <div
                                        className="w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded"
                                        onClick={() =>
                                            handle_accept_request(
                                                request.User._id,
                                                request.Service._id
                                            )
                                        }
                                    >
                                        Accept
                                    </div>
                                    <div
                                        className="w-fit items-center m-auto flex gap-1 bg-red-600 text-white p-1 rounded"
                                        onClick={handle_reject_request}
                                    >
                                        Reject
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Requests;
