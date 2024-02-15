import React from "react";
import NavBar from "./Navbar/Navbar";
import { Outlet, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Activate_account from "../Components/Alerts/Activate_account";
import { Navigate } from "react-router";
function Dashboard() {
    const Navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [Auth, setAuth] = useState(false);
    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await axios.get(
                "http://localhost:3000/Dashboard/check_Auth",
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status === 200) {
                setAuth(true);
                setLoading(false);
            } else {
                setAuth(false);
                setLoading(false);
                Navigate("/Dashboard_Login");
            }
        } catch (error) {
            console.log("error in the front end : ", error);
            setAuth(false);
            setLoading(false);
            Navigate("/Dashboard_Login");

            // return;
        }
    };
    useEffect(() => {
        fetchData();
        console.log(Auth);
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
                    <NavBar />
                </div>
                <div className="w-[80%] h-screen bg-green">
                    <Outlet />
                </div>
            </div>
        );
}

export default Dashboard;
