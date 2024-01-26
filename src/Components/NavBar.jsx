import React from "react";
import Logo from "../../public/Logo.png";
import Setting from "../../public/setting.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
function NavBar() {
    const [open, setOpen] = useState(false);
    function Clicked() {
        setOpen(!open);
    }
    return (
        <div className="overflow-x-hidden relative">
            <div className=" flex shadow-lg justify-between select-none ">
                <div className=" p-2">
                    <img src={Logo} alt="Logo" className=" w-20 " />
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
                <div className="  hidden md:flex">
                    <div className=" flex gap-5">
                        <div className=" ">Servecis</div>
                        <div>Formations</div>
                        <div>Events</div>
                        <div>Blogs</div>
                        <div>Contact</div>
                    </div>
                    <div>
                        <div>
                            <img src={Setting} alt="" />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div
                className={`${
                    open ? " translate-x-0" : " translate-x-[100vw] "
                } absolute mt-8 transition-all select-none w-[100vw] `}
            >
                <div className=" flex flex-col items-center justify-center bg-gray-800 ">
                    <div className=" ">Servecis</div>
                    <div>Formations</div>
                    <div>Events</div>
                    <div>Blogs</div>
                    <div>Contact</div>
                </div>
            </div>
            <div>hello</div>
        </div>
    );
}

export default NavBar;
