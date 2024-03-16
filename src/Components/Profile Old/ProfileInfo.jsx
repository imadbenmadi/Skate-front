import  { useState } from "react";
import avater from "../../../public/Founder.png";
import menu from "../../../public/icons8-menu-50.png";
function Info() {
  const [isOpen, setIsOpen] =useState(false)
  return (
    <div className="flex flex-col px-5 md:px-10 ">
      <div className="flex gap-5 justify-between w-full text-3xl font-semibold text-black max-md:flex-wrap max-md:max-w-full max-md:text-4xl">
 
        <div className="  max-md:text-4xl">Edit profile</div>
        {/* <img
          loading="lazy"
          src={avater}
          className="max-w-full rounded-full aspect-square w-[120px]"
        /> */}
      </div>
      <div className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex w-full items-center max-md:flex-col  max-md:ml-0 max-md:w-full">
            <div className="flex  max-w-[50%] max-md:max-w-full  w-full   flex-col grow max-md:mt-10">
              <div className="text-xl  font-semibold text-zinc-900">
                First Name
              </div>
              <input
                placeholder="   Mehrab"
                className="justify-center w-full items-start py-2  mt-3 text-xl font-medium whitespace-nowrap bg-white rounded-md border-2 border-solid border-zinc-500 text-zinc-500 max-md:px-5"
              />
            </div>
            <div className="flex   max-w-[50%] w-full  max-md:max-w-full  flex-col  ml-5  max-md:ml-0 max-md:w-full">
              <div className="flex  flex-col  grow max-md:mt-10">
                <div className="text-xl font-semibold text-zinc-900">
                  Last Name
                </div>
                <input
                  placeholder="   Mehrab"
                  className="justify-center w-full items-start py-2  mt-3 text-xl font-medium whitespace-nowrap bg-white rounded-md border-2 border-solid border-zinc-500 text-zinc-500 max-md:px-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex  flex-col  grow max-md:mt-10">
          <div className="text-xl font-semibold text-zinc-900">Email</div>
          <input
            placeholder="Mehrabbozorgi.business@gmail.com"
            className="justify-center w-full items-start py-2  mt-3 text-xl font-medium whitespace-nowrap bg-white rounded-md border-2 border-solid border-zinc-500 text-zinc-500 max-md:px-5"
          />
        </div>
        <div className="flex  flex-col  grow max-md:mt-10">
          <div className="text-xl font-semibold text-zinc-900">
            Contact Number
          </div>
          <input
            placeholder="   0643164315"
            className="justify-center w-full items-start py-2  mt-3 text-xl font-medium whitespace-nowrap bg-white rounded-md border-2 border-solid border-zinc-500 text-zinc-500 max-md:px-5"
          />
        </div>
        <div className="flex gap-5 justify-between self-center w-[60%] max-md:w-full   mx-auto  text-center mt-5 text-xl whitespace-nowrap max-md:mt-10">
          <div className="grow justify-center px-5 py-2 text-green bg-white rounded-md border-2 cursor-pointer border-green border-solid max-md:px-5">
            Cancel
          </div>
          <div className="grow justify-center self-start  px-5 py-2 font-semibold rounded-md border-2 cursor-pointer  text-white border-green border-solid  bg-green rounded-md max-md:px-5">
            Save
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
