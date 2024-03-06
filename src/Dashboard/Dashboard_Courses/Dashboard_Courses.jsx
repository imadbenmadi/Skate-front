import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ErrorPage from "../../Components/ErrorPage";
import Current_Courses from "./Current_Courses";
import { FaPlus } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Dashboard_Courses() {
    const [Courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [active, setActive] = useState("Current");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.split("/")[3] == "Requests")
            setActive("Requests");
        else setActive("Current");
    }, [location.pathname]);
    const fetch_courses = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://localhost:3000/Courses", {
                withCredentials: true,
                validateStatus: () => true,
            });
            if (response.status == 200) {
                setCourses(response.data.courses);
            } else {
                setError(response.data);
            }
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetch_courses();
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
                    to={"/Dashboard/Courses"}
                    className={`${
                        active == "Current"
                            ? "underline text-green"
                            : "text-gray"
                    }`}
                >
                    Current Cureses
                </Link>
                <Link
                    to={"/Dashboard/Courses/Requests"}
                    className={`${
                        active == "Requests"
                            ? "underline text-green"
                            : "text-gray"
                    }`}
                >
                    Courses Requests
                </Link>
            </div>
            <Outlet context={Courses} />
        </div>
    );
}

export default Dashboard_Courses;
