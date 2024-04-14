import NavBar from "./Components/NavBar/NavBar";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Activate_account from "./Components/Alerts/Activate_account";
import Course1 from "../public/Course1.jpg";
import Course2 from "../public/Course2.jpg";
import Course3 from "../public/Course3.jpg";
import iconService1 from "../public/iconService1.png";
import iconService2 from "../public/iconService2.png";
import iconService3 from "../public/iconService3.png";
import Founder_image from "../public/Founder.png";
import pg_image from "../public/Home_Hero_bg.png";
import AboutUs_img from "../public/Home_AboutUs.png";
import Logo from "../public/Logo.png";
import Logo2 from "../public/skate_circle.png";
import Default_image from "../public/Default.jpg";
import NotFound from "../public/NotFound.png";
import { useAppContext } from "./Context/AppContext";
import { useNavigate } from "react-router";
function Fetcher() {
    const Navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const { set_Auth, store_login, isAuth, IsEmailVerified, Notifications } =
        useAppContext();
    const [Active_nav, setActive_nav] = useState("Home");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://backend.skate.dz/check_Auth",
                    {
                        withCredentials: true,
                        validateStatus: () => true,
                    }
                );
                if (
                    response.status == 200 &&
                    response.data.userData._id == null
                ) {
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
            }
        };

        const fetch_images = () => {
            return new Promise((resolve, reject) => {
                const images = [
                    Course1,
                    Course2,
                    Course3,
                    iconService1,
                    iconService2,
                    iconService3,
                    Founder_image,
                    pg_image,
                    AboutUs_img,
                    Logo,
                    Logo2,
                    Default_image,
                    NotFound,
                ];
                let loadedCount = 0;
                if (images.length === 0) resolve();
                images.forEach((imageSrc) => {
                    const img = new Image();
                    img.onload = () => {
                        loadedCount++;
                        if (loadedCount === images.length) {
                            resolve(); // Resolve promise when all images are loaded
                        }
                    };
                    img.onerror = () => {
                        // console.log("Error loading images");
                        resolve(); // Reject if any image fails to load
                    };
                    img.src = imageSrc;
                });
            });
        };

        const fetch_font = () => {
            return new Promise((resolve, reject) => {
                const link = document.createElement("link");
                link.href =
                    "https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;500;700;800&display=swap";
                link.rel = "stylesheet";
                link.onload = () => {
                    resolve(); // Resolve promise when font is loaded
                };
                link.onerror = () => {
                    console.log("Error loading font");
                    resolve(); // Reject if font fails to load
                };
                document.head.appendChild(link);
            });
        };

        Promise.all([fetch_font(), fetch_images(), fetchData()])
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                setLoading(false); // Handle error if any of the promises fail
            });
    }, []);

    return (
        <div>
            {loading ? (
                <div className="w-screen h-screen flex items-center justify-center">
                    <span className="loader"></span>
                </div>
            ) : (
                // <div className="relative h-screen overflow-y-auto custom-overflow overflow-x-hidden">
                //     <NavBar
                //         Active_nav={Active_nav}
                //         setActive_nav={setActive_nav}
                //     />
                //     {isAuth && !IsEmailVerified && <Activate_account />}
                //     <Outlet />
                // </div>
                Navigate("/home")
            )}
        </div>
    );
}

export default Fetcher;
