import React from "react";
import { useState, useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";
import axios from "axios";
function Services() {
    const [loading, setLoading] = useState(false);
    const { isAuth, _id } = useAppContext();
    const fetchServices = async () => {
        setLoading(true);

        try {
            const response = await axios.get("http://localhost:3000/Services", {
                withCredentials: true,
                validateStatus: () => true,
            });

            if (response.status === 200) {
                console.log(response.data);
            } else {
                console.log(response.data);
            }
            if (isAuth) {
                const userId = _id;
                const response = await axios.get(
                    `http://localhost:3000/Courses/userCourses/${_id}`,
                    {
                        withCredentials: true,
                        validateStatus: () => true,
                        // data: {
                        //     userId: _id,
                        // },
                    }
                );
                console.log("userCourses : ");
                if (response.status === 200) {
                    console.log(response.data);
                } else {
                    console.log(response.data);
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); // Set loading state to false regardless of success or failure
        }
    };
    useEffect(() => {
        fetchServices();
    }, []);
    return (
        <div>
            {loading ? (
                <div className="w-screen h-screen flex items-center justify-center">
                    <span className="loader"></span>
                </div>
            ) : (
                <div className="pt-[60px]">wolcom to skate Services</div>
            )}
        </div>
    );
}

export default Services;
