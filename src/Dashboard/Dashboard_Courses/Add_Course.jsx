import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
import Swal from "sweetalert2";

function Add_Course() {
    return (
        <div className=" ">
            {/* Input fields */}
            <div className="border border-gray_white text-black_text shadow-md w-[80%] md:w-[50%] m-auto mt-3 p-5 rounded-lg">
                <Formik
                    initialValues={{
                        Title: "",
                        Text: "",
                        Description: "",
                        Price: "",
                        Category: "",
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
                        // Validate Price
                        if (!values.Price) {
                            errors.Price = "Price is required.";
                        }
                        // Validate Category
                        if (!values.Category) {
                            errors.Category = "Category is required.";
                        }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        try {
                            setSubmitting(true);
                            // Call your Axios POST request here
                            // Example:
                            // const response = await Axios.post("your_api_endpoint", values);
                            // Handle response accordingly
                            // Example:
                            // if (response.status === 200) {
                            //     resetForm();
                            //     Swal.fire("Success!", "Course added successfully.", "success");
                            // } else {
                            //     Swal.fire("Error!", "Failed to add course.", "error");
                            // }
                        } catch (error) {
                            Swal.fire(
                                "Error!",
                                "Failed to add course.",
                                "error"
                            );
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col text-sm md:text-lg md:mx-5 gap-4">
                            <div className=" flex flex-col items-center justify-center gap-4 flex-wrap ">
                                <div>
                                    <div>
                                        Title{" "}
                                        <span className="text-red-600 font-semibold">
                                            *
                                        </span>
                                    </div>
                                    <Field
                                        type="text"
                                        name="Title"
                                        className="border border-gray_white px-2 py-1 rounded shadow-sm"
                                        disabled={isSubmitting}
                                    />
                                    <ErrorMessage
                                        name="Title"
                                        component="div"
                                        style={errorInputMessage}
                                    />
                                </div>
                                <div>
                                    <div>
                                        Text{" "}
                                        <span className="text-red-600 font-semibold">
                                            *
                                        </span>
                                    </div>
                                    <Field
                                        type="text"
                                        name="Text"
                                        className="border border-gray_white px-2 py-1 rounded shadow-sm"
                                        disabled={isSubmitting}
                                    />
                                    <ErrorMessage
                                        name="Text"
                                        component="div"
                                        style={errorInputMessage}
                                    />
                                </div>
                                <div>
                                    <div>
                                        Description{" "}
                                        <span className="text-red-600 font-semibold">
                                            *
                                        </span>
                                    </div>
                                    <Field
                                        type="text"
                                        name="Description"
                                        className="border border-gray_white px-2 py-1 rounded shadow-sm"
                                        disabled={isSubmitting}
                                    />
                                    <ErrorMessage
                                        name="Description"
                                        component="div"
                                        style={errorInputMessage}
                                    />
                                </div>
                                <div>
                                    <div>
                                        Price{" "}
                                        <span className="text-red-600 font-semibold">
                                            *
                                        </span>
                                    </div>
                                    <Field
                                        type="text"
                                        name="Price"
                                        className="border border-gray_white px-2 py-1 rounded shadow-sm"
                                        disabled={isSubmitting}
                                    />
                                    <ErrorMessage
                                        name="Price"
                                        component="div"
                                        style={errorInputMessage}
                                    />
                                </div>
                                <div>
                                    <div>
                                        Category{" "}
                                        <span className="text-red-600 font-semibold">
                                            *
                                        </span>
                                    </div>
                                    <Field
                                        type="text"
                                        name="Category"
                                        className="border border-gray_white px-2 py-1 rounded shadow-sm"
                                        disabled={isSubmitting}
                                    />
                                    <ErrorMessage
                                        name="Category"
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
                                    {isSubmitting ? (
                                        <div>loading</div>
                                    ) : (
                                        "Submit"
                                    )}
                                </button>
                            </div>
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

export default Add_Course;
