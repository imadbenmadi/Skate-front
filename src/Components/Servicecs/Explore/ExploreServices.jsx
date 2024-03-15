import React from "react";
import Card from "./Card";
import { IoWarning } from "react-icons/io5";
function ExploreServices({ search, filter, services }) {
    if (services.services && Array.isArray(services.services)) {
        if (services.services.length == 0)
            return (
                <div className=" flex text-gray items-center gap-2 p-3">
                    <IoWarning className=" text-2xl" />
                    <div className="text-center text-gray">
                        No services for the moment
                    </div>
                </div>
            );
        const filteredservices = services.services.filter((service) => {
            const matchesSearch =
                !search ||
                service.Title.toLowerCase().includes(search.toLowerCase()) ||
                service.Text.toLowerCase().includes(search.toLowerCase()) ||
                service.Description.toLowerCase().includes(
                    search.toLowerCase()
                ) ||
                service.Category.toLowerCase().includes(search.toLowerCase());
            const matchesFilter =
                !filter ||
                filter.length == 0 ||
                !service.Category ||
                filter.includes(service.Category);
            return matchesSearch && matchesFilter;
        });

        if ((!filter || filter.length == 0) && search == "") {
            return (
                <div className="md:h-[80vh] overflow-auto custom-overflow  ">
                    {services.services.map((service, index) => (
                        <div key={index} className="w-full ">
                            <Card service={service} />
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div>
                {filteredservices.length == 0 ? (
                    <div className="text-center text-gray-500">
                        No services match the selected filter.
                    </div>
                ) : (
                    filteredservices.map((service, index) => (
                        <div key={index} className="w-full ">
                            <Card service={service} />
                        </div>
                    ))
                )}
            </div>
        );
    }
    return (
        <div className=" flex text-gray items-center gap-2 p-3">
            <IoWarning className=" text-2xl" />
            <div className="text-center text-gray">
                No services for the moment
            </div>
        </div>
    );
}

export default ExploreServices;
