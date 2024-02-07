import React from "react";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import Course from "../../../../public/Course.png";
import { FaUserTie } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

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
    return (
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
                                <img src={Course} alt="" className=" w-5 h-5" />
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
    );
}

export default Laptop_Nav_Items;
