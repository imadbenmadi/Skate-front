import React from "react";
import Card from "./Card";

function ExploreCourses({ search, filter, courses }) {
    // If filter is null or empty, return all courses
    if ((!filter || filter.length === 0)&&(search === "")) {
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

    const filteredCourses = courses.filter((course) => {
        const matchesSearch =
            !search ||
            course.Title.toLowerCase().includes(search.toLowerCase());
        const matchesFilter =
            !filter || filter.length === 0 || filter.includes(course.Category);
        return matchesSearch && matchesFilter;
    });

    return (
        <div className=" ">
            {filteredCourses.length === 0 ? (
                <div className="text-center text-gray-500">
                    No courses match the selected filter.
                </div>
            ) : (
                filteredCourses.map((course) => (
                    <div key={course._id} className="w-full mb-4">
                        <Card course={course} />
                    </div>
                ))
            )}
        </div>
    );
}

export default ExploreCourses;
