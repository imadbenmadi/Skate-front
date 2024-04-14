import React from "react";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoWarning } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "./Card";
function Profile_Courses() {
    const Navigate = useNavigate();
    const { user, fetchData } = useOutletContext();
    if (!user || !fetchData)
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
  const userCourses = user.user.Courses;
    if (!userCourses || Object.keys(userCourses).length === 0)
        return (
            <div className=" flex items-center justify-center gap-4 flex-col">
                <div className="flex items-center  text-gray text-2xl gap-2 py-8">
                    <IoWarning className="text-2xl" />
                    <div className="text-center text-gray">
                        You have No Courses{" "}
                    </div>
                </div>
                <Link
                    className="text-green rounded-md cursor-pointer  text-xl 
                    flex items-center gap-2 px-3 py-1 w-fit mx-auto underline "
                    to={"/Courses"}
                >
                    <div>Exprlore Skate Courses</div>
                    <FaArrowRight />
                </Link>
            </div>
        );
    return (
        <div>
            <div className="pl-4 text-gray font-semibold  text-2xl mt-6 ">
                <span className="text-green m-auto">Your</span> Courses :
            </div>
            {userCourses.map((Course, index) => (
                <Card
                    item={Course}
                    key={index}
                    // onDelete={() => handleDeleteCourse(Course._id)}
                />
            ))}
        </div>
    );
}

export default Profile_Courses;
