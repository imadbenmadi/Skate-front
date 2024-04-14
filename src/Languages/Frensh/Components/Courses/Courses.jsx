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
    const [Courses_Categories, SetCourses_Categories] = useState([]);
    const fetchCourses = async () => {
        try {
            const response = await axios.get("http://localhost:3000/Courses", {
                withCredentials: true,
                validateStatus: () => true,
            });
            if (response.status == 200) {
                setCourses(response.data);
            } else {
                setError(response.data);
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

                if (response.status == 200) {
                    setUserCourses(response.data.Courses);
                } else {
                    setError(response.data);
                }
            }
        } catch (error) {
            setError(error);
        }
    };
    const fetch_Courses_Categories = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/Categories/Courses",
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status == 200) {
                SetCourses_Categories(response.data.Categories);
            } else {
                SetCourses_Categories([]);
            }
        } catch (error) {
            SetCourses_Categories([]);
        }
    };
    useEffect(() => {
        setLoading(true);
        fetchCourses();
        fetch_Courses_Categories();
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
                <>
                    <div className="pt-[50px] overflow-y-hidden ">
                        <Explore
                            courses={courses}
                            Courses_Categories={Courses_Categories}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default Courses;
