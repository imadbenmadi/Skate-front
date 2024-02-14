import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../Context/AppContext"; // Import your context hook
import { MdNotificationsNone } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { useState } from "react";
import Swal from "sweetalert2";
function Mobile_Nav_Items({ MobileNav_Open, Toogle_Menu_Bar, Logout,LogoutClicked }) {
    const { isAuth } = useAppContext();
    const handleSettingsClick = () => {
        Swal.fire({
            title: "Settings",
            html: `
                <div className="flex flex-col gap-4 justify-start items-start w-[200px]">
                    <div class="mb-4 flex items-center justify-center gap-4 w-[200px] m-auto">
                        <label for="language" class=" text-sm font-medium text-gray-700">Language:</label>
                        <select id="language" class="mt-1  w-[100px] m-auto py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                        </select>
                    </div>
                    <div clasName='flex gap-3 w-[200px] items-center justify-start'>
                        <label for="darkMode" class="text-sm font-medium text-gray-700">Dark Mode</label>
                        <input type="checkbox" id="darkMode" class="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                    </div>
                </div>
        
      `,
            showCancelButton: true,
            focusConfirm: false,
            preConfirm: () => {
                const language = document.getElementById("language").value;
                const darkMode = document.getElementById("darkMode").checked;
                // You can handle language and dark mode settings here
                console.log("Selected language:", language);
                console.log("Dark mode enabled:", darkMode);
            },
        });
    };
    return (
        <div className="flex">
            {/* the right nav quitter */}
            <div
                onClick={Toogle_Menu_Bar}
                className={` md:hidden ${
                    MobileNav_Open ? " block bg-gray_white " : "hidden"
                } absolute  transition-all select-none w-[30vw]  z-50 h-screen  opacity-[0.6] `}
            ></div>

            <div
                className={` md:hidden ${
                    MobileNav_Open
                        ? " translate-x-[30vw]"
                        : " translate-x-[200vh] "
                } absolute  transition-all select-none w-[70vw]  z-50 bg-zinc-100 border-l-4  text-gray font-semibold `}
            >
                <div className=" flex flex-col items-center justify-start h-screen text-2xl  mt-8 ">
                    {isAuth ? (
                        <>
                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/Profile"}
                                className="w-[155px] flex  items-center gap-2 mb-4 "
                            >
                                <FaUserTie className="text-2xl" />
                                Profile
                            </Link>

                            <Link
                                onClick={Toogle_Menu_Bar}
                                to={"/Notifications"}
                                className="w-[170px] flex mb-4 "
                            >
                                <MdNotificationsNone className=" text-3xl" />
                                Notifications
                            </Link>
                        </>
                    ) : (
                        <>
                            <div className="flex gap-2 mb-4 ">
                                <Link
                                    onClick={Toogle_Menu_Bar}
                                    to={"/Login"}
                                    className=" bg-green text-[#fff] px-3 py-2 rounded-lg "
                                >
                                    Login
                                </Link>
                                <Link
                                    onClick={Toogle_Menu_Bar}
                                    to={"/Register"}
                                    className=" bg-gray_white text-black_text px-3 py-2 rounded-lg"
                                >
                                    Register
                                </Link>
                            </div>
                        </>
                    )}

                    <div
                        className="w-[155px] flex gap-2 mb-4 "
                        onClick={() => {
                            Toogle_Menu_Bar();
                            handleSettingsClick();
                        }}
                    >
                        <IoSettingsOutline className=" text-3xl" />
                        Settings
                    </div>
                    <div className=" w-full h-1 bg-gray mb-4"></div>
                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/Services"}
                        className="w-[155px] flex gap-2  mb-4 "
                    >
                        <FaRegHandshake className=" text-3xl" />
                        Services
                    </Link>
                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/Courses"}
                        className="w-[165px] flex  gap-2  mb-4"
                    >
                        <FaBookReader className=" text-3xl" />
                        Courses
                    </Link>
                    <div className=" w-full h-1 bg-gray mb-4"></div>
                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/Events"}
                        className="w-[155px] flex  gap-2 mb-4"
                    >
                        <MdEventAvailable className=" text-3xl" />
                        Events
                    </Link>
                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/Blogs"}
                        className="w-[155px] flex  gap-2 mb-4"
                    >
                        <RiArticleFill className=" text-3xl" />
                        Blogs
                    </Link>
                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/Contact"}
                        className="w-[155px] flex  gap-2 "
                    >
                        <IoCall className=" text-3xl" />
                        Contact
                    </Link>
                    {isAuth ? (
                        <>
                            {!LogoutClicked ? (
                                <div
                                    className="text-red-600 w-[155px]  flex items-center gap-2 mt-12 "
                                    onClick={() => {
                                        Logout();
                                    }}
                                >
                                    <TbLogout />
                                    Logout
                                </div>
                            ) : (
                                <div className=" w-full flex items-center justify-center mt-12 text-red-600">
                                    <span className="small-loader"></span>
                                </div>
                            )}
                        </>
                    ) : null}
                </div>
                {isAuth ? (
                    <div
                        className="text-red-600  flex items-center justify-center gap-2 mt-10 "
                        onClick={() => {
                            Logout();
                        }}
                    >
                        <TbLogout />
                        Logout
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Mobile_Nav_Items;
