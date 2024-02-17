import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import { FaPlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

import Users_Table from "./Users_Table";
import axios from "axios";
import { Link } from "react-router-dom";
function Table() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [open_add_user, setopen_add_user] = useState(false);
    function toogle_open_add_user() {
        setopen_add_user(!open_add_user);
    }

    const fetch_users = async () => {
        setLoading(true);

        try {
            const response = await axios.get(
                "http://localhost:3000/Dashboard/User",
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status === 200) {
                setUsers(response.data);
            } else {
            }
        } catch (error) {
            console.log("error in the front end : ", error);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetch_users();
    }, []);
    if (loading)
        return (
            <div className=" w-[100%] h-[200px] flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    return (
        <>
            <div className=" flex  justify-around">
                <div className=" flex items-center">
                    <Filter filter={filter} setFilter={setFilter} />
                    <Search setSearch={setSearch} />
                </div>
                <Link
                    className=" bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 "
                    to={"/Dashboard/Users/Add"}
                >
                    <>
                        <FaPlus />
                        <div>Add User</div>
                    </>
                </Link>
            </div>
            <Users_Table users={users} />
        </>
    );
}

export default Table;
