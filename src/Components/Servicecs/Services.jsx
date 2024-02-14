import React, { useState, useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";
import Current_Services from "./Current/Current_Services";
import Explore from "./Explore/Explore";
import axios from "axios";

function Services() {
    const [loading, setLoading] = useState(false);
    const [services, setServices] = useState([]);
    const [error, setError] = useState(null);
    const [userServices, setUserServices] = useState([]);
    const { isAuth, _id } = useAppContext();

    const fetchServices = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/Services", {
                withCredentials: true,
                validateStatus: () => true,
            });

            if (response.status === 200) {
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
                if (userResponse.status === 200) {
                    setUserServices(userResponse.data);
                } else {
                    setError(userResponse.data);
                }
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
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
                <div className="pt-[60px]">
                    <Current_Services userServicecs={userServices} />
                    <Explore services={services} />
                </div>
            )}
        </div>
    );
}

export default Services;