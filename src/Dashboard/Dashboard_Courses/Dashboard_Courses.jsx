import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ErrorPage from "../../Components/ErrorPage";
import Current_Courses from "./Current_Courses";
import { FaPlus } from "react-icons/fa";
import { Outlet } from "react-router-dom";
function Dashboard_Courses() {
    const [Courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetch_courses = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                "https://backend.skate-consult.com/Courses",
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            console.log(response);
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
            <div className=" flex items-center justify-around">
                <div className=" text-center text-gray font-semibold text-2xl my-5">
                    Skate Courses :
                </div>

                <Link
                    className=" bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 "
                    to={"/Dashboard/Courses/Add"}
                >
                    <>
                        <FaPlus />
                        <div>Add Course</div>
                    </>
                </Link>
            </div>
            <Outlet context={Courses} />
            {/* <Current_Courses Courses={Courses} /> */}
        </div>
    );
}

export default Dashboard_Courses;
