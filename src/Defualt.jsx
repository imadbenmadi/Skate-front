import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { useEffect } from "react";
function Defualt() {
    const Location = useLocation();
    const Navigate = useNavigate();
    useEffect(() => {
        if (!Location.pathname.split("/")[1]) Navigate("/en");
    })

}

export default Defualt;
