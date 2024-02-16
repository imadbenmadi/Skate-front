import React from "react";
import { Outlet } from "react-router";
import LeftBar from "./LeftBar";
function UserProfile() {
  return (
    <div className=" pt-20 max-w-[1200px] mx-auto flex justify-startnode items-start h-screen px-2 ">
      <div className="w-1/4 h-full max-md:hidden ">
        <LeftBar />
      </div>
      <div className=" w-3/4 h-full max-md:w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default UserProfile;
