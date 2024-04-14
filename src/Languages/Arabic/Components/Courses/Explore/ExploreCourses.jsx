import Card from "./Card";
import { IoWarning } from "react-icons/io5";
function Explorecourses({ search, filter, courses }) {
    if (courses.courses && Array.isArray(courses.courses)) {
        if (courses.courses.length == 0)
            return (
                <div
                    className=" flex text-gray justify-center items-start p-3 
                    text-xl md:text-2xl h-screen"
                >
                    <div className=" flex items-center gap-4 ">
                        <IoWarning className=" " />
                        <div className="text-center text-gray py-2">
                            No Courses for the moment
                        </div>
                    </div>
                </div>
            );

        const filteredcourses = courses.courses.filter((course) => {
            const matchesSearch =
                !search ||
                course.Title.toLowerCase().includes(search.toLowerCase());
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
                    <div className="text-center text-lg text-gray py-6 min-h-[60vh]">
                        No Course match the Query.
                    </div>
                ) : (
                    <div className="md:h-[80vh]">
                        {filteredcourses.map((course, index) => (
                            <div key={index} className="w-full ">
                                <Card course={course} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
    return (
        <div className=" flex text-gray items-center gap-2 p-3">
            <IoWarning className=" text-2xl" />
            <div className="text-center text-gray py-2">
                No Courses for the moment
            </div>
        </div>
    );
}

export default Explorecourses;
