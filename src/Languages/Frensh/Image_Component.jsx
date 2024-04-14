import DefaultImage from "../../public/Default.jpg";
import { useState } from "react";
function ImageComponent({ Image }) {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };
    if (loading)
        return (
            <div
                className={` 
                h-full w-full
                 rounded-md`}
            >
                <div className=" w-full h-full skeleton"></div>
            </div>
        );
    return (
        <img
            src={Image || DefaultImage}
            alt=""
            loading="lazy"
            onLoad={handleLoad}
            onError={(e) => {
                e.target.src = DefaultImage; // Set default image source if blog image fails to load
            }}
            className=" w-full h-full"
        />
    );
}

export default ImageComponent;
