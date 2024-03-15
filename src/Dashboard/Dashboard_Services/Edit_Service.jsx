import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoWarning } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ErrorPage from "../../Components/ErrorPage";
import axios from "axios";
function Edit_Service() {
    const location = useLocation();
    const Service_id = location.pathname.split("/")[3];
    const [Service, setService] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetch_Service = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `http://localhost:3000/Services/${Service_id}`,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status == 200) {
                setService(response.data);
            } else {
                setError(response.data);
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetch_Service();
    }, []);
    if (loading)
        return (
            <div className=" w-[100%] h-[200px] flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    else if (error) {
        return <ErrorPage />;
    } else if (!Service)
        return (
            <>
                <Link
                    className="select-none bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 w-fit m-auto"
                    to={"/Dashboard/Services"}
                >
                    <>
                        <FaArrowLeft />
                        <div>Go Back</div>
                    </>
                </Link>
                <div
                    className="flex items-center justify-center text-gray font-bold p-8 w-fit
                     m-auto mt-10 bg-white rounded-md shadow-lg text-center"
                >
                    <IoWarning className="text-red-500 text-4xl " />
                    <p className="text-xl text-gray">Service Not Found</p>
                </div>
            </>
        );
    else
        return (
            <div className=" ">
                <Link
                    className="select-none bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 w-fit m-auto"
                    to={"/Dashboard/Services"}
                >
                    <>
                        <FaArrowLeft />
                        <div>Go Back</div>
                    </>
                </Link>
                {/* Input fields */}
                <div className="border border-gray_white text-black_text shadow-md w-[80%] md:w-[98%] m-auto mt-3 p-5 rounded-lg">
                    <Formik
                        initialValues={{
                            // serviceId: Service._id || "",
                            Title: Service.Title || "",
                            Text: Service.Text || "",
                            Description: Service.Description || "",
                            Price: Service.Price || "",
                            Category: Service.Category || "",
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.Title) {
                                errors.Title = "Title is required.";
                            }
                            if (!values.Text) {
                                errors.Text = "Text is required.";
                            }
                            if (!values.Description) {
                                errors.Description = "Description is required.";
                            }
                            if (!values.Price) {
                                errors.Price = "Price is required.";
                            } else if (isNaN(values.Price))
                                errors.Price = "Invalid Price";

                            if (!values.Category) {
                                errors.Category = "Category is required.";
                            }
                            return errors;
                        }}
                        onSubmit={async (
                            values,
                            { setSubmitting, resetForm }
                        ) => {
                            try {
                                setSubmitting(true);
                                let response = await Axios.put(
                                    `http://localhost:3000/Dashboard/Services/${Service_id}`,
                                    values,
                                    {
                                        withCredentials: true,
                                        validateStatus: () => true,
                                    }
                                );
                                setSubmitting(false);
                                if (response.status == 404) {
                                    Swal.fire(
                                        "Error",
                                        `${response.data.message}`,
                                        "error"
                                    );
                                } else if (response.status == 200) {
                                    Swal.fire(
                                        "Done!",
                                        "Service has been Modified Successfully",
                                        "success"
                                    );
                                } else if (response.status == 400) {
                                    Swal.fire(
                                        "Error!",
                                        `Internal server error : ${response.data.message}`,
                                        "error"
                                    );
                                } else if (response.status == 401) {
                                    Swal.fire({
                                        title: "Unauthorised Action",
                                        text: "You should login again ",
                                        icon: "error",
                                        confirmButtonColor: "#3085d6",

                                        confirmButtonText:
                                            "Go to Admin login Page",
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            Navigate("/Dashboard_login");
                                        }
                                    });
                                } else if (response.status == 409) {
                                    Swal.fire(
                                        "Error!",
                                        `${response.data.message}`,
                                        "error"
                                    );
                                } else if (response.status == 429) {
                                    Swal.fire(
                                        "Error!",
                                        `Too many Requests , ${response.data.message}`,
                                        "error"
                                    );
                                } else if (response.status == 500) {
                                    Swal.fire(
                                        "Error!",
                                        `Internal server error : ${response.data.message}`,
                                        "error"
                                    );
                                } else {
                                    Swal.fire(
                                        "Error!",
                                        `Something Went Wrong. Please try again , ${response.data.message}`,
                                        "error"
                                    );
                                }
                            } catch (error) {
                                Swal.fire(
                                    "Error!",
                                    `Something Went Wrong. Please try again , ${error.message}`,
                                    "error"
                                );
                            }
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="flex flex-col text-sm md:text-lg  gap-4 items-center justify-center flex-wrap">
                                <div className=" w-full ">
                                    <div>
                                        Title{" "}
                                        <span className="text-red-600 font-semibold">
                                            *
                                        </span>
                                    </div>
                                    <Field
                                        as="textarea"
                                        name="Title"
                                        className="border border-gray_white px-2 py-1 rounded shadow w-full overflow-auto custom-overflow"
                                        disabled={isSubmitting}
                                    />
                                    <ErrorMessage
                                        name="Title"
                                        component="div"
                                        style={errorInputMessage}
                                    />
                                </div>
                                <div className=" w-full ">
                                    <div>
                                        Text{" "}
                                        <span className="text-red-600 font-semibold">
                                            *
                                        </span>
                                    </div>
                                    <Field
                                        as="textarea"
                                        name="Text"
                                        className="border border-gray_white px-2 py-1 rounded shadow w-full overflow-auto custom-overflow"
                                        disabled={isSubmitting}
                                        rows={4}
                                    />
                                    <ErrorMessage
                                        name="Text"
                                        component="div"
                                        style={errorInputMessage}
                                    />
                                </div>
                                <div className=" w-full h-fit ">
                                    <div>
                                        Description{" "}
                                        <span className="text-red-600 font-semibold">
                                            *
                                        </span>
                                    </div>
                                    <Field
                                        as="textarea"
                                        name="Description"
                                        className="border border-gray_white px-2 py-1 rounded shadow w-full overflow-auto custom-overflow"
                                        disabled={isSubmitting}
                                        rows={10}
                                    />
                                    <ErrorMessage
                                        name="Description"
                                        component="div"
                                        style={errorInputMessage}
                                    />
                                </div>
                                <div className=" flex gap-4 w-full">
                                    <div className=" w-[180px] h-fit ">
                                        <div>
                                            Price{" "}
                                            <span className="text-red-600 font-semibold">
                                                *
                                            </span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="Price"
                                            className="border border-gray_white px-2 py-1 rounded shadow w-full"
                                            disabled={isSubmitting}
                                        />
                                        <ErrorMessage
                                            name="Price"
                                            component="div"
                                            style={errorInputMessage}
                                        />
                                    </div>
                                    <div className=" w-[280px] h-fit ">
                                        <div>
                                            Category{" "}
                                            <span className="text-red-600 font-semibold">
                                                *
                                            </span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="Category"
                                            className="border border-gray_white px-2 py-1 rounded shadow w-full"
                                            disabled={isSubmitting}
                                        />
                                        <ErrorMessage
                                            name="Category"
                                            component="div"
                                            style={errorInputMessage}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className={` ${
                                        isSubmitting
                                            ? "bg-gray_white text-gray"
                                            : " bg-green text-white"
                                    } w-fit m-auto px-4 py-2 rounded font-semibold `}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <div>loading</div>
                                    ) : (
                                        "Submit"
                                    )}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        );
}

const errorInputMessage = {
    fontSize: "12px",
    color: "red",
};

export default Edit_Service;
