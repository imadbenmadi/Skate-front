import React from "react";
import { useOutletContext } from "react-router-dom";
import { PiWarningCircleBold } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Formate_Date } from "../../Logic/Formate_Date";
function Current_Notifications() {
    const user = useOutletContext();
    const Notifications = user.Notifications;
    return (
        <div>
            {Notifications.map((notification, index) => (
                <Link
                    to={
                        notification.Type == "verify"
                            ? "/verifyEmail"
                            : `/Notifications/${notification._id}`
                    }
                    key={index}
                    className={`notification flex items-center justify-start gap-2 px-2 py-5  border-b border-gray
                                ${
                                    notification.Type == "verify"
                                        ? "bg-red-200"
                                        : notification.Readed
                                        ? "bg-white"
                                        : "bg-gray_white"
                                }`}
                >
                    <div className=" text-5xl text-gray">
                        {notification.Type == "verify" ? (
                            <PiWarningCircleBold />
                        ) : notification.Type == "contact" ? (
                            <MdOutlineMailOutline />
                        ) : notification.Type == "event" ? (
                            <RiCalendarEventLine />
                        ) : notification.Type == "course" ? (
                            <FaBookOpen />
                        ) : notification.Type == "service" ? (
                            <FaRegHandshake />
                        ) : (
                            <img src={logo} alt="logo" className=" w-14" />
                        )}
                    </div>

                    <div className="flex flex-col w-full relative ">
                        <h3 className=" font-bold mb-1">
                            {notification.Title}
                        </h3>
                        <p className=" mb-4">
                            {notification.Text.length > 50
                                ? `${notification.Text.slice(0, 50)}...`
                                : notification.Text}
                        </p>
                        {notification.Type !== "verify" &&
                            notification.Date && (
                                <p className="text-xs absolute bottom-0 right-0">
                                    {Formate_Date(notification.Date)}
                                </p>
                            )}
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Current_Notifications;
