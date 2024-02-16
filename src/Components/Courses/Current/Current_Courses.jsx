import React from "react";
import Card from "./Card";

function Current_Courses({ userCourses }) {
    return userCourses.length !== 0 ? (
        <div>
            <div>Your Current Courses : </div>
            <div className="flex gap-4 w-screen overflow-auto custom-overflow">
                {userCourses.map((item) => {
                    <Card />;
                })}
            </div>
        </div>
    ) : null;
}

export default Current_Courses;
