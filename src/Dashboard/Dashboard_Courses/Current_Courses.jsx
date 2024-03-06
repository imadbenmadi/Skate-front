import React from "react";
import { IoWarning } from "react-icons/io5";
import ErrorPage from "../../Components/ErrorPage";
import img from "../../../public/wallpaper.jpg";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

function Current_Courses() {
    const [showDescription, setshowDescription] = useState(false);
    function toogle_showDescription() {
        setshowDescription(!showDescription);
    }
    const Courses = useOutletContext();
    if (!Courses) return null;
    else if (Courses.length == 0)
        return (
            <div>
                <div className=" flex text-gray items-center text-2xl gap-2 py-8">
                    <IoWarning className=" text-2xl" />
                    <div className="text-center text-gray">
                        No courses Found
                    </div>
                </div>
                <Link
                    className=" bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 w-fit  m-auto "
                    to={"/Dashboard/Courses/Add"}
                >
                    <>
                        <FaPlus />
                        <div>Add Course</div>
                    </>
                </Link>
            </div>
        );
    else {
        return (
            <div>
                <div className=" flex items-center justify-around my-5">
                    <div className=" pl-4 text-gray font-semibold text-2xl ">
                        <span className=" text-green">Skate</span> Courses :
                    </div>
                    <Link
                        className=" bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1   "
                        to={"/Dashboard/Courses/Add"}
                    >
                        <>
                            <FaPlus />
                            <div>Add Course</div>
                        </>
                    </Link>
                </div>
                <div className=" ">
                    {Courses.map((item, index) => (
                        <div
                            key={index}
                            className="w-full  flex border-b-4 border-b-gray_white "
                        >
                            {" "}
                            <div>
                                <div
                                    className="w-[90%]  relative  overflow-hidden  py-5 px-5 flex shrink-0 justify-start h-fit"
                                >
                                    <img
                                        className=" w-[30%] h-[200px] object-cover"
                                        src={img}
                                        alt={item.Title}
                                    />
                                    <div className="w-[70%] pl-6 py-4 flex">
                                        <div className=" w-[90%]">
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

                                        <div className="text-gray text-center  text-xl font-semibold top-10 right-5  w-[10%] ">
                                            {item.Price} DA
                                        </div>
                                    </div>
                                </div>
                                {showDescription ? (
                                    <div className="w-[80%] pl-8 pb-4">
                                        <div
                                            className=" flex gap-2 items-center justify-start underlined pb-4 cursor-pointer"
                                            onClick={toogle_showDescription}
                                        >
                                            Show Description
                                            <FaArrowUp />
                                        </div>
                                        <div className="  ">
                                            {item.Description && (
                                                <p className="text-gray text-base">
                                                    {item.Description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-[80%] pl-8 pb-4 ">
                                        <div
                                            className=" flex gap-2 items-center justify-start underlined pb-4 cursor-pointer"
                                            onClick={toogle_showDescription}
                                        >
                                            Show Description
                                            <FaArrowDown />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className=" w-[10%] flex flex-col items-center justify-start pt-6 gap-4 pr-5">
                                <div className="flex items-center justify-start gap-2 text-white  text-xl bg-green px-2 py-1 rounded w-[100px]  ">
                                    <MdEdit /> Edit
                                </div>
                                <div className=" flex items-center justify-start gap-2 text-white bg-red-600 text-xl  px-2 py-1 rounded  w-[100px]">
                                    <MdDelete />
                                    Delete
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Current_Courses;
