import { useRef } from "react";
import CardCours from "./CardCours";
import img1 from "../../../../../../public/Course1.jpg";
import img2 from "../../../../../../public/Course2.jpg";
import img3 from "../../../../../../public/Course3.jpg";
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
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";

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
        <div className=" bg-slate-200 h-fit ">
            <div className="max-w-[1100px]   py-8 mx-auto h-12 flex justify-between px-10 items-center ">
                <div className="w-fit max-md:text-center max-mad:text-center max-md:mx-auto max-md:w-full  max-mad:w-full   max-mad:w-full   ">
                    <span className="text-emerald-500 text-4xl font-bold ">
                        دوراتنا{" "}
                    </span>
                    <span className=" text-4xl  text-gray">التعليمية </span>
                </div>

                <Link
                    to={"/ar/Courses"}
                    className="select-none flex  gap-2 items-center w-fit max-md:hidden text-green underline px-5 py-2 rounded-md  text-center  text-base font-medium  leading-normal"
                >
                    <span className=" text-xl">عرض جميع الدورات</span>{" "}
                    <FaArrowRight className=" mt-1" />
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
                        title="النظافة، الأمان، البيئة"
                        dec="تم تصميم برامج التدريب في الصحة والسلامة والبيئة لتلبية احتياجات الجمهور العام والمحترفين الذين يرغبون في تحسين مهاراتهم أو اكتساب معرفة جديدة في مجال الصحة والسلامة وحماية البيئة."
                        // price="0.0"
                    />
                    <CardCours
                        img={img2}
                        title="الاتصال، التجارة والتسويق"
                        dec="التدريب في مجال الاتصال والتجارة والتسويق موجه لجميع المحترفين، بهدف تعزيز مهاراتهم لتحسين التواصل الداخلي وتفاعلهم بشكل أسهل مع العملاء والشركاء الخارجيين."
                        // price="0.0"
                    />
                    <CardCours
                        img={img1}
                        title="الإدارة"
                        dec="يعزز التدريب في مجال الإدارة مهارات القادة ويطور القدرة على إدارة الإجراءات الجماعية للشركة."
                        price="5.000"
                    />{" "}
                </div>

                <div className=" md:hidden w-[90vw] relative  h-full mx-auto    ">
                    <Swiper
                        className="  h-full"
                        // install Swiper modules
                        modules={[
                            Navigation,
                            Pagination,
                            Autoplay,
                            Scrollbar,
                            A11y,
                        ]}
                        loop={false}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            type: "bullets",
                            // el: ".swiper-custom-pagination",
                        }}
                    >
                        <SwiperSlide className=" ">
                            {" "}
                            <CardCours
                                img={img3}
                                title="النظافة، الأمان، البيئة"
                                cat=""
                                dec="تم تصميم برامج التدريب في الصحة والسلامة والبيئة لتلبية احتياجات الجمهور العام والمحترفين الذين يرغبون في تحسين مهاراتهم أو اكتساب معرفة جديدة في مجال الصحة والسلامة وحماية البيئة."
                                // price="5.000"
                            />{" "}
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <CardCours
                                img={img2}
                                title="الاتصال، التجارة والتسويق"
                                dec="التدريب في مجال الاتصال والتجارة والتسويق موجه لجميع المحترفين، بهدف تعزيز مهاراتهم لتحسين التواصل الداخلي وتفاعلهم بشكل أسهل مع العملاء والشركاء الخارجيين."
                                // price="0.0"
                                cat=""
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <CardCours
                                img={img1}
                                title="الإدارة"
                                cat=""
                                dec="يعزز التدريب في مجال الإدارة مهارات القادة ويطور القدرة على إدارة الإجراءات الجماعية للشركة."
                                // price="5.000"
                            />{" "}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="w-full pb-10 mx-auto h-fit flex justify-center items-center">
                <Link
                    to={"/ar/Courses"}
                    className=" flex gap-2 items-center select-none w-fit   mx-auto 
                      md:hidden  px-5 py-2 rounded-md  text-center 
                     font-medium  leading-normal  text-xl text-green "
                >
                    عرض جميع الدورات
                    <FaArrowRight className=" mt-1" />
                </Link>
            </div>
        </div>
    );
}

export default Courses;
