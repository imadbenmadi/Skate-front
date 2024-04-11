import  { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"
const WarningNotification = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div className="fixed z-50 bottom-0 right-0 p-4 m-4 bg-red-100 border border-red-400  rounded-md shadow-lg">
                    <div className="flex justify-between items-start gap-4">
                        <div className=" text-gray ">
                            <div className=" text-xl md:text-3xl text-red-700  underline md:pb-2">
                                Warning! .
                            </div>
                            <div className=" md:text-xl">
                                you should activate your account
                            </div>
                            <Link
                                to={"/verifyEmail"}
                                className="select-none  w-fit flex items-end justify-start gap-1"
                                onClick={() => {
                                    setIsVisible(false);
                                }}
                            >
                                <span className=" underline md:text-xl">
                                    Go to the activation page
                                </span>
                                <FaArrowRight />
                            </Link>
                        </div>

                        <button
                            className="text-red-700"
                            onClick={handleClose}
                        >
                            <IoClose className=" text-2xl" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default WarningNotification;
