import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import { FaPlus } from "react-icons/fa6";

function Dashboard_Users() {
    return (
        <div>
            <div className=" flex  justify-around">
                <div className=" flex items-center">
                    <Search />
                    <Filter />
                </div>
                <div className=" bg-green text-white text-xl flex items-center gap-2 px-3 py-1 ">
                    <FaPlus />
                    <div>Add User</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard_Users;
