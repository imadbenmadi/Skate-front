import img from "../../../../public/wallpaper.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
function Card({ service }) {
    const [windowWidth, SetwindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            SetwindowWidth(window.innerWidth);
        });
    }, []);
    return (
        <Link
            to={`/Services/${service._id}`}
            className="select-none w-full relative rounded overflow-hidden border-b border-gray py-5 px-1 md:px-5 flex shrink-0 justify-start h-fit"
        >
            <img
                className=" w-[40%] md:w-[300px] h-[150px] md:h-[180px] object-cover"
                src={`http://localhost:3000/Services/${service.Image}`}
                alt={service.Title}
            />
            <div className="w-[60%] pl-2 md:pl-6  ">
                {service.Title && (
                    <p className="font-bold text-lg md:text-xl  overflow-hidden">
                        {windowWidth > 640
                            ? service.Title.slice(0, 60)
                            : service.Title.slice(0, 20)}
                        {service.Title.length > (windowWidth > 640 ? 60 : 20)
                            ? "..."
                            : ""}
                    </p>
                )}
                {service.Text && (
                    <p className="text-gray text-base">
                        {windowWidth > 640
                            ? service.Text.slice(0, 70)
                            : service.Text.slice(0, 35)}
                        {service.Text.length > (windowWidth > 640 ? 70 : 35)
                            ? "..."
                            : ""}
                    </p>
                )}

                {/* {service.Price ? (
                    <p className="text-gray text-lg font-semibold py-1">
                        {service.Price} DA
                    </p>
                ) : null} */}
                {service.Category ? (
                    <p className="text-gray text-sm font-semibold ">
                        {service.Category}
                    </p>
                ) : null}
            </div>
        </Link>
    );
}

export default Card;
