import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
function Menu_Toogler({ MobileNav_Open, set_MobileNav_Open , Toogle_Menu_Bar }) {
    return (
        <div>
            <div
                className={`${
                    MobileNav_Open ? "hidden" : "block"
                } md:hidden flex flex-col items-center justify-center mr-10`}
            >
                <IoMenu
                    className=" text-5xl text-green text cursor-pointer"
                    onClick={Toogle_Menu_Bar}
                />
            </div>
            <div
                className={` ${
                    MobileNav_Open ? "block" : "hidden"
                } md:hidden flex flex-col items-center justify-center mr-10`}
            >
                <IoClose
                    className=" text-5xl text-green text cursor-pointer"
                    onClick={Toogle_Menu_Bar}
                />
            </div>
        </div>
    );
}

export default Menu_Toogler