import React from "react";
import Logo from "../../../public/Logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useEffect } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { IoMdArrowRoundBack } from "react-icons/io";

function Add_user() {
    const [showPassword, setShowPassword] = useState(false);
    function handleShowPassword() {
        setShowPassword(!showPassword);
    }
    return (
        <div className=" ">
            <Link
                to={"/Dashboard/Users"}
                className="w-fit m-auto bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 "
            >
                <IoMdArrowRoundBack />
                <div>Back to table</div>
            </Link>
            {/* input fields */}
            <div className=" border border-gray_white text-black_text shadow-md w-[80%] md:w-[50%] m-auto mt-3 p-5 rounded-lg  ">
                <Formik
                    initialValues={{
                        FirstName: "",
                        LastName: "",
                        Telephone: "",
                        Email: "",
                        Password: "",
                        Age: "",
                        Gender: "male",
                    }}
                    validate={(values) => {
                        const errors = {};
                        // Validate First Name
                        if (!values.FirstName) {
                            errors.FirstName = "first name is Required ";
                        } else if (values.FirstName > 14)
                            errors.FirstName =
                                "first name must be less than 14 chars";
                        else if (values.FirstName < 3)
                            errors.FirstName =
                                "first name must be more than 3 chars ";
                        if (!values.LastName) {
                            // Validate Last Name
                            errors.LastName = "last name is Required";
                        } else if (values.LastName > 14) {
                            ("Last Name must be less than 14 chars");
                        } else if (values.LastName < 3)
                            errors.LastName =
                                "Last Name must be more than 3 chars ";
                        if (!values.Telephone) {
                            errors.Telephone = "Telephone number is required";
                        } else if (
                            !/^(0)(5|6|7)[0-9]{8}$/.test(values.Telephone)
                        ) {
                            errors.Telephone = "Invalid Telephone number";
                        }
                        // Validate Email
                        if (!values.Email) {
                            errors.Email = "email is Required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.Email
                            )
                        ) {
                            errors.Email = "Invalid Email address";
                        }

                        // Validate Password
                        if (!values.Password) {
                            errors.Password = "Password is Required";
                        } else if (values.Password.length < 8) {
                            errors.Password =
                                "Password must be at least 8 characters long";
                        }

                        // Validate Age
                        if (!values.Age) {
                        } else if (
                            !/^\d+$/.test(values.Age) ||
                            values.Age <= 0
                        ) {
                            errors.Age = "Invalid Age";
                        }

                        // Validate Gender
                        if (!values.Gender) {
                            errors.Gender = "Required";
                        }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        // Call your registration logic here
                        try {
                            setSubmitting(true);
                            let response = await Axios.post(
                                "http://localhost:3000/Dashboard/User",
                                values,
                                {
                                    withCredentials: true,
                                    validateStatus: () => true,
                                }
                            );
                            setSubmitting(false);

                            if (response.status == 404) {
                                Swal.fire(
                                    "User Not found",
                                    `Somthing Went Wrong`,
                                    "error"
                                );
                            } else if (response.status == 200) {
                                resetForm();
                                Swal.fire(
                                    "Done!",
                                    "account has been created Successfully",
                                    "success"
                                );
                            } else if (response.status == 400) {
                                Swal.fire(
                                    "Error!",
                                    `Internal server error.${response.data.error}`,
                                    "error"
                                );
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
                            } else if (response.status == 409) {
                                Swal.fire(
                                    "Error!",
                                    `Missing Data ,  ${response.data.error}`,
                                    "error"
                                );
                            } else if (response.status == 429) {
                                Swal.fire(
                                    "Error!",
                                    `warning! you created lot of accounts in 3mins , ${response.data.error}`,
                                    "error"
                                );
                            } else if (response.status == 500) {
                                Swal.fire(
                                    "Error!",
                                    `Internal server error.${response.data.error}`,
                                    "error"
                                );
                            } else {
                                Swal.fire(
                                    "Error!",
                                    `Something Went Wrong. Please try again , ${response.data.error}`,
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
                        <Form className=" flex flex-col text-sm md:text-lg md:mx-5 gap-4">
                            <div className=" flex justify-center gap-4 flex-wrap ">
                                <div>
                                    <div>
                                        First Name
                                        <span className=" text-red-600 font-semibold">
                                            *
                                        </span>
                                    </div>
                                    <div>
                                        <Field
                                            type="text"
                                            name="FirstName"
                                            className="border border-gray_white px-2 py-1 rounded  shadow-sm "
                                            disabled={isSubmitting}
                                        />
                                        <ErrorMessage
                                            name="FirstName"
                                            component="div"
                                            style={errorInputMessage}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        Last Name
                                        <span className=" text-red-600 font-semibold">
                                            *
                                        </span>
                                    </div>
                                    <div>
                                        <Field
                                            type="text"
                                            name="LastName"
                                            disabled={isSubmitting}
                                            className="border border-gray_white px-2 py-1 rounded  shadow-sm "
                                        />
                                        <ErrorMessage
                                            name="LastName"
                                            component="div"
                                            style={errorInputMessage}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    Telephone Number
                                    <span className=" text-red-600 font-semibold">
                                        *
                                    </span>
                                </div>
                                <Field
                                    type="text"
                                    name="Telephone"
                                    disabled={isSubmitting}
                                    className="border border-gray_white px-2 py-1 rounded shadow-sm w-full"
                                />
                                <ErrorMessage
                                    name="Telephone"
                                    component="div"
                                    style={errorInputMessage}
                                />
                            </div>
                            <div>
                                <div>
                                    Email{" "}
                                    <span className=" text-red-600 font-semibold">
                                        *
                                    </span>
                                </div>
                                <Field
                                    type="Email"
                                    name="Email"
                                    disabled={isSubmitting}
                                    className="border border-gray_white px-2 py-1 rounded  shadow-sm w-full"
                                />
                                <ErrorMessage
                                    name="Email"
                                    component="div"
                                    style={errorInputMessage}
                                />
                            </div>
                            <div>
                                <div>
                                    Password{" "}
                                    <span className=" text-red-600 font-semibold">
                                        *
                                    </span>
                                </div>
                                <div className=" flex items-center">
                                    <Field
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="Password"
                                        disabled={isSubmitting}
                                        className="border border-gray_white px-2 py-1  rounded-s  shadow-sm w-full"
                                    />

                                    <div className=" px-2 py-1 rounded-e cursor-pointer border border-gray_white shadow-sm ">
                                        {showPassword ? (
                                            <IoMdEyeOff
                                                className="text-gray text-xl md:text-2xl"
                                                onClick={handleShowPassword}
                                            />
                                        ) : (
                                            <IoMdEye
                                                className=" text-gray text-xl md:text-2xl"
                                                onClick={handleShowPassword}
                                            />
                                        )}
                                    </div>
                                </div>

                                <ErrorMessage
                                    name="Password"
                                    component="div"
                                    style={errorInputMessage}
                                />
                            </div>
                            <div className=" flex gap-10">
                                <div>
                                    <div>
                                        Gender{" "}
                                        <span className=" text-red-600 font-semibold">
                                            *
                                        </span>
                                    </div>
                                    <Field
                                        as="select"
                                        name="Gender"
                                        disabled={isSubmitting}
                                        className="border border-gray_white px-2 py-1 rounded shadow-sm"
                                    >
                                        {/* Add your select options here */}
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Field>
                                    <ErrorMessage
                                        name="Gender"
                                        component="div"
                                    />
                                </div>
                                <div>
                                    <div>Age </div>
                                    <Field
                                        type="number"
                                        name="Age"
                                        disabled={isSubmitting}
                                        placeholder="0"
                                        className=" w-[70px] border border-gray_white px-2 py-1 rounded  shadow-sm"
                                    />
                                    <ErrorMessage
                                        name="Age"
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

export default Add_user;
