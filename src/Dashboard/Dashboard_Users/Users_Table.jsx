import React from "react";
import { FaPen } from "react-icons/fa";

function Users_Table({ users }) {
    console.log("users", users);
    return (
        <div className="relative overflow-auto custom-overflow shadow-md  mt-[20px] h-[calc(100vh-66px)] ">
            <table className="w-full text-sm  rtl:text-right  text-black_text relative">
                <thead className="text-xs uppercase  text-center   h-[40px] sticky top-0 bg-white ">
                    <tr className="border-y-2">
                        <th scope="col" className="border ">
                            User name
                        </th>
                        <th scope="col" className=" border">
                            Telephone
                        </th>
                        <th scope="col" className="border ">
                            Email
                        </th>
                        <th scope="col" className=" border">
                            Status
                        </th>
                        <th scope="col" className="border ">
                            Gender
                        </th>
                        <th scope="col" className="border ">
                            Age
                        </th>
                        <th scope="col" className=" border">
                            Password
                        </th>
                        <th scope="col" className="border">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-gray_white  hover:bg-white cursor-pointer h-[40px] text-center ">
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]  whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            benmadi abdelouahab bb
                        </td>
                        <td
                            style={{ maxWidth: "100px" }}
                            className="w-[100px]  whitespace-nowrap break-words border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            0657653349
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="  w-[150px]   whitespace-nowrap border overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            imadbenmadi891@gmail.cocccm
                        </td>
                        <td
                            style={{ maxWidth: "90px" }}
                            className="w-[90px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Not Verified
                        </td>
                        <td
                            style={{ maxWidth: "70px" }}
                            className="w-[70px]  whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            Female
                        </td>
                        <td
                            style={{ maxWidth: "40px" }}
                            className="w-[40px]  whitespace-nowrap border   overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300"
                        >
                            100
                        </td>
                        <td
                            style={{ maxWidth: "150px" }}
                            className="w-[150px]   whitespace-nowrap border  overflow-auto scrollbar-thumb-rounded-full 
                                 scrollbar-thin scrollbar-thumb-green
                                 scrollbar-track-slate-300 "
                        >
                            imaduimad05052004
                        </td>
                        <td className="w-[50px]  whitespace-nowrap overflow-x-auto border">
                            <div className=" w-fit items-center m-auto flex gap-1 bg-green text-white p-1 rounded">
                                <FaPen />
                                Edit
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Users_Table;
