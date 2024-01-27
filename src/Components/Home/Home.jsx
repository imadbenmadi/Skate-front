import React from "react";
import wallpaper from "../../../public/wallpaper.jpg";
import { GrFormNextLink } from "react-icons/gr";

function Home() {
    return (
        <>
            <div>
                <div className=" h-[50vh] overflow-hidden">
                    {/* Set the image as a background */}
                    <div
                        className="w-full h-full bg-cover bg-center transform flex  justify-center items-end gap-10 pb-10"
                        style={{ backgroundImage: `url(${wallpaper})` }}
                    >
                        <div className=" flex items-center text-[16px]  bg-green text-white rounded-xl shadow-xl w-fit px-4 py-1 md:text-xl cursor-pointer">
                            Owr Services
                            <GrFormNextLink />
                        </div>
                        <div className=" flex items-center text-[16px] bg-white text-black rounded-xl shadow-xl w-fit px-4 py-1 md: cursor-pointer">
                            Owr Courses
                            <GrFormNextLink />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
