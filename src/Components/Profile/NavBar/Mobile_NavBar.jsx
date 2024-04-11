import { useEffect } from "react";
import logo from "../../../../public/skate_circle.png";
import { FaUser } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Navbar({
    Active_nav,
    setActive_nav,
    openNav,
    SetOpenNav,
    userId,
    user,
}) {
    const Navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        setActive_nav(location.pathname.split("/")[3]);
    }, [location.pathname]);
    const [unReaded_Notif, SetunReaded_Notif] = useState(false);
    useEffect(() => {
        if (user) {
            const hasUnreadNotification = user.user.Notifications.some(
                (notification) => !notification.Readed
            );
            SetunReaded_Notif(hasUnreadNotification);
        }
    }, []);
    return (
        <div className=" w-full shrink-0 h-full overflow-y-auto custom-overflow">
            {openNav ? (
                <>
                    <IoClose
                        className=" text-4xl text-green  mb-8 cursor-pointer mt-6 text-center m-auto"
                        onClick={() => SetOpenNav(false)}
                    />
                    <div className=" flex flex-col gap-10 ml-4">
                        {/* nav items */}
                        <Link
                            to={`/Profile/${userId}`}
                            onClick={() => SetOpenNav(false)}
                            className={`flex items-center cursor-pointer gap-1 ${
                                !location.pathname.split("/")[3] &&
                                "text-green "
                            } ${
                                location.pathname.split("/")[3]
                                    ? "text-white"
                                    : ""
                            }`}
                        >
                            <FaUser />
                            <div>Profile</div>
                        </Link>
                        <Link
                            to={`/Profile/${userId}/Edit`}
                            onClick={() => SetOpenNav(false)}
                            className={`select-none flex items-center gap-1 cursor-pointer ${
                                Active_nav == "Edit" && "text-green"
                            } ${Active_nav !== "Edit" ? "text-white" : ""}`}
                        >
                            <FaPen />
                            <div>Edit Profile</div>
                        </Link>
                        <Link
                            to={`/Profile/${userId}/Notifications`}
                            onClick={() => SetOpenNav(false)}
                            className={`select-none flex items-center gap-1 cursor-pointer ${
                                Active_nav == "Notifications" && "text-green"
                            } ${
                                Active_nav !== "Notifications"
                                    ? "text-white"
                                    : ""
                            }`}
                        >
                            <div className=" relative">
                                <IoIosNotifications className=" shrink-0" />
                                {unReaded_Notif &&
                                    Active_nav != "Notifications" && (
                                        <div className=" absolute w-2 h-2 rounded-full bg-red-600 right-0 top-0">
                                            {" "}
                                        </div>
                                    )}
                            </div>
                            <div className=" text-sm">Notifications</div>
                        </Link>
                        <Link
                            to={`/Profile/${userId}/Requests`}
                            onClick={() => SetOpenNav(false)}
                            className={`select-none flex items-center gap-1 cursor-pointer ${
                                Active_nav == "Requests" && "text-green"
                            } ${Active_nav !== "Requests" ? "text-white" : ""}`}
                        >
                            <IoNewspaper />
                            <div>Requests</div>
                        </Link>
                        <Link
                            to={`/Profile/${userId}/Courses`}
                            onClick={() => SetOpenNav(false)}
                            className={`select-none flex items-center gap-1 cursor-pointer ${
                                Active_nav == "Courses" && "text-green"
                            } ${Active_nav !== "Courses" ? "text-white" : ""}`}
                        >
                            <FaBook />
                            <div>Courses</div>
                        </Link>
                        <Link
                            to={`/Profile/${userId}/Services`}
                            onClick={() => SetOpenNav(false)}
                            className={`select-none flex items-center gap-1 cursor-pointer ${
                                Active_nav == "Services" && "text-green"
                            } ${Active_nav !== "Services" ? "text-white" : ""}`}
                        >
                            <FaHandshake />
                            <div>Services</div>
                        </Link>
                        <div
                            className={` flex items-center gap-1 cursor-pointer text-xl text-white  `}
                            onClick={() => {
                                Navigate("/");
                            }}
                        >
                            <TbWorld />
                            <div className="text-sm">Back to the Website</div>
                        </div>
                    </div>
                </>
            ) : (
                <div className=" flex flex-col items-center justify-center gap-10 text-xl">
                    <IoMenu
                        className=" text-4xl text-green  cursor-pointer mt-6"
                        onClick={() => SetOpenNav(true)}
                    />
                    {/* <div className=" w-full h-[1px] bg-white"></div> */}
                    {/* nav items */}

                    <Link
                        to={`/Profile/${userId}`}
                        className={`flex items-center cursor-pointer ${
                            !location.pathname.split("/")[3]
                                ? "text-green"
                                : "text-white"
                        }`}
                    >
                        <FaUser />
                    </Link>
                    <Link
                        to={`/Profile/${userId}/Edit`}
                        className={`text-lg select-none flex items-center gap-3 cursor-pointer ${
                            Active_nav === "Edit" ? "text-green" : "text-white"
                        }`}
                    >
                        <FaPen />
                    </Link>
                    <Link
                        to={`/Profile/${userId}/Notifications`}
                        className={`text-2xl select-none flex items-center gap-3 cursor-pointer ${
                            Active_nav === "Notifications"
                                ? "text-green"
                                : "text-white"
                        }`}
                    >
                        <div className=" relative">
                            <IoIosNotifications className=" shrink-0" />
                            {unReaded_Notif &&
                                Active_nav != "Notifications" && (
                                    <div className=" absolute w-2 h-2 rounded-full bg-red-600 right-0 top-0">
                                        {" "}
                                    </div>
                                )}
                        </div>
                    </Link>
                    <Link
                        to={`/Profile/${userId}/Requests`}
                        className={`select-none flex items-center gap-3 cursor-pointer ${
                            Active_nav === "Requests"
                                ? "text-green"
                                : "text-white"
                        }`}
                    >
                        <IoNewspaper />
                    </Link>
                    <Link
                        to={`/Profile/${userId}/Courses`}
                        className={`select-none flex items-center gap-3 cursor-pointer ${
                            Active_nav === "Courses"
                                ? "text-green"
                                : "text-white"
                        }`}
                    >
                        <FaBook />
                    </Link>
                    <Link
                        to={`/Profile/${userId}/Services`}
                        className={`select-none flex items-center gap-3 cursor-pointer ${
                            Active_nav === "Services"
                                ? "text-green"
                                : "text-white"
                        }`}
                    >
                        <FaHandshake />
                    </Link>

                    <div
                        className={` flex items-center gap-3 cursor-pointer text-xl  text-white  `}
                        onClick={() => {
                            Navigate("/");
                        }}
                    >
                        <TbWorld />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
