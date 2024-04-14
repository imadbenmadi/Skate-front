import NavBar from "./Components/NavBar/NavBar";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import Activate_account from "./Components/Alerts/Activate_account";
import { useAppContext } from "../../Context/AppContext";
function App() {
    const { set_Auth, store_login, isAuth, IsEmailVerified, Notifications } =
        useAppContext();
    const [Active_nav, setActive_nav] = useState("Home");

    return (
        <div className="relative h-screen overflow-y-auto custom-overflow overflow-x-hidden">
            <NavBar Active_nav={Active_nav} setActive_nav={setActive_nav} />
            {isAuth && !IsEmailVerified && <Activate_account />}
            <Outlet />
        </div>
    );
}

export default App;
