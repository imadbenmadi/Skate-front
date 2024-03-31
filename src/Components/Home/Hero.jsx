
import wallpaper1 from "../../../public/wallpaper.jpg";
import wallpaper2 from "../../../public/wllpaper2.jpg";
import img from "../../../public/Rectangle.png";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
export default function Hero() {
    return (
        <div className="max-h-screen h-screen mx-w-[1300px] ">
            <div className=" h-[96%] max-h-screen translate-y-[5%]    ">
                {/* Set the image as a background */}
                <div
                    className={`relative  w-full h-full  bg-cover bg-center flex justify-center items-center gap-10   bg-[url('${img}')] text-black_text`}
                >
                    <img
                        src={`${img}`}
                        className="z-5 absolute w-full h-full object-cover"
                    ></img>{" "}
                    <div className="bg-black z-10 opacity-70 absolute w-full h-full"></div>{" "}
                    <div className=" absolute  font-semibold text-6xl top-24 text-gray font-serif"></div>
                    <div className="flex z-50  flex-col md:items-center w-screen md:w-[600px]">
                        <div className="block max-md:text-4xl   z-50 md:text-5xl  text-center self-center  mb-16 font-semibold text-white">
                            Skate School
                        </div>
                        <div className="block max-md:px-5   text-center z-50 md:text-2xl mb-3 font-semibold text-white">
                            Center of Study Support Consultation
                        </div>
                        <div className="block max-md:px-5   text-center z-50 md:text-2xl mb-3 font-semibold text-white ">
                            Training and Assistance
                        </div>
                        <div className=" max-md:flex-col max-md:gap-5 self-center mt-5 flex justify-around items-center z-50 md:w-[80%] w-[200px]">
                            <Link
                                to={"/Courses"}
                                className="select-none flex items-center text-[16px] bg-white text-black rounded-xl shadow-xl w-fit px-6 py-2 md:text-2xl cursor-pointer font-semibold"
                            >
                                Owr Courses
                                <GrFormNextLink />
                            </Link>
                            <Link
                                to={"/Services"}
                                className="select-none flex items-center text-[16px]  bg-green text-white rounded-xl shadow-xl w-fit px-6 py-2 md:text-2xl cursor-pointer"
                            >
                                Owr Services
                                <GrFormNextLink />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
