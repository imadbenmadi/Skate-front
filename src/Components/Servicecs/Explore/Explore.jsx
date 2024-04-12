import Search from "./Search";
import Filter from "./Filter";
import ExploreServices from "./ExploreServices";
import { useState } from "react";
import Mobile_Filter from "./Mobile_Filter";
import { IoWarning } from "react-icons/io5";

function Explore({ services, Services_Categories }) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState([]);
    if (!services || services.length == 0)
        return (
            <div className=" w-full h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    return (
        <div className=" pt-[30px]">
            <div className=" flex flex-col md:flex-row justify-between items-center mx-16 mb-2 font-semibold text-gray w-300px">
                <div className=" text-2xl w-screen md:w-fit text-center lg:text-3xl mb-2 ">
                    <span className=" text-green2">Explore </span>
                    Skate Services
                </div>
                <div className="   flex gap-2">
                    {Services_Categories && Services_Categories.length > 0 && (
                        <div className=" md:hidden">
                            <Mobile_Filter
                                filter={filter}
                                setFilter={setFilter}
                                Services_Categories={Services_Categories}
                            />
                        </div>
                    )}
                    <Search setSearch={setSearch} />
                </div>
            </div>

            <div className="hidden md:flex  h-[calc(100vh-135px)] border-t-2 border-gray_white">
                {/* {Services_Categories && Services_Categories.length > 0 && ( */}
                <div className="hidden md:block w-[20%] bg-gray_white">
                    <Filter
                        filter={filter}
                        setFilter={setFilter}
                        Services_Categories={Services_Categories}
                    />
                </div>
                {/* )} */}
                {services.length == 0 ? (
                    <div className=" w-[80%] h-fit text-center pt-6 flex gap-1 text-2xl justify-center items-center text-gray">
                        <IoWarning />
                        No Services Founded
                    </div>
                ) : (
                    <div className=" w-[80%] h-full ">
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
