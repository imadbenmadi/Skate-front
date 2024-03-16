
import vectorService from "../../../../public/VectorService.png";
import { Link } from "react-router-dom";
function CardService({ icon, titleService, desServicce }) {
  return (
    <Link to={"/Services"} className="flex flex-col mx-auto cursor-pointer  self-center mb-5 justify-center  text-lg max-w-[90%] ">
      <div className="flex flex-col items-center justify-center px-12 pt-6 pb-12 w-full bg-white rounded-lg border-solid shadow-lg border-[0.5px] border-black border-opacity-10 h-[500px]">
        <img
          loading="lazy"
          src={icon}
          className="shadow-sm aspect-[0.98] w-[60px]"
        />
        <div className="mt-5 text-2xl font-semibold leading-8  text-emerald-500 whitespace-nowrap">
          {titleService}
        </div>
        <div className="self-stretch mt-6  text-blue-950 text-opacity-70">
          {desServicce}
        </div>
        <div className="flex gap-1.5 mt-6 text-sky-900 whitespace-nowrap">
          <div className="grow">Explore</div>
          <img
            loading="lazy"
            src={vectorService}
            className="my-auto w-3 aspect-[1.33] fill-sky-900"
          />
        </div>
      </div>
    </Link>
  );
}

export default CardService;
