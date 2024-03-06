import React from "react";
import NavBar from "./Navbar/Navbar";
import { Outlet, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
    const Navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [Active_nav, setActive_nav] = useState(null);
    const [Auth, setAuth] = useState(false);
    // const [users, setUsers] = useState(null);

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await axios.get(
                "https://localhost:3000/Dashboard/check_Auth",
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status == 200) {
                setAuth(true);
                setLoading(false);
            } else {
                setAuth(false);
                setLoading(false);
                Navigate("/Dashboard_Login");
            }
        } catch (error) {
            setAuth(false);
            setLoading(false);
            Navigate("/Dashboard_Login");
        }
    };
    useEffect(() => {
        fetchData();
    }, [Auth]);
    if (loading)
        return (
            <div className=" w-screen h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    if (Auth)
        return (
            <div className=" flex">
                <div className=" w-[20%] bg-black h-screen">
                    <NavBar
                        Active_nav={Active_nav}
                        setActive_nav={setActive_nav}
                    />
                </div>
                <div className="w-[80%]   h-screen overflow-auto custom-overflow  ">
                    <Outlet />
                </div>
            </div>
        );
}

export default Dashboard;
