import React from "react";
import Logo from "../../../public/Logo.png";
import {
    Formik, Form, Field, ErrorMessage
} from "formik";
import { Link } from "react-router-dom";

import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import {handleRegistration} from "./handleRegistration";
function Register() {
    const [showPassword, setShowPassword] = useState(false);
    function handleShowPassword() {
        setShowPassword(!showPassword);
    }
    
    return (
        <div>
            <div>
                <img className=" w-20 m-auto pt-5 " src={Logo} alt="" />
            </div>
            <div className=" m-auto text-center pt-5 text-2xl font-semibold text-blue ">
                Join to Skate Community
            </div>
            {/* input fields */}
            <div className=" border border-gray_white text-black_text shadow-md w-[80%] md:w-[50%] m-auto mt-3 p-5 rounded-lg  ">
                <div className=" text-lg font-semibold mb-4 ">
                    Create Your Account
                </div>

                <Formik
                    initialValues={{
                        FirstName: "",
                        LastName: "",
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
                        }

                        // Validate Last Name
                        if (!values.LastName) {
                            errors.LastName = "last name is Required";
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
                            errors.Password = "Password Required";
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
                    onSubmit={(values, { setSubmitting }) => {
                        // Call your registration logic here
                        handleRegistration(values, {
                            setSubmitting,
                        });
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className=" flex flex-col mx-5 gap-4">
                            <div>
                                <div>
                                    First Name{" "}
                                    <span className=" text-red-600 font-semibold">
                                        *
                                    </span>
                                </div>
                                <Field
                                    type="text"
                                    name="FirstName"
                                    className="border border-gray_white px-2 py-1 rounded  shadow-sm w-full"
                                    disabled={isSubmitting}
                                />
                                <ErrorMessage
                                    name="FirstName"
                                    component="div"
                                    style={errorInputMessage}
                                />
                            </div>
                            <div>
                                <div>
                                    Last Name{"  "}
                                    <span className=" text-red-600 font-semibold">
                                        *
                                    </span>
                                </div>
                                <Field
                                    type="text"
                                    name="LastName"
                                    disabled={isSubmitting}
                                    className="border border-gray_white px-2 py-1 rounded  shadow-sm w-full"
                                />
                                <ErrorMessage
                                    name="LastName"
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
                                                className="text-gray text-2xl"
                                                onClick={handleShowPassword}
                                            />
                                        ) : (
                                            <IoMdEye
                                                className=" text-gray text-2xl"
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

export default Register;
