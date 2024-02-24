import React, { useRef } from "react";
import CardCours from "./CardCours";
import img from "../../../../public/CoursImg.png";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className=" bg-slate-200 min-h-screen h-fit ">
      <div className="max-w-[1100px]   py-8 mx-auto h-12 flex justify-between px-10 items-center">
        <div className="w-fit max-md:text-center max-mad:text-center max-md:mx-auto max-md:w-full  max-mad:w-full   max-mad:w-full   ">
          <span className="text-emerald-500 text-4xl font-bold ">OUR </span>
          <span className="text-blue-950 text-4xl  text-gray">COURSES </span>
        </div>

        <Link to={"/Courses"} className=" w-fit max-md:hidden border border-green px-5 py-2 rounded-md  text-center text-green-800 text-base font-medium  leading-normal">
          Veiw All Courses{" "}
        </Link>
      </div>
      <div
        ref={ref}
        style={{
          transform: isInView ? "translateX(0) " : "translateY(10%)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
        className="grid grid-cols-3 w-full  mt-2  self-center h-fit max-md:grid-cols-1 max-w-[1100px]  mx-auto  "
      >
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
      <Link to={"/Courses"} className=" block w-fit  text-center mx-auto   md:hidden border border-green px-5 py-2 rounded-md  text-center text-green-800 text-base font-medium  leading-normal">
        Veiw All COURSES{" "}
      </Link>
    </div>
  );
}

export default Courses;
