import React from "react";
import Logo from "../../public/Logo.png";
import Setting from "../../public/setting.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function NavBar() {
    return (
        <div className=" flex shadow-lg justify-between ">
            <div className=" p-2">
                <img src={Logo} alt="Logo" className=" w-20 " />
            </div>
            <div className=" md:hidden flex flex-col items-center justify-center mr-10">
                <IoMenu className=" text-5xl text-gray-500	" />
            </div>
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
    );
}

export default NavBar;
