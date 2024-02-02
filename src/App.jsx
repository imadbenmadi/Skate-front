import React from "react";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router";
import Pages_Btns from "./Components/Pages_Btns";
import { useState } from "react";
function App() {
    const [Active_nav, setActive_nav] = useState("Home");
    const handleNavClick = (page) => {
        setActive_nav(page);
    };
    return (
        <div className=" relative overflow-x-hidden ">
            <NavBar Active_nav={Active_nav} onNavClick={handleNavClick} />

            <div className=" mt-[63px] ">
                <Outlet />
            </div>
        </div>
    );
}
export default App;
