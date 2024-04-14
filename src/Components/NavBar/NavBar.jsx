import Logo from "../../../public/Logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";
import { useLocation } from "react-router";
import axios from "axios";
import Menu_Toogler from "./Mobile/Menu_Toogler";
import Laptop_Nav_Items from "./Laptop/Laptop_Nav_Items";
import Mobile_Nav_Items from "./Mobile/Mobile_Nav_Items";
import Swal from "sweetalert2";
import { FaUserTie } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
function NavBar({ Active_nav, setActive_nav }) {
    const [LanguageClicked, SetLanguageClicked] = useState(false);
    const toogle_LanguageClicked = () => {
        SetLanguageClicked(!LanguageClicked);
    };

    const { isAuth, FirstName, LastName, _id, Notifications } = useAppContext();
    const [unReaded_Notif, SetunReaded_Notif] = useState(false);

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
    useEffect(() => {
        setActive_nav(location.pathname.split("/")[1]);
    }, [location.pathname]);
    const [LogoutClicked, setLogoutClicked] = useState(false);
    const Logout = async () => {
        setLogoutClicked(true);
        try {
            // Send a request to the logout endpoint on the server
            const response = await axios.post(
                "https://backend.skate.dz/logout",
                {},
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status == 204) {
                // Successfully logged out, you may want to redirect to the login page or update the UI accordingly
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
            } else if (response.status == 429) {
                Swal.fire(
                    "Error!",
                    `Too many requests ,try again latter\n  ${response.data.message}`,
                    "error"
                );
            } else {
                Swal.fire("Error!", `Something Went Wrong ,`, "error");
            }
        } catch (error) {
            Swal.fire("Error!", `Something Went Wrong `, "error");
        }
        setLogoutClicked(false);
    };
    useEffect(() => {
        if (isAuth && Notifications) {
            const hasUnreadNotification = Notifications.some(
                (notification) => !notification.Readed
            );
            SetunReaded_Notif(hasUnreadNotification);
        }
    }, [Notifications]);
    return (
        <div
            // className={` fixed  h-[60px] m-0  z-40 w-[97.6vw] md:w-[99vw] xl:w-[99.5vw] `}
            className={` fixed  h-[50px] md:h-[60px] m-0  z-40 w-full `}
        >
            <div className=" h-full  flex shadow-lg bg-white justify-between items-center md:justify-around select-none ">
                <div className=" p-2 ml-5 md:ml-0">
                    <Link to={"/"} className="select-none">
                        <img
                            loading="lazy"
                            src={Logo}
                            alt="Logo"
                            className=" w-10 md:w-[45px] "
                        />
                    </Link>
                </div>

                <div className=" flex gap-5 items-center md:hidden">
                    <div className=" flex items-center h-full gap-5 text-gray ">
                        <div
                            onClick={toogle_LanguageClicked}
                            className="  relative"
                        >
                            <div className=" flex items-center justify-center gap-1">
                                <p>EN</p>
                                {LanguageClicked ? (
                                    <FaAngleUp className=" text-lg" />
                                ) : (
                                    <FaAngleDown className=" text-lg" />
                                )}
                            </div>

                            {LanguageClicked && (
                                <div
                                    className="w-24 h-fit shadow-sm bg-white rounded-b-lg
                                    absolute -left-8 -bottom-[100px] 
                                 flex flex-col items-center justify-center "
                                >
                                    <Link
                                        to={"/"}
                                        className="border-b w-full text-center py-1 "
                                    >
                                        English
                                    </Link>
                                    <Link
                                        to={"/fr"}
                                        className="border-b w-full text-center py-1"
                                    >
                                        Français
                                    </Link>
                                    <Link
                                        to={"/ar"}
                                        className=" w-full text-center  font-sans py-1"
                                    >
                                        العربية
                                    </Link>
                                </div>
                            )}
                        </div>

                        {isAuth && (
                            <>
                                <div className="relative">
                                    <Link
                                        onClick={Toogle_Menu_Bar}
                                        to={`/Profile/${_id}/Notifications`}
                                        className="select-none flex "
                                    >
                                        <MdNotificationsNone className=" text-2xl  " />
                                        {isAuth && unReaded_Notif && (
                                            <div className=" absolute w-2 h-2 rounded-full bg-red-600 right-0">
                                                {" "}
                                            </div>
                                        )}
                                    </Link>
                                </div>

                                <Link
                                    onClick={Toogle_Menu_Bar}
                                    to={`/Profile/${_id}`}
                                    className="select-none flex  items-center gap-2 "
                                >
                                    <FaUserTie className="text-xl" />
                                    {/* Profile */}
                                </Link>
                            </>
                        )}
                    </div>
                    {/* Mobile menu Toogler */}
                    <Menu_Toogler
                        MobileNav_Open={MobileNav_Open}
                        set_MobileNav_Open={set_MobileNav_Open}
                        Toogle_Menu_Bar={Toogle_Menu_Bar}
                    />
                </div>

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
                    LogoutClicked={LogoutClicked}
                />
            </div>
            {/* Moblie nav bar */}
            <Mobile_Nav_Items
                Active_nav={Active_nav}
                MobileNav_Open={MobileNav_Open}
                Toogle_Menu_Bar={Toogle_Menu_Bar}
                Logout={Logout}
                LogoutClicked={LogoutClicked}
            />
        </div>
    );
}

export default NavBar;
