import React from "react";
function Users_Table({ users }) {
    console.log("users", users);
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-10">
            <table className="w-full text-sm  rtl:text-right text-gray-500 text-black_text ">
                <thead className="text-xs uppercase  text-center ">
                    <tr>
                        <th scope="col" className=" ">
                            User name
                        </th>
                        <th scope="col" className=" ">
                            Telephone
                        </th>
                        <th scope="col" className=" ">
                            Email
                        </th>
                        <th scope="col" className=" ">
                            Status
                        </th>
                        <th scope="col" className=" ">
                            Gender
                        </th>
                        <th scope="col" className=" ">
                            Age
                        </th>
                        <th scope="col" className=" ">
                            Password
                        </th>
                        <th scope="col" className="">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer ">
                        <td className="w-[150px]  whitespace-nowrap border ">
                            <div
                                className="  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                                style={{ width: "150px" }}
                            >
                                benmadi abdelouahab bb
                            </div>
                        </td>
                        <td className="w-[100px]  whitespace-nowrap break-words border px-2">
                            <div
                                className=" overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                                style={{ maxWidth: "100px" }}
                            >
                                0657653349
                            </div>
                        </td>
                        <td className="w-[200px]  whitespace-nowrap border">
                            <div
                                className=" overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                                style={{ maxWidth: "200px" }}
                            >
                                imadbenmadi891@gmail.cocccm
                            </div>
                        </td>
                        <td className="w-[90px]  whitespace-nowrap border px-1">
                            <div
                                className=" overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                                style={{ maxWidth: "90px" }}
                            >
                                Not Verified
                            </div>
                        </td>
                        <td className="w-[70px]  whitespace-nowrap border px-2">
                            <div
                                className=" overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                                style={{ maxWidth: "70px" }}
                            >
                                Female
                            </div>
                        </td>
                        <td className="w-[40px]  whitespace-nowrap border text-center">
                            <div
                                className=" overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                                style={{ maxWidth: "40px" }}
                            >
                                100
                            </div>
                        </td>
                        <td className="w-[100px]  whitespace-nowrap border">
                            <div
                                className=" overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                                style={{ maxWidth: "100px" }}
                            >
                                imaduimad05052004
                            </div>
                            <div></div>
                        </td>
                        <td className="w-24  whitespace-nowrap overflow-x-auto">
                            <div
                                className=" overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                                style={{ maxWidth: "150px" }}
                            >
                                benmadi abdelouahab benmadi
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Users_Table;
