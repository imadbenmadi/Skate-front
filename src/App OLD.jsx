import NavBar from "./Components/NavBar/NavBar";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { useAppContext } from "./Context/AppContext";
import axios from "axios";
import Activate_account from "./Components/Alerts/Activate_account";
import Course1 from "../../../public/Course1.jpg";
import Course2 from "../../../public/Course2.jpg";
import Course3 from "../../../public/Course3.jpg";
import iconService1 from "../../../public/iconService1.png";
import iconService2 from "../../../public/iconService2.png";
import iconService3 from "../../../public/iconService3.png";
import Founder_image from "../../../public/Founder.png";
function App() {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loading, setLoading] = useState(false);

    const { set_Auth, store_login, isAuth, IsEmailVerified, Notifications } =
        useAppContext();
    const [Active_nav, setActive_nav] = useState("Home");

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await axios.get(
                "https://backend.skate.dz/check_Auth",
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
    const fetch_images = () => {
        const imageLoader = new Promise((resolve, reject) => {
            const images = [
                pg_image,
                AboutUs_img,
                Course1,
                Course2,
                Course3,
                iconService1,
                iconService2,
                iconService3,
                Founder_image,
            ];
            let loadedCount = 0;
            if (images.length === 0) resolve();
            images.forEach((imageSrc) => {
                const img = new Image();
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === images.length) {
                        resolve();
                    }
                };
                img.onerror = () => {
                    console.log("Error loading images");
                };
                img.src = imageSrc;
            });
        });
        imageLoader
            .then(() => {
                setImagesLoaded(true);
            })
            .catch(() => {
                console.error("Error loading images");
            });
    };
    const fetch_font = () => {
        const link = document.createElement("link");
        link.href =
            "https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;500;700;800&display=swap";
        link.rel = "stylesheet";
        link.onload = () => {
            setFontLoaded(true);
        };
        document.head.appendChild(link);
        // Set a timeout to check if the font is loaded after 5 seconds
        setTimeout(() => {
            if (!fontLoaded) {
                // If the font is not loaded after 5 seconds, set a default font
                setFontLoaded(true); // Set fontLoaded to true to render with default font
            }
        }, 5000); // 5000 milliseconds = 5 seconds
    };
    useEffect(() => {
        fetchData();
        fetch_font();
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
