import React from "react";
import img from "../../../../public/wallpaper.jpg";
import { Link } from "react-router-dom";
function Card({ service }) {
    console.log(window.innerWidth);
    return (
        <Link
            to={`/Services/${service._id}`}
            className="select-none w-full relative rounded overflow-hidden border-b border-gray py-5 px-5 flex shrink-0 justify-start h-fit"
        >
            <img
                className=" w-[30%] h-[120px] object-cover"
                src={img}
                alt={service.Title}
            />
            <div className="w-[60%] pl-6  ">
                {service.Title && (
                    <p className="font-bold text-lg md:text-xl  overflow-hidden">
                        {window.innerWidth > 640
                            ? service.Title.slice(0, 60)
                            : service.Title.slice(0, 20)}
                        {service.Title.length >
                        (window.innerWidth > 640 ? 60 : 20)
                            ? "..."
                            : ""}
                    </p>
                )}
                {service.Text && (
                    <p className="text-gray text-base">
                        {window.innerWidth > 640
                            ? service.Text.slice(0, 70)
                            : service.Text.slice(0, 35)}
                        {service.Text.length >
                        (window.innerWidth > 640 ? 70 : 35)
                            ? "..."
                            : ""}
                    </p>
                )}

                {service.Price ? (
                    <p className="text-gray text-lg font-semibold py-1">
                        {service.Price} DA
                    </p>
                ) : null}
                {service.Category ? (
                    <p className="text-gray text-sm font-semibold ">
                        {service.Category}
                    </p>
                ) : null}
            </div>
        </Link>
    );
}

export default Card;
