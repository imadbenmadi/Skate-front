import { useInView } from "framer-motion";
import  { useRef } from "react";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <footer className="flex flex-col justify-between  md:px-10 bg-slate-200">
            <div
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateY(10%)",
                    opacity: isInView ? 1 : 0,
                    transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                }}
                className="flex flex-col gap-5 justify-between self-center max-w-[1200px] mx-auto"
            >
                <div className="flex flex-col md:flex-row gap-5 justify-between mt-8 max-w-[1200px] mx-auto">
                    <div className="flex gap-3 justify-center mt-2 ">
                        <a
                            href="https://api.whatsapp.com/send?phone=+213658335232"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green"
                        >
                            <IoLogoWhatsapp className="text-4xl" />
                        </a>
                        <a
                            href="https://www.facebook.com/Skate.consult"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue"
                        >
                            <FaFacebookSquare className="text-4xl" />
                        </a>
                        <a
                            href="https://www.instagram.com/skate_consult/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-500"
                        >
                            <FaInstagram className="text-4xl" />
                        </a>
                        <a
                            href="mailto:skate.consult@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoMdMail className="text-green text-4xl" />
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a
                            href="mailto:skate.consult@gmail.com"
                            className="ml-2 text-gray break-words text-[16px] md:text-[24px]"
                            style={{ wordBreak: "break-all" }}
                        >
                            skate.consult@gmail.com
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-5 md:flex-row md:justify-between self-center max-w-[1200px] mx-auto">
                    <div className="hidden md:flex flex-col gap-2 items-start">
                        <div className="flex flex-col gap-2 md:flex-row md:gap-5 justify-between text-base font-bold text-neutral-600">
                            <Link to={"/"}>Home</Link>
                            <Link to={"Contact"}>Contact Us</Link>
                        </div>
                        <div className="flex flex-col gap-2 md:flex-row md:gap-5 justify-between text-base font-bold text-neutral-600">
                            <Link to={"/Services"}>Services</Link>
                            <Link to={"/Courses"}>Courses</Link>
                            <Link to={"/Events"}>Events</Link>
                            <Link to={"/Blogs"}>Blogs</Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <FaPhoneAlt className="text-green text-2xl" />
                        <div className="flex flex-col gap-1 ml-2 text-gray">
                            <a href="tel:+213657653349">+213 657653349</a>
                            <a href="tel:+213657653349">+213 657653349</a>
                        </div>
                    </div>
                </div>
                <div className="md:hidden pt-8 flex flex-col  gap-2 text-neutral-600 font-semibold ">
                    <div className="flex flex-col items-center gap-2">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/Services"}>Services</Link>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Link to={"Contact"}>Contact Us</Link>
                        <Link to={"/Courses"}>Courses</Link>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Link to={"/Events"}>Events</Link>
                        <Link to={"/Blogs"}>Blogs</Link>
                    </div>
                </div>
            </div>
            <div className="self-center py-6 text-xl font-medium leading-6 whitespace-nowrap text-neutral-500 max-md:ml-2.5">
                © 2024 Skate. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
