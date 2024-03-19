import  { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";

function ProfileInfo() {
    const [user, setUser] = useOutletContext();
    if (!user)
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    return (
        <div>
            <div className="text-2xl w-full md:w-fit pt-4 pl-4  lg:text-3xl mb-2  ">
                <span className="text-green2">Your </span>
                Profile
            </div>
            <h2 className=" text-center pt-4 text-3xl w-[300px] m-auto break-all">
                {user.user.FirstName ? user.user.FirstName : null}
            </h2>
            <div className=" flex items-center justify-center flex-col text-xl md:text-3xl text-gray  gap-10 w-full h-[60vh]">
                <div className=" flex gap-4 md:gap-12">
                    <div className=" bg-[#7e549e] px-4 py-2 rounded text-white w-[140px] md:w-[200px]">
                        <div className="flex gap-1 items-center justify-center  ">
                            <IoIosNotifications />
                            {user.user.Notifications.length}
                        </div>
                        <div className=" text-center">Notifications</div>
                    </div>
                    <div className=" bg-[#c2549d] px-4 py-2 rounded text-white w-[140px] md:w-[200px]">
                        <div className="flex gap-1 items-center justify-center ">
                            <IoNewspaper />
                            {user.Courses_requests.length +
                                user.Services_requests.length}
                        </div>
                        <div className=" text-center">Requests</div>
                    </div>
                </div>
                <div className=" flex gap-4 md:gap-12">
                    <div className=" bg-[#213059] px-4 py-2 rounded text-white w-[140px] md:w-[200px]">
                        <div className="flex gap-1 items-center justify-center ">
                            <FaBook />
                            {user.user.Courses.length}
                        </div>
                        <div className=" text-center">Courses</div>
                    </div>
                    <div className=" bg-[#286a69] px-4 py-2 rounded text-white w-[140px] md:w-[200px]">
                        <div className="flex gap-1 items-center justify-center ">
                            <FaHandshake />
                            {user.user.Services.length}
                        </div>
                        <div className=" text-center">Services</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
