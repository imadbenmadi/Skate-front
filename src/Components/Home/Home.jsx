import React from "react";
import Pages_Btns from "../Pages_Btns";
import Hero from "./Hero";
function Home() {
    
    return (
        <div>
            <Hero />
            <Pages_Btns />
            <div className=" h-[40vh] bg-gray_white w-full"></div>
        </div>
    );
}

export default Home;
