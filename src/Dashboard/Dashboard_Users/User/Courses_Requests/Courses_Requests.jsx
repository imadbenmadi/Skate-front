import React from "react";
import { IoWarning } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorPage from "../../../../Components/ErrorPage";
import { useOutletContext } from "react-router";

import Requests_item from "./Card";
function Courses_Requests() {
    const [Requests, setRequests] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useOutletContext();
  if (!user) return null;
  
    const fetch_Requests = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `http://localhost:3000/Dashboard/Users/${user._id}/Courses/Requests`,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status == 200) {
                setRequests(response.data.courseRequests);
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
    const handleDeleteRequest = (RequestId) => {
        setRequests((prevRequests) =>
            prevRequests.filter((Request) => Request._id !== RequestId)
        );
    };

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
                No Courses Requests for this user
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
                    {Requests.map((request, index) => (
                        <Requests_item
                            request={request}
                            key={index}
                            onDelete={() => handleDeleteRequest(request._id)}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Courses_Requests;
