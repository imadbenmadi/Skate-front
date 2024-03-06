import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import swal from "sweetalert2";
import axios from "axios";
import img from "../../../public/wallpaper.jpg";
import { useNavigate } from "react-router";

function Current_Courses_Card({ item }) {
    const [showDescription, setShowDescription] = useState(false);
    const Navigate = useNavigate();
    function toggleDescription() {
        setShowDescription(!showDescription);
    }
    async function handle_delete_Course(course) {
        try {
            const response = await axios.delete(
                `https://localhost:3000.com/Dashboard/Courses`,
                {
                    courseId: course._id,
                },
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            console.log(response);
            if (response.status == 200) {
                Navigate("/Dashboard/Courses");
                swal.fire("Course Deleted Successfully", "", "success");
            }
            // else if (response.status == 404) {
            //     swal.fire(" Course Not found ", " Refresh the page please", "info");
            // }
            else if (401) {
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
            swal.fire(
                "Could not delete Course",
                "Please Try again Latter",
                "error"
            );
        }
    }

    return (
        <div className="w-full flex border-b-4 border-b-gray_white">
            <div>
                <div className="relative overflow-hidden py-5 px-5 flex shrink-0 justify-start h-fit">
                    <img
                        className="w-[30%] h-[200px] object-cover"
                        src={img}
                        alt={item.Title}
                    />
                    <div className="w-[70%] pl-6 py-4 flex">
                        <div className="w-[90%]">
                            {item.Title && (
                                <p className="font-bold text-xl mb-2 overflow-hidden">
                                    {item.Title}
                                </p>
                            )}
                            {item.Text && (
                                <p className="text-gray text-base">
                                    {item.Text}
                                </p>
                            )}
                            <p className="text-gray font-semibold text-xl pt-4">
                                {item.Category}
                            </p>
                        </div>
                        <div className="text-gray text-center text-xl font-semibold top-10 right-5 w-[10%]">
                            {item.Price} DA
                        </div>
                    </div>
                </div>
                {showDescription ? (
                    <div className="w-[80%] pl-8 pb-4">
                        <div
                            className="flex gap-2 items-center justify-start underlined pb-4 cursor-pointer"
                            onClick={toggleDescription}
                        >
                            Show Description <FaArrowUp />
                        </div>
                        <div className="pb-4">
                            {item.Description && (
                                <p className="text-gray text-base">
                                    {item.Description}
                                </p>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="w-[80%] pl-8 pb-4">
                        <div
                            className="flex gap-2 items-center justify-start underlined pb-4 cursor-pointer"
                            onClick={toggleDescription}
                        >
                            Show Description <FaArrowDown />
                        </div>
                    </div>
                )}
            </div>
            <div className="w-[10%] flex flex-col items-center justify-start pt-6 gap-4 pr-5">
                <div className="flex items-center justify-start gap-2 text-white text-xl bg-green px-2 py-1 rounded w-[100px]">
                    <MdEdit /> Edit
                </div>
                <div
                    className="flex items-center justify-start gap-2 cursor-pointer text-white bg-red-600 text-xl px-2 py-1 rounded w-[100px]"
                    onClick={() => {
                        swal.fire({
                            title: "Are you sure you want to delete this Course ?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "red",
                            cancelButtonColor: "green",
                            confirmButtonText: "Yes Delete it",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                handle_delete_Course(item);
                            }
                        });
                    }}
                >
                    <MdDelete />
                    Delete
                </div>
            </div>
        </div>
    );
}

export default Current_Courses_Card;
