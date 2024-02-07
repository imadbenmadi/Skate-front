import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { useAppContext } from "./Context/AppContext";
import axios from "axios";
// Add a response interceptor to handle 429 (Too Many Requests) errors
axios.interceptors.response.use(
    (response) => response, // Return the response for successful requests
    (error) => {
        // Check if the error is a 429 response (Too Many Requests)
        if (error.response && error.response.status === 429) {
            // Handle the rate limit error
            Swal.fire({
                title: "Error!",
                text: "Too many requests, please try again later.",
                icon: "error",
            });
        }

        // Return the rejected promise to maintain the error chain
        return Promise.reject(error);
    }
);
function App() {
    const { set_Auth, store_login, isAuth } = useAppContext();
    const [Active_nav, setActive_nav] = useState("Home");
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/check_Auth",
                {
                    withCredentials: true,
                    validateStatus: function (status) {
                        return status !== 429; // Reject responses with status code 429
                    },
                }
            );

            if (response.status === 200) {
                const FirstName = response.data.userData.FirstName;
                const LastName = response.data.userData.LastName;
                const Email = response.data.userData.Email;
                const Gender = response.data.userData.Gender;
                const Age = response.data.userData.Age;
                const Courses = response.data.userData.Courses;
                const _id = response.data.userData._id;
                console.log(FirstName, LastName, Email);
                store_login(
                    FirstName,
                    LastName,
                    Email,
                    Gender,
                    Age,
                    Courses,
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
                        validateStatus: function (status) {
                            return status !== 429; // Reject responses with status code 429
                        },
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

                        const FirstName =
                            refreshResponse.data.userData.FirstName;
                        const LastName = refreshResponse.data.userData.LastName;
                        const Email = refreshResponse.data.userData.Email;
                        const Gender = refreshResponse.data.userData.Gender;
                        const Age = refreshResponse.data.userData.Age;
                        const Courses = refreshResponse.data.userData.Courses;
                        const _id = refreshResponse.data.userData._id;

                        store_login(
                            FirstName,
                            LastName,
                            Email,
                            Gender,
                            Age,
                            Courses,
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
                        Age: null,
                        Courses: [],
                        _id: null,
                    });
                    set_Auth(false);
                    setLoading(false);
                    console.log("we are here");

                    // return;
                }
            } else {
                store_login({
                    FirstName: "",
                    LastName: "",
                    Email: "",
                    Gender: null,
                    Age: null,
                    Courses: [],
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
                Age: null,
                Courses: [],
                _id: null,
            });
            set_Auth(false);
            setLoading(false);

            // return;
        }
    };
    useEffect(() => {
        fetchData();
        console.log(isAuth);
    }, [isAuth]);
    useEffect(() => {
        fetchData();
        console.log(isAuth);
    }, []);
    useEffect(() => {
        console.log(isAuth);
    }, [isAuth]);
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
                    <Outlet />
                </div>
            )}
        </div>
    );
}

export default App;
