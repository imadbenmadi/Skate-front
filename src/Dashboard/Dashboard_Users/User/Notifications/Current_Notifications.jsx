import React from "react";
import { useOutletContext } from "react-router-dom";
import { PiWarningCircleBold } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Formate_Date } from "../../../../Logic/Formate_Date";
import logo from ".././../../../../public/logo.png";
import { useNavigate } from "react-router-dom";
function Current_Notifications() {
    
    const user = useOutletContext();
    if (!user) return null;
    const Notifications = user.Notifications
    return (
        <div>
            <div className=" text-center text-gray font-semibold text-2xl my-5">
                Current User Notifications :
            </div>
            <div className="h-[85vh] overflow-auto custom-overflow">
                {Notifications.map((notification, index) => (
                    <div
                        key={index}
                        className={`notification flex items-center justify-start gap-2 px-2 py-5 border-b border-gray`}
                    >
                        <div className="text-5xl text-gray">
                            {notification.Type === "verify" ? (
                                <PiWarningCircleBold />
                            ) : notification.Type === "contact" ? (
                                <MdOutlineMailOutline />
                            ) : notification.Type === "event" ? (
                                <RiCalendarEventLine />
                            ) : notification.Type === "course" ? (
                                <FaBookOpen />
                            ) : notification.Type === "service" ? (
                                <FaRegHandshake />
                            ) : (
                                <img src={logo} alt="logo" className="w-14" />
                            )}
                        </div>

                        <div className="flex flex-col w-full relative">
                            <h3 className="font-bold mb-1">
                                {notification.Title}
                            </h3>
                            <p className="mb-4">{notification.Text}</p>
                            {notification.Type !== "verify" &&
                                notification.Date && (
                                    <p className="text-xs absolute bottom-0 right-0">
                                        {Formate_Date(notification.Date)}
                                    </p>
                                )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Current_Notifications;
