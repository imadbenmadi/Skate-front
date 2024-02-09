import React from "react";
import Pages_Btns from "../Pages_Btns";
import Hero from "./Hero";

import { AboutUs } from "../AboutUS/AboutUs";
import Services from "../Services/Services";
import Courses from "../Courses/Courses";
import Founder from "../Founder/Founder";
import Footer from "../Footer/Footer";
function Home() {
  return (
    <div className="h-screen   max-w-8xl m-auto">
      <Hero />
      {/* <Pages_Btns /> */}
      {/* <div className=" h-[40vh] bg-gray_white w-full"></div>
       */}
      <AboutUs />
      <Services />
      <Courses />
      <Founder />
      <Footer />
    </div>
  );
}

export default Home;
