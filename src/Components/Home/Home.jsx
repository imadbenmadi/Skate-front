import React from "react";
import wallpaper from "../../../public/wallpaper.jpg";
import { GrFormNextLink } from "react-icons/gr";

function Home() {
    return (
        <>
            <div>
                <div className=" h-[50vh] md:h-[90vh] overflow-hidden">
                    {/* Set the image as a background */}
            <div
              className="w-full h-full bg-cover bg-center transform flex  justify-center items-end gap-10 md:gap-48 pb-10"
              style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: "cover" ,}}
                    >
                        <div>
                            <div>Center of Study Support & Consultation</div>
                            <div className=" flex items-center text-[16px]  bg-green text-white rounded-xl shadow-xl w-fit px-4 py-1 md:text-xl cursor-pointer">
                                Owr Services
                                <GrFormNextLink />
                            </div>
                        </div>
                        <div>
                            <div>Center of Training and Assistance </div>
                            <div className=" flex items-center text-[16px] bg-white text-black rounded-xl shadow-xl w-fit px-4 py-1 md: cursor-pointer">
                                Owr Courses
                                <GrFormNextLink />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
