import React from "react";
import { Outlet } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import ErrorPage from "../../../Components/ErrorPage";

function User() {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
    const userId = location.pathname.split("/")[3];
    const fetchUser = async () => {
        setLoading(true);

        try {
            const response = await axios.get(
                `http://localhost:3000/Dashboard/User/${userId}`,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status === 200) {
                setUser(response.data);
            } else {
                setError(response.data);
            }
        } catch (error) {
            console.log("error in the front end : ", error);
            setError(error);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchUser();
    }, []);

    if (loading)
        return (
            <div className=" w-[100%] h-[200px] flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    if (error) {
        return <ErrorPage />;
    }
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default User;
