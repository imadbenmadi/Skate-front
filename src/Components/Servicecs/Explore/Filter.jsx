
import { IoFilterSharp } from "react-icons/io5";

function Filter({ filter, setFilter, Services_Categories }) {
    const categories = Services_Categories;
    const handleToggleCategory = (category) => {
        const currentIndex = filter.indexOf(category);
        const newfilter = [...filter];

        if (currentIndex == -1) {
            newfilter.push(category);
        } else {
            newfilter.splice(currentIndex, 1);
        }

        setFilter(newfilter); // Update the filter state in the parent component
    };
    if(!categories || categories.lengh == 0) return null
    return (
        <div className="bg-gray-100 md:p-2 lg:p-6 rounded-lg ">
            <h2 className=" font-semibold mb-6 flex items-center gap-1 text-2xl border-b border-gray w-fit text-gray">
                <IoFilterSharp />
                Filter
            </h2>
            <div>
                {categories.map((category, index) => (
                    <label
                        key={index}
                        className=" mb-2 flex items-center w-fit   "
                    >
                        <input
                            type="checkbox"
                            checked={filter.includes(category.Category)}
                            onChange={() =>
                                handleToggleCategory(category.Category)
                            } // Accessing the "Category" value
                            className="mr-2"
                        />
                        <span className="text-gray">{category.Category}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

export default Filter;
