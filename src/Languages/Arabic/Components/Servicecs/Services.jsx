import { useState, useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";
import Explore from "./Explore/Explore";
import axios from "axios";
import ErrorPage from "../ErrorPage";
import Footer from "../Footer";
function Services() {
    const [loading, setLoading] = useState(false);
    const [services, setServices] = useState([]);
    const [error, setError] = useState(null);
    const [userServices, setUserServices] = useState([]);
    const { isAuth, _id } = useAppContext();
    const [Services_Categories, SetServices_Categories] = useState([]);
    const fetchServices = async () => {
        try {
            const response = await axios.get("http://localhost:3000/Services", {
                withCredentials: true,
                validateStatus: () => true,
            });

            if (response.status == 200) {
                setServices(response.data);
            } else {
                setError(response.data);
            }

            if (isAuth) {
                const userResponse = await axios.get(
                    `http://localhost:3000/Courses/userCourses/${_id}`,
                    {
                        withCredentials: true,
                        validateStatus: () => true,
                    }
                );
                if (userResponse.status == 200) {
                    setUserServices(userResponse.data);
                } else {
                    setError(userResponse.data);
                }
            }
        } catch (error) {
            setError(error);
        } 
    };
    const fetch_Services_Categories = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/Categories/Services",
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status == 200) {
                SetServices_Categories(response.data.Categories);
            } else {
                SetServices_Categories([]);
            }
        } catch (error) {
            SetServices_Categories([]);
        }
    };
    useEffect(() => {
        setLoading(true);
        fetchServices();
        fetch_Services_Categories();
        setLoading(false);
    }, []);
    if (error) {
        return <ErrorPage />;
    }
    return (
        <div>
            {loading ? (
                <div className="w-screen h-screen flex items-center justify-center">
                    <span className="loader"></span>
                </div>
            ) : (
                <div className=" pt-[50px] overflow-y-hidden">
                    <Explore
                        services={services}
                        Services_Categories={Services_Categories}
                    />
                </div>
            )}
        </div>
    );
}

export default Services;
