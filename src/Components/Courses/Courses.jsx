import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { useAppContext } from "../../Context/AppContext";
import Current_Courses from "./Current/Current_Courses";
function Courses() {
    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]);
    const [userCourses, setUserCourses] = useState([]);
    const { isAuth, _id } = useAppContext();
    const fetchCourses = async () => {
        setLoading(true);

        try {
            const response = await axios.get("http://localhost:3000/Courses", {
                withCredentials: true,
                validateStatus: () => true,
            });

            if (response.status === 200) {
                setCourses(response.data);
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
                    setUserCourses(response.data);
                    console.log("userCourses : ",userCourses);
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
        fetchCourses();
    }, []);

    return (
        <div>
            {loading ? (
                <div className="w-screen h-screen flex items-center justify-center">
                    <span className="loader"></span>
                </div>
            ) : (
                <div className="pt-[60px]">
                    <Current_Courses userCourses={userCourses} />
                    {/* <Explore /> */}
                </div>
            )}
        </div>
    );
}

export default Courses;
