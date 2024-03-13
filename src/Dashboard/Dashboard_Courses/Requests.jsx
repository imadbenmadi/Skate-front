import React from "react";
import { IoWarning } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorPage from "../../Components/ErrorPage";
function Requests() {
    const [Requests, setRequests] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const fetch_Requests = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                "http://localhost:3000/Dashboard/Courses/Requests",
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
    async function handle_accept_request(id) {
        try {
            const response = await axios.post(
                "http://localhost:3000/Dashboard/Courses/Requests/Accept",
                { id },
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status == 200) {
                fetch_Requests();
            } else {
                setError(response.data);
            }
        } catch (error) {
            setError(error);
        }
    }
    async function handle_reject_request(id) {
        try {
            const response = await axios.post(
                "http://localhost:3000/Dashboard/Courses/Requests/Reject",
                { id },
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status == 200) {
                fetch_Requests();
            } else {
                setError(response.data);
            }
        } catch (error) {
            setError(error);
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
    console.log(Requests);
    if (Requests.length === 0)
        return (
            <div className=" flex justify-center items-center gap-1 text-2xl text-gray pt-8">
                <IoWarning />
                No Courses Requests for the moment
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
                            Course Title
                        </th>
                        <th scope="col" className=" border">
                            Course Price
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
                                {request.Course.Title
                                    ? request.Course.Title
                                    : "none"}
                            </td>
                            <td
                                style={{ maxWidth: "70px" }}
                                className="w-[70px] whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-green scrollbar-track-slate-300"
                            >
                                {request.Course.Price
                                    ? request.Course.Price + " DA"
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
                                        onClick={handle_accept_request}
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
