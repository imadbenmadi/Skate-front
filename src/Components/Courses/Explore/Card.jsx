import React from 'react'
import img from "../../../../public/wallpaper.jpg";
function Card({course}) {
  return (
      <div className="w-full rounded overflow-hidden border-b border-gray pb-2 flex justify-start h-[190px]">
          <img
              className=" w-[320px] object-cover"
              src={img}
              alt={course.Title}
          />
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{course.Title}</div>
              <p className="text-gray-700 text-base">{course.Text}</p>
              <p className="text-gray-700 text-base">{course.Description}</p>
              <p className="text-gray-700 text-base">DA {course.Price}</p>
              <p className="text-gray-700 text-base">
                  Category: {course.Category}
              </p>
              <p className="text-gray-700 text-base">
                  {new Date(course.Date).toLocaleDateString()}
              </p>
          </div>
      </div>
  );
}

export default Card