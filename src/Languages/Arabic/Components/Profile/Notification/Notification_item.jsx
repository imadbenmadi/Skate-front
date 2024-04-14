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
import { Formate_Date } from "../../../Logic/Formate_Date";
import axios from "axios";

function Notification_item() {
    const [Loading, setLoading] = useState(false);
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
    const change_to_readed = async () => {
        setLoading(true);
        try {
            const response = await axios.post(
                `http://localhost:3000/Profile/${userId}/Notifications/${notification_id}/Readed`,
                {},
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status === 200) {
                fetchData();
            }
        } catch (error) {
        }finally{
            setLoading(false);
        }
    };
    useEffect(() => {
        if (!notification.Readed) {
            change_to_readed();
        }
    }, []);
    if (Loading)
        return (
            <div
                className={`h-screen md:w-[100%] flex items-center justify-center`}
            >
                <span className="loader"></span>
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
            <div className=" mt-10">
                <div className="  ">
                    <div className=" flex items-center justify-center gap-2 md:gap-8">
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
                        {notification.Date && (
                            <p className="text-md ">
                                {Formate_Date(notification.Date)}
                            </p>
                        )}
                    </div>
                    <div className="  pt-6 text-center">
                        {notification.Title ? (
                            <div className=" text-xl  md:text-2xl font-semibold text-black_text ">
                                {notification.Title}
                            </div>
                        ) : null}
                    </div>
                    <div className="   pt-2 md:pt-10 ">
                        {notification.Text ? (
                            <div className=" text-lg  md:text-xl text-center  text-black_text ">
                                {notification.Text}
                            </div>
                        ) : null}
                    </div>
                    <div className="  pt-2 md:pt-6">
                        {notification.Description ? (
                            <div className=" text-lg  md:text-xl  text-black_text ">
                                {notification.Description}
                            </div>
                        ) : null}
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Notification_item;
