import img from "../../../public/wallpaper.jpg";
import { Link } from "react-router-dom";
import { Formate_Date } from "../../Logic/Formate_Date"; // Import your date formatting function
import { useEffect } from "react";
import { useState } from "react";
function Card({ blog }) {
    const [windowWidth, SetwindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            SetwindowWidth(window.innerWidth);
        });
    }, []);
    return (
        <Link
            to={`/Blogs/${blog._id}`}
            className="select-none w-full relative px-2 md:px-5  overflow-hidden border-b border-gray py-5 flex shrink-0 justify-start h-fit"
        >
            <img
                className="w-[40%] md:w-[300px] object-cover h-[150px] md:h-[180px]"
                src={`http://localhost:3000/Blogs/${blog.Image}`}
                alt={blog.Title}
            />
            <div className="w-[60%] pl-2 md:pl-6 ">
                {blog.Title && (
                    <p className="font-bold  text-lg md:text-xl  overflow-hidden">
                        {windowWidth > 640
                            ? blog.Title.slice(0, 60)
                            : blog.Title.slice(0, 30)}
                        {blog.Title.length > (windowWidth > 640 ? 60 : 30)
                            ? "..."
                            : ""}
                    </p>
                )}
                {blog.Text && (
                    <p className="text-gray text-base">
                        {windowWidth > 640
                            ? blog.Text.slice(0, 150)
                            : blog.Text.slice(0, 75)}
                        {blog.Text.length > (windowWidth > 640 ? 150 : 75)
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
