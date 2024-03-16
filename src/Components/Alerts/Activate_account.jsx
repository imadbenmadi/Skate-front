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
                        <div className="text-xl text-gray ">
                            <div className=" text-3xl text-red-700  underline pb-2">
                                Warning! .
                            </div>
                            <div className=" ">
                                you should activate your account
                            </div>
                            <Link
                                to={"/verifyEmail"}
                                className="select-none  w-fit flex items-end justify-start gap-1"
                                onClick={() => {
                                    setIsVisible(false);
                                }}
                            >
                                <span className=" underline">
                                    Go to the activation page
                                </span>
                                <FaArrowRight />
                            </Link>
                        </div>

                        <button
                            className="text-red-500 hover:text-red-700"
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
