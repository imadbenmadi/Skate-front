import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";

import { FaPen } from "react-icons/fa";
import { useLocation } from "react-router";
import axios from "axios";
import swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useOutletContext } from "react-router-dom";

function Default() {
    const user = useOutletContext()
    console.log("passing data throw context :",user);
    const location = useLocation();
    const Navigate = useNavigate();
    const userId = location.pathname.split("/")[3];
    async function handle_delete_user() {
        try {
            const response = await axios.delete(
                `http://localhost:3000/Dashboard/User/${userId}`,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status === 200) {
                Navigate("/Dashboard/Users");
                swal.fire(
                    "User Deleted Successfully",
                    "",
                    "success"
                );
                setsecces(true);
            } else if (response.status === 404) {
                swal.fire(
                    " User Not found ",
                    " Refresh the page please",
                    "info"
                );
            } else if (401) {
                swal.fire({
                    title: "Unauthorised Action",
                    text: "You should Login again ",
                    icon: "error",
                    confirmButtonColor: "#3085d6",

                    confirmButtonText: "Go to Admin Login Page",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Navigate("/Dashboard_Login");
                    }
                });
            } else {
                swal.fire(
                    "Could not delete user",
                    "Please Try again Latter",
                    "error"
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div>
            <div className=" flex gap-10  pt-6 justify-center text-xl ">
                <Link
                    to={"/Dashboard/Users/" + userId + "/Edit"}
                    className="flex items-center   gap-1 bg-green text-white px-3 py-1 rounded"
                >
                    <FaPen />
                    Edit user
                </Link>
                <div
                    onClick={() => {
                        swal.fire({
                            title: "Are you sure you want to delete this user ?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "red",
                            cancelButtonColor: "green",
                            confirmButtonText: "Yes Delete it",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                handle_delete_user();
                            }
                        });
                    }}
                    className="flex items-center  cursor-pointer  gap-1 bg-red-500 text-white px-3 py-1 rounded"
                >
                    <MdOutlineDeleteForever />
                    Delete user
                </div>
            </div>

            <div className="bg-gray_white rounded mt-8 w-fit m-auto">
                {user && (
                    <table className="w-full">
                        <tbody>
                            <tr className="">
                                <th className="text-left pr-4 border  p-2 ">
                                    User name:
                                </th>
                                <td className=" border border-gray pl-3">
                                    {user.FirstName} {user.LastName}
                                </td>
                            </tr>
                            <tr>
                                <th className="text-left pr-4 border  p-2">
                                    Email:
                                </th>
                                <td className=" border border-gray pl-3">
                                    {user.Email}
                                </td>
                            </tr>
                            <tr>
                                <th className="text-left pr-4 border  p-2">
                                    Telephone:
                                </th>
                                <td className=" border border-gray pl-3">
                                    {user.Telephone}
                                </td>
                            </tr>
                            <tr>
                                <th className="text-left pr-4 border  p-2">
                                    Gender:
                                </th>
                                <td className=" border border-gray pl-3">
                                    {user.Gender}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Default;