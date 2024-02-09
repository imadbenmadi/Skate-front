import React from "react";
import CardService from "./CardService";
import icon1 from "../../../public/iconService1.png";
import icon2 from "../../../public/iconService2.png";
import icon3 from "../../../public/iconService3.png";
function Services() {
  return (
    <div className=" bg-slate-200   py-10 min-h-screen h-fit ">
      <div className="max-w-[1100px]   py-10 mx-auto h-12 flex justify-between items-center">
        <div className="w-fit max-md:text-center max-mad:text-center max-mad:w-full   max-mad:w-full   ">
          <span className="text-emerald-500 text-4xl font-bold ">OUR </span>
          <span className="text-blue-950 text-4xl font-black ">SERVICES </span>
        </div>

        <div className=" w-fit max-md:hidden border border-green px-5 py-2 rounded-md  text-center text-green-800 text-base font-medium  leading-normal">
          Veiw All Services{" "}
        </div>
      </div>
      <div className="grid grid-cols-3 w-full  mt-10  self-center h-fit max-md:grid-cols-1 max-w-[1200px]  mx-auto  ">
        <CardService
          icon={icon1}
          titleService="Environmental Studies"
          desServicce="We have a professional team of photographers who believes in capturing the imagination of audiences..."
        />
        <CardService
          icon={icon1}
          titleService="Environmental Studies"
          desServicce="We have a professional team of photographers who believes in capturing the imagination of audiences..."
        />
        <CardService
          icon={icon1}
          titleService="Environmental Studies"
          desServicce="We have a professional team of photographers who believes in capturing the imagination of audiences..."
        />
      </div>
      <div className="w-fit  text-center mx-auto   md:hidden border border-green px-5 py-2 rounded-md  text-center text-green-800 text-base font-medium  leading-normal">
        Veiw All Services{" "}
      </div>
    </div>
  );
}

export default Services;
