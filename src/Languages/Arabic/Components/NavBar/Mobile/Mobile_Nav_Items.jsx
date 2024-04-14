import { IoSettingsOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

import { MdEventAvailable } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../Context/AppContext"; // Import your context hook
import { AiFillHome } from "react-icons/ai";


import { TbLogout } from "react-icons/tb";

function Mobile_Nav_Items({
    MobileNav_Open,
    Toogle_Menu_Bar,
    Logout,
    LogoutClicked,
    Active_nav,
}) {
    const { isAuth, _id } = useAppContext();

    return (
        <div className="flex ">
            {/* the right nav quitter */}
            <div
                onClick={Toogle_Menu_Bar}
                className={` md:hidden ${
                    MobileNav_Open ? "block  " : "hidden"
                } absolute  transition-all  select-none w-[30vw]  z-50 h-screen  opacity-[0.6] `}
            ></div>

            <div
                className={` md:hidden ${
                    MobileNav_Open
                        ? " translate-x-[30vw]"
                        : " translate-x-[200vh] "
                } absolute  transition-all duration-300 select-none w-[70vw]  z-50 bg-zinc-100 border-l-4  text-gray font-semibold `}
            >
                <div className=" w-[80%] m-auto h-screen text-xl  mt-8 ">
                    {!isAuth && (
                        <>
                            <div className="flex gap-2 mb-4 justify-center ">
                                <Link
                                    onClick={Toogle_Menu_Bar}
                                    to={"/Login"}
                                    className="select-none bg-green text-[#fff] px-3 py-2 rounded-lg "
                                >
                                    Login
                                </Link>
                                <Link
                                    onClick={Toogle_Menu_Bar}
                                    to={"/Register"}
                                    className="select-none bg-blue text-white px-3 py-2 rounded-lg"
                                >
                                    SignUp
                                </Link>
                            </div>
                            <div className=" w-full rounded-xl m-auto h-[2px]  bg-gray mb-4"></div>
                        </>
                    )}

                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/"}
                        className={`select-none flex gap-2 mb-4 w-[120px] m-auto ${
                            Active_nav === ""
                                ? " text-green hover:text-green"
                                : "text-gray hover:text-green "
                        }`}
                    >
                        <AiFillHome className=" text-2xl" />
                        Home
                    </Link>
                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/Services"}
                        className={`select-none flex  gap-2  mb-4 w-[120px] m-auto ${
                            Active_nav === "Services"
                                ? " text-green hover:text-green"
                                : "text-gray hover:text-green "
                        }`}
                    >
                        <FaRegHandshake className=" text-3xl" />
                        Services
                    </Link>
                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/Courses"}
                        className={`select-none flex items-center   gap-2  mb-4 w-[120px] m-auto ${
                            Active_nav === "Courses"
                                ? " text-green hover:text-green"
                                : "text-gray hover:text-green "
                        }`}
                    >
                        <FaBook className=" text-2xl" />
                        Courses
                    </Link>
                    <div className=" w-full rounded-xl m-auto h-[2px]  bg-gray mb-4"></div>
                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/Events"}
                        className={`select-none flex  gap-2 mb-4 w-[120px] m-auto ${
                            Active_nav === "Events"
                                ? " text-green hover:text-green"
                                : "text-gray hover:text-green "
                        }`}
                    >
                        <MdEventAvailable className=" text-3xl" />
                        Events
                    </Link>
                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/Blogs"}
                        className={`select-none flex  gap-2 mb-4 w-[120px] m-auto ${
                            Active_nav === "Blogs"
                                ? " text-green hover:text-green"
                                : "text-gray hover:text-green "
                        }`}
                    >
                        <RiArticleFill className=" text-3xl" />
                        Blogs
                    </Link>
                    <Link
                        onClick={Toogle_Menu_Bar}
                        to={"/Contact"}
                        className={`select-none flex   gap-2 w-[120px] m-auto
                        ${
                            Active_nav === "Contact"
                                ? " text-green hover:text-green"
                                : "text-gray hover:text-green "
                        }`}
                    >
                        <IoCall className=" text-3xl" />
                        Contact
                    </Link>
                    {isAuth ? (
                        <>
                            {!LogoutClicked ? (
                                <div
                                    className="text-red-600   flex items-center  gap-2 mt-10 w-[120px] m-auto"
                                    onClick={() => {
                                        Logout();
                                    }}
                                >
                                    <TbLogout />
                                    Logout
                                </div>
                            ) : (
                                <div className=" w-full flex items-center justify-center mt-10  text-red-600">
                                    <span className="small-loader"></span>
                                </div>
                            )}
                        </>
                    ) : null}
                </div>
                {/* {isAuth ? (
                    <div
                        className="text-red-600  flex items-center justify-center gap-2  "
                        onClick={() => {
                            Logout();
                        }}
                    >
                        <TbLogout />
                        Logout
                    </div>
                ) : null} */}
            </div>
        </div>
    );
}

export default Mobile_Nav_Items;
