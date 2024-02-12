import React from "react";
import { useState, useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";
import axios from "axios";
function Blogs() {
    const [loading, setLoading] = useState(false);
    const { isAuth, _id } = useAppContext();
    const fetchBlogs = async () => {
        setLoading(true);

        try {
            const response = await axios.get("http://localhost:3000/Blogs", {
                withCredentials: true,
                validateStatus: () => true,
            });

            if (response.status === 200) {
                console.log(response.data);
            } else {
                console.log(response.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); // Set loading state to false regardless of success or failure
        }
    };
    useEffect(() => {
        fetchBlogs();
    }, []);
    return (
        <div>
            {loading ? (
                <div className="w-screen h-screen flex items-center justify-center">
                    <span className="loader"></span>
                </div>
            ) : (
                <div className="pt-[60px]">wolcom to skate Blogs</div>
            )}
        </div>
    );
}

export default Blogs;
