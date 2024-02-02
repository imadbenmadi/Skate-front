import React from "react";
import Pages_Btns from "../Pages_Btns";
import Hero from "./Hero";
import { useAppContext } from "../../Context/AppContext";
function Home() {
    const {
        accessToken,
        FirstName,
        LastName,
        Email,
        Gender,
        Age,
        Courses,
        _id,
    } = useAppContext();
    return (
        <div>
            <Hero />
            <Pages_Btns />
        </div>
    );
}

export default Home;
