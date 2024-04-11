import { useState, useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import axios from "axios";
import swal from "sweetalert2";
import { useNavigate } from "react-router";
import { MdDone } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from "../Footer";
import img from "../../../public/wallpaper.jpg";

function ServiceItem() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [service, setService] = useState({});
    const [requestLoading, setRequestLoading] = useState(false);
    const [alreadyHaveService, setAlreadyHaveService] = useState(false);
    const { isAuth, _id, Services } = useAppContext();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (Services) {
            const serviceId = location.pathname.split("/")[2];
            const alreadyHaveService = Services.some(
                (service) => service == serviceId
            );

            setAlreadyHaveService(alreadyHaveService);
        }
    }, [Services]);

    const handleRequestService = async () => {
        try {
            setRequestLoading(true);
            const response = await axios.post(
                `http://localhost:3000/Services/request`,
                {
                    userId: _id,
                    ServiceId: location.pathname.split("/")[2],
                },
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status === 200) {
                swal.fire("success", "Request sent successfully", "success");
                setSuccess(true);
            } else if (response.status === 409) {
                swal.fire("Missing Data", "Request could not be sent", "error");
            } else if (response.status === 401) {
                swal.fire({
                    title: "You should login to do that",
                    text: "You are not authenticated!",
                    icon: "warning",
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "green",
                    confirmButtonText: "Go to Login Page",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/Login");
                    }
                });
            } else if (response.status === 400) {
                swal.fire(
                    "You cannot request the service",
                    `${response.data.message}`,
                    "warning"
                );
            } else if (response.status === 404) {
                swal.fire(
                    "Not found",
                    "Something went wrong. Please try again later",
                    "warning"
                );
            } else {
                swal.fire("Error", "Internal server error", "error");
            }
        } catch (error) {
            swal.fire("Error", "Internal server error", "error");
        } finally {
            setRequestLoading(false);
        }
    };

    const fetchService = async () => {
        setLoading(true);

        try {
            const response = await axios.get(
                `http://localhost:3000/Services/${
                    location.pathname.split("/")[2]
                }`,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status === 200) {
                setService(response.data);
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchService();
    }, []);

    if (error) {
        return <ErrorPage />;
    }

    if (loading) {
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    }

    return (
        <>
            <div className="pt-[80px] min-h-[100vh]">
                <Link
                    to={"/Services"}
                    className="select-none w-fit m-auto bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 mb-4"
                >
                    <IoMdArrowRoundBack />
                    <div>Back to Services</div>
                </Link>
                <h2 className="text-xl font-bold mb-4 pl-2 md:pl-6 w-fit m-auto max-w-[80vw]  break-all ">
                    {service.Title && service.Title}
                </h2>
                <div className="flex flex-col md:flex-row    gap-3">
                    <div className="">
                        <img
                            src={`http://localhost:3000/Services/${service.Image}`}
                            alt=""
                            className="w-[400px] m-auto md:ml-4"
                        />

                        <div className="pt-4 flex justify-center md:justify-end gap-8 items-center">
                            {success ? (
                                <div className="flex items-center text-green gap-1 text-xl">
                                    Service requested
                                    <MdDone className="text-2xl" />
                                </div>
                            ) : !alreadyHaveService ? (
                                <>
                                    <div>
                                        {/* {service.Price && (
                                        <p className="text-gray font-semibold text-xl">
                                            {service.Price}DA
                                        </p>
                                    )} */}
                                    </div>
                                    <div
                                        className={`bg-green px-4 py-2 w-fit text-white rounded cursor-pointer ${
                                            requestLoading
                                                ? "opacity-50 pointer-events-none"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            if (!isAuth) {
                                                swal.fire({
                                                    title: "You should login to do that",
                                                    text: "You are not authenticated!",
                                                    icon: "warning",
                                                    confirmButtonColor:
                                                        "#3085d6",
                                                    cancelButtonColor: "green",
                                                    confirmButtonText:
                                                        "Go to Login Page",
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        navigate("/Login");
                                                    }
                                                });
                                            } else {
                                                handleRequestService();
                                            }
                                        }}
                                    >
                                        {requestLoading
                                            ? "Requesting..."
                                            : "Request the service"}
                                    </div>
                                </>
                            ) : (
                                <div
                                    // to={"/Profile"}
                                    className="flex items-center gap-2 select-none text-green w-fit  rounded cursor-pointer"
                                >
                                    <MdDone className="text-2xl" />
                                    You own this Service
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="   break-words  border-gray pl-4 w-calc(100vw - 400px) text-lg">
                        <p className="text-gray">
                            {service.Text && service.Text}
                        </p>
                        <p className="text-gray  text-[16px] ">
                            Category :{" "}
                            <span className="font-semibold">
                                {service.Category && service.Category}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="w-[90vw] m-auto my-6 p-4 rounded bg-gray_white">
                    {service.Description}
                </div>
            </div>
            <div className="  bg-slate-200">
                <Footer />
            </div>
        </>
    );
}

export default ServiceItem;
