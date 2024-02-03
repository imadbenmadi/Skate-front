import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { checkAuth } from "./checkAuth";
import { useAppContext } from "./Context/AppContext";

function App() {
    const { set_Auth } = useAppContext();
    const [Active_nav, setActive_nav] = useState("Home");
    useEffect(() => {
        console.log("app");
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            let response = await checkAuth();
            response.status === "success" ? set_Auth(true) : set_Auth(false);
            console.log("response", response.message);
        };

        fetchData();
    }, []);
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
