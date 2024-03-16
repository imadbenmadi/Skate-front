import React from "react";
import { useAppContext } from "../../Context/AppContext";
import { PiWarningCircleBold } from "react-icons/pi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ForbiddenRoute from "../ForbiddenRoute";
import { Formate_Date } from "../../Logic/Formate_Date";
function UserNotifications() {
    const { Notifications } = useAppContext();
    if (Notifications == undefined) return <ForbiddenRoute />;
    return (
        <div className=" pt-[60px] ">
            <div className=" text-4xl p-8">Notifications</div>
            <div className=" md:pl-10 md:w-[600px]">
                {Notifications.length == 0 ? (
                    <div className="pl-5 flex items-center justify-start py-6 gap-3">
                        <HiOutlineMailOpen className=" text-2xl" />
                        <div className=" text-sm text-center  flex items-center">
                            No notifications for the moment .
                        </div>
                    </div>
                ) : (
                    <div className=" ">
                        {Notifications.map((notification, index) => (
                            <Link
                                to={
                                    notification.Type == "verify"
                                        ? "/verifyEmail"
                                        : `/Notifications/${notification._id}`
                                }
                                key={index}
                                className={`select-none notification flex items-center justify-start gap-2 px-2 py-5  border-b border-gray
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
                                        <img
                                            src={logo}
                                            alt="logo"
                                            className=" w-14"
                                        />
                                    )}
                                </div>

                                <div className="flex flex-col w-full relative ">
                                    <h3 className=" font-bold mb-1">
                                        {notification.Title}
                                    </h3>
                                    <p className=" mb-4">
                                        {notification.Text.length > 50
                                            ? `${notification.Text.slice(
                                                  0,
                                                  50
                                              )}...`
                                            : notification.Text}
                                    </p>
                                    {notification.Type !== "verify" &&
                                        notification.Date && (
                                            <p className="text-xs absolute bottom-0 right-0">
                                                {Formate_Date(
                                                    notification.Date
                                                )}
                                            </p>
                                        )}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserNotifications;
