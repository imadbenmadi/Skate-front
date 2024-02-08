import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const WarningNotification = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div className="fixed z-50 bottom-0 right-0 p-4 m-4 bg-red-100 border border-red-400 text-red-700 rounded-md shadow-lg">
                    <div className="flex justify-between items-center">
                        <p className="text-sm">
                            Warning! This is a warning message.
                        </p>
                        <button
                            className="text-red-500 hover:text-red-700"
                            onClick={handleClose}
                        >
                            <IoClose/>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default WarningNotification;
