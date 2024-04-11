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
import { useState } from "react";
function Navbar({ Active_nav, setActive_nav, userId, user }) {
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
        <div className=" w-full h-full shrink-0 overflow-y-auto custom-overflow overflow-x-hidden">
            <div className=" flex gap-3 items-center text-xl md:text-4xl text-green justify-center pt-4 ">
                <div>
                    <img src={logo} alt="logo" className=" w-8 md:w-12" />
                </div>
                <div>Skate</div>
            </div>
            <div className=" w-full h-[1px] bg-white my-6"></div>
            {/* nav items */}

            <div className=" w-[95%]  md:w-[80%] m-auto text-white  text-sm md:text-xl  lg:text-2xl flex flex-col gap-10 mt-8">
                <Link
                    to={`/Profile/${userId}`}
                    className={` flex items-center cursor-pointer gap-3 ${
                        !location.pathname.split("/")[3] && "text-green "
                    }`}
                >
                    <FaUser />
                    <div>Profile</div>
                </Link>
                <Link
                    to={`/Profile/${userId}/Edit`}
                    className={`select-none flex items-center gap-3 cursor-pointer ${
                        Active_nav == "Edit" && "text-green"
                    }`}
                >
                    <FaPen className=" text-lg" />
                    <div>Edit Profile</div>
                </Link>
                <Link
                    to={`/Profile/${userId}/Notifications`}
                    className={`select-none flex items-center gap-3 cursor-pointer ${
                        Active_nav == "Notifications" && "text-green"
                    }`}
                >
                    <div className=" relative">
                        <IoIosNotifications className=" shrink-0" />
                        {unReaded_Notif && Active_nav != "Notifications" && (
                            <div className=" absolute w-2 h-2 rounded-full bg-red-600 right-0 top-0">
                                {" "}
                            </div>
                        )}
                    </div>
                    <div>Notifications</div>
                </Link>
                <Link
                    to={`/Profile/${userId}/Requests`}
                    className={`select-none flex items-center gap-3 cursor-pointer ${
                        Active_nav == "Requests" && "text-green"
                    }`}
                >
                    <IoNewspaper />
                    <div>Requests</div>
                </Link>
                <Link
                    to={`/Profile/${userId}/Courses`}
                    className={`select-none flex items-center gap-3 cursor-pointer ${
                        Active_nav == "Courses" && "text-green"
                    }`}
                >
                    <FaBook />
                    <div>Courses</div>
                </Link>
                <Link
                    to={`/Profile/${userId}/Services`}
                    className={`select-none flex items-center gap-3 cursor-pointer ${
                        Active_nav == "Services" && "text-green"
                    }`}
                >
                    <FaHandshake />
                    <div>Services</div>
                </Link>

                <div
                    className={` flex items-center gap-3 cursor-pointer text-xl  text-white pb-5 `}
                    onClick={() => {
                        Navigate("/");
                    }}
                >
                    <TbWorld className=" shrink-0" />
                    <div className=" text-sm md:text-lg">
                        Back to the Website
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
