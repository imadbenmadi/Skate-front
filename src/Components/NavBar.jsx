import React from "react";
import Logo from "../../public/Logo.png";
import Setting from "../../public/setting.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

function NavBar({ Active_nav, onNavClick }) {
    const [open, setOpen] = useState(false);
    function Toogle_Menu_Bar() {
        setOpen(!open);
    }
   
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(currentScrollPos <= prevScrollPos || currentScrollPos === 0);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);
    return (
        <div
            className={`fixed z-40 w-full bg-white transition-transform duration-200 ${
                visible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className=" flex shadow-lg justify-between md:justify-around select-none ">
                <div className=" p-2 ml-5 md:ml-0">
                    <Link to={"/"} onClick={() => onNavClick("Home")}>
                        <img
                            src={Logo}
                            alt="Logo"
                            className=" w-14 md:w-[50px] "
                        />
                    </Link>
                </div>
                {/* Mobile menu Toogler */}
                <div
                    className={`${
                        open ? "hidden" : "block"
                    } md:hidden flex flex-col items-center justify-center mr-10`}
                >
                    <IoMenu
                        className=" text-5xl text-green text cursor-pointer"
                        onClick={Toogle_Menu_Bar}
                    />
                </div>
                <div
                    className={` ${
                        open ? "block" : "hidden"
                    } md:hidden flex flex-col items-center justify-center mr-10`}
                >
                    <IoClose
                        className=" text-5xl text-green text cursor-pointer"
                        onClick={Toogle_Menu_Bar}
                    />
                </div>

                {/* Laptop */}
                <div className="  hidden md:flex items-center justify-center gap-7 text-lg text-black_text ">
                    <div className=" flex gap-5">
                        <div className=" hover:text-green transition-colors cursor-pointer">
                            <Link
                                to={"/Services"}
                                className={
                                    Active_nav === "Services"
                                        ? "text-green hover:text-green"
                                        : "text-black_text hover:text-green"
                                }
                                onClick={() => onNavClick("Services")}
                            >
                                Services
                            </Link>
                        </div>
                        <div className=" hover:text-green transition-colors cursor-pointer">
                            <Link
                                to={"/Formations"}
                                className={
                                    Active_nav === "Formations"
                                        ? "text-green hover:text-green"
                                        : "text-black_text hover:text-green"
                                }
                                onClick={() => onNavClick("Formations")}
                            >
                                Formations
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
                                onClick={() => onNavClick("Events")}
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
                                onClick={() => onNavClick("Blogs")}
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
                                onClick={() => onNavClick("Contact")}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className=" flex gap-3 items-center justify-center">
                        <Link to={"/Settings"}>
                            <IoSettingsOutline className=" text-3xl text-gray cursor-pointer" />
                        </Link>

                        <span className=" bg-green text-[#fff] px-3 py-1 text-xl rounded-lg cursor-pointer">
                            <Link to={"/Login"}>Login</Link>
                        </span>
                    </div>
                </div>
            </div>
            {/* Moblie nav bar */}
            <div className="flex">
                <div
                    onClick={Toogle_Menu_Bar}
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
                            to={"/Formations"}
                            className="w-[165px] flex cursor-pointer  gap-2 "
                        >
                            <FaBookReader className=" text-3xl" />
                            Formations
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
        </div>
    );
}

export default NavBar;
