import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { useAppContext } from "../../Context/AppContext";

function Courses() {
    const [loading, setLoading] = useState(false);
    const { isAuth, _id } = useAppContext();
    const fetch_Data = async () => {
        setLoading(true);

        try {
            const response = await axios.get("http://localhost:3000/Courses", {
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
                    `http://localhost:3000/Courses/userCourses/${userId}`,
                    {
                        withCredentials: true,
                        validateStatus: () => true,
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
        fetch_Data();
    }, []);

    return (
        <div>
            
            {loading ? (
                <div className="w-screen h-screen flex items-center justify-center">
                    <span className="loader"></span>
                </div>
            ) : (
                <div className="pt-[60px]">
                    {/* <Current_Courses /> */}
                    {/* <Explore /> */}
                </div>
            )}
        </div>
    );
}

export default Courses;
