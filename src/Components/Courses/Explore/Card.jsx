import React from 'react'

function Card({course}) {
  return (
      <div className="w-full rounded overflow-hidden shadow-lg">
          <img className="w-full" src={course.Image} alt={course.Title} />
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{course.Title}</div>
              <p className="text-gray-700 text-base">{course.Description}</p>
              <p className="text-gray-700 text-base">Price: ${course.Price}</p>
              <p className="text-gray-700 text-base">
                  Category: {course.Category}
              </p>
              <p className="text-gray-700 text-base">
                  Date: {new Date(course.Date).toLocaleDateString()}
              </p>
          </div>
      </div>
  );
}

export default Card