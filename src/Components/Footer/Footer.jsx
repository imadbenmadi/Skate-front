import { useInView } from "framer-motion";
import React, { useRef } from "react";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex py-10 w-full  md:px-10  bg-slate-200 flex-col  pt-12">
      <div
        ref={ref}
        style={{
          transform: isInView ? "none " : "translateY(10%)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
        className="flex   gap-5 justify-between  self-center mt-20 w-full max-w-[1200px] max-md:flex-wrap  max-md:mt-10 max-md:max-w-full"
      >
        <div className="flex gap-5 max-md:justify-center   max-md:w-full max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbad3f2d49902fd49ae31d4160b2889bba7e177d7c4a0db4088a9b9f0a06cdf5?"
            className="aspect-square w-[33px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14355c4dc579abf6470e08a8095dc6c62a9a1abf7e9e01107f6d5c4b0b860ac7?"
            className="aspect-square w-[33px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ff0b57ce69efa980174c73d491c880a9a4c7aa7b8fb12e198d69d6be174cac5?"
            className="aspect-square w-[33px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d62131dd82274efcb2a18839fb0dda838fcad8363f22c6d21cab8125cabfe1dd?"
            className="my-auto w-7 aspect-[1.08] fill-neutral-500"
          />
        </div>
        <div className="flex  md:w-[30%] gap-5 justify-between my-auto text-2xl font-medium leading-6 text-black whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0daa25274fa9452870bfb3847e55405ec1582b6bf7b3e20858f0774e9539a7e0?"
            className=" self-end aspect-[1.23] fill-neutral-400"
          />
          <div className="grow self-end ">skate@gmail.com</div>
        </div>
      </div>
      <div className=" flex gap-5 justify-between mx-auto self-center  mt-7 w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
        <div className=" max-md:hidden  flex gap-5 justify-between my-auto text-base font-bold leading-6 text-neutral-600 max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto">Demande Service</div>
          <div>Courses</div>
          <div className="">Events</div>
          <div className="">Contact Us</div>
        </div>
        <div className="flex gap-5 md:w-[30%]  justify-between text-xl font-semibold text-black">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/06e40a0dd3df8343ac7a98b26f608e4952c0e79108ac94979a74275ed7abcafd?"
            className="self-start mt-2 w-10 aspect-[0.88]"
          />
          <div className="flex flex-col flex-1">
            <div>+213 657653349</div>
            <div className="mt-6">+213 657653349</div>
          </div>
        </div>
      </div>
      <div className="self-center pt-10  text-xl font-medium leading-6 whitespace-nowrap text-neutral-500 max-md:ml-2.5">
        © 2024 Skate. All Rights Reserved.{" "}
      </div>
    </div>
  );
}

export default Footer;
