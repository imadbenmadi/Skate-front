import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
function ExploreServices({ search, filter, services }) {
    console.log("servesees imad: ", services);

    // If filter is null or empty, return all services
    if ((!filter || filter.length === 0) && search === "") {
        return (
            <div className=" ">
                {services.map((course) => (
                    <div key={course._id} className="w-full ">
                        <Card course={course} />
                    </div>
                ))}
            </div>
        );
    }

    const filteredservices = services.filter((course) => {
        const matchesSearch =
            !search ||
            course.Title.toLowerCase().includes(search.toLowerCase());
        const matchesFilter =
            !filter || filter.length === 0 || filter.includes(course.Category);
        return matchesSearch && matchesFilter;
    });
    return (
        <div>
            {filteredservices.length === 0 ? (
                <div className="text-center text-gray-500">
                    No services match the selected filter.
                </div>
            ) : (
                filteredservices.map((course) => (
                    <Link
                        to={`/Services/${course._id}`}
                        key={course._id}
                        className="w-full "
                    >
                        <Card course={course} />
                    </Link>
                ))
            )}
        </div>
    );
}

export default ExploreServices;
