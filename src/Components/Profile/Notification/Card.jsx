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

function Card({ notification, index }) {
    const [showDescription, setShowDescription] = useState(false);
    function toggleDescription() {
        setShowDescription(!showDescription);
    }
    return (
        <div className="border-b border-gray flex  ">
            <div className=" w-[90%]">
                <div
                    key={index}
                    className={`notification flex  justify-start gap-6 md:gap-2 px-5 py-5 `}
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
                        <div className="font-bold mb-1 text-lg md:text-xl">
                            {notification.Title}
                        </div>
                        <div className="pb-4">{notification.Text}</div>
                        {notification.Type !== "verify" &&
                            notification.Date && (
                                <p className="text-sm ">
                                    {Formate_Date(notification.Date)}
                                </p>
                            )}
                    </div>
                    {notification.Description && (
                        <div>{notification.Description}</div>
                    )}
                </div>
                {showDescription ? (
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
                            className="select-none flex gap-2 items-center justify-start underlined pb-4 cursor-pointer"
                            onClick={toggleDescription}
                        >
                            Show Description <FaArrowDown />
                        </div>
                    </div>
                )}
            </div>
            <div className=" w-[10%] shrink-0   text-white text-xl mr-2">
                <div className="bg-red-600 flex gap-2 items-center justify-center px-1 py-2 mt-4 rounded-lg cursor-pointer ">
                    <FaTrashCan />
                    <div className="  hidden md:block">Delete</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
