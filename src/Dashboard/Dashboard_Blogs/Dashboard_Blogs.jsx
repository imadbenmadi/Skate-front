import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ErrorPage from "../../Components/ErrorPage";
import { Outlet } from "react-router-dom";
function Dashboard_Blogs() {
    const [Blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetch_Blogs = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/Blogs", {
                withCredentials: true,
                validateStatus: () => true,
            });
          if (response.status == 200) {
              console.log(response.data);
                setBlogs(response.data.blogs);
            } else {
                setError(response.data);
            }
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetch_Blogs();
    }, []);
    if (loading)
        return (
            <div className=" w-[100%] h-[200px] flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    if (error) {
        return <ErrorPage />;
    }
    return (
        <div className=" pt-8">
            <Outlet context={Blogs} />
        </div>
    );
}

export default Dashboard_Blogs;
