import React from "react";
import img from "../../../../public/wallpaper.jpg";
import { Link } from "react-router-dom";
function Card({ course }) {
    console.log(window.innerWidth);
    return (
        <Link
            to={`/Courses/${course._id}`}
            className="select-none w-full relative rounded overflow-hidden border-b border-gray py-5 px-5 flex shrink-0 justify-start h-[200px]"
        >
            <img
                className=" w-[30%] object-cover"
                src={img}
                alt={course.Title}
            />
            <div className="w-[60%] pl-6  ">
                {course.Title && (
                    <p className="font-bold text-lg md:text-xl  overflow-hidden">
                        {window.innerWidth > 640
                            ? course.Title.slice(0, 60)
                            : course.Title.slice(0, 20)}
                        {course.Title.length >
                        (window.innerWidth > 640 ? 60 : 20)
                            ? "..."
                            : ""}
                    </p>
                )}
                {course.Text && (
                    <p className="text-gray text-base">
                        {window.innerWidth > 640
                            ? course.Text.slice(0, 70)
                            : course.Text.slice(0, 35)}
                        {course.Text.length >
                        (window.innerWidth > 640 ? 70 : 35)
                            ? "..."
                            : ""}
                    </p>
                )}

                {course.Price ? (
                    <p className="text-gray text-lg font-semibold py-1">
                        {course.Price} DA
                    </p>
                ) : null}
                {course.Category ? (
                    <p className="text-gray text-sm font-semibold ">{course.Category}</p>
                ) : null}
            </div>
        </Link>
    );
}

export default Card;
