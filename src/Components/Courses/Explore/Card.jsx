import img from "../../../../public/wallpaper.jpg";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Card({ course }) {
    const [windowWidth, SetwindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => {
            SetwindowWidth(window.innerWidth);
        });
    }, []);
    return (
        <Link
            to={`/Courses/${course._id}`}
            className="select-none w-full relative rounded overflow-hidden border-b border-gray py-5 px-1 md:px-5 flex shrink-0 justify-start h-fit"
        >
            <img
                className=" w-[40%] md:w-[300px] h-[150px] md:h-[180px] object-cover"
                src={`http://localhost:3000/Courses/${course.Image}`}
                alt={course.Title}
            />
            <div className="w-[60%] pl-2 md:pl-6  ">
                {course.Title && (
                    <p className="font-bold text-lg md:text-xl  overflow-hidden">
                        {windowWidth > 640
                            ? course.Title.slice(0, 60)
                            : course.Title.slice(0, 20)}
                        {course.Title.length > (windowWidth > 640 ? 60 : 20)
                            ? "..."
                            : ""}
                    </p>
                )}
                {course.Text && (
                    <p className="text-gray text-base">
                        {windowWidth > 640
                            ? course.Text.slice(0, 70)
                            : course.Text.slice(0, 35)}
                        {course.Text.length > (windowWidth > 640 ? 70 : 35)
                            ? "..."
                            : ""}
                    </p>
                )}

                {/* {course.Price ? (
                    <p className="text-gray text-lg font-semibold py-1">
                        {course.Price} DA
                    </p>
                ) : null} */}
                {course.Category ? (
                    <p className="text-gray text-sm font-semibold ">
                        {course.Category}
                    </p>
                ) : null}
            </div>
        </Link>
    );
}

export default Card;
