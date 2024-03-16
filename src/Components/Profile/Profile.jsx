import React from "react";
import Laptop_Navbar from "./NavBar/Laptop_Navbar";
import Mobile_NavBar from "./NavBar/Mobile_NavBar";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";
function Profile() {
    const [Active_nav, setActive_nav] = useState(null);
    const [openNav, SetOpenNav] = useState(false);
    const [windowWidth, SetwindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        SetwindowWidth(window.innerWidth);
        console.log(windowWidth);
    }, [window.innerWidth]);
    const {
        isAuth,
        _id,
        FirstName,
        LastName,
        Email,
        Gender,
        Courses,
        Services,
        Notifications,
        IsEmailVerified,
    } = useAppContext();
    return (
        <div className=" flex">
            {windowWidth < 768 ? (
                <>
                    <div
                        className={
                            openNav
                                ? "w-[35%] bg-black h-screen"
                                : "w-[15%] bg-black h-screen"
                        }
                    >
                        <Mobile_NavBar
                            Active_nav={Active_nav}
                            setActive_nav={setActive_nav}
                            openNav={openNav}
                            SetOpenNav={SetOpenNav}
                        />
                    </div>
                    <div
                        className={
                            openNav
                                ? "w-[65%] h-screen overflow-auto custom-overflow"
                                : "w-[85%] h-screen overflow-auto custom-overflow"
                        }
                    >
                        <Outlet />
                    </div>
                </>
            ) : (
                <>
                    <div className=" w-[20%] bg-black h-screen">
                        <Laptop_Navbar
                            Active_nav={Active_nav}
                            setActive_nav={setActive_nav}
                        />
                    </div>
                    <div className="w-[80%]   h-screen overflow-auto custom-overflow  ">
                        <Outlet />
                    </div>
                </>
            )}
        </div>
    );
}

export default Profile;
