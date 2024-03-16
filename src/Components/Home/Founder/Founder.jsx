import  { useRef } from "react";
import founder from "../../../../public/Founder.png";
import { useInView } from "framer-motion";
export default function Founder() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className=" max-w-[1000px] mx-auto  py-4">
            <div
                ref={ref}
                style={{
                    transform: isInView ? "none " : "translateY(10%)",
                    opacity: isInView ? 1 : 0,
                    transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                }}
                className="flex gap-5  flex-col items-center max-md:gap-0 max-md:"
            >
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow p-4 font-bold max-md:mt-4">
                        <div className="self-center text-4xl text-emerald-500">
                            FOUNDER
                        </div>
                    </div>
                </div>
                <div className="  flex flex-col items-center justify-center   w-[250px]  m-auto">
                    <img
                        loading="lazy"
                        src={founder}
                        className=" grow w-full shadow-sm aspect-[0.98] max-md:mt-4"
                    />
                </div>
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className=" self-center mt-4 text-2xl text-emerald-500">
                        Fouzia{" "}
                        <span className="text-blue-950 text-gray">Benmadi</span>
                    </div>
                    <div className=" px-4 mt-4 text-xl font-medium leading-7 text-gray max-md:mt-4">
                        Fouzia Benmadi, our visionary founder, is a dynamic
                        leader with a passion for innovation and excellence.
                        With a wealth of experience in business and
                        entrepreneurship, Fouzia has spearheaded our company's
                        growth and success, inspiring others with her
                        entrepreneurial spirit and dedication to making a
                        positive impact.
                    </div>
                </div>
            </div>
        </div>
    );
}
