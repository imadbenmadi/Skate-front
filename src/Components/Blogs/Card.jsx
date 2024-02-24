import React from "react";
import img from "../../../public/wallpaper.jpg";
import { Link } from "react-router-dom";
function Card({ blog }) {
    return (
        <Link
            to={`/Blogs/${blog._id}`}
            className="w-full h-fit relative rounded overflow-hidden border-b border-gray py-5 px-5 flex shrink-0 justify-start "
        >
            <img className=" w-[40%] h-[50%]  md:h-full object-cover" src={img} alt={blog.Title} />
            <div className="w-[60%] pl-6 py-4 ">
                {/* <div className="font-bold text-xl mb-2 overflow-hidden w-[550px]">
                    {blog.Title}
                </div> */}
                {blog.Title && (
                    <p className="font-bold text-xl mb-2 overflow-hidden">
                        {blog.Title.slice(0, 60) +
                            (blog.Title.length > 60 ? "..." : "")}
                    </p>
                )}

                {blog.Text && (
                    <p className="text-gray-700 text-base">
                        {blog.Text.slice(0, 150) +
                            (blog.Text.length > 150 ? "..." : "")}
                    </p>
                )}

                
                <p className="text-gray-700 text-sm pt-4">{blog.Category}</p>
            </div>
        </Link>
    );
}

export default Card;
