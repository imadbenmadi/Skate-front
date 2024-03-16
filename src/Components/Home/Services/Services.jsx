import  { useRef } from "react";
import CardService from "./CardService";
import icon1 from "../../../../public/iconService1.png";
import icon2 from "../../../../public/iconService2.png";
import icon3 from "../../../../public/iconService3.png";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
      <div className="   bg-slate-200   py-10 min-h-screen h-fit ">
          <div className="max-w-[1100px]   py-10 mx-auto h-12 flex justify-between px-10 items-center">
              <div className="w-fit   max-md:mx-auto max-md:text-center max-mad:text-center max-mad:w-full   max-mad:w-full   ">
                  <span className="text-emerald-500 text-4xl font-bold ">
                      OUR{" "}
                  </span>
                  <span className="text-blue-950 text-4xl text-gray ">
                      SERVICES{" "}
                  </span>
              </div>

              <Link
                  to={"/Services"}
                  className="select-none w-fit max-md:hidden border border-green px-5 py-2 rounded-md  text-center text-green-800 text-base font-medium  leading-normal"
              >
                  Veiw All Services{" "}
              </Link>
          </div>
          <div
              ref={ref}
              style={{
                  transform: isInView ? "none " : "translateY(10%)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
              }}
              className="grid grid-cols-3 w-screen  mt-2   self-center h-fit max-md:grid-cols-1 max-w-[1200px]  mx-auto  "
          >
              <CardService
                  icon={icon1}
                  titleService="Environmental Studies"
                  desServicce="Skate offers Environmental Studies services, focusing on sustainability, conservation, and environmental policy for a greener tomorrow."
              />
              <CardService
                  icon={icon2}
                  titleService="consultation and support"
                  desServicce="Skate provides consultation and support services for Environmental Studies, specializing in sustainability, conservation, and environmental policy for a brighter future."
              />
              <CardService
                  icon={icon3}
                  titleService="Enterprise Creation"
                  desServicce="Skate offers consultation and support services for enterprise creation in the realm of Environmental Studies, guiding you through sustainability, conservation, and environmental policy for a brighter future."
              />
          </div>

          <Link
              to={"/Services"}
              className="select-none block w-fit  text-center mx-auto   md:hidden border border-green px-5 py-2 rounded-md  text-green-800 text-base font-medium  leading-normal"
          >
              Veiw All Services{" "}
          </Link>
      </div>
  );
}

export default Services;
