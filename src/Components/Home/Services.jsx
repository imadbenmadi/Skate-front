import React from "react";
import Card from "./Card";
import img from "../../../public/wallpaper.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Services() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        // nextArrow: true,
        // prevArrow: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className=" w-[80vw] m-auto pt-8  ">
            <div className=" text-blue font-semibold text-2xl pb-5">
                Owr Services
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    <Card Title="1" Image={img}></Card>
                    <Card Title="2" Image={img}></Card>
                    <Card Title="3" Image={img}></Card>
                    {/* <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div> */}
                </Slider>
            </div>

            <div className=" flex overflow-x-auto"></div>
        </div>
    );
}

export default Services;
