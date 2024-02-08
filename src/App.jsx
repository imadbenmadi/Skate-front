import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { useAppContext } from "./Context/AppContext";
import axios from "axios";
import Activate_account from "./Components/Notifications/Activate_account";
function App() {
    const { set_Auth, store_login, isAuth, IsEmailVerified } = useAppContext();
    const [Active_nav, setActive_nav] = useState("Home");
    const [loading, setLoading] = useState(false);
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
                console.log(FirstName, LastName, Email);
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
                set_Auth(true);
                setLoading(false);
                // return;
            } else if (response.status === 401) {
                // Access token expired, try refreshing it
                const refreshResponse = await axios.post(
                    "http://localhost:3000/Refresh",
                    {},
                    {
                        withCredentials: true,
                        validateStatus: () => true,
                    }
                );
                if (refreshResponse.status === 200) {
                    if (
                        refreshResponse.data &&
                        refreshResponse.data.accessToken
                    ) {
                        // Update the access token in the cookies
                        // Assuming you have a function to set access token in your context
                        // set_AccessToken(refreshResponse.data.accessToken);

                        const _id = response.data.userData._id;
                        const Email = response.data.userData.Email;
                        const FirstName = response.data.userData.FirstName;
                        const LastName = response.data.userData.LastName;
                        const Notifications =
                            response.data.userData.Notifications;
                        const Courses = response.data.userData.Courses;
                        const Services = response.data.userData.Services;
                        const Gender = response.data.userData.Gender;
                        const IsEmailVerified =
                            response.data.userData.IsEmailVerified;

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
                        set_Auth(true);
                        // return;
                    }
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
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <div
                    className=" w-screen h-screen flex items-center justify-center
              "
                >
                    <span className="loader"></span>
                </div>
            ) : (
                <div className="relative">
                    <NavBar
                        Active_nav={Active_nav}
                        setActive_nav={setActive_nav}
                    />
                    {!isAuth && IsEmailVerified && <Activate_account />}

                    <Outlet />
                </div>
            )}
        </div>
    );
}

export default App;
