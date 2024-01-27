import React from "react";
import Logo from "../../public/Logo.png";
import Setting from "../../public/setting.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

function NavBar() {
    const [open, setOpen] = useState(false);
    function Clicked() {
        setOpen(!open);
    }
    return (
        <div className=" fixed z-40 w-full">
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
                <div className="  hidden md:flex items-center justify-center gap-7 text-lg text-grayZ ">
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
                            Login
                        </span>
                    </div>
                </div>
            </div>
            {/* Moblie nav bar */}
            <div
                className={`md:hiddne ${
                    open ? " translate-x-[29vw]" : " translate-x-[100vw] "
                } absolute  transition-all select-none w-[70vw]  bg-white z-50`}
            >
                <div className=" flex flex-col items-start justify-start h-screen text-3xl gap-6 mt-8">
                    <div className=" ">Servecis</div>
                    <div>Formations</div>
                    <div>Events</div>
                    <div>Blogs</div>
                    <div>Contact</div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
