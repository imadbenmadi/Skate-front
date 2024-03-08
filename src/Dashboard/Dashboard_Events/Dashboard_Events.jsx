import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ErrorPage from "../../Components/ErrorPage";
import { Outlet } from "react-router-dom";
function Dashboard_Events() {
    const [Events, setEvents] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetch_Events = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/Events", {
                withCredentials: true,
                validateStatus: () => true,
            });
            if (response.status == 200) {
                setEvents(response.data.Events);
            } else {
                setError(response.data);
            }
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetch_Events();
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
    return (
        <>
            <Outlet context={Events} />
        </>
    );
}

export default Dashboard_Events;
