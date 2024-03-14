import React from "react";
import { useOutletContext } from "react-router";
import { IoWarning } from "react-icons/io5";
import img from "../../../../public/wallpaper.jpg";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
function Courses() {
    const user = useOutletContext();
    if (!user) return null;
    const userId = user._id;
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
                        <div key={index} className="w-full ">
                            <div className="w-full relative rounded overflow-hidden border-b border-gray py-5 px-5 flex shrink-0 justify-start h-[200px]">
                                <img
                                    className=" w-[30%] object-cover"
                                    src={img}
                                    alt={course.Title}
                                />
                                <div className="w-[60%] pl-6 py-4 ">
                                    {course.Title && (
                                        <p className="font-bold text-xl mb-2 overflow-hidden">
                                            {course.Title.slice(0, 60) +
                                                (course.Title.length > 60
                                                    ? "..."
                                                    : "")}
                                        </p>
                                    )}

                                    {course.Text && (
                                        <p className="text-gray text-base">
                                            {course.Text.slice(0, 70) +
                                                (course.Text.length > 70
                                                    ? "..."
                                                    : "")}
                                        </p>
                                    )}

                                    <p className="text-gray  text-sm absolute top-10 right-5 ">
                                        {course.Price} DA
                                    </p>
                                    <p className="text-gray text-sm pt-4">
                                        {course.Category}
                                    </p>
                                </div>
                            </div>
                        </div>
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
