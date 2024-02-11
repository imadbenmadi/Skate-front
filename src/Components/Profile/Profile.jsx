import React from "react";
import { Outlet } from "react-router";
import LeftBar from "./LeftBar";
function UserProfile() {
    return (
        <div className="flex justify-startnode items-start h-screen w-screen">
            <div className="w-1/3 h-full ">
                <LeftBar />
            </div>
            <div className=" w-[66%] h-full">
                <Outlet />
            </div>
        </div>
    );
}

export default UserProfile;
