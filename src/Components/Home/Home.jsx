import React from "react";

import Hero from "./Hero";
import {useAppContext} from "../../Context/AppContext";
function Home() {
    const { accessToken, userData } = useAppContext();
    return (
        <div>
            <Hero />
            <div>
                Access Token:{" "}
                {accessToken && `${accessToken} `}
            </div>
            <div>
                User Data:{" "}
                {userData && `${userData.firstName} ${userData.lastName}`}
            </div>
        </div>
    );
}

export default Home;
