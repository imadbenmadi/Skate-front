import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
function App() {
    const [Active_nav, setActive_nav] = useState("Home");
    // const handleNavClick = (page) => {
    //     setActive_nav(page);
    // };
    // const location = useLocation();
    // useEffect(() => {
    //     console.log(location.pathname);
    // }, [location.pathname]);
    return (
        <div className=" relative overflow-x-hidden ">
            <NavBar Active_nav={Active_nav} setActive_nav={setActive_nav} />

            <div className=" mt-[63px] ">
                <Outlet />
            </div>
        </div>
    );
}
export default App;
