import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

function Dashboard_Users() {
    const [open_add_user, setopen_add_user] = useState(false);
    function toogle_open_add_user() {
        setopen_add_user(!open_add_user);
    }
    return (
        <div>
            <div className=" flex  justify-around">
                <div className=" flex items-center">
                    <Filter />
                    <Search />
                </div>
                <div
                    className=" bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 "
                    onClick={toogle_open_add_user}
                >
                    {open_add_user ? (
                        <>
                            <IoMdArrowRoundBack />
                            <div>Back to table</div>
                        </>
                    ) : (
                        <>
                            <FaPlus />
                            <div>Add User</div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard_Users;
