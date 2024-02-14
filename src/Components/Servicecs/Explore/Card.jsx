import React from "react";
import img from "../../../../public/wallpaper.jpg";
import { Link } from "react-router-dom";
function Card({ course }) {
    return (
        <Link
            to={`/Courses/${course._id}`}
            className="w-full relative rounded overflow-hidden border-b border-gray py-5 px-5 flex shrink-0 justify-start h-[200px]"
        >
            <img
                className=" w-[30%] object-cover"
                src={img}
                alt={course.Title}
            />
            <div className="w-[60%] pl-6 py-4 ">
                {/* <div className="font-bold text-xl mb-2 overflow-hidden w-[550px]">
                    {course.Title}
                </div> */}
                {course.Title && (
                    <p className="font-bold text-xl mb-2 overflow-hidden">
                        {course.Title.slice(0, 60) +
                            (course.Title.length > 60 ? "..." : "")}
                    </p>
                )}

                {course.Text && (
                    <p className="text-gray-700 text-base">
                        {course.Text.slice(0, 70) +
                            (course.Text.length > 70 ? "..." : "")}
                    </p>
                )}

                {/* <p className="text-gray-700 text-base">{course.Description}</p> */}
                <p className="text-gray-700  text-sm absolute top-10 right-5 ">
                    {course.Price} DA
                </p>
                <p className="text-gray-700 text-sm pt-4">{course.Category}</p>
                {/* <p className="text-gray-700 text-base">
                  {new Date(course.Date).toLocaleDateString()}
              </p> */}
            </div>
        </Link>
    );
}

export default Card;
