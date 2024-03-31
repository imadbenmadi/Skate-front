
import Pages_Btns from "../Pages_Btns";
import Hero from "./Hero";

import { AboutUs } from "./AboutUs";
import Services from "./Services/Services";
import Courses from "./Courses/Courses";
import Founder from "./Founder/Founder";
import Footer from "../Footer";
function Home() {
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
