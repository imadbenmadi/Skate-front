import React from "react";
import Comming_Soon from "../../public/work-in-progress.png";

function Not_Finished() {
    return (
      <div className="flex items-center justify-center h-[80vh] 
      text-gray font-bold text-4xl">
            <div className="p-8 bg-white rounded-md shadow-lg text-center">
                <h1 className="text-5xl mb-4 text-gray-800">
                    Oops! This Page is Not Finished Yet
                </h1>
                <p className="text-lg mb-8 text-gray-700">
                    We're working hard to bring you something awesome. Check
                    back later!
                </p>
                <img
                    src={Comming_Soon}
                    alt="Under Construction"
                    className="w-64 h-64 mx-auto mb-8"
                />
                <p className="text-sm text-gray-600">
                    Thank you for your patience!
                </p>
            </div>
        </div>
    );
}

export default Not_Finished;
