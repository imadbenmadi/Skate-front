import { useState } from "react";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import Notifications_items from "./Notifications_items";
import { useAppContext } from "../../../../../Context/AppContext";
import { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import en from "../../../../../../public/en.png";
import ar from "../../../../../../public/ar.png";
import fr from "../../../../../../public/fr.png";
function Laptop_Nav_Items({
    Active_nav,
    isAuth,
    FirstName,
    Logout,
    LogoutClicked,
}) {
    const [unReaded_Notif, SetunReaded_Notif] = useState(false);
    const { Notifications, _id } = useAppContext();
    const [User_menu_open, setUser_menu_open] = useState(false);
    const [Notifications_open, setNotifications_open] = useState(false);
    useEffect(() => {
        if (isAuth && Notifications) {
            const hasUnreadNotification = Notifications.some(
                (notification) => !notification.Readed
            );
            SetunReaded_Notif(hasUnreadNotification);
        }
    }, [Notifications]);
    const [LanguageClicked, SetLanguageClicked] = useState(false);
    const toogle_LanguageClicked = () => {
        SetLanguageClicked(!LanguageClicked);
    };
    return (
        <div className="hidden  md:flex  items-center justify-center gap-7 text-lg text-black_text h-full ">
            <div className="flex gap-3 lg:gap-5">
                <div onClick={toogle_LanguageClicked} className="  relative ">
                    <div className=" flex items-center justify-center gap-1 cursor-pointer">
                        {/* <p>EN</p> */}
                        <img src={en} alt="" className=" w-6" />

                        {LanguageClicked ? (
                            <FaAngleUp className=" text-lg" />
                        ) : (
                            <FaAngleDown className=" text-lg" />
                        )}
                    </div>

                    {LanguageClicked && (
                        <div
                            className=" cursor-pointer w-24 h-fit shadow-sm bg-white rounded-b-lg
                                    absolute -left-8 -bottom-[129px] 
                                 flex flex-col items-center justify-center "
                        >
                            <Link
                                to={"/en"}
                                className=" text-green border-2 
                                        flex items-center justify-center gap-1
                                         w-full text-center py-1 px-6"
                            >
                                <img src={en} alt="" className=" w-4" />
                                <p className=" underline">English</p>
                            </Link>
                            <Link
                                to={"/fr"}
                                className="border-b w-full text-center py-1.5 px-6
                                        flex items-center justify-center gap-1"
                            >
                                <img src={fr} alt="" className=" w-4" />
                                <p className=" text-base">Français</p>
                            </Link>
                            <Link
                                to={"/ar"}
                                className=" w-full text-center  font-sans py-1 px-6
                                        flex items-center justify-center gap-3
                                        "
                            >
                                <img src={ar} alt="" className=" w-4" />
                                <p className=" font-sans font-semibold ">
                                    العربية
                                </p>
                            </Link>
                        </div>
                    )}
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/en"}
                        className={
                            !Active_nav 
                                ? "text-green hover:text-green select-none"
                                : "text-black_text hover:text-green select-none"
                        }
                    >
                        Home
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/en/Services"}
                        className={
                            Active_nav == "Services"
                                ? "text-green hover:text-green select-none"
                                : "text-black_text hover:text-green select-none"
                        }
                    >
                        Services
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/en/Courses"}
                        className={
                            Active_nav == "Courses"
                                ? "text-green hover:text-green select-none"
                                : "text-black_text hover:text-green select-none"
                        }
                    >
                        Courses
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/en/Events"}
                        className={
                            Active_nav == "Events"
                                ? "text-green hover:text-green select-none"
                                : "text-black_text hover:text-green select-none"
                        }
                    >
                        Events
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/en/Blogs"}
                        className={
                            Active_nav == "Blogs"
                                ? "text-green hover:text-green select-none"
                                : "text-black_text hover:text-green select-none"
                        }
                    >
                        Blogs
                    </Link>
                </div>
                <div className="  transition-colors cursor-pointer">
                    <Link
                        to={"/en/Contact"}
                        className={`${
                            Active_nav == "Contact"
                                ? "text-green hover:text-green select-none"
                                : "text-black_text hover:text-green select-none"
                        }`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center h-full">
                {/* <div className=" ">
                    <TbSettings
                        onClick={handleSettingsClick}
                        className="text-2xl text-gray cursor-pointer "
                    />
                </div> */}
                {isAuth ? (
                    <>
                        <div
                            className=" h-full flex items-center"
                            onMouseEnter={() => setNotifications_open(true)}
                            onMouseLeave={() => setNotifications_open(false)}
                        >
                            <div className=" relative flex items-center justify-center select-none">
                                <Link
                                    to={`/en/Profile/${_id}/Notifications`}
                                    className=""
                                >
                                    <MdNotificationsNone className="text-gray text-2xl cursor-pointer" />
                                </Link>
                                {isAuth && unReaded_Notif && (
                                    <div className=" absolute w-2 h-2 rounded-full bg-red-600 right-0 top-0">
                                        {" "}
                                    </div>
                                )}
                            </div>

                            {Notifications_open && (
                                <div
                                    className="absolute py-2 top-full md:right-[4vw] lg:right-[8vw] xl:right-[10vw] 2xl:right-[12vw]
                                     bg-white w-[300px] shadow-md rounded border border-gray flex flex-col items-start"
                                    onMouseEnter={() =>
                                        setNotifications_open(true)
                                    }
                                    onMouseLeave={() =>
                                        setNotifications_open(false)
                                    }
                                >
                                    <Notifications_items />
                                </div>
                            )}
                        </div>
                        <Link
                            to={`/en/Profile/${_id}`}
                            className="select-none h-full "
                            onMouseEnter={() => setUser_menu_open(true)}
                            onMouseLeave={() => setUser_menu_open(false)}
                        >
                            <FaUserTie className="text-gray text-md cursor-pointer h-full" />
                        </Link>
                        {User_menu_open && (
                            <div
                                className="absolute py-2 top-full  md:right-[1vw] lg:right-[1vw]  xl:right-[4vw] 2xl:right-[8vw] 
                                     bg-white w-[160px] shadow-md rounded border border-gray flex flex-col items-start"
                                onMouseEnter={() => setUser_menu_open(true)}
                                onMouseLeave={() => setUser_menu_open(false)}
                            >
                                <Link
                                    to={`/en/Profile/${_id}`}
                                    className="select-none flex items-center gap-3 pl-4 mb-1 "
                                    onClick={() => setUser_menu_open(false)}
                                >
                                    <FaUserTie className="text-gray text-2xl cursor-pointer" />
                                    <div className="flex flex-col">
                                        <span className="underline font-semibold text-gray text-xl">
                                            Profile
                                        </span>
                                        <span className="text-sm break-all">
                                            <span className="text-sm break-all">
                                                {FirstName}
                                            </span>{" "}
                                        </span>
                                    </div>
                                </Link>
                                <div className="bg-gray w-full h-[1px]"></div>
                                <>
                                    {!LogoutClicked ? (
                                        <div
                                            className="text-red-600 rounded-b-xl flex items-center gap-2 pl-4 mt-4 mb-2 cursor-pointer"
                                            onClick={() => {
                                                Logout();
                                                setUser_menu_open(false);
                                            }}
                                        >
                                            <TbLogout />
                                            Logout
                                        </div>
                                    ) : (
                                        <div className=" w-full flex items-center justify-center mt-4 mb-2 text-red-600 m-auto">
                                            <span className="small-loader  w-full m-auto"></span>
                                        </div>
                                    )}
                                </>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <span className="bg-green text-[#fff] px-3 py-1 text-xl rounded-lg cursor-pointer">
                            <Link to={"/en/Login"} className="select-none">
                                Login
                            </Link>
                        </span>
                        <span className="bg-blue text-[#fff] px-3 py-1 text-xl rounded-lg cursor-pointer">
                            <Link to={"/en/Register"} className="select-none">
                                SignUp
                            </Link>
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}

export default Laptop_Nav_Items;
