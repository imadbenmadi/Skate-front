import React from "react";
import { IoWarning } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Current_Services_Card from "./Current_Services_Card";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorPage from "../../Components/ErrorPage";
function Current_Services() {
    const [Services, setServices] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetch_Services = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/Services", {
                withCredentials: true,
                validateStatus: () => true,
            });
            if (response.status == 200) {
                setServices(response.data.services);
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
        fetch_Services();
    }, []);
    if (loading)
        return (
            <div className=" w-[100%] h-[200px] flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
     if (error) {
         return <ErrorPage />;
     }
    if (!Services) return null;
    else if (Services.length === 0)
        return (
            <div className=" flex items-center justify-center gap-4 flex-col">
                <div className="pl-4 text-gray font-semibold  text-2xl w-full">
                    <span className="text-green">Skate</span> Services :
                </div>
                <div className="flex items-center  text-gray text-2xl gap-2 py-8">
                    <IoWarning className="text-2xl" />
                    <div className="text-center text-gray">
                        No Services Found
                    </div>
                </div>
                <Link
                    className="bg-green rounded cursor-pointer text-white text-xl
                     flex items-center gap-2 px-3 py-1 w-fit m-auto"
                    to={"/Dashboard/Services/Add"}
                >
                    <>
                        <FaPlus />
                        <div>Add Service</div>
                    </>
                </Link>
            </div>
        );
    else {
        return (
            <div>
                <div className="flex items-center justify-around my-5">
                    <div className="pl-4 text-gray font-semibold text-2xl">
                        <span className="text-green">Skate</span> Services :
                    </div>
                    <Link
                        className="bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1"
                        to={"/Dashboard/Services/Add"}
                    >
                        <>
                            <FaPlus />
                            <div>Add Service</div>
                        </>
                    </Link>
                </div>
                <div>
                    {Services.map((item, index) => (
                        <Current_Services_Card key={index} item={item} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Current_Services;
