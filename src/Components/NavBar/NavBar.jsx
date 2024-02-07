import React from "react";
import Logo from "../../../public/Logo.png";
import { useState, useEffect } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";
import { useLocation } from "react-router";

import axios from "axios";
import Menu_Toogler from "./Menu_Toogler";
import Laptop_Nav_Items from "./Laptop/Laptop_Nav_Items";
function NavBar({ Active_nav, setActive_nav }) {
    const { isAuth, FirstName, LastName, _id } = useAppContext();
    const { set_Auth, store_login } = useAppContext();
    const location = useLocation();

    const [MobileNav_Open, set_MobileNav_Open] = useState(false);
    function Toogle_Menu_Bar() {
        set_MobileNav_Open(!MobileNav_Open);
    }
    const [user_Open, set_User_Open] = useState(false);
    function Toogle_User_Open() {
        set_User_Open(!user_Open);
    }
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(currentScrollPos <= prevScrollPos || currentScrollPos === 0);
        setPrevScrollPos(currentScrollPos);
    };
    useEffect(() => {
        setActive_nav(location.pathname.substring(1));
    }, [location.pathname]);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);
    const Logout = async () => {
        try {
            // Send a request to the logout endpoint on the server
            const response = await axios.post(
                "http://localhost:3000/logout",
                {},
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status === 204) {
                // Successfully logged out, you may want to redirect to the login page or update the UI accordingly
                console.log("Logged out successfully");
                store_login({
                    FirstName: "",
                    LastName: "",
                    Email: "",
                    Gender: null,
                    Age: null,
                    Courses: [],
                    _id: null,
                });
                set_Auth(false);

                // You can use state or context to handle the logout state in your application
            } else if (response.status === 429) {
                console.log("Too many requests");
                Swal.fire(
                    "Error!",
                    `Too many requests ,try again latter\n  ${response.data.error}`,
                    "error"
                );
            } else {
                console.error("Failed to log out");
                // Handle the case where the server failed to log out the user
            }
        } catch (error) {
            console.error("An unexpected error occurred during logout", error);
            // Handle unexpected errors during logout
        }
    };
    return (
        <div
            className={` fixed min-h-[10%] h-[10%] m-0  z-40 w-full  transition-transform duration-200`}
        >
            <div className=" h-full  flex shadow-lg bg-white justify-between md:justify-around select-none ">
                <div className=" p-2 ml-5 md:ml-0">
                    <Link
                        to={"/"}
                        // onClick={() => setActive_nav("Home")}
                    >
                        <img
                            src={Logo}
                            alt="Logo"
                            className=" w-14 md:w-[50px] "
                        />
                    </Link>
                </div>
                {/* Mobile menu Toogler */}
                <Menu_Toogler
                    MobileNav_Open={MobileNav_Open}
                    set_MobileNav_Open={set_MobileNav_Open}
                    Toogle_Menu_Bar={Toogle_Menu_Bar}
                />
                {/* Laptop */}
                <Laptop_Nav_Items
                    Active_nav={Active_nav}
                    isAuth={isAuth}
                    FirstName={FirstName}
                    LastName={LastName}
                    _id={_id}
                    user_Open={user_Open}
                    Toogle_User_Open={Toogle_User_Open}
                    Logout={Logout}
                />
            </div>
            {/* Moblie nav bar */}
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
        </div>
    );
}

export default NavBar;
