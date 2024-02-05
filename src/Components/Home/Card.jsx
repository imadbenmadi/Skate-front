import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card({ Title, Image }) {
    return (
        <div>
            <div className="bg-gray-100 w-[250px] h-[170px]">
                <img src={Image} alt="img" className="w-full h-[140px]" />
                <div className=" bg-green flex flex-col gap-3 ">
                    <div className="text-2xl text-white ">{Title}</div>
                    <div>
                        <Link to="/">
                            Read more <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
