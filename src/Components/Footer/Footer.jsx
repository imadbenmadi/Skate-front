import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="  px-8 flex py-4 w-full  md:px-10  bg-slate-200 flex-col  pt-4">
            <div
                ref={ref}
                style={{
                    transform: isInView ? "none " : "translateY(10%)",
                    opacity: isInView ? 1 : 0,
                    transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                }}
                className="flex   gap-5 justify-between  self-center mt-8 w-full max-w-[1200px] max-md:flex-wrap  max-md:mt-10 max-md:max-w-full"
            >
                <div className="flex gap-3 justify-center mt-2 ">
                    <a
                        href="https://api.whatsapp.com/send?phone=0658335232"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoLogoWhatsapp className=" text-green text-4xl" />
                    </a>
                    <br />
                    <a
                        href="https://www.facebook.com/Skate.consult"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookSquare className=" text-blue  text-4xl" />
                    </a>
                    <br />
                    <a
                        href="https://www.instagram.com/skate_consult/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className=" text-red-500  text-4xl" />
                    </a>
                </div>
                <div className="flex  md:w-[40%] gap-1 justify-between items-center my-auto text-xl font-medium leading-6 text-black whitespace-nowrap">
                    <IoMdMail className="text-green text-2xl " />
                    <a
                        href="mailto:skate.consult@gmail.com"
                        className="grow self-end text-gray break-words text-[16px]"
                        style={{ wordBreak: "break-all" }}
                    >
                        skate.consult@gmail.com
                    </a>
                </div>
            </div>
            <div className=" flex gap-5 justify-between mx-auto self-center  mt-7 w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
                <div className=" max-md:hidden  flex gap-5 justify-between my-auto text-base font-bold leading-6 text-neutral-600 max-md:flex-wrap max-md:max-w-full">
                    <Link to={"/Services"} className="flex-auto">
                        Services
                    </Link>
                    <Link to={"/Courses"}>Courses</Link>
                    <Link to={"/Events"}>Events</Link>
                    <Link to={"Contact"}>Contact Us</Link>
                </div>
                <div className="flex gap-2 md:w-[40%]  items-center justify-between text-sm font-semibold text-black">
                    <FaPhoneAlt className=" text-green text-2xl" />
                    <div className="flex flex-col gap-1 flex-1 text-gray">
                        <a href="tel:+213657653349">+213 657653349</a>
                        <a href="tel:+213657653349">+213 657653349</a>
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
