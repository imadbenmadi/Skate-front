import { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { useAppContext } from "../../Context/AppContext";
import Explore from "./Explore/Explore";
import ErrorPage from "../ErrorPage";
import Footer from "../Footer";
function Courses() {
    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);
    const [userCourses, setUserCourses] = useState([]);
    const { isAuth, _id } = useAppContext();
    const fetchCourses = async () => {
        setLoading(true);

        try {
            const response = await axios.get(
                "https://backend.skate-consult.com/Courses",
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status == 200) {
                setCourses(response.data);
            } else {
                setError(response.data);
            }
            if (isAuth) {
                const userId = _id;
                const response = await axios.get(
                    `https://backend.skate-consult.com/Courses/userCourses/${_id}`,
                    {
                        withCredentials: true,
                        validateStatus: () => true,
                        // data: {
                        //     userId: _id,
                        // },
                    }
                );

                if (response.status == 200) {
                    setUserCourses(response.data.Courses);
                } else {
                    setError(response.data);
                }
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false); // Set loading state to false regardless of success or failure
        }
    };
    useEffect(() => {
        fetchCourses();
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
                <>
                    <div className="pt-[50px] overflow-y-hidden ">
                        <Explore courses={courses} />
                    </div>
                </>
            )}
        </div>
    );
}

export default Courses;
