import img from "../../../public/wallpaper.jpg";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import axios from "axios";
import swal from "sweetalert2";
import { useNavigate } from "react-router";
import { MdDone } from "react-icons/md";

function CourseItem() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [course, setCourse] = useState([]);
    const [requestLoading, setRequestLoading] = useState(false);
    const { isAuth, _id, Courses } = useAppContext();
    const location = useLocation();
    const navigate = useNavigate();
    let alreadyHaveCourse = null;

    if (Courses) {
        alreadyHaveCourse = Courses.some(
            (course) => course._id === location.pathname.split("/")[2]
        );
    }

    const handleRequestCourse = async () => {
        try {
            setRequestLoading(true);
            const response = await axios.post(
                `https://backend.skate-consult.com/Courses/request`,
                {
                    userId: _id,
                    courseId: location.pathname.split("/")[2],
                },
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status === 200) {
                swal.fire("Success", "Request sent successfully", "success");
                setSuccess(true);
            } else if (response.status === 409) {
                swal.fire(
                    "Missing Data ",
                    "Request could not be sent",
                    "error"
                );
            } else if (response.status === 404) {
                swal.fire(
                    "Not found",
                    "Something went wrong. Please try again later",
                    "warning"
                );
            } else if (response.status === 400) {
                swal.fire(
                    "You Cannot request the course",
                    `${response.data.message}`,
                    "warning"
                );
            } else if (response.status === 401) {
                swal.fire({
                    title: "You should login to do that",
                    text: "You are not authenticated!",
                    icon: "warning",
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "green",
                    confirmButtonText: "Go to Login Page",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/Login");
                    }
                });
            } else {
                swal.fire("Error", "Internal server error", "error");
            }
        } catch (error) {
            swal.fire("Error", "Internal server error", "error");
        } finally {
            setRequestLoading(false);
        }
    };

    const fetchCourse = async () => {
        setLoading(true);

        try {
            const response = await axios.get(
                `https://backend.skate-consult.com/Courses/${
                    location.pathname.split("/")[2]
                }`,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status === 200) {
                setCourse(response.data);
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourse();
    }, []);

    if (error) {
        return <ErrorPage />;
    }

    if (loading) {
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    }

    return (
        <div className="pt-[80px]">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-3">
                <div className="w-[350px]">
                    <img src={img} alt="" className="w-[400px]" />
                    <div className="pt-4 flex justify-center md:justify-end">
                        {success ? (
                            <div className="flex items-center text-green gap-1 text-xl">
                                Course requested
                                <MdDone className="text-2xl" />
                            </div>
                        ) : !alreadyHaveCourse ? (
                            <div
                                className={`bg-green px-4 py-2 w-fit text-white rounded cursor-pointer ${
                                    requestLoading
                                        ? "opacity-50 pointer-events-none"
                                        : ""
                                }`}
                                onClick={() => {
                                    if (!isAuth) {
                                        swal.fire({
                                            title: "You should login to do that",
                                            text: "You are not authenticated!",
                                            icon: "warning",
                                            confirmButtonColor: "#3085d6",
                                            cancelButtonColor: "green",
                                            confirmButtonText:
                                                "Go to Login Page",
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                navigate("/Login");
                                            }
                                        });
                                    } else {
                                        handleRequestCourse();
                                    }
                                }}
                            >
                                {requestLoading
                                    ? "Requesting..."
                                    : "Request the course"}
                            </div>
                        ) : (
                            <Link
                                to={"/Profile"}
                                className="bg-green px-4 py-2 w-fit text-white rounded cursor-pointer"
                            >
                                Go to Course
                            </Link>
                        )}
                    </div>
                </div>
                <div className="w-[90vw] md:w-[350px]  break-words border border-gray-300 rounded p-4">
                    <h2 className="text-xl font-bold mb-2">
                        {course.Title &&
                            course.Title.slice(0, 80) +
                                (course.Title.length > 80 ? "..." : "")}
                    </h2>
                    <p className="text-gray-700">
                        {course.Text &&
                            course.Text.slice(0, 80) +
                                (course.Text.length > 80 ? "..." : "")}
                    </p>
                    <p className="text-gray-700">{course.Price}DA</p>
                    <p className="text-gray-700">Category: Web Development</p>
                    <p className="text-gray-700">Date: January 1, 2024</p>
                </div>
            </div>

            <div className="w-[90vw] m-auto my-6 p-4 rounded bg-gray_white">
                {course.Description}
            </div>
        </div>
    );
}

export default CourseItem;
