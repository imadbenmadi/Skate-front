import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import { FaPlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Add_user from "./Add_user";
import Users_Table from "./Users_Table";
import axios from "axios";
function Dashboard_Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);

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
            <div className=" w-screen h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    return (
        <>
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
            <div>
                {open_add_user ? <Add_user /> : <Users_Table users={users} />}
            </div>
        </>
    );
}

export default Dashboard_Users;
