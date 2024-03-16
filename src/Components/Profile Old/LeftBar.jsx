import React from "react";
import arrow from "../../../public/arrow left.png";
import edit from "../../../public/edit.png";
import Help from "../../../public/Help outline.svg";
import { Link } from "react-router-dom";
function LeftBar({ isOpen, setIsOpen }) {
  return (
      <div
          className={` ${
              !isOpen && "max-md:hidden"
          } w-full h-full border-r bg-white  border-slate-400`}
      >
          <div className=" max-md:hidden flex justify-center items-center w-2/3  ">
              <img className=" size-7" src={arrow} alt="" />
              <div className="  text-xl  ">Profil</div>
          </div>
          <div className="pt-10  ">
              <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to="/Profile"
                  className="select-none flex justify-center items-center py-3 bg-slate-200 rounded-md mx-5 px-5  cursor-pointer mt-2 "
              >
                  <img className="size-6 " src={edit} alt="" />
                  <div className=" text-lg "> Edit Profil</div>
              </Link>
              <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to="/Profile/Notifications"
                  className="select-none flex justify-center items-center py-3 hover:bg-slate-200 rounded-md mx-5 mt-2  cursor-pointer "
              >
                  <img className="size-6" src={edit} alt="" />
                  <div className=" text-lg"> My Notifications</div>
              </Link>
              <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to="/Profile/Services"
                  className="select-none flex justify-center items-center py-3 hover:bg-slate-200 rounded-md mx-5 mt-2  cursor-pointer "
              >
                  <img className="size-6" src={edit} alt="" />
                  <div className=" text-lg"> My Service</div>
              </Link>
              <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to="/Profile/Courses"
                  className="select-none flex justify-center items-center py-3 cursor-pointer hover:bg-slate-200 rounded-md mx-5 mt-2"
              >
                  <img className="size-6" src={edit} alt="" />
                  <div className=" text-lg"> My Courses</div>
              </Link>
          </div>
          <div className="flex justify-center items-center mt-10 self-end py-3 hover:bg-slate-200 rounded-md mx-5 px-5  cursor-pointer ">
              <img className="size-10 " src={Help} alt="" />
              <div className=" text-lg "> Help</div>
          </div>
      </div>
  );
}

export default LeftBar;
