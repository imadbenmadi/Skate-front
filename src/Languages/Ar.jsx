import React from "react";
import Activate_account from "./Arabic/Components/Alerts/Activate_account";
import { Outlet } from "react-router";
import NavBar from "./Arabic/Components/NavBar/NavBar";
import { useState } from "react";
import { useAppContext } from "../Context/AppContext";
function ar() {
    const { isAuth, IsEmailVerified } = useAppContext();
    const [Active_nav, setActive_nav] = useState("Home");
    return (
        <div>
            <div className="relative h-screen overflow-y-auto custom-overflow overflow-x-hidden">
                <NavBar Active_nav={Active_nav} setActive_nav={setActive_nav} />
                {
                    isAuth &&
                    !IsEmailVerified &&
                    <Activate_account
                    />
                }
                <Outlet />
            </div>
        </div>
    );
}

export default ar;
