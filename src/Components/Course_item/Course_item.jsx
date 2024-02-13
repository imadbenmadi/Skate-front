import React from "react";

function CourseItem() {
    return (
        <div className="border border-gray-300 rounded pt-[60px] p-4 mb-4">
            {/* You can include content for each course item here */}
            <h2 className="text-xl font-bold mb-2">Course Title</h2>
            <p className="text-gray-700">
                Course Description Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
            </p>
            <p className="text-gray-700">Price: $29.99</p>
            <p className="text-gray-700">Category: Web Development</p>
            <p className="text-gray-700">Date: January 1, 2024</p>
        </div>
    );
}

export default CourseItem;
