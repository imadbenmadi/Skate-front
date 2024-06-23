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
import en from "../public/en.png";
import ar from "../public/ar.png";
import fr from "../public/fr.png";
import { useAppContext } from "./Context/AppContext";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
function App() {
    
    const [loading, setLoading] = useState(true);
    const { set_Auth, store_login, isAuth, IsEmailVerified, Notifications } =
        useAppContext();

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
                    en,
                    ar,
                    fr,
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
                        resolve(); // Reject if any image fails to load
                    };
                    img.src = imageSrc;
                });
            });
        };

        const fetch_fonts = () => {
            return new Promise((resolve, reject) => {
                // localStorage.setItem("language", "ar");
                const fontURLs = [
                    "https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;500;700;800&display=swap",
                    "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap",
                ];

                const loadFont = (url) => {
                    return new Promise((resolve, reject) => {
                        const link = document.createElement("link");
                        link.href = url;
                        link.rel = "stylesheet";
                        link.onload = () => {
                            resolve(); // Resolve promise when font is loaded
                        };
                        link.onerror = () => {
                            resolve(); // Resolve even if font fails to load
                        };
                        document.head.appendChild(link);
                        if (
                            !localStorage.getItem("language") ||
                            localStorage.getItem("language") == "en"
                        )
                            document.getElementById("root").style.fontFamily =
                                "Outfit";
                        else if (localStorage.getItem("language") == "ar")
                            document.getElementById("root").style.fontFamily =
                                "Rubik";
                        else if (localStorage.getItem("language") == "fr")
                            document.getElementById("root").style.fontFamily =
                                "Outfit";
                        else
                            document.getElementById("root").style.fontFamily =
                                "Outfit";
                    });
                };

                // Load all fonts sequentially
                const loadAllFonts = async () => {
                    for (const url of fontURLs) {
                        await loadFont(url);
                    }
                    resolve(); // Resolve promise once all fonts are loaded or failed to load
                };

                loadAllFonts();
            });
        };
        if (!localStorage.getItem("language"))
            localStorage.setItem("language", "en");
        // Promise.all([fetch_fonts(), fetch_images()]);

        Promise.all([fetch_fonts(), fetch_images(), fetchData()])
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                setLoading(false); // Handle error if any of the promises fail
            });
    }, [window.location.pathname]);
   
    if (loading)
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    return <Outlet />;
}

export default App;
