import { useRef } from "react";
import CardService from "./CardService";
import icon1 from "../../../../public/iconService1.png";
import icon2 from "../../../../public/iconService2.png";
import icon3 from "../../../../public/iconService3.png";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="   bg-slate-200   py-10  h-fit pb-20">
            <div className="max-w-[1100px]   py-10 mx-auto h-12 flex justify-between px-10 items-center">
                <div className="w-fit   max-md:mx-auto max-md:text-center max-mad:text-center max-mad:w-full   max-mad:w-full   ">
                    <span className="text-emerald-500 text-4xl font-bold ">
                        OUR{" "}
                    </span>
                    <span className=" text-4xl text-gray ">SERVICES </span>
                </div>

                <Link
                    to={"/Services"}
                    className="select-none flex  gap-2 items-center w-fit max-md:hidden text-green underline px-5 py-2 rounded-md  text-center  text-base font-medium  leading-normal"
                >
                    <span className=" text-xl">Veiw All Services</span>{" "}
                    <FaArrowRight className=" mt-1" />
                </Link>
            </div>
            <div
                ref={ref}
                style={{
                    transform: isInView ? "none " : "translateY(10%)",
                    opacity: isInView ? 1 : 0,
                    transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                }}
                className="grid grid-cols-3 w-screen  mt-2   self-center h-fit max-lg:grid-cols-1 max-w-[1200px]  mx-auto  "
            >
                <CardService
                    icon={icon1}
                    titleService="Environmental Studies"
                    desServicce=" We provide comprehensive assessments and solutions for environmental impact, hazard management, fire protection systems, internal emergency intervention, safety planning, and waste management. Our expertise ensures regulatory compliance and minimizes risks, safeguarding both the environment and personnel."
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
                className=" flex gap-2 items-center select-none w-fit   mx-auto   md:hidden  px-5 py-2 rounded-md  text-center  font-medium  leading-normal underline text-xl text-green "
            >
                Veiw All Services <FaArrowRight className=" mt-1" />
            </Link>
        </div>
    );
}

export default Services;
