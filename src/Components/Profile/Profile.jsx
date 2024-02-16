import React, { useState } from "react";
import { Outlet } from "react-router";
import LeftBar from "./LeftBar";
import menu from "../../../public/icons8-menu-50.png";

function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" pt-20 duration-300 max-w-[1200px] mx-auto flex justify-startnode items-start h-screen px-2 ">
      <div
        className={`w-1/4 h-full   ${
          isOpen
            ? " top-32 left-0 max-md:w-full max-md:fixed"
            : "max-md:hidden md:block "
        } `}
      >
        <LeftBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className=" w-3/4 h-full max-md:w-full">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-200 text-center  self-center  mx-auto mb-2  cursor-pointer  w-10 h-10 md:hidden"
        >
          {!isOpen ? (
            <img src={menu} alt="" />
          ) : (
            <div className="  text-5xl"> x</div>
          )}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default UserProfile;
