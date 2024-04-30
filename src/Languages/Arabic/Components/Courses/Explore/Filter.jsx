
import { IoFilterSharp } from "react-icons/io5";

function Filter({ filter, setFilter, Courses_Categories }) {
    const categories = Courses_Categories;
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
    if (!categories || categories.lengh == 0) return null;

    return (
        <div className=" md:p-2 lg:p-6 rounded-lg ">
            <h2 className=" font-semibold mb-6 m-auto flex justify-center items-center gap-1 text-2xl border-b border-gray w-fit text-gray ">
                <IoFilterSharp />
                تصفية
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
                            }
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
