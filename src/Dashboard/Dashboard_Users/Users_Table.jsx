import React from "react";

function Users_Table({ users }) {
    console.log("users", users);
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-6">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 text-black_text ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center ">
                    <tr>
                        <th scope="col" className="py-3 ">
                            User name
                        </th>
                        <th scope="col" className="py-3 ">
                            Telephone
                        </th>
                        <th scope="col" className="py-3 ">
                            Email
                        </th>
                        <th scope="col" className="py-3 ">
                            Status
                        </th>
                        <th scope="col" className="py-3 ">
                            Gender
                        </th>
                        <th scope="col" className="py-3 ">
                            Age
                        </th>
                        <th scope="col" className="py-3 ">
                            Password
                        </th>
                        <th scope="col" className="py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray_white border-b border-gray-700 hover:bg-white cursor-pointer">
                        <td className="w-[100px] py-3 whitespace-nowrap border-r ">
                            <div
                                className="overflow-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300"
                                style={{ maxWidth: "100px" }}
                            >
                                benmadi abdelouahab benmadi abdelouahab benmadi
                                abdelouahab benmadi abdelouahab benmadi
                                abdelouahab benmadi abdelouahab benmadi
                                abdelouahab benmadi abdelouahab benmadi
                                abdelouahab benmadi abdelouahab
                            </div>
                        </td>
                        <td className="w-32 py-3 whitespace-nowrap break-words border-r overflow-x-auto">
                            0657653349
                        </td>
                        <td className="w-60 py-3 whitespace-nowrap border-r overflow-x-auto">
                            Laptoddddddddddddddddddddddddddddddddddddddddp
                        </td>
                        <td className="w-24 py-3 whitespace-nowrap border-r overflow-x-auto">
                            $2999
                        </td>
                        <td className="w-24 py-3 whitespace-nowrap border-r overflow-x-auto">
                            $2999
                        </td>
                        <td className="w-24 py-3 whitespace-nowrap border-r overflow-x-auto">
                            $2999
                        </td>
                        <td className="w-32 py-3 whitespace-nowrap border-r overflow-x-auto">
                            $2999
                        </td>
                        <td className="w-24 py-3 whitespace-nowrap overflow-x-auto">
                            $2999
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Users_Table;
