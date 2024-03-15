import React from "react";
import Card from "./Card";
import { useAppContext } from "../../../Context/AppContext";

function Current_Courses({ userCourses }) {
    const { isAuth } = useAppContext();
    return isAuth && userCourses.length !== 0 ? (
        <div>
            <div>Your Current Courses:</div>
            <div className="flex gap-4 w-screen">
                {userCourses.map((item) => (
                    <Card key={item.id} />
                ))}
            </div>
        </div>
    ) : null;
}

export default Current_Courses;
