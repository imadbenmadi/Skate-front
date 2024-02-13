import React from "react";

function Filter({ filter, setFilter }) {
    const categories = ["management", "finance", "marketing", "design"];

    const handleToggleCategory = (category) => {
        const currentIndex = filter.indexOf(category);
        const newfilter = [...filter];

        if (currentIndex === -1) {
            newfilter.push(category);
        } else {
            newfilter.splice(currentIndex, 1);
        }

        setFilter(newfilter); // Update the filter state in the parent component
        console.log(newfilter);
    };

    return (
        <div className="filter-bar bg-gray-100 p-4 rounded-lg ">
            <h2 className="text-lg font-semibold mb-2">Filter</h2>
            <div>
                {categories.map((category, index) => (
                    <label key={index} className=" mb-2 flex items-center  ">
                        <input
                            type="checkbox"
                            checked={filter.includes(category)}
                            onChange={() => handleToggleCategory(category)}
                            className="mr-2"
                        />
                        <span className="text-gray-800">{category}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

export default Filter;
