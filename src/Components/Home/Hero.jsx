import React from "react";
import wallpaper1 from "../../../public/wallpaper.jpg";
import wallpaper2 from "../../../public/wllpaper2.jpg";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
export default function Hero() {
    return (
        <div>
            <div className=" h-[70vh] overflow-hidden">
                {/* Set the image as a background */}
                <div
                    className={`relative w-full h-full bg-cover bg-center flex justify-center items-end gap-10  pb-4 bg-[url('../../../public/wllpaper2.jpg')] text-black_text`}
                >
                    {" "}
                    <div className=" absolute font-semibold text-6xl top-24 text-gray font-serif">
                        Skate
                    </div>
                    <div className="flex flex-col md:items-start w-[150px] md:w-[200px]">
                        <div className="block  md:text-xl mb-3 font-semibold text-black_text">
                            Center of Study Support & Consultation
                        </div>
                        <Link to={"Services"} className=" flex items-center text-[16px]  bg-green text-white rounded-xl shadow-xl w-fit px-4 py-1 md:text-xl cursor-pointer">
                            Owr Services
                            <GrFormNextLink />
                        </Link>
                    </div>
                    <div className=" w-[150px] md:w-[200px]">
                        <div className="block md:text-xl mb-3 font-semibold text-black_text">
                            Center of Training and Assistance
                        </div>
                        <Link
                            to={"/Courses"}
                            className=" flex items-center text-[16px] bg-white text-black rounded-xl shadow-xl w-fit px-4 py-1 md:text-xl cursor-pointer font-semibold"
                        >
                            Owr Courses
                            <GrFormNextLink />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
