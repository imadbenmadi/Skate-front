import React from "react";
import { useOutletContext } from "react-router";
import { IoWarning } from "react-icons/io5";
import img from "../../../../../public/wallpaper.jpg";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import swal from "sweetalert2";
import axios from "axios";
import Card from "./Card";
function Courses() {
    const [user, setUser] = useOutletContext();
    if (!user) return null;
    const userId = user._id;

    const [deleteLoading, setDeleteLoading] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const Navigate = useNavigate();
    function toggleDescription() {
        setShowDescription(!showDescription);
    }
    async function handle_delete_Course(Course) {
        try {
            setDeleteLoading(true);
            const response = await axios.delete(
                `http://localhost:3000/Dashboard/Users/${userId}/Courses/${Course._id}`,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status == 200) {
                swal.fire("Course Deleted Successfully", "", "success");
                setUser((prevUser) => ({
                    ...prevUser,
                    Courses: prevUser.Courses.filter(
                        (c) => c._id !== Course._id
                    ),
                }));
            } else if (response.status == 404) {
                swal.fire(
                    " Course Not found ",
                    " Refresh the page please",
                    "info"
                );
            } else if (response.status == 401) {
                swal.fire({
                    title: "Unauthorised Action",
                    text: "You should Login again ",
                    icon: "error",
                    confirmButtonColor: "#3085d6",

                    confirmButtonText: "Go to Admin Login Page",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Navigate("/Dashboard_Login");
                    }
                });
            } else {
                swal.fire(
                    "Could not delete Course",
                    `${response.data.message}`,
                    "error"
                );
            }
        } catch (error) {
            console.log("error : ", error);
            swal.fire(
                "Could not delete Course",
                "Please Try again Latter",
                "error"
            );
        } finally {
            setDeleteLoading(false);
        }
    }
    if (user.Courses && Array.isArray(user.Courses)) {
        if (user.Courses.length === 0)
            return (
                <div className="pt-4 ">
                    <Link
                        to={`/Dashboard/Users/${userId}`}
                        className="mb-4 w-fit m-auto bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 "
                    >
                        <IoMdArrowRoundBack />
                        <div>Back to user</div>
                    </Link>
                    <div className=" flex text-gray items-center justify-center text-2xl pt-4 gap-2  ">
                        <IoWarning className=" text-2xl" />
                        <div className="text-center text-gray">
                            No courses Owned by this user
                        </div>
                    </div>
                </div>
            );
        else {
            return (
                <div className=" pt-4 ">
                    <Link
                        to={`/Dashboard/Users/${userId}`}
                        className="mb-4 w-fit m-auto bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 "
                    >
                        <IoMdArrowRoundBack />
                        <div>Back to user</div>
                    </Link>
                    <div className=" text-2xl pl-4 text-gray underline">
                        Enrolled Courses
                    </div>
                    {user.Courses.map((course, index) => (
                        <Card course={course} index={index} />
                    ))}
                </div>
            );
        }
    }
    return (
        <>
            <Link
                to={`/Dashboard/Users/${userId}`}
                className="mb-4 w-fit m-auto bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 "
            >
                <IoMdArrowRoundBack />
                <div>Back to user</div>
            </Link>
            <div className=" flex text-gray items-center gap-2 pt-4 ">
                <IoWarning className=" text-2xl" />
                <div className="text-center text-gray">
                    No courses Owned by this user
                </div>
            </div>
        </>
    );
}

export default Courses;
