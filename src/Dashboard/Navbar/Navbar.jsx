import React from "react";
import logo from "../../../public/skate_circle.png";
function Navbar() {
    return (
        <div className=" w-full h-full">
            <div className=" flex gap-3 items-center text-4xl text-green justify-center pt-4 ">
                <div>
                    <img src={logo} alt="logo" className=" w-12" />
                </div>
                <div>Skate</div>
            </div>
            {/* nav items */}

            <div className="  w-[80%] m-auto text-white" >
                <div>Dashboarsssssssssssssssssssd</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
            </div>
        </div>
    );
}

export default Navbar;
