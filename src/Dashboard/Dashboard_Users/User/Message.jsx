import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Message() {
    const user = useOutletContext();
    const userId = location.pathname.split("/")[3];
    const Navigate = useNavigate();
    return (
        <div>
            <div className=" border border-gray_white text-black_text shadow-md w-[80%] md:w-[50%] m-auto mt-3 p-5 rounded-lg  ">
                <Formik
                    initialValues={{
                        
                        Title: "",
                        Text: "",
                        Description: "",
                    }}
                    validate={(values) => {
                        const errors = {};

                        if (!values.Title) {
                            errors.Title = "Title is Required";
                        } else if (values.Title.length > 30) {
                            errors.Title =
                                "Title Should be less than 30 characters";
                        }

                        if (!values.Text) {
                            errors.Text = "Text is Required";
                        } else if (values.Text.length > 100) {
                            errors.Text =
                                " Text Should be less than 100 characters";
                        }
                        if (!values.Description) {
                            errors.Description = "Message is Required";
                        } else if (values.Description.length > 1000) {
                            errors.Description =
                                " Message Should be less than 1000 characters";
                        }

                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            let response = await Axios.post(
                                "http://localhost:3000/Dashboard/User/" +
                                    { userId } +
                                    "/Notify",
                                values,
                                {
                                    withCredentials: true,

                                    validateStatus: () => true,
                                }
                            );
                            console.log(response.data);
                            if (response.status === 200) {
                                Swal.fire(
                                    "Done!",
                                    "Message sended in Successfully",
                                    "success"
                                );
                                Navigate("/Dashboard/Users/" + userId);
                            } else if (401) {
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
                            } else if (response.status === 409) {
                                Swal.fire(
                                    "Error!",
                                    `Missing Data ,  ${response.data.error}`,
                                    "error"
                                );
                            } else if (response.status === 500) {
                                Swal.fire(
                                    "Error!",
                                    `Internal Server Error ,  ${response.data.error}`,
                                    "error"
                                );
                            } else if (response.status === 429) {
                                Swal.fire(
                                    "Error!",
                                    `Too many requests ,try again latter\n  ${response.data.error}`,
                                    "error"
                                );
                            } else {
                                Swal.fire(
                                    "Error!",
                                    `Something Went Wrong ,${response.data}`,
                                    "error"
                                );
                            }
                        } catch (error) {
                            Swal.fire(
                                "Error!",
                                `Something Went Wrong ,${error.message}`,
                                "error"
                            );
                        }

                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="  flex flex-col text-sm md:text-lg md:mx-5 gap-4 text-gray">
                            <div>
                                <div>
                                    Title{" "}
                                    <span className=" text-red-600 font-semibold">
                                        *
                                    </span>
                                </div>
                                <Field
                                    type="text"
                                    name="Title"
                                    disabled={isSubmitting}
                                    className="border border-gray_white px-2 py-1 rounded  shadow-sm w-full"
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
                                    <span className=" text-red-600 font-semibold">
                                        *
                                    </span>
                                </div>
                                <div className=" flex items-center">
                                    <Field
                                        type="text"
                                        name="Text"
                                        disabled={isSubmitting}
                                        className="border border-gray_white px-2 py-1  rounded-s  shadow-sm w-full"
                                    />
                                </div>

                                <ErrorMessage
                                    name="Text"
                                    component="div"
                                    style={errorInputMessage}
                                />
                            </div>
                            <div>
                                <div>
                                    Message{" "}
                                    <span className=" text-red-600 font-semibold">
                                        *
                                    </span>
                                </div>
                                {/* <textarea
                                    name="Description"
                                    id=""
                                    cols="30"
                                    rows="10"
                                ></textarea> */}
                                <Field
                                    type="text"
                                    name="Description"
                                    disabled={isSubmitting}
                                    className="border border-gray_white px-2 py-1 rounded  shadow-sm w-full"
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
export default Message;
