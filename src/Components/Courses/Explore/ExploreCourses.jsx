import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { IoWarning } from "react-icons/io5";
function ExploreCourses({ search, filter, courses }) {
    if (courses.courses && Array.isArray(courses.courses)) {
        if (courses.courses.length === 0)
            return (
                <div className=" flex text-gray items-center gap-2 p-3">
                    <IoWarning className=" text-2xl" />
                    <div className="text-center text-gray">
                        No courses for the moment
                    </div>
                </div>
            );
        const filteredCourses = courses.courses.filter((course) => {
            const matchesSearch =
                !search ||
                !course.Title ||
                course.Title.toLowerCase().includes(search.toLowerCase());
            const matchesFilter =
                !filter ||
                filter.length === 0 ||
                !course.Category ||
                filter.includes(course.Category);
            return matchesSearch && matchesFilter;
        });

        if ((!filter || filter.length === 0) && search === "") {
            return (
                <div className=" ">
                    {courses.courses.map((course, index) => (
                        <div key={index} className="w-full ">
                            <Card course={course} />
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div>
                {filteredCourses.length === 0 ? (
                    <div className="text-center text-gray-500">
                        No courses match the selected filter.
                    </div>
                ) : (
                    filteredCourses.map((course, index) => (
                        <div key={index} className="w-full ">
                            <Card course={course} />
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
                No courses for the moment
            </div>
        </div>
    );
    
}

export default ExploreCourses;
