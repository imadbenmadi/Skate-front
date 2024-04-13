import Hero from "./Hero";
import { AboutUs } from "./AboutUs";
import Services from "./Services/Services";
import Courses from "./Courses/Courses";
import Founder from "./Founder/Founder";
import Footer from "../Footer";
import pg_image from "../../../public/Home_Hero_bg.png";
import AboutUs_img from "../../../public/Home_AboutUs.png";
import Course1 from "../../../public/Course1.jpg";
import Course2 from "../../../public/Course2.jpg";
import Course3 from "../../../public/Course3.jpg";
import iconService1 from "../../../public/iconService1.png";
import iconService2 from "../../../public/iconService2.png";
import iconService3 from "../../../public/iconService3.png";
import Founder_image from "../../../public/Founder.png";
import React, { useEffect, useState } from "react";
function Home() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    useEffect(() => {
        const imageLoader = new Promise((resolve, reject) => {
            const images = [
                pg_image,
                AboutUs_img,
                Course1,
                Course2,
                Course3,
                iconService1,
                iconService2,
                iconService3,
                Founder_image,
            ];
            let loadedCount = 0;
            if (images.length === 0) resolve();
            images.forEach((imageSrc) => {
                const img = new Image();
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === images.length) {
                        resolve();
                    }
                };
                img.onerror = () => {
                    console.log("Error loading images");
                };
                img.src = imageSrc;
            });
        });

        imageLoader
            .then(() => {
                setImagesLoaded(true);
            })
            .catch(() => {
                console.error("Error loading images");
            });
    }, []);
    if (!imagesLoaded) {
        return (
            <div className=" w-screen h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    }
    return (
        <div className="  max-w-8xl m-auto overflow-x-hidden">
            <Hero />
            <AboutUs />
            <Services />
            <Courses />
            <Founder />
            <Footer />
        </div>
    );
}

export default Home;
