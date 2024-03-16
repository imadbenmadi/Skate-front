import img from "../../../public/wallpaper.jpg";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import ErrorPage from "../ErrorPage";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
function Blogs_item() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [blog, setblog] = useState([]);
    const location = useLocation();

    const fetchblog = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `http://localhost:3000/Blogs/${
                    location.pathname.split("/")[2]
                }`,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status == 200) {
                setblog(response.data);
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false); // Set loading state to false regardless of success or failure
        }
    };
    useEffect(() => {
        fetchblog();
    }, []);
    if (error) {
        return <ErrorPage />;
    }
    if (loading)
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    return (
        <div className=" pt-[80px] flex flex-col items-center w-[90%] m-auto md:items-start justify-center gap-3 ">
            <Link
                to={"/Blogs"}
                className="select-none w-fit m-auto bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 mb-4"
            >
                <IoMdArrowRoundBack />
                <div>Back to Blogs</div>
            </Link>
            <h2 className="text-2xl font-bold mb-2 m-auto">{blog.Title}</h2>
            <div className="flex justify-center gap-6 m-auto ">
                <img src={img} alt="" className=" w-[400px]" />
                <p className="text-gray">{blog.Text && blog.Text}</p>
            </div>
            <div className=" w-[90vw] m-auto my-6 p-4 rounded ">
                {blog.Description}
            </div>
        </div>
    );
}

export default Blogs_item;
