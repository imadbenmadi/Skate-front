import  { useRef } from "react";
import CardCours from "./CardCours";
import img from "../../../../public/CoursImg.png";
import img1 from "../../../../public/Course1.jpg";
import img2 from "../../../../public/Course2.jpeg";
import img3 from "../../../../public/Course3.jpg";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Navigation,
    Pagination,
    Autoplay,
    Scrollbar,
    A11y,
} from "swiper/modules";
import "swiper/css/autoplay"; // Autoplay styles (important!)

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/autoplay";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Courses() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className=" bg-slate-200 min-h-screen h-fit ">
            <div className="max-w-[1100px]   py-8 mx-auto h-12 flex justify-between px-10 items-center">
                <div className="w-fit max-md:text-center max-mad:text-center max-md:mx-auto max-md:w-full  max-mad:w-full   max-mad:w-full   ">
                    <span className="text-emerald-500 text-4xl font-bold ">
                        OUR{" "}
                    </span>
                    <span className="text-blue-950 text-4xl  text-gray">
                        COURSES{" "}
                    </span>
                </div>

                <Link
                    to={"/Courses"}
                    className="select-none w-fit max-md:hidden border border-green px-5 py-2 rounded-md  text-center text-green-800 text-base font-medium  leading-normal"
                >
                    Veiw All Courses{" "}
                </Link>
            </div>
            <div
                ref={ref}
                style={{
                    transform: isInView ? "translateX(0) " : "translateY(10%)",
                    opacity: isInView ? 1 : 0,
                    transition:
                        "all 0.9s  cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                }}
                className="grid grid-cols-3  w-full  mt-2  self-center h-fit max-md:grid-cols-1 max-w-[1200px]  mx-auto  "
            >
                <div className=" max-w-[1200px] max-md:hidden flex flex-col w-screen  gap-4 md:flex-row md:justify-between ">
                    <CardCours
                        img={img3}
                        title="Financement"
                        dec="Explore finance with our Financement course. Learn investment strategies, financial planning, and risk management essentials for confident decision-making."
                        // price="0.0"
                    />
                    <CardCours
                        img={img2}
                        title="Marketing"
                        dec="Discover the fundamentals of marketing with our comprehensive course. Learn essential strategies, tactics, and principles to effectively reach your target audience and drive business success."
                        // price="0.0"
                    />
                    <CardCours
                        img={img1}
                        title="Management"
                        dec="Master the art of management with our concise course. Learn essential strategies and techniques to effectively lead teams, streamline processes, and achieve organizational goals."
                        // price="0.0"
                    />{" "}
                </div>

                <div className=" md:hidden w-[90vw]  mx-auto h-fit py-7  ">
                    <Swiper
                        className="  h-fit"
                        // install Swiper modules
                        modules={[
                            Navigation,
                            Pagination,
                            Autoplay,
                            Scrollbar,
                            A11y,
                        ]}
                        loop={true}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                    >
                        <SwiperSlide className=" ">
                            {" "}
                            <CardCours
                                img={img3}
                                title="Financement"
                                cat="Finance"
                                dec="Take a finance skkills using skate Courses 
they are passionated to have an awesome"
                                price="5.000"
                            />{" "}
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <CardCours
                                img={img2}
                                title="Financement"
                                cat="Finance"
                                dec="Take a finance skkills using skate Courses 
they are passionated to have an awesome"
                                price="5.000"
                            />{" "}
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <CardCours
                                img={img1}
                                title="Financement"
                                cat="Finance"
                                dec="Take a finance skkills using skate Courses 
they are passionated to have an awesome"
                                price="5.000"
                            />{" "}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="w-full pb-10 mx-auto h-fit flex justify-center items-center">
                <Link
                    to={"/Courses"}
                    className=" select-none w-fit   mx-auto   md:hidden border border-green px-5 py-2 rounded-md  text-center text-green-800 text-base font-medium  leading-normal"
                >
                    Veiw All COURSES{" "}
                </Link>
            </div>
        </div>
    );
}

export default Courses;
