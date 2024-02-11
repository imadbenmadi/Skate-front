import React from 'react'
import img from "../../../../public/wallpaper.jpg";

function Card() {
  return (
    <div className="flex flex-col mx-auto bg-white w-[150px] h-[150px] rounded-xl overflow-hidden border border-solid shadow-lg border-[color:var(--Neutral-Light-Grey-50,#E9F0F8)]">
      <div className="flex overflow-hidden relative flex-col items-start pt-12 pr-16 pb-6 pl-4 w-full text-sm leading-5 text-green-800 aspect-[1.23]">
        <img
          loading="lazy"
          src={img}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative justify-center px-7 py-1 mt-52 bg-red-50 rounded-[30px]">
          imad
        </div>
      </div>
      <div className="flex flex-col justify-between px-4 py-2.5 w-full bg-white rounded-none">
        <div className="flex gap-5 justify-between font-semibold">
          <div className="flex-auto text-md leading-6 text-black">
            imad
          </div>
          <div className="flex-auto text-xl leading-7 text-right text-orange-500">
            imad DA{" "}
          </div>
        </div>
        <div className="mt-4 text-sm leading-7 text-zinc-500">dec</div>
        <div className="justify-center self-center px-6 py-3 mt-6 text-base font-medium leading-6 text-center text-white bg-green rounded-lg">
          View Course
        </div>
      </div>
    </div>
  );
}



export default Card