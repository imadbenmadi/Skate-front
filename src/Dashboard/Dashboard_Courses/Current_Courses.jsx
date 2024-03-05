import React from "react";
import { IoWarning } from "react-icons/io5";
import ErrorPage from "../../Components/ErrorPage";
import img from "../../../public/wallpaper.jpg";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
function Current_Courses() {
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
                <Link
                    className=" bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1  w-fit m-auto "
                    to={"/Dashboard/Courses/Add"}
                >
                    <>
                        <FaPlus />
                        <div>Add Course</div>
                    </>
                </Link>
                <div className="flex gap-4 w-full h-[80vh] overflow-auto custom-overflow">
                    {Courses.map((item, index) => (
                        <div key={index} className="w-full ">
                            <div className="w-full relative rounded overflow-hidden border-b border-gray py-5 px-5 flex shrink-0 justify-start h-fit">
                                <img
                                    className=" w-[30%] object-cover"
                                    src={img}
                                    alt={item.Title}
                                />
                                <div className="w-[60%] pl-6 py-4 ">
                                    {item.Title && (
                                        <p className="font-bold text-xl mb-2 overflow-hidden">
                                            {item.Title}
                                        </p>
                                    )}

                                    {item.Text && (
                                        <p className="text-gray-700 text-base">
                                            {item.Text}
                                        </p>
                                    )}
                                    {item.Description && (
                                        <p className="text-gray-700 text-base">
                                            {item.Description}
                                        </p>
                                    )}
                                    <p className="text-gray-700  text-sm absolute top-10 right-5 ">
                                        {item.Price} DA
                                    </p>
                                    <p className="text-gray-700 text-sm pt-4">
                                        {item.Category}
                                    </p>
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
