import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Card({ item }) {
    const [showDescription, setShowDescription] = useState(false);
    function toggleDescription() {
        setShowDescription(!showDescription);
    }
    return (
        <div className="w-full flex  justify-between border-b-4 border-b-gray_white">
            <div className=" w-full">
                <div className="relative overflow-hidden pt-5 px-5 flex flex-col md:flex-row shrink-0 justify-start h-fit">
                    <img
                        className="md:w-[30%] md:h-[200px] object-cover"
                        src={`http://localhost:3000/Services/${item.Image}`}
                        alt={item.Title}
                    />
                    <div className="md:w-[70%] md:pl-6 py-4 break-words flex justify-between">
                        <div className="">
                            {item.Title && (
                                <p className="font-bold text-xl mb-2 overflow-hidden">
                                    {item.Title ? item.Title : "No Title"}
                                </p>
                            )}
                            {item.Text && (
                                <p className="text-gray text-base">
                                    {item.Text ? item.Text : "No Text"}
                                </p>
                            )}
                            <p className="text-gray font-semibold text-xl pt-4">
                                {item.Category ? item.Category : "No Category"}
                            </p>
                            {/* {item.Price && (
                                <div className="text-gray pt-2 text-xl font-semibold top-10 right-5 ">
                                    {item.Price} DA
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>

                {showDescription ? (
                    <div className="w-[80%] pl-8 py-4">
                        <div
                            className=" select-none flex gap-2 items-center justify-start underlined pb-4 cursor-pointer"
                            onClick={toggleDescription}
                        >
                            Show Description <FaArrowUp />
                        </div>
                        <div className="pb-4">
                            {item.Description && (
                                <p className="text-gray text-base">
                                    {item.Description}
                                </p>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="w-[80%] pl-8 py-4">
                        <div
                            className="select-none flex gap-2 items-center justify-start underlined pb-4 cursor-pointer"
                            onClick={toggleDescription}
                        >
                            Show Description <FaArrowDown />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;
