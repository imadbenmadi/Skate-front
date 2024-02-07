import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import {Link} from "react-router-dom";
function Mobile_Nav_Items({ MobileNav_Open , Toogle_Menu_Bar }) {
    return (
        <div className="flex">
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
                        : " translate-x-[100vw] "
                } absolute  transition-all select-none w-[70vw]  z-50 bg-zinc-100 border-l-4  text-black_text font-semibold `}
            >
                <div className=" flex flex-col items-center justify-start h-screen text-2xl gap-5 mt-8 ">
                    <div className="flex gap-2 cursor-pointer ">
                        <Link
                            to={"/Login"}
                            className=" bg-green text-[#fff] px-3 py-2 rounded-lg cursor-pointer"
                        >
                            Login
                        </Link>
                        <Link
                            to={"/Register"}
                            className=" bg-gray_white text-black_text px-3 py-2 rounded-lg cursor-pointer"
                        >
                            Register
                        </Link>
                    </div>
                    <Link
                        to={"/Settings"}
                        className="w-[155px] flex cursor-pointer gap-2  "
                    >
                        <IoSettingsOutline className=" text-3xl" />
                        Settings
                    </Link>
                    <div className=" w-full h-1 bg-gray"></div>
                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/Services"}
                        className="w-[155px] flex cursor-pointer gap-2  "
                    >
                        <FaRegHandshake className=" text-3xl" />
                        Services
                    </Link>
                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/Courses"}
                        className="w-[165px] flex cursor-pointer  gap-2 "
                    >
                        <FaBookReader className=" text-3xl" />
                        Courses
                    </Link>
                    <div className=" w-full h-1 bg-gray"></div>
                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/Events"}
                        className="w-[155px] flex cursor-pointer  gap-2"
                    >
                        <MdEventAvailable className=" text-3xl" />
                        Events
                    </Link>
                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/Blogs"}
                        className="w-[155px] flex cursor-pointer  gap-2"
                    >
                        <RiArticleFill className=" text-3xl" />
                        Blogs
                    </Link>
                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/Contact"}
                        className="w-[155px] flex cursor-pointer  gap-2"
                    >
                        <IoCall className=" text-3xl" />
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Mobile_Nav_Items