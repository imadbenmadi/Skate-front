import React from "react";
import CardCours from "./CardCours";
import img from "../../../public/CoursImg.png";
function Courses() {
  return (
    <div className=" bg-slate-200   py-10 min-h-screen h-fit ">
      <div className="max-w-[1100px]   py-10 mx-auto h-12 flex justify-between items-center">
        <div className="w-fit max-md:text-center max-mad:text-center mx-auto max-md:w-full  max-mad:w-full   max-mad:w-full   ">
          <span className="text-emerald-500 text-4xl font-bold ">OUR </span>
          <span className="text-blue-950 text-4xl font-black ">COURSES </span>
        </div>

        <div className=" w-fit max-md:hidden border border-green px-5 py-2 rounded-md  text-center text-green-800 text-base font-medium  leading-normal">
          Veiw All COURSES{" "}
        </div>
      </div>
      <div className="grid grid-cols-3 w-full  mt-10  self-center h-fit max-md:grid-cols-1 max-w-[1100px]  mx-auto  ">
        <CardCours
          img={img}
          title="Financement"
          cat="Finance"
          dec="Take a finance skkills using skate Courses 
they are passionated to have an awesome"
          price="5.000"
        />
        <CardCours
          img={img}
          title="Financement"
          cat="Finance"
          dec="Take a finance skkills using skate Courses 
they are passionated to have an awesome"
          price="5.000"
        />
        <CardCours
          img={img}
          title="Financement"
          cat="Finance"
          dec="Take a finance skkills using skate Courses 
they are passionated to have an awesome"
          price="5.000"
        />
      </div>
      <div className="w-fit  text-center mx-auto   md:hidden border border-green px-5 py-2 rounded-md  text-center text-green-800 text-base font-medium  leading-normal">
        Veiw All COURSES{" "}
      </div>
    </div>
  );
}

export default Courses;
