import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
function ExploreServices({ search, filter, services }) {
    
    const filteredservices = services.filter((service) => {
        const matchesSearch =
            !search ||
            service.Title.toLowerCase().includes(search.toLowerCase());
        const matchesFilter =
            !filter || filter.length === 0 || filter.includes(service.Category);
        return matchesSearch && matchesFilter;
    });
    // If filter is null or empty, return all services
    if ((!filter || filter.length === 0) && search === "") {
        return (
            <div className=" ">
                {services.map((service, index) => (
                    // console.log("service inside map: ", )
                    <Link
                        to={`/Services/${service._id}`}
                        key={index}
                        className="w-full "
                    >
                        <Card service={service} />
                    </Link>
                ))}
            </div>
        );
    }

    return (
        <div>
            {filteredservices.length === 0 ? (
                <div className="text-center text-gray-500">
                    No services match the selected filter.
                </div>
            ) : (
                filteredservices.map((service, index) => (
                    <Link
                        to={`/Services/${service._id}`}
                        key={index}
                        className="w-full "
                    >
                        <Card service={service} />
                    </Link>
                ))
            )}
        </div>
    );
}

export default ExploreServices;
