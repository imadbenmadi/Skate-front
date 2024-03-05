import React from "react";
import Course from "./Courses";
function Current_Courses() {
    return (
        <div className="w-[50%]  border-r-2 border-r-gray">
            <div className=" text-2xl text-gray underline">
                Enrolled Courses
            </div>
            <Course />
        </div>
    );
}

export default Current_Courses;
