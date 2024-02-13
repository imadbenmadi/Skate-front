import React from 'react'
import img from "../../../../public/wallpaper.jpg";
import { Link } from 'react-router-dom';
function Card({course}) {
  return (
      <Link
          to={`/Courses/${course._id}`}
          className="w-full rounded overflow-hidden border-b border-gray py-5 px-5 flex justify-start h-[200px]"
      >
          <img
              className=" w-[320px] object-cover"
              src={img}
              alt={course.Title}
          />
          <div className="pl-6 py-4">
              <div className="font-bold text-xl mb-2">{course.Title}</div>
              <p className="text-gray-700 text-base">{course.Text}</p>
              {/* <p className="text-gray-700 text-base">{course.Description}</p> */}
              <p className="text-gray-700 text-base">DA {course.Price}</p>
              <p className="text-gray-700 text-base">{course.Category}</p>
              <p className="text-gray-700 text-base">
                  {new Date(course.Date).toLocaleDateString()}
              </p>
          </div>
      </Link>
  );
}

export default Card