import React from "react";
import img from "../../../../public/wallpaper.jpg";
import { Link } from "react-router-dom";
function Card({ service }) {
    return (
        <Link
            to={`/Services/${service._id}`}
            className="w-full relative rounded overflow-hidden border-b border-gray py-5 px-5 flex shrink-0 justify-start h-[200px]"
        >
            <img
                className=" w-[30%] object-cover"
                src={img}
                alt={service.Title}
            />
            <div className="w-[60%] pl-6 py-4 ">
                {/* <div className="font-bold text-xl mb-2 overflow-hidden w-[550px]">
                    {service.Title}
                </div> */}
                {service.Title && (
                    <p className="font-bold text-xl mb-2 overflow-hidden">
                        {service.Title.slice(0, 60) +
                            (service.Title.length > 60 ? "..." : "")}
                    </p>
                )}

                {service.Text && (
                    <p className="text-gray-700 text-base">
                        {service.Text.slice(0, 70) +
                            (service.Text.length > 70 ? "..." : "")}
                    </p>
                )}

                {/* <p className="text-gray-700 text-base">{service.Description}</p> */}
                <p className="text-gray-700  text-sm absolute top-10 right-5 ">
                    {service.Price} DA
                </p>
                <p className="text-gray-700 text-sm pt-4">{service.Category}</p>
                {/* <p className="text-gray-700 text-base">
                  {new Date(service.Date).toLocaleDateString()}
              </p> */}
            </div>
        </Link>
    );
}

export default Card;
