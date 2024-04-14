import { IoFilterSharp } from "react-icons/io5";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function Mobile_Filter({ filter, setFilter, Services_Categories }) {
    const categories = Services_Categories;
    const [open, setOpen] = useState(false);
    function toogleOpen() {
        setOpen(!open);
    }
    if (!categories || categories.lengh == 0) return null;
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
    return (
        <div className=" relative ">
            <div
                className=" font-semibold p-1  border border-gray w-[100px] text-gray"
                onClick={toogleOpen}
            >
                {open ? (
                    <div className=" text-center m-auto w-fit">
                        <IoClose className=" text-3xl" />
                    </div>
                ) : (
                    <div className="flex items-center gap-1  text-2xl">
                        <IoFilterSharp />
                        <div>Filter</div>
                    </div>
                )}
            </div>
            {open && (
                <div className=" absolute z-40 p-4 w-[200px]  bg-gray_white ">
                    {categories.map((category, index) => (
                        <label
                            key={index}
                            className=" mb-2 flex items-center w-fit  "
                        >
                            <input
                                type="checkbox"
                                checked={filter.includes(category.Category)}
                                onChange={() =>
                                    handleToggleCategory(category.Category)
                                }
                                className="mr-2"
                            />
                            <span className="text-gray">
                                {category.Category}
                            </span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Mobile_Filter;
