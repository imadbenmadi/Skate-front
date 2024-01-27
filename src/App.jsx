import React from "react";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
function App() {
    return (
        <div className=" relative overflow-x-hidden ">
            <NavBar />
            <Outlet />
        </div>
    );
}

export default App;
