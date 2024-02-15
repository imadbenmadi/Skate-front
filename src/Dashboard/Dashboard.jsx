import React from "react";
import NavBar from "./Navbar/Navbar";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import axios from "axios";
import Activate_account from "../Components/Alerts/Activate_account";

function Dashboard() {
    const [loading, setLoading] = useState(false);
    const { set_Auth, store_login, isAuth, IsEmailVerified, Notifications } =useAppContext()

    const fetchData = async () => {
        setLoading(true);
        
            
        try {
            const response = await axios.get(
                "http://localhost:3000/check_Auth",
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status === 200) {
                const _id = response.data.userData._id;
                const Email = response.data.userData.Email;
                const FirstName = response.data.userData.FirstName;
                const LastName = response.data.userData.LastName;
                const Notifications = response.data.userData.Notifications;
                const Courses = response.data.userData.Courses;
                const Services = response.data.userData.Services;
                const Gender = response.data.userData.Gender;
                const IsEmailVerified = response.data.userData.IsEmailVerified;
                store_login(
                    FirstName,
                    LastName,
                    Email,
                    Gender,
                    Courses,
                    Services,
                    Notifications,
                    IsEmailVerified,
                    _id
                );
                !IsEmailVerified
                    ? Notifications.push({
                          Type: "verify",
                          Title: "Please verify your email",
                          Text: "Please verify your email to get the most out of our services.",
                          Date: "18 feb 2024",
                          Readed: false,
                      })
                    : null;

                set_Auth(true);
                setLoading(false);
                // return;
            } else {
                store_login({
                    FirstName: "",
                    LastName: "",
                    Email: "",
                    Gender: null,
                    Courses: [],
                    Services: [],
                    Notifications: [],
                    IsEmailVerified: null,
                    _id: null,
                });
                set_Auth(false);
                setLoading(false);

                // return;
            }
        } catch (error) {
            console.log("error in the front end : ", error);
            store_login({
                FirstName: "",
                LastName: "",
                Email: "",
                Gender: null,
                Courses: [],
                Services: [],
                Notifications: [],
                IsEmailVerified: null,
                _id: null,
            });
            set_Auth(false);
            setLoading(false);

            // return;
        }
    };
    useEffect(() => {
        fetchData();
    }, [isAuth]);
    return (
        <div>
            <NavBar/>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
