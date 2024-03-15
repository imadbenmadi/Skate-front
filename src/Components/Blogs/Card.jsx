import React from "react";
import img from "../../../public/wallpaper.jpg";
import { Link } from "react-router-dom";
import { Formate_Date } from "../../Logic/Formate_Date"; // Import your date formatting function

function Card({ blog }) {
    return (
        <Link
            to={`/blogs/${blog._id}`}
            className="select-none w-full relative  overflow-hidden border-b border-gray py-5 flex shrink-0 justify-start h-fit"
        >
            <img
                className="w-[30%] object-cover h-[120px]"
                src={img}
                alt={blog.Title}
            />
            <div className="w-[60%] pl-6 ">
                {blog.Title && (
                    <p className="font-bold  text-lg md:text-xl  overflow-hidden">
                        {window.innerWidth > 640
                            ? blog.Title.slice(0, 60)
                            : blog.Title.slice(0, 30)}
                        {blog.Title.length >
                        (window.innerWidth > 640 ? 60 : 30)
                            ? "..."
                            : ""}
                    </p>
                )}
                {blog.Text && (
                    <p className="text-gray text-base">
                        {window.innerWidth > 640
                            ? blog.Text.slice(0, 150)
                            : blog.Text.slice(0, 75)}
                        {blog.Text.length >
                        (window.innerWidth > 640 ? 150 : 75)
                            ? "..."
                            : ""}
                    </p>
                )}
                <p className="text-gray text-sm pt-2 font-semibold">
                    {Formate_Date(blog.Date)}
                </p>
            </div>
        </Link>
    );
}

export default Card;
