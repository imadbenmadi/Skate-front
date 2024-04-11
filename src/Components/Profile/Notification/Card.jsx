import React from "react";
import { Formate_Date } from "../../../Logic/Formate_Date";
import { PiWarningCircleBold } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import axios from "axios";
import Swal from "sweetalert2";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
function Card({ user, notification, index, fetchData }) {
    // fetchData()
    // const [fetchData] = useOutletContext();
    const [showDescription, setShowDescription] = useState(false);
    function toggleDescription() {
        setShowDescription(!showDescription);
    }
    const [Delete_Loading, setDelete_Loading] = useState(false);
    async function handle_delete_notification(UserId, NotificationId) {
        try {
            setDelete_Loading(true);
            const response = await axios.delete(
                `http://localhost:3000/Profile/${UserId}/Notifications/${NotificationId}`,
                //  {  NotificationId },
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status == 200) {
                Swal.fire({ icon: "success", title: "Notification Deleted" });
                fetchData();
            } else if (response.status == 404) {
                Swal.fire("Error", `${response.data.message}`, "error");
            } else if (response.status == 400) {
                Swal.fire(
                    "Error!",
                    `Internal server error : ${response.data.message}`,
                    "error"
                );
            } else if (response.status == 401) {
                Swal.fire({
                    title: "Unauthorised Action",
                    text: "You should Login again ",
                    icon: "error",
                    confirmButtonColor: "#3085d6",

                    confirmButtonText: "Go to Admin Login Page",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Navigate("/Login");
                    }
                });
            } else if (response.status == 409) {
                Swal.fire("Error!", `${response.data}`, "error");
            } else if (response.status == 429) {
                Swal.fire(
                    "Error!",
                    `Too many Requests , ${response.data.message}`,
                    "error"
                );
            } else if (response.status == 500) {
                Swal.fire(
                    "Error!",
                    `Internal server error : ${response.data.message}`,
                    "error"
                );
            } else {
                Swal.fire(
                    "Error!",
                    `Something Went Wrong. Please try again , ${response.data.message}`,
                    "error"
                );
            }
        } catch (error) {
            Swal.fire("Error!", "Failed to Reject the Request", "error");
        } finally {
            setDelete_Loading(false);
        }
    }

    return (
        // <div className="border-b border-gray flex  ">
        <div
            className={`border-b border-gray flex  ${
                !notification.Readed ? "bg-gray_white " : "bg-white"
            }`}
        >
            <Link
                to={`/Profile/${user.user._id}/Notifications/${notification._id}`}
                className=" w-[95%]"
            >
                <div
                    key={index}
                    className={`notification flex justify-start md:gap-6
                    gap-2 px-1 md:px-5 py-5 `}
                >
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
                    <div className="flex  flex-col w-full relative">
                        {notification.Title && (
                            <div className="font-bold mb-1 text-lg md:text-xl">
                                {notification.Title}
                            </div>
                        )}
                        {notification.Type !== "verify" &&
                            notification.Date && (
                                <p className="text-sm ">
                                    {Formate_Date(notification.Date)}
                                </p>
                            )}
                        {notification.Text && (
                            <div className="pt-2">{notification.Text}</div>
                        )}
                    </div>
                </div>
                {/* {showDescription ? (
                    <div className="w-[80%] pl-8 py-4 ">
                        <div
                            className="select-none flex gap-2 items-center justify-start underlined pb-4 cursor-pointer"
                            onClick={toggleDescription}
                        >
                            Hide Description <FaArrowUp />
                        </div>
                        <div className="pb-4">
                            {notification.Description && (
                                <p className="text-gray text-base">
                                    {notification.Description}
                                </p>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="w-[80%] pl-8 py-4">
                        <div
                            className="select-none flex gap-2 w-fit items-center justify-start underlined pb-4 cursor-pointer"
                            onClick={toggleDescription}
                        >
                            Show Description <FaArrowDown />
                        </div>
                    </div>
                )} */}
            </Link>
            <div className=" w-fit shrink-0   text-white text-xl mr-3 mt-8">
                {Delete_Loading ? (
                    <span className="small-loader  "></span>
                ) : (
                    <FaTrashCan
                        className="cursor-pointer text-red-600 "
                        onClick={() =>
                            handle_delete_notification(
                                user.user._id,
                                notification._id
                            )
                        }
                    />
                )}
            </div>
        </div>
    );
}

export default Card;
