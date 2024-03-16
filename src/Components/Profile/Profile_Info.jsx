import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function ProfileInfo() {
    const [user, setUser] = useOutletContext();
    if (!user)
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    console.log(user);
    return (
        <div className="flex flex-col items-center w-[90%] m-auto md:items-start justify-center gap-3 ">
            <div className="text-3xl font-bold">{user.user.name}</div>
            <div className="text-xl">{user.user.email}</div>
            <div className="text-xl">{user.user.phone}</div>
            <div className="text-xl">{user.user.address}</div>
        </div>
    );
}

export default ProfileInfo;
