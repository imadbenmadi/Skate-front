import React from "react";
import Logo from "../../public/Logo.png";
import Setting from "../../public/setting.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

function NavBar() {
    const [open, setOpen] = useState(false);
    function Clicked() {
        setOpen(!open);
    }
    return (
        <div className=" fixed z-40 w-full bg-white ">
            <div className=" flex shadow-lg justify-between md:justify-around select-none ">
                <div className=" p-2 ml-5 md:ml-0">
                    <img src={Logo} alt="Logo" className=" w-14 md:w-[80px] " />
                </div>
                {/* Mobile */}
                <div
                    className={`${
                        open ? "hidden" : "block"
                    } md:hidden flex flex-col items-center justify-center mr-10`}
                >
                    <IoMenu
                        className=" text-5xl text-green text cursor-pointer"
                        onClick={Clicked}
                    />
                </div>
                <div
                    className={` ${
                        open ? "block" : "hidden"
                    } md:hidden flex flex-col items-center justify-center mr-10`}
                >
                    <IoClose
                        className=" text-5xl text-green text cursor-pointer"
                        onClick={Clicked}
                    />
                </div>

                {/* Laptop */}
                <div className="  hidden md:flex items-center justify-center gap-7 text-lg text-black_text ">
                    <div className=" flex gap-5">
                        <div className=" hover:text-green transition-colors cursor-pointer">
                            Servecis
                        </div>
                        <div className=" hover:text-green transition-colors cursor-pointer">
                            Formations
                        </div>
                        <div className=" hover:text-green transition-colors cursor-pointer">
                            Events
                        </div>
                        <div className=" hover:text-green transition-colors cursor-pointer">
                            Blogs
                        </div>
                        <div className=" hover:text-green transition-colors cursor-pointer">
                            Contact
                        </div>
                    </div>

                    <IoSettingsOutline className=" text-3xl text-gray cursor-pointer" />

                    <div className=" ">
                        <span className=" bg-green text-[#fff] px-3 py-2 rounded-lg cursor-pointer">
                            Regester
                        </span>
                    </div>
                </div>
            </div>
            {/* Moblie nav bar */}
            <div className="flex">
                <div
                    onClick={Clicked}
                    className={` md:hidden ${
                        open ? " block bg-gray_white " : "hidden"
                    } absolute  transition-all select-none w-[30vw]  z-50 h-screen  opacity-[0.6] `}
                ></div>
                <div
                    className={` md:hidden ${
                        open ? " translate-x-[30vw]" : " translate-x-[100vw] "
                    } absolute  transition-all select-none w-[70vw]  z-50 bg-zinc-100 border-l-4  text-black_text font-semibold `}
                >
                    <div className=" flex flex-col items-center justify-start h-screen text-2xl gap-5 mt-8 ">
                        <div className="flex gap-2 cursor-pointer ">
                            <span className=" bg-green text-[#fff] px-3 py-2 rounded-lg cursor-pointer">
                                Regester
                            </span>
                            <span className=" bg-gray_white text-black_text px-3 py-2 rounded-lg cursor-pointer">
                                Login
                            </span>
                        </div>
                        <div className="w-[155px] flex cursor-pointer gap-2  ">
                            <IoSettingsOutline className=" text-3xl" />
                            Settings
                        </div>
                        <div className=" w-full h-1 bg-gray"></div>
                        <div className="w-[155px] flex cursor-pointer gap-2  ">
                            <FaRegHandshake className=" text-3xl" />
                            Servecis
                        </div>
                        <div className="w-[165px] flex cursor-pointer  gap-2 ">
                            <FaBookReader className=" text-3xl" />
                            Formations
                        </div>
                        <div className=" w-full h-1 bg-gray"></div>
                        <div className="w-[155px] flex cursor-pointer  gap-2">
                            <MdEventAvailable className=" text-3xl" />
                            Events
                        </div>
                        <div className="w-[155px] flex cursor-pointer  gap-2">
                            <RiArticleFill className=" text-3xl" />
                            Blogs
                        </div>
                        <div className="w-[155px] flex cursor-pointer  gap-2">
                            <IoCall className=" text-3xl" />
                            Contact
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
