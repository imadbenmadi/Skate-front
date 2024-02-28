import img from "../../../public/wallpaper.jpg";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import ErrorPage from "../ErrorPage";
import axios from "axios";

function Event_item() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [event, setevent] = useState([]);
    const location = useLocation();

    const fetchevent = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://backend.skate-consult.com/Events/${
                    location.pathname.split("/")[2]
                }`,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status == 200) {
                setevent(response.data);
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false); // Set loading state to false regardless of success or failure
        }
    };
    useEffect(() => {
        fetchevent();
    }, []);
    if (error) {
        return <ErrorPage />;
    }
    if (loading)
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    return (
        <div className=" pt-[80px] flex flex-col items-center w-[90%] m-auto md:items-start justify-center gap-3 ">
            <h2 className="text-2xl font-bold mb-2 m-auto">{event.Title}</h2>
            <div className="flex justify-center gap-6 m-auto ">
                <img src={img} alt="" className=" w-[400px]" />
                <p className="text-gray-700">
                    {event.Text &&
                        event.Text.slice(0, 120) +
                            (event.Text.length > 120 ? "..." : "")}
                </p>
            </div>
            <div className=" w-[90vw] m-auto my-6 p-4 rounded ">
                {event.Description}
            </div>
        </div>
    );
}

export default Event_item;
