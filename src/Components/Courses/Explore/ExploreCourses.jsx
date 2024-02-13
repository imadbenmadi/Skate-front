import React from "react";
import Card from "./Card";

function ExploreCourses({ search, filter, courses }) {
    return (
        <div className=" ">
            {courses.map((course) => (
                <div key={course._id} className="w-full mb-4">
                    <Card course={course} />
                </div>
            ))}
        </div>
    );
}

export default ExploreCourses;
