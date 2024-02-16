import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import ExploreServices from "./ExploreServices";
import { useState } from "react";
import Mobile_Filter from "./Mobile_Filter";
import { IoWarning } from "react-icons/io5";

function Explore({ services }) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState([]);
    
    return (
        <div className=" pt-[30px]">
            <div className=" flex flex-col md:flex-row justify-between items-center mx-16 mb-2 font-semibold text-gray w-300px">
                <div className=" text-2xl w-screen md:w-fit text-center lg:text-3xl mb-2 ">
                    <span className=" text-green2">Explore </span>
                    Skate Services
                </div>

                <div className="   flex gap-2">
                    <div className=" md:hidden">
                        <Mobile_Filter filter={filter} setFilter={setFilter} />
                    </div>
                    <Search setSearch={setSearch} />
                </div>
            </div>

            <div className="hidden md:flex h-[calc(100vh-135px)] border-t-2 border-gray_white">
                <div className="hidden md:block w-[20%] bg-gray_white">
                    <Filter filter={filter} setFilter={setFilter} />
                </div>
                {services.length == 0 ? (
                    <div className=" w-[80%] h-fit text-center pt-6 flex gap-1 text-2xl justify-center items-center text-gray">
                        <IoWarning />
                        No Services Founded
                    </div>
                ) : (
                    <div className=" w-[80%] overflow-y-auto ">
                        <ExploreServices
                            search={search}
                            filter={filter}
                            services={services}
                        />
                    </div>
                )}
            </div>
            <div className="md:hidden">
                {services.length == 0 ? (
                    <div className=" w-[80%] m-auto h-fit text-center pt-6 flex gap-1 text-2xl justify-center items-center text-gray">
                        <IoWarning />
                        No Services Founded
                    </div>
                ) : (
                    <ExploreServices
                        search={search}
                        filter={filter}
                        services={services}
                    />
                )}
            </div>
        </div>
    );
}

export default Explore;
