import React from "react";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoWarning } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Course_Card from "./Course_Card";
import Service_Card from "./Service_Card";
function Profile_Courses() {
    const [active, setActive] = useState("Services");
    const handleChangeActive = (value) => {
        setActive(value);
    };
    const { user, fetchData } = useOutletContext();
    if (!user || !fetchData)
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    // console.log(user);
    const Courses_Requests = user.Courses_requests;
    const Services_Requests = user.Services_requests;

    return (
        <>
            <div className="select-none flex items-center justify-center gap-2 md:gap-10 py-6 text-lg md:text-2xl">
                <div
                    onClick={() => handleChangeActive("Services")}
                    className={` select-none cursor-pointer ${
                        active == "Services"
                            ? "underline text-green"
                            : "text-gray"
                    }`}
                >
                    Services
                </div>
                <div
                    onClick={() => handleChangeActive("Courses")}
                    className={`select-none cursor-pointer ${
                        active == "Courses"
                            ? "underline text-green"
                            : "text-gray"
                    }`}
                >
                    Courses
                </div>
            </div>
            {active == "Services" ? (
                <div>
                    {Object.keys(Services_Requests).length === 0 ? (
                        <div className=" flex items-center justify-center gap-4 flex-col">
                            <div className="flex items-center  text-gray text-2xl gap-2 py-8">
                                <IoWarning className="text-2xl" />
                                <div className="text-center text-gray">
                                    You have No Services Request{" "}
                                </div>
                            </div>
                            <Link
                                className="text-green rounded-md cursor-pointer  text-xl 
                                flex items-center gap-2 px-3 py-1 w-fit mx-auto underline "
                                to={"/Services"}
                            >
                                <div>Exprlore Skate Services</div>
                                <FaArrowRight />
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <div className="pl-4 text-gray font-semibold  text-2xl mt-6 ">
                                <span className="text-green m-auto">Your</span>{" "}
                                Courses :
                            </div>
                            {Services_Requests.map((Service, index) => (
                                <Service_Card
                                    item={Service}
                                    key={index}
                                    type="Service"
                                />
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    {Object.keys(Courses_Requests).length === 0 ? (
                        <div className=" flex items-center justify-center gap-4 flex-col">
                            <div className="flex items-center  text-gray text-2xl gap-2 py-8">
                                <IoWarning className="text-2xl" />
                                <div className="text-center text-gray">
                                    You have No Courses Request{" "}
                                </div>
                            </div>
                            <Link
                                className="text-green rounded-md cursor-pointer  text-xl 
                                flex items-center gap-2 px-3 py-1 w-fit mx-auto underline "
                                to={"/Courses"}
                            >
                                <div>Exprlore Skate Courses</div>
                                <FaArrowRight />
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <div className="pl-4 text-gray font-semibold  text-2xl mt-6 ">
                                <span className="text-green m-auto">Your</span>{" "}
                                Courses :
                            </div>
                            {Courses_Requests.map((Course, index) => (
                                <Course_Card
                                    item={Course}
                                    key={index}
                                    type="Course"
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );

    
}

export default Profile_Courses;
