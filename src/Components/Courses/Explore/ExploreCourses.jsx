
import Card from "./Card";
import { IoWarning } from "react-icons/io5";
function Explorecourses({ search, filter, courses }) {
    console.log(courses);
    if (courses.courses && Array.isArray(courses.courses)) {
        if (courses.courses.length == 0 || !courses)
            return (
                <div className=" flex text-gray items-center gap-2 p-3">
                    <IoWarning className=" text-2xl" />
                    <div className="text-center text-gray py-2">
                        No courses for the moment
                    </div>
                </div>
            );
        const filteredcourses = courses.courses.filter((course) => {
            const matchesSearch =
                !search ||
                course.Title.toLowerCase().includes(search.toLowerCase())
            const matchesFilter =
                !filter ||
                filter.length == 0 ||
                !course.Category ||
                filter.includes(course.Category);
            return matchesSearch && matchesFilter;
        });

        if ((!filter || filter.length == 0) && search == "") {
            return (
                <div className="md:h-[80vh] overflow-auto custom-overflow  ">
                    {courses.courses.map((course, index) => (
                        <div key={index} className="w-full ">
                            <Card course={course} />
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div>
                {filteredcourses.length == 0 ? (
                    <div className="text-center text-gray py-2">
                        No courses match the Query.
                    </div>
                ) : (
                    filteredcourses.map((course, index) => (
                        <div key={index} className="w-full ">
                            <Card course={course} />
                        </div>
                    ))
                )}
            </div>
        );
    }
    return (
        <div className=" flex text-gray items-center gap-2 p-3">
            <IoWarning className=" text-2xl" />
            <div className="text-center text-gray py-2">
                No courses for the moment
            </div>
        </div>
    );
}

export default Explorecourses;
