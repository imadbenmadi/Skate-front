
import Card from "./Card";
import img from "../../../public/wallpaper.jpg";
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

function Services({ Title, bg, imgs }) {
    return (
        <div
            className={`w-[80vw] 

      max-md:max-h-[50%]  max-md:w-[90vw]   md:h-[91vh] m-auto pt-5 `}
        >
            <div className=" text-blue font-semibold text-3xl pb-10 max-md:pb-2 max-md:mb-3 mb-10 text-center ">
                {Title}
            </div>
            <div className="  max-md:hidden flex flex-col  md:flex-row md:justify-between ">
                <Card Title="1" Image={img}></Card>
                <Card Title="2" Image={img}></Card>
                <Card Title="3" Image={img}></Card>
            </div>

            <div className=" md:hidden w-[90vw] h-[35vh] ">
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
                    navigation={true}
                    
                >
                    <SwiperSlide className=" ">
                        {" "}
                        <Card Title="1" Image={img}></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <Card Title="2" Image={img}></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <Card Title="3" Image={img}></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <Card Title="4" Image={img}></Card>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Services;
