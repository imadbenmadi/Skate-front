import React from "react";
import Logo from "../../../public/Logo.png";
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
import { FaUserTie } from "react-icons/fa";
import { useAppContext } from "../../Context/AppContext";
import { useLocation } from "react-router";
import { TbLogout } from "react-icons/tb";
import Course from "../../../public/Course.png";
import axios from "axios";
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
    const Logout = async() => {
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
            } else {
                console.error("Failed to log out");
                // Handle the case where the server failed to log out the user
            }
        } catch (error) {
            console.error("An unexpected error occurred during logout", error);
            // Handle unexpected errors during logout
        }
    }
    return (
        <div
            className={`fixed z-40 w-full bg-white transition-transform duration-200 ${
                visible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className=" flex shadow-lg justify-between md:justify-around select-none ">
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
                <div
                    className={`${
                        MobileNav_Open ? "hidden" : "block"
                    } md:hidden flex flex-col items-center justify-center mr-10`}
                >
                    <IoMenu
                        className=" text-5xl text-green text cursor-pointer"
                        onClick={Toogle_Menu_Bar}
                    />
                </div>
                <div
                    className={` ${
                        MobileNav_Open ? "block" : "hidden"
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

                    <Link to={"/Settings"}>
                        <IoSettingsOutline className=" text-3xl text-gray cursor-pointer" />
                    </Link>
                    {isAuth ? (
                        <div className=" relative">
                            <FaUserTie
                                className=" text-gray text-2xl cursor-pointer"
                                onClick={Toogle_User_Open}
                            />
                            {/* Laptop user small menu */}
                            {user_Open ? (
                                <div className=" absolute py-2 pl-4 top-[40px] -right-12 bg-white w-[160px] shadow-md rounded-b-xl  flex flex-col items-start gap-4">
                                    <Link
                                        to={`/Profile/${_id}`}
                                        className="   flex flex-col "
                                        onClick={Toogle_User_Open}
                                    >
                                        <span className=" underline font-semibold text-gray text-2xl">
                                            Profile
                                        </span>
                                        <span className=" text-sm">
                                            {FirstName + LastName}
                                        </span>
                                    </Link>

                                    <Link
                                        to={"/Mycourses"}
                                        className=" flex items-center gap-2 text-green "
                                        onClick={Toogle_User_Open}
                                    >
                                        <img
                                            src={Course}
                                            alt=""
                                            className=" w-5 h-5"
                                        />
                                        My Coursers
                                    </Link>
                                    <div
                                        className=" text-red-600 rounded-b-xl flex items-center gap-2 "
                                        onClick={() => {
                                            Logout();
                                            Toogle_User_Open();
                                        }}
                                    >
                                        <TbLogout />
                                        Logout
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ) : (
                        <span className=" bg-green text-[#fff] px-3 py-1 text-xl rounded-lg cursor-pointer">
                            <Link to={"/Login"}>Login</Link>
                        </span>
                    )}
                </div>
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
