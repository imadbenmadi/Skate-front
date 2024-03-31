import Laptop_Navbar from "./NavBar/Laptop_Navbar";
import Mobile_NavBar from "./NavBar/Mobile_NavBar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import ErrorPage from "../ErrorPage";
import { useNavigate } from "react-router";
function Profile() {
    const Navigate = useNavigate();
    const location = useLocation();
    const [Active_nav, setActive_nav] = useState(null);
    const [openNav, SetOpenNav] = useState(false);
    const [windowWidth, SetwindowWidth] = useState(window.innerWidth);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        window.addEventListener("resize", () => {
            SetwindowWidth(window.innerWidth);
        });
    }, []);
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `http://localhost:3000//Profile/${
                    location.pathname.split("/")[2]
                }`,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status === 200) {
                setUser(response.data.userData);
            } else {
                Navigate("/Login");
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading)
        return (
            <div className=" w-screen h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    if (error) {
        return <ErrorPage />;
    }
    if (!user) return null;
    return (
        <div className=" flex">
            {windowWidth < 768 ? (
                <>
                    <div
                        className={
                            openNav
                                ? "w-[35%] bg-black h-screen"
                                : "w-[15%] bg-black h-screen"
                        }
                    >
                        <Mobile_NavBar
                            Active_nav={Active_nav}
                            setActive_nav={setActive_nav}
                            openNav={openNav}
                            SetOpenNav={SetOpenNav}
                            userId={user._id}
                        />
                    </div>
                    <div
                        className={
                            openNav
                                ? "w-[65%] h-screen overflow-auto custom-overflow"
                                : "w-[85%] h-screen overflow-auto custom-overflow"
                        }
                    >
                        <Outlet context={[user, setUser]} />
                    </div>
                </>
            ) : (
                <>
                    <div className=" w-[20%] bg-black h-screen">
                        <Laptop_Navbar
                            Active_nav={Active_nav}
                            setActive_nav={setActive_nav}
                            userId={user._id}
                        />
                    </div>
                    <div className="w-[80%]   h-screen overflow-auto custom-overflow  ">
                        <Outlet context={[user, setUser]} />
                    </div>
                </>
            )}
        </div>
    );
}

export default Profile;
