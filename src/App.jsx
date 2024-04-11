import NavBar from "./Components/NavBar/NavBar";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { useAppContext } from "./Context/AppContext";
import axios from "axios";
import Activate_account from "./Components/Alerts/Activate_account";
import Footer from "./Components/Footer";
function App() {
    const { set_Auth, store_login, isAuth, IsEmailVerified, Notifications } =
        useAppContext();
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
            if (response.status == 200 && response.data.userData._id == null) {
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
            } else if (response.status == 200) {
                const _id = response.data.userData._id;
                const Email = response.data.userData.Email;
                const FirstName = response.data.userData.FirstName;
                const LastName = response.data.userData.LastName;
                const Notifications = response.data.userData.Notifications;
                // console.log("app.jsx : ",response.data.userData.Notifications);
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
                set_Auth(true);
                setLoading(false);
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
            }
        } catch (error) {
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
        }
    };
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
                <div className="relative h-screen overflow-y-auto custom-overflow overflow-x-hidden ">
                    <NavBar
                        Active_nav={Active_nav}
                        setActive_nav={setActive_nav}
                    />
                    {isAuth && !IsEmailVerified && <Activate_account />}
                    <Outlet />
                </div>
            )}
        </div>
    );
}

export default App;
