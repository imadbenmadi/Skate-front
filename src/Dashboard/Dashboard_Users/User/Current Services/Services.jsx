import React from "react";
import { useOutletContext } from "react-router";
import { IoWarning } from "react-icons/io5";
function Services() {
    const user = useOutletContext();
    if (!user) return null;
    if (user.Services && Array.isArray(user.Services)) {
        if (user.Services.length === 0)
            return (
                <div className=" flex text-gray items-center gap-2 pt-4 ">
                    <IoWarning className=" text-2xl" />
                    <div className="text-center text-gray">
                        No Services Owned by this user
                    </div>
                </div>
            );
        return (
            <div className=" ">
                {user.Services.map((service, index) => (
                    <div key={index} className="w-full ">
                        <div className="w-full relative rounded overflow-hidden border-b border-gray py-5 px-5 flex shrink-0 justify-start h-[200px]">
                            <img
                                className=" w-[30%] object-cover"
                                src={img}
                                alt={service.Title}
                            />
                            <div className="w-[60%] pl-6 py-4 ">
                                {service.Title && (
                                    <p className="font-bold text-xl mb-2 overflow-hidden">
                                        {service.Title.slice(0, 60) +
                                            (service.Title.length > 60
                                                ? "..."
                                                : "")}
                                    </p>
                                )}

                                {service.Text && (
                                    <p className="text-gray-700 text-base">
                                        {service.Text.slice(0, 70) +
                                            (service.Text.length > 70
                                                ? "..."
                                                : "")}
                                    </p>
                                )}

                                <p className="text-gray-700  text-sm absolute top-10 right-5 ">
                                    {service.Price} DA
                                </p>
                                <p className="text-gray-700 text-sm pt-4">
                                    {service.Category}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <div className=" flex text-gray items-center gap-2 pt-4 ">
            <IoWarning className=" text-2xl" />
            <div className="text-center text-gray">
                No Services Owned by this user
            </div>
        </div>
    );
}

export default Services;
