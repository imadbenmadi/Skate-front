import React from "react";
import Card from "./Card";

function Current_Services({ userServices }) {
    return userServices != undefined && userServices.length !== 0 ? (
        <div>
            <div>Your Current Courses : </div>
            <div className="flex gap-4 w-screen overflow-auto">
                {userServices.map(() => (
                    <Card  />
                ))}
            </div>
        </div>
    ) : null;
}

export default Current_Services;
