import React from "react";
import { useOutletContext } from "react-router";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { PiWarningCircleBold } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";

function Notification_item() {
    // const [notification, setnotification] = useState(null);
    const location = useLocation();
    const { user, fetchData } = useOutletContext();
    if (!user)
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    const Notifications = user.user.Notifications;
    const userId = user.user._id;
    const notification_id = location.pathname.split("/")[4];
    const notification = Notifications.find(
        (notification) => notification._id === notification_id
    );
    if (!notification)
        return (
            <div className="w-full mt-10 flex flex-col gap-10 items-center justify-center">
                <Link
                    to={`/Profile/${userId}/Notifications`}
                    className="select-none w-fit m-auto bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 mb-4"
                >
                    <IoMdArrowRoundBack />
                    <div>Go back</div>
                </Link>
                <div className=" flex items-center justify-center gap-2 text-gray text-xl ">
                    <IoWarningOutline />
                    <div>Notification Not Found</div>
                </div>
            </div>
        );
    return (
        <div className="w-[90%] m-auto md:w-[70%] mt-6">
            <div className="w-full flex items-center justify-center gap-4">
                <Link
                    to={`/Profile/${userId}/Notifications`}
                    className="select-none w-fit m-auto bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1"
                >
                    <IoMdArrowRoundBack />
                    <div>Go back</div>
                </Link>
            </div>
            <div className=" ">
                <div>
                    <div></div>
                    <div>
                        <div className="text-5xl text-gray">
                            {notification.Type === "verify" ? (
                                <PiWarningCircleBold />
                            ) : notification.Type === "contact" ? (
                                <MdOutlineMailOutline />
                            ) : notification.Type === "event" ? (
                                <RiCalendarEventLine />
                            ) : notification.Type === "course" ? (
                                <FaBook />
                            ) : notification.Type === "service" ? (
                                <FaRegHandshake />
                            ) : (
                                <MdOutlineMailOutline />
                            )}
                        </div>
                        <div></div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Notification_item;
