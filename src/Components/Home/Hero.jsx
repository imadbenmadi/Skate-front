import React from 'react'
import wallpaper1 from "../../../public/wallpaper.jpg";
import wallpaper2 from "../../../public/wllpaper2.jpg";
import { GrFormNextLink } from "react-icons/gr";
export default function Hero() {
  return (
      <div>
          <div className=" h-[60vh] overflow-hidden">
              {/* Set the image as a background */}
              <div
                  className={`relative w-full h-full bg-cover bg-center flex justify-center items-end gap-10 md:gap-28 pb-4 bg-[url('../../../public/wallpaper.jpg')] sm:bg-[url('../../../public/wllpaper2.jpg')]`}
              >
                  {" "}
                  <div className=" absolute font-semibold text-6xl top-4 text-gray font-serif">
                      Skate
                  </div>
                  <div className="flex flex-col items-end md:items-start w-[200px]">
                      <div className="hidden md:block  text-2xl mb-3 font-semibold text-black_text">
                          Center of Study Support & Consultation
                      </div>
                      <div className=" flex items-center text-[16px]  bg-green text-white rounded-xl shadow-xl w-fit px-4 py-1 md:text-xl cursor-pointer">
                          Owr Services
                          <GrFormNextLink />
                      </div>
                  </div>
                  <div className="w-[200px]">
                      <div className="hidden md:block text-2xl mb-3 font-semibold text-black_text">
                          Center of Training and Assistance
                      </div>
                      <div className=" flex items-center text-[16px] bg-white text-black rounded-xl shadow-xl w-fit px-4 py-1 md:text-xl cursor-pointer font-semibold">
                          Owr Courses
                          <GrFormNextLink />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
