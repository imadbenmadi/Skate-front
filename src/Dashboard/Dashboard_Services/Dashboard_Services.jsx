import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ErrorPage from "../../Components/ErrorPage";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Dashboard_Services() {
    const [Services, setServices] = useState(null);
    const [Requests, setRequests] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [active, setActive] = useState("Current");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.split("/")[3] == "Requests")
            setActive("Requests");
        else setActive("Current");
    }, [location.pathname]);
    const fetch_data = async () => {
        setLoading(true);
        try {

            await fetch_Requests();
            await fetch_Services();
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };
    const fetch_Requests = async () => {
        
        try {
            const response = await axios.get(
                "http://localhost:3000/Dashboard/Services/Requests",
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status == 200) {
                console.log(response.data.requests);
                setRequests(response.data.requests);
            } else {
                setError(response.data);
            }
        } catch (error) {
            setError(error);
        }
        
    };
    const fetch_Services = async () => {
        
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
        }
        
    };
    useEffect(() => {
        fetch_data();
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
        <div>
            <div className=" flex items-center justify-center gap-5 py-6 text-2xl">
                <Link
                    to={"/Dashboard/Services"}
                    className={`${
                        active == "Current"
                            ? "underline text-green"
                            : "text-gray"
                    }`}
                >
                    Current Services
                </Link>
                <Link
                    to={"/Dashboard/Services/Requests"}
                    className={`${
                        active == "Requests"
                            ? "underline text-green"
                            : "text-gray"
                    }`}
                >
                    Services Requests
                </Link>
            </div>
            <Outlet context={{Services , Requests}} />
        </div>
    );
}

export default Dashboard_Services;
