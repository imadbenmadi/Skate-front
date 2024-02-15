import React from "react";
import logo from "../../../public/skate_circle.png";
import { MdSpaceDashboard } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { FaBook } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa6";
import { IoIosPaper } from "react-icons/io";

function Navbar() {
    return (
        <div className=" w-full h-full">
            <div className=" flex gap-3 items-center text-4xl text-green justify-center pt-4 ">
                <div>
                    <img src={logo} alt="logo" className=" w-12" />
                </div>
                <div>Skate</div>
            </div>
            <div className=" w-full h-[1px] bg-white my-6"></div>
            {/* nav items */}

            <div className="  md:w-[80%] m-auto text-white text-sm md:text-xl  lg:text-2xl flex flex-col gap-10 mt-8">
                <div className=" flex items-center  cursor-pointer">
                    <MdSpaceDashboard  />
                    <div>Dashboard</div>
                </div>
                <div className=" flex items-center gap-3 cursor-pointer">
                    <HiMiniUsers />
                    <div>Users</div>
                </div>
                <div className=" flex items-center gap-3 cursor-pointer">
                    <FaHandshake />
                    <div>Services</div>
                </div>
                <div className=" flex items-center gap-3 cursor-pointer">
                    <FaBook />
                    <div>Courses</div>
                </div>
                <div className=" flex items-center gap-3 cursor-pointer">
                    <FaCalendarCheck />
                    <div>Events</div>
                </div>
                <div className=" flex items-center gap-3 cursor-pointer">
                    <IoIosPaper />
                    <div>Blogs</div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
