import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { useEffect } from "react";
function Defualt() {
    const Location = useLocation();
    const Navigate = useNavigate();
    useEffect(() => {
        if (
            !Location.pathname.split("/")[1] ||
            Location.pathname("/")[1] == "en"
        )
            Navigate("/en");
        else if (Location.pathname("/")[1] == "ar") Navigate("/ar");
        else if (Location.pathname("/")[1] == "fr") Navigate("/fr");
        else Navigate("/en");
    });
}

export default Defualt;
