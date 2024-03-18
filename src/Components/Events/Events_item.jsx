import img from "../../../public/wallpaper.jpg";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import ErrorPage from "../ErrorPage";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { Formate_Date } from "../../Logic/Formate_Date";

function Event_item() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [event, setevent] = useState([]);
    const location = useLocation();

    const fetchevent = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `http://localhost:3000/Events/${
                    location.pathname.split("/")[2]
                }`,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status == 200) {
                setevent(response.data);
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false); // Set loading state to false regardless of success or failure
        }
    };
    useEffect(() => {
        fetchevent();
    }, []);
    if (error) {
        return <ErrorPage />;
    }
    if (loading)
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    return (
        <>
            <div className=" pt-[80px] flex flex-col items-center w-[90%] m-auto md:items-start justify-center gap-3 ">
                <Link
                    to={"/Events"}
                    className="select-none w-fit m-auto bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 mb-4"
                >
                    <IoMdArrowRoundBack />
                    <div>Back to Events</div>
                </Link>
                <h2 className="text-2xl font-bold mb-2 m-auto">
                    {event.Title}
                </h2>
                <img
                    src={`http://localhost:3000/Events/${event.Image}`}
                    alt=""
                    className=" w-[400px] m-auto"
                />
                <div className="text-gray  text-sm text-center m-auto ">
                    {event.Date && Formate_Date(event.Date)}
                </div>
                <div className="text-gray text-lg py-4">
                    {event.Text && event.Text}
                </div>
                <div className=" w-[90vw] m-auto my-6 p-4 rounded text-lg">
                    {event.Description}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Event_item;
