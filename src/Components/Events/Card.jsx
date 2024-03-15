import React from "react";
import img from "../../../public/wallpaper.jpg";
import { Link } from "react-router-dom";
import { Formate_Date } from "../../Logic/Formate_Date"; // Import your date formatting function
 
function Card({ event }) {
    return (
        <Link
            to={`/Events/${event._id}`}
            className="select-none w-full relative  overflow-hidden border-b border-gray py-5 flex shrink-0 justify-start h-fit"
        >
            <img className="w-[30%] object-cover h-[120px] md:h-[150px]" src={img} alt={event.Title} />
            <div className="w-[60%] pl-6 ">
                {event.Title && (
                    <p className="font-bold  text-lg md:text-xl  overflow-hidden">
                        {window.innerWidth > 640
                            ? event.Title.slice(0, 60)
                            : event.Title.slice(0, 30)}
                        {event.Title.length >
                        (window.innerWidth > 640 ? 60 : 30)
                            ? "..."
                            : ""}
                    </p>
                )}
                {event.Text && (
                    <p className="text-gray text-base">
                        {window.innerWidth > 640
                            ? event.Text.slice(0, 150)
                            : event.Text.slice(0, 75)}
                        {event.Text.length >
                        (window.innerWidth > 640 ? 150 : 75)
                            ? "..."
                            : ""}
                    </p>
                )}
                <p className="text-gray text-sm pt-2 font-semibold">
                    {Formate_Date(event.Date)}
                </p>
            </div>
        </Link>
    );
}

export default Card;
