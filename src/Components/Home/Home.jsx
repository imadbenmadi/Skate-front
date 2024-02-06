import React from "react";
import Pages_Btns from "../Pages_Btns";
import Hero from "./Hero";
import Services from "./Services";
function Home() {
  return (
    <div className="h-screen   max-w-8xl m-auto">
      <Hero />
      {/* <Pages_Btns /> */}
      {/* <div className=" h-[40vh] bg-gray_white w-full"></div>
       */}
      <Services Title="Our Sarvice" bg={false} />
      <div className="bg-slate-300 max-md:max-h-[50%]">
        <Services Title="Our Sarvice" bg={true} />
      </div>
    </div>
  );
}

export default Home;
