import React,{useEffect} from "react";
import logo from "../../../public/skate_circle.png";
import { MdSpaceDashboard } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { FaBook } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa6";
import { IoIosPaper } from "react-icons/io";
import { useLocation } from "react-router-dom";
function Navbar({ Active_nav, setActive_nav }) {
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname.split("/")[2]);
    }, [location.pathname]);
    return (
        <div className=" w-full h-full overflow-auto">
            <div className=" flex gap-3 items-center text-xl md:text-4xl text-green justify-center pt-4 ">
                <div>
                    <img src={logo} alt="logo" className=" w-8 md:w-12" />
                </div>
                <div>Skate</div>
            </div>
            <div className=" w-full h-[1px] bg-white my-6"></div>
            {/* nav items */}

            <div className=" w-[95%]  md:w-[80%] m-auto text-white text-sm md:text-xl  lg:text-2xl flex flex-col gap-10 mt-8">
                <div className={` flex items-center cursor-pointer ${Active_nav && "text-green"}`}>
                    <MdSpaceDashboard />
                    <div>Dashboard</div>
                </div>
                <div className={` flex items-center gap-3 cursor-pointer ${Active_nav && "text-green"}`}>
                    <HiMiniUsers />
                    <div>Users</div>
                </div>
                <div className={` flex items-center gap-3 cursor-pointer ${Active_nav && "text-green"}`}>
                    <FaHandshake />
                    <div>Services</div>
                </div>
                <div className={` flex items-center gap-3 cursor-pointer ${Active_nav && "text-green"}`}>
                    <FaBook />
                    <div>Courses</div>
                </div>
                <div className={` flex items-center gap-3 cursor-pointer ${Active_nav && "text-green"}`}>
                    <FaCalendarCheck />
                    <div>Events</div>
                </div>
                <div className={` flex items-center gap-3 cursor-pointer ${Active_nav && "text-green"}`}>
                    <IoIosPaper />
                    <div>Blogs</div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
