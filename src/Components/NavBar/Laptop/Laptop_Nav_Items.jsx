import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import Course from "../../../../public/Course.png";
import { FaUserTie } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { TbSettings } from "react-icons/tb";

function Laptop_Nav_Items({
    Active_nav,
    isAuth,
    FirstName,
    LastName,
    _id,
    user_Open,
    Toogle_User_Open,
    Logout,
}) {
    const [User_menu_open, setUser_menu_open] = useState(false);
    const [Notifications_open , setNotifications_open] = useState(false)

    return (
        <div className="hidden md:flex items-center justify-center gap-7 text-lg text-black_text h-full ">
            <div className="flex gap-5">
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/Services"}
                        className={
                            Active_nav === "Services"
                                ? "text-green hover:text-green"
                                : "text-black_text hover:text-green"
                        }
                        // onClick={() => setActive_nav("Services")}
                    >
                        Services
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/Courses"}
                        className={
                            Active_nav === "Courses"
                                ? "text-green hover:text-green"
                                : "text-black_text hover:text-green"
                        }
                    >
                        Courses
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/Events"}
                        className={
                            Active_nav === "Events"
                                ? "text-green hover:text-green"
                                : "text-black_text hover:text-green"
                        }
                        // onClick={() => setActive_nav("Events")}
                    >
                        Events
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/Blogs"}
                        className={
                            Active_nav === "Blogs"
                                ? "text-green hover:text-green"
                                : "text-black_text hover:text-green"
                        }
                        // onClick={() => setActive_nav("Blogs")}
                    >
                        Blogs
                    </Link>
                </div>
                <div className="  transition-colors cursor-pointer">
                    <Link
                        to={"/Contact"}
                        className={`${
                            Active_nav === "Contact"
                                ? "text-green hover:text-green"
                                : "text-black_text hover:text-green"
                        }`}
                        // onClick={() => setActive_nav("Contact")}
                    >
                        Contact
                    </Link>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center h-full">
                <div className=" ">
                    <TbSettings className="text-2xl text-gray cursor-pointer " />
                </div>
                {isAuth ? (
                    <>
                        <div
                            className=" h-full"
                            onMouseEnter={() => setNotifications_open(true)}
                            onMouseLeave={() => setNotifications_open(false)}
                        >
                            <MdNotificationsNone className="text-gray text-2xl cursor-pointer h-full" />
                            {Notifications_open && (
                                <div
                                    className="absolute py-2 top-full md:right-[2vw] lg:right-[4vw]  xl:right-[8vw] 2xl:right-[12vw] bg-white w-[160px] shadow-md rounded border border-gray flex flex-col items-start"
                                    onMouseEnter={() =>
                                        setNotifications_open(true)
                                    }
                                    onMouseLeave={() =>
                                        setNotifications_open(false)
                                    }
                                >
                                    {/* <div className="triangle-up"></div> */}
                                    <Link
                                        to={`/Profile`}
                                        className="flex items-center gap-3 pl-4 mb-1 "
                                        onClick={() =>
                                            setNotifications_open(false)
                                        }
                                    >
                                        <FaUserTie className="text-gray text-2xl cursor-pointer" />
                                        <div className="flex flex-col">
                                            <span className="underline font-semibold text-gray text-xl">
                                                Profile
                                            </span>
                                            <span className="text-sm">
                                                {FirstName + LastName}
                                            </span>
                                        </div>
                                    </Link>
                                    <div className="bg-gray w-full h-[1px]"></div>
                                    <div
                                        className="text-red-600 rounded-b-xl flex items-center gap-2 pl-4 mt-4"
                                        onClick={() => {
                                            Logout();
                                            setNotifications_open(false);
                                        }}
                                    >
                                        <TbLogout />
                                        Logout
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className=" h-full"
                            onMouseEnter={() => setUser_menu_open(true)}
                            onMouseLeave={() => setUser_menu_open(false)}
                        >
                            <FaUserTie className="text-gray text-xl cursor-pointer h-full" />
                            {/* Laptop user small menu */}
                            {User_menu_open && (
                                <div
                                    className="absolute py-2 top-full  md:right-[1vw] lg:right-[1vw]  xl:right-[4vw] 2xl:right-[8vw]  bg-white w-[160px] shadow-md rounded border border-gray flex flex-col items-start"
                                    onMouseEnter={() => setUser_menu_open(true)}
                                    onMouseLeave={() =>
                                        setUser_menu_open(false)
                                    }
                                >
                                    {/* <div className="triangle-up"></div> */}
                                    <Link
                                        to={`/Profile`}
                                        className="flex items-center gap-3 pl-4 mb-1 "
                                        onClick={() => setUser_menu_open(false)}
                                    >
                                        <FaUserTie className="text-gray text-2xl cursor-pointer" />
                                        <div className="flex flex-col">
                                            <span className="underline font-semibold text-gray text-xl">
                                                Profile
                                            </span>
                                            <span className="text-sm">
                                                {FirstName + LastName}
                                            </span>
                                        </div>
                                    </Link>
                                    <div className="bg-gray w-full h-[1px]"></div>
                                    <div
                                        className="text-red-600 rounded-b-xl flex items-center gap-2 pl-4 mt-4"
                                        onClick={() => {
                                            Logout();
                                            setUser_menu_open(false);
                                        }}
                                    >
                                        <TbLogout />
                                        Logout
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <span className="bg-green text-[#fff] px-3 py-1 text-xl rounded-lg cursor-pointer">
                        <Link to={"/Login"}>Login</Link>
                    </span>
                )}
            </div>
        </div>
    );
}

export default Laptop_Nav_Items;
