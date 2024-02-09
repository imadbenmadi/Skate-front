import React, { useRef } from "react";
import founder from "../../../public/Founder.png";
import { useInView } from "framer-motion";
export default function Founder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className=" max-w-[1000px] mx-auto  py-20">
      <div
        ref={ref}
        style={{
          transform: isInView ? "none " : "translateY(10%)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
        className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:"
      >
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-5 py-12 font-bold max-md:mt-10">
            <div className="self-center text-4xl text-emerald-500">FOUNDER</div>
            <div className="mt-10 text-2xl text-emerald-500">
              Fouzia <span className="text-blue-950 text-blue">Benmadi</span>
            </div>
            <div className="self-end mt-11 text-xl font-medium leading-7 text-zinc-500 max-md:mt-10">
              In light of the current technological and scientific revolution,
              choosing a suitable trainer or instructor now requires difficult
              and sometimes complicated criteria; He/she is one of the main
              pillars of quality Vocational education and training program.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={founder}
            className="grow w-full shadow-sm aspect-[0.98] max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
}
