import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
function CardService({ icon, titleService, desServicce }) {
    return (
        <div className="flex flex-col  mx-auto cursor-pointer   mb-5 justify-between items-between  text-lg max-w-[90%] ">
            <div
                className="flex flex-col items-center px-10  md:text-center lg:text-start  py-6 w-full bg-white rounded-lg border-solid shadow-lg border-[0.5px]
                       border-black border-opacity-10 lg:h-[500px]"
            >
                <img src={icon} className="shadow-sm aspect-[0.98] w-[60px]" />
                <div className=" mt-1 md:mt-5 text-lg  md:text-xl  lg:text-2xl font-semibold   text-emerald-500 whitespace-nowrap">
                    {titleService}
                </div>
                <div className="self-stretch md:h-[80%] mt-2 md:mt-4  text-sm md:text-base leading-6  text-opacity-70">
                    {desServicce}
                </div>
                <Link
                    to={"/en/Services"}
                    className="flex items-center gap-1.5 mt-3 md:mt-6 text-sky-900 whitespace-nowrap"
                >
                    <div className="grow">Explore</div>
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    );
}

export default CardService;
