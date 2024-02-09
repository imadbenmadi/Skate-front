import React from "react";
import founder from "../../../public/Founder.png";
export default function Founder() {
  return (
    <div className="max-w-[1000px] mx-auto  py-20">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
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
