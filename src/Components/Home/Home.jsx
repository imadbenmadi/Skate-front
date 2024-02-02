import React from "react";

import Hero from "./Hero";
import {useAppContext} from "../../Context/AppContext";
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
            <div>Access Token: {accessToken && `${accessToken} `}</div>
            <div>
                <div>FirstName: {FirstName}</div>
                <div>LastName: {LastName}</div>
                <div>Email: {Email}</div>
                <div>Gender: {Gender}</div>
                <div>Age: {Age}</div>
                <div>Courses: {Courses}</div>
                <div>_id: {_id}</div>
            </div>
        </div>
    );
}

export default Home;
