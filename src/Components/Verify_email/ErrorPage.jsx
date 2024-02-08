import React from "react";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-red-600 mb-4">
                Oops! Something went wrong
            </h1>
            <p className="text-lg text-gray-700">
                We're sorry, but an error occurred while fetching data. Please
                try again later.
            </p>
        </div>
    );
};

export default ErrorPage;
