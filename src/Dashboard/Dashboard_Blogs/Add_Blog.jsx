import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
function Add_Blog() {
    return (
        <div className=" ">
            <Link
                className="bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 w-fit m-auto"
                to={"/Dashboard/Blogs"}
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
                        Title: "",
                        Text: "",
                        Description: "",
                    }}
                    validate={(values) => {
                        const errors = {};
                        // Validate Title
                        if (!values.Title) {
                            errors.Title = "Title is required.";
                        }
                        // Validate Text
                        if (!values.Text) {
                            errors.Text = "Text is required.";
                        }
                        // Validate Description
                        if (!values.Description) {
                            errors.Description = "Description is required.";
                        }

                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        try {
                            setSubmitting(true);

                            let response = await Axios.post(
                                "http://localhost:3000/Dashboard/Blogs",
                                values,
                                {
                                    withCredentials: true,
                                    validateStatus: () => true,
                                }
                            );
                            if (response.status == 200) {
                                resetForm();
                                Swal.fire(
                                    "Done!",
                                    "Blog has been created Successfully",
                                    "success"
                                );
                            } else if (response.status == 404) {
                                Swal.fire(
                                    "Error",
                                    `${response.data.message}`,
                                    "error"
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
                                    text: "You should Login again ",
                                    icon: "error",
                                    confirmButtonColor: "#3085d6",

                                    confirmButtonText: "Go to Admin Login Page",
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        Navigate("/Dashboard_Login");
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
                            Swal.fire("Error!", "Failed to add Blog.", "error");
                        } finally {
                            setSubmitting(false);
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
                                    className="border border-gray_white  px-2 py-1 rounded shadow w-full overflow-auto custom-overflow"
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

                            <button
                                type="submit"
                                className={` ${
                                    isSubmitting
                                        ? "bg-gray_white text-gray"
                                        : " bg-green text-white"
                                } w-fit m-auto px-4 py-2 rounded font-semibold `}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? <div>loading</div> : "Submit"}
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

export default Add_Blog;
