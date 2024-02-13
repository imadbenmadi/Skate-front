import img from "../../../public/wallpaper.jpg";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import axios from "axios";
function CourseItem() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [course, setCourse] = useState([]);
    const { isAuth, _id, Courses } = useAppContext();
    const location = useLocation();
    let Already_have_course = null;
    if (Courses) {
        Already_have_course = Courses.some(
            (course) => course._id === location.pathname.split("/")[2]
        );
    }
    
    const fetchCourse = async () => {
        setLoading(true);

        try {
            const response = await axios.get(
                `http://localhost:3000/Courses/${
                    location.pathname.split("/")[2]
                }`,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status === 200) {
                setCourse(response.data);
                console.log(course);
            } else {
                console.log(response.data);
                setError(true);
            }
        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            setLoading(false); // Set loading state to false regardless of success or failure
        }
    };
    useEffect(() => {
        fetchCourse();
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
        <div className=" pt-[80px] ">
            <div className="flex items-start justify-center gap-3">
                <div className=" w-[500px]">
                    <img src={img} alt="" />

                    <div className="pt-4 flex justify-end mr-10">
                        {!Already_have_course ? (
                            <div className="bg-green px-4 py-2 w-fit text-white rounded cursor-pointer">
                                Request the course
                            </div>
                        ) : (
                            <Link
                                to={"/Profile"}
                                className="bg-green px-4 py-2 w-fit text-white rounded cursor-pointer"
                            >
                                Go ot Course
                            </Link>
                        )}
                    </div>
                </div>
                <div className="w-[500px]  break-words border border-gray-300 rounded p-4 mb-4">
                    {/* You can include content for each course item here */}
                    <h2 className="text-xl font-bold mb-2">{course.Title}</h2>
                    <p className="text-gray-700">{course.Title}</p>
                    <p className="text-gray-700">{course.Price}DA</p>
                    <p className="text-gray-700">Category: Web Development</p>
                    <p className="text-gray-700">Date: January 1, 2024</p>
                </div>
            </div>

            <div className=" w-[80vw] m-auto mt-6 p-4 rounded bg-gray_white">
                {course.Description}
            </div>
        </div>
    );
}

export default CourseItem;
