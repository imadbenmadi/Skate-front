import * as React from "react";
import AboutImg from "../../../public/unsplash_JaoVGh5aJ3E.png";
import bxbowl from "../../../public/bx-bowl-hot 1.png";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none " : "translateY(10%)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
      className=" mx-auto py-20 "
    >
      <div className="flex  mx-auto justify-center items-center max-w-[1200px] gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="md:hidden  my-10 self-center text-4xl text-green whitespace-nowrap">
          About <span className="text-sky-900">Skate</span>
        </div>

        <motion.div className="flex relative flex-col w-[30%] h-[60%] max-md:ml-0 max-md:w-full">
          <div className="w-10  max-md:hidden flex justify-center items-center h-10 bg-green rounded-full absolute top-5 -right-5  shadow">
            <img src={bxbowl} alt="" className="h-6 w-6" />
          </div>
          <motion.img
            src={AboutImg}
            className="grow duration-200  w-full max-md:w-[90%] max-md:self-center aspect-[0.93] max-md:mt-3.5 max-md:max-w-full"
          />
        </motion.div>
        <motion.div className="flex flex-col duration-300 ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 mt-9 font-bold max-md:mt-10 max-md:max-w-full">
            <div className=" max-md:hidden self-center text-4xl text-green whitespace-nowrap">
              About <span className="text-sky-900">Skate</span>
            </div>
            <div className="mt-10 text-3xl text-neutral-600 max-md:mt-10 max-md:max-w-full">
              Skills Knowledge Attitude, Training Education.
            </div>
            <div className="self-start mt-8 text-xl leading-10 text-gray-900 text-opacity-70 max-md:max-w-full">
              <span className="font-normal text-gray-900">
                Skate is a center of{" "}
              </span>
              <span className=" font-normal text-gray-900">
                Study, Consultation, Support, Training, and Assistance for
                individuals, businesses, and public and private organizations.
                Accredited by the Ministry of Environment.
              </span>
            </div>
            <div className="flex gap-5 justify-between pr-7 mt-10 text-2xl text-white whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
              <div className="  font-normal h-fit py-3  bg-green rounded-3xl  justify-center items-center px-8  bg-green-500  max-md:px-5">
                Get Started
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e774a58f13ba820be3363038edaf0c627a0c29d614b997530e911ad0f42a060?"
                className="self-end mt-12 aspect-[1.2] fill-emerald-500 w-[29px] max-md:mt-10"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
