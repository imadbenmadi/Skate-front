import { useState, useEffect } from "react";
import { useAppContext } from "../../../../Context/AppContext";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import axios from "axios";
import swal from "sweetalert2";
import { useNavigate } from "react-router";
import { MdDone } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from "../Footer";
import img from "../../../../../public/Default.jpg";

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
            const serviceId = location.pathname.split("/")[3];
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
                `https://backend.skate.dz/Services/request`,
                {
                    userId: _id,
                    ServiceId: location.pathname.split("/")[3],
                },
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status === 200) {
                swal.fire("نجاح", "تم إرسال الطلب بنجاح", "success");
                setSuccess(true);
            } else if (response.status === 409) {
                swal.fire("بيانات مفقودة", "لم يتم إرسال الطلب", "error");
            } else if (response.status === 401) {
                swal.fire({
                    title: "يجب عليك تسجيل الدخول للقيام بذلك",
                    text: "لم تتم المصادقة عليك!",
                    icon: "warning",
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#078343",
                    confirmButtonText: "انتقل إلى صفحة تسجيل الدخول",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/ar/Login");
                    }
                });
            } else if (response.status === 400) {
                swal.fire(
                    "لا يمكنك طلب الدورة.",
                    `${response.data.message}`,
                    "warning"
                );
            } else if (response.status === 404) {
                swal.fire(
                    "الدورة غير موجودة",
                    " حدث خطأ ما. يرجى المحاولة",
                    "warning"
                );
            } else {
                swal.fire("خطأ", "خطأ داخلي في الخادم", "error");
            }
        } catch (error) {
            swal.fire("خطأ", "خطأ داخلي في الخادم", "error");
        } finally {
            setRequestLoading(false);
        }
    };

    const fetchService = async () => {
        setLoading(true);

        try {
            const response = await axios.get(
                `https://backend.skate.dz/Services/${
                    location.pathname.split("/")[3]
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
                    to={"/en/Services"}
                    className="select-none w-fit m-auto bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 mb-4"
                >
                    <IoMdArrowRoundBack />
                    <div>العودة إلى الخدمات</div>
                </Link>
                <h2 className="text-xl font-bold mb-4 pl-2 md:pl-6 w-fit m-auto max-w-[80vw]  break-all ">
                    {service.Title && service.Title}
                </h2>
                <div className="flex flex-col md:flex-row    gap-3">
                    <div className="">
                        <img
                            src={`https://backend.skate.dz/Services/${service.Image}`}
                            alt=""
                            className="w-[400px] m-auto md:ml-4"
                            onError={(e) => {
                                e.target.src = img; // Set default image source if blog image fails to load
                            }}
                            loading="lazy"
                        />

                        <div className="pt-4 flex justify-center md:justify-end gap-8 items-center">
                            {success ? (
                                <div className="flex items-center text-green gap-1 text-xl">
                                    تم طلب الخدمة بنجاح
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
                                                    title: "يجب عليك تسجيل الدخول للقيام بذلك",
                                                    text: "لم تتم المصادقة عليك!",
                                                    icon: "warning",
                                                    confirmButtonColor:
                                                        "#3085d6",
                                                    cancelButtonColor: "green",
                                                    confirmButtonText:
                                                        "الانتقال إلى صفحة تسجيل الدخول",
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        navigate("/ar/Login");
                                                    }
                                                });
                                            } else {
                                                handleRequestService();
                                            }
                                        }}
                                    >
                                        {requestLoading ? (
                                            <span className="small-loader  w-full m-auto"></span>
                                        ) : (
                                            "طلب الخدمة"
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div
                                    // to={"/Profile"}
                                    className="flex items-center gap-2 select-none text-green w-fit  rounded cursor-pointer"
                                >
                                    <MdDone className="text-2xl" />
                                    أنت تمتلك هذه الخدمة
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
