import React from "react";
import { IoWarning } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useOutletContext } from "react-router";
import Current_Events_Card from "./Current_Events_Card";

function Current_Events() {
    const Events = useOutletContext();

    if (!Events) return null;
    else if (Events.length === 0)
        return (
            <div className=" flex items-center justify-center gap-4 flex-col">
                <div className="pl-4 text-gray font-semibold  text-2xl w-full">
                    <span className="text-green">Skate</span> Events :
                </div>
                <div className="flex items-center  text-gray text-2xl gap-2 py-8">
                    <IoWarning className="text-2xl" />
                    <div className="text-center text-gray">No Events Found</div>
                </div>
                <Link
                    className="bg-green rounded cursor-pointer text-white text-xl
                     flex items-center gap-2 px-3 py-1 w-fit m-auto"
                    to={"/Dashboard/Events/Add"}
                >
                    <>
                        <FaPlus />
                        <div>Add Event</div>
                    </>
                </Link>
            </div>
        );
    else {
        return (
            <div>
                <div className="flex items-center justify-around my-5">
                    <div className="pl-4 text-gray font-semibold text-2xl">
                        <span className="text-green">Skate</span> Events :
                    </div>
                    <Link
                        className="bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1"
                        to={"/Dashboard/Events/Add"}
                    >
                        <>
                            <FaPlus />
                            <div>Add Event</div>
                        </>
                    </Link>
                </div>
                <div>
                    {Events.map((item, index) => (
                        <Current_Events_Card key={index} item={item} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Current_Events;
