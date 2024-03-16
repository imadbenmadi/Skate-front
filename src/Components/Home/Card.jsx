
function Card({ Title, Image }) {
  return (
    <div className="  cursor-pointer cardHover bg-gray-100 w-[28%] md:mt-5  md:my-5 max-md:h-[70%]  max-md:w-[70%] self-center mx-auto md:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  rounded-lg overflow-hidden ">
      <img src={Image} alt="img" className="w-full h-[140px]" />
      <div className="flex flex-col items-start py-5 pr-10 pl-2 w-full  bg-green text-white max-md:pr-5">
        <div className="text-xl font-bold leading-8">Safety</div>
        <div className="flex gap-1.5 mt-6 text-base font-medium leading-7">
          <div className="grow">Read More</div>
          <div className="my-auto h-px bg-white w-[30px]" />
        </div>
      </div>
    </div>
  );
}

export default Card;
