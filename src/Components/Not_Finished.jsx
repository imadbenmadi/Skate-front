import React from "react";
import Comming_Soon from "../../public/work-in-progress.png"; // Make sure to import your image

function Not_Finished() {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-4xl">
            <div className="p-8 bg-white rounded-md shadow-lg">
                <h1 className="text-5xl mb-4">
                    Oops! This Page is Not Finished Yet
                </h1>
                <p className="text-lg mb-8">
                    We're working hard to bring you something awesome. Check
                    back later!
                </p>
                <img
                    src={Comming_Soon} // Use the imported image
                    alt="Under Construction"
                    className="w-64 h-64 mx-auto mb-8"
                />
                <p className="text-sm">Thank you for your patience!</p>
            </div>
        </div>
    );
}

export default Not_Finished;
