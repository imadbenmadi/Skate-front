import React from "react";
import img from "../../../public/wallpaper.jpg";
import { Link } from "react-router-dom";
function Card({ event }) {
    return (
        <Link
            to={`/Events/${event._id}`}
            className="w-full relative rounded overflow-hidden border-b border-gray py-5 px-5 flex shrink-0 justify-start h-[300px]"
        >
            <img
                className=" w-[30%] object-cover"
                src={img}
                alt={event.Title}
            />
            <div className="w-[60%] pl-6 py-4 ">
                {/* <div className="font-bold text-xl mb-2 overflow-hidden w-[550px]">
                    {event.Title}
                </div> */}
                {event.Title && (
                    <p className="font-bold text-xl mb-2 overflow-hidden">
                        {event.Title.slice(0, 60) +
                            (event.Title.length > 60 ? "..." : "")}
                    </p>
                )}

                {event.Text && (
                    <p className="text-gray text-base">
                        {event.Text.slice(0, 150) +
                            (event.Text.length > 150 ? "..." : "")}
                    </p>
                )}

                <p className="text-gray text-sm pt-4">{event.Category}</p>
            </div>
        </Link>
    );
}

export default Card;
