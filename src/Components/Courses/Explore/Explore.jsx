import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import ExploreCourses from "./ExploreCourses";
import { useState } from "react";
function Explore({ courses }) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState([]);
    console.log("courses : ", courses);
    return (
        <div className=" pt-[30px]">
            <div className=" flex justify-between items-center mx-16 mb-2 font-semibold text-gray">
                <div className=" text-2xl lg:text-3xl">
                    <span className=" text-green2">Explore </span>
                    Skate Courses
                </div>
                <Search setSearch={setSearch} />
            </div>
            <div className=" flex h-[calc(100vh-135px)] border-t-2 border-gray_white">
                <div className=" w-[20%] bg-gray_white">
                    <Filter filter={filter} setFilter={setFilter} />
                </div>

                <div className=" w-[80%] overflow-y-auto">
                    <ExploreCourses
                        search={search}
                        filter={filter}
                        courses={courses}
                    />
                </div>
            </div>
        </div>
    );
}

export default Explore;
