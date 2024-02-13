import React from "react";
import Search from "./Search";
import Filter from "./Filter"
import ExploreCCourses from "./ExploreCourses"
import { useState } from "react";
function Explore() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
    return (
        <div className=" pt-8">
            <div className=" flex justify-between mx-16">
                <div className=" text-3xl">Explore Ower Courses</div>
                <Search setSearch={setSearch} />
            </div>
            <div className=" flex">
                <div className=" w-[25%] bg-green">
                    <Filter setFilter={setFilter} />
                </div>

                <div className=" w-[75%] bg-red-600">
                    <ExploreCCourses search={search} filter={filter} />
                </div>
            </div>
        </div>
    );
}

export default Explore;
