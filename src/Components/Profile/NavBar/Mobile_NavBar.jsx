import React, { useEffect } from "react";
import logo from "../../../../public/skate_circle.png";
import { FaUser } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


function Navbar({ Active_nav, setActive_nav, openNav, SetOpenNav }) {
    const Navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        setActive_nav(location.pathname.split("/")[2]);
    }, [location.pathname]);
    return (
        <div className=" w-full h-full overflow-y-auto custom-overflow">
            {openNav ? (
                <>
                    <IoClose
                        className=" text-4xl text-green  mb-8 cursor-pointer mt-6 text-center m-auto"
                        onClick={() => SetOpenNav(false)}
                    />
                    <div className=" flex flex-col gap-12 ml-4">
                        {/* nav items */}

                        <Link
                            to={"/Profile"}
                            onClick={() => SetOpenNav(false)}
                            className={`flex items-center cursor-pointer gap-1 ${
                                !location.pathname.split("/")[2] &&
                                "text-green "
                            } ${
                                location.pathname.split("/")[2]
                                    ? "text-white"
                                    : ""
                            }`}
                        >
                            <FaUser />
                            <div>Profile</div>
                        </Link>
                        <Link
                            to={"/Profile/Edit"}
                            onClick={() => SetOpenNav(false)}
                            className={`select-none flex items-center gap-1 cursor-pointer ${
                                Active_nav == "Edit" && "text-green"
                            } ${Active_nav !== "Edit" ? "text-white" : ""}`}
                        >
                            <FaPen />
                            <div>Edit Profile</div>
                        </Link>
                        <Link
                            to={"/Profile/Notifications"}
                            onClick={() => SetOpenNav(false)}
                            className={`select-none flex items-center gap-1 cursor-pointer ${
                                Active_nav == "Notifications" && "text-green"
                            } ${
                                Active_nav !== "Notifications"
                                    ? "text-white"
                                    : ""
                            }`}
                        >
                            <IoIosNotifications />
                            <div className=" text-sm">Notifications</div>
                        </Link>
                        <Link
                            to={"/Profile/Courses"}
                            onClick={() => SetOpenNav(false)}
                            className={`select-none flex items-center gap-1 cursor-pointer ${
                                Active_nav == "Courses" && "text-green"
                            } ${Active_nav !== "Courses" ? "text-white" : ""}`}
                        >
                            <FaBook />
                            <div>Courses</div>
                        </Link>
                        <Link
                            to={"/Profile/Services"}
                            onClick={() => SetOpenNav(false)}
                            className={`select-none flex items-center gap-1 cursor-pointer ${
                                Active_nav == "Services" && "text-green"
                            } ${Active_nav !== "Services" ? "text-white" : ""}`}
                        >
                            <FaHandshake />
                            <div>Services</div>
                        </Link>
                        <Link
                            to={"/Profile/Requests"}
                            onClick={() => SetOpenNav(false)}
                            className={`select-none flex items-center gap-1 cursor-pointer ${
                                Active_nav == "Requests" && "text-green"
                            } ${Active_nav !== "Requests" ? "text-white" : ""}`}
                        >
                            <IoNewspaper />
                            <div>Requests</div>
                        </Link>

                        <div
                            className={` flex items-center gap-1 cursor-pointer text-xl text-white `}
                            onClick={() => {
                                Navigate("/");
                            }}
                        >
                            <TbWorld />
                            <div className="text-sm">Back to the Website</div>
                        </div>
                    </div>
                </>
            ) : (
                <div className=" flex flex-col items-center justify-center gap-10 text-xl">
                    <IoMenu
                        className=" text-4xl text-green  cursor-pointer mt-6"
                        onClick={() => SetOpenNav(true)}
                    />
                    {/* <div className=" w-full h-[1px] bg-white"></div> */}
                    {/* nav items */}

                    <Link
                        to={"/Profile"}
                        className={`flex items-center cursor-pointer ${
                            !location.pathname.split("/")[2]
                                ? "text-green"
                                : "text-white"
                        }`}
                    >
                        <FaUser />
                    </Link>
                    <Link
                        to={"/Profile/Edit"}
                        className={`text-lg select-none flex items-center gap-3 cursor-pointer ${
                            Active_nav === "Edit" ? "text-green" : "text-white"
                        }`}
                    >
                        <FaPen />
                    </Link>
                    <Link
                        to={"/Profile/Notifications"}
                        className={`text-2xl select-none flex items-center gap-3 cursor-pointer ${
                            Active_nav === "Notifications"
                                ? "text-green"
                                : "text-white"
                        }`}
                    >
                        <IoIosNotifications />
                    </Link>
                    <Link
                        to={"/Profile/Courses"}
                        className={`select-none flex items-center gap-3 cursor-pointer ${
                            Active_nav === "Courses"
                                ? "text-green"
                                : "text-white"
                        }`}
                    >
                        <FaBook />
                    </Link>
                    <Link
                        to={"/Profile/Services"}
                        className={`select-none flex items-center gap-3 cursor-pointer ${
                            Active_nav === "Services"
                                ? "text-green"
                                : "text-white"
                        }`}
                    >
                        <FaHandshake />
                    </Link>
                    <Link
                        to={"/Profile/Requests"}
                        className={`select-none flex items-center gap-3 cursor-pointer ${
                            Active_nav === "Requests"
                                ? "text-green"
                                : "text-white"
                        }`}
                    >
                        <IoNewspaper />
                    </Link>

                    <div
                        className={` flex items-center gap-3 cursor-pointer text-xl pt-4 text-white  `}
                        onClick={() => {
                            Navigate("/");
                        }}
                    >
                        <TbWorld />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
