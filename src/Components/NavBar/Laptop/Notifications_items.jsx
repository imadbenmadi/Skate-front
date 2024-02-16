import React from "react";
import { useAppContext } from "../../../Context/AppContext"; // Import your context hook
import { PiWarningCircleBold } from "react-icons/pi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import logo from "../../../../public/skate_circle.png";
import {Formate_Date} from "../../../Logic/Formate_Date"; // Import your date formatting function
import { Link } from "react-router-dom";
const Notifications_items = () => {
    const { Notifications } = useAppContext(); 
    return (
        <div className=" w-full bg-white">
            <div className=" flex items-center justify-between px-3 pb-2 border-b border-gray">
                <h2 className="text-lg font-bold">Notifications</h2>
                <div className=" text-sm">
                    {
                        Notifications.filter(
                            (notification) => !notification.Readed
                        ).length
                    }{" "}
                    unreded
                </div>
            </div>
            <div>
                {Notifications.length === 0 ? (
                    <div className=" flex items-center justify-center py-6 gap-3">
                        <HiOutlineMailOpen className=" text-2xl" />
                        <div className=" text-sm text-center  flex items-center">
                            No notifications for the moment .
                        </div>
                    </div>
                ) : (
                    <>
                        <div className=" overflow-y-auto custom-overflow h-80">
                            {Notifications.sort((a, b) => {
                                if (a.Readed !== b.Readed) {
                                    return a.Readed ? 1 : -1; // Unread notifications first
                                }
                                // Within each category, sort by newest first
                                return new Date(b.Date) - new Date(a.Date);
                            }).map((notification, index) => (
                                <Link
                                    to={
                                        notification.Type === "verify"
                                            ? "/verifyEmail"
                                            : `/Notifications/${notification._id}`
                                    }
                                    key={index}
                                    className={`notification flex items-center justify-start gap-2 p-2 pb-4 border-b border-gray
                                ${
                                    notification.Type === "verify"
                                        ? "bg-red-200"
                                        : notification.Readed
                                        ? "bg-white"
                                        : "bg-gray_white"
                                }`}
                                >
                                    <div className=" text-4xl text-gray">
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
                                            <img
                                                src={logo}
                                                alt="logo"
                                                className=" w-14"
                                            />
                                        )}
                                    </div>

                                    <div className="flex flex-col w-full relative">
                                        <h3 className="text-base font-bold mb-1">
                                            {notification.Title}
                                        </h3>
                                        <p className="text-sm mb-4">
                                            {notification.Text.length > 50
                                                ? `${notification.Text.slice(
                                                      0,
                                                      50
                                                  )}...`
                                                : notification.Text}
                                        </p>
                                        {notification.Type === "verify" &&
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
                        <Link
                            to={"/Notifications"}
                            className="flex justify-end mr-6 mt-2"
                        >
                            <div className="border px-2 py-1">See All</div>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Notifications_items;
