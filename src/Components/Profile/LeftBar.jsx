import React from "react";
import arrow from "../../../public/arrow left.png";
import edit from "../../../public/edit.png";
import Help from "../../../public/Help outline.svg";
function LeftBar() {
  return (
    <div className="  w-full h-full border-r  border-slate-400 max-md:hidden">
      <div className="flex justify-center items-center w-2/3  ">
        <img className=" size-7" src={arrow} alt="" />
        <div className="  text-xl  ">Profil</div>
      </div>
      <div className="pt-10  ">
        <div className="flex justify-center items-center py-3 bg-slate-200 rounded-md mx-5 px-5  cursor-pointer mt-2 ">
          <img className="size-6 " src={edit} alt="" />
          <div className=" text-lg "> Edit Profil</div>
        </div>
        <div className="flex justify-center items-center py-3 hover:bg-slate-200 rounded-md mx-5 mt-2  cursor-pointer ">
          <img className="size-6" src={edit} alt="" />
          <div className=" text-lg"> Edit Profil</div>
        </div>
        <div className="flex justify-center items-center py-3 cursor-pointer hover:bg-slate-200 rounded-md mx-5 mt-2">
          <img className="size-6" src={edit} alt="" />
          <div className=" text-lg"> Edit Profil</div>
        </div>
        <div className="flex justify-center items-center py-3 cursor-pointer  hover:bg-slate-200 rounded-md mx-5 mt-2 ">
          <img className="size-6" src={edit} alt="" />
          <div className=" text-lg"> Edit Profil</div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 self-end py-3 hover:bg-slate-200 rounded-md mx-5 px-5  cursor-pointer ">
        <img className="size-10 " src={Help} alt="" />
        <div className=" text-lg "> Help</div>
      </div>
    </div>
  );
}

export default LeftBar;
