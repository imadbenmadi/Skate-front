import React from "react";
import Logo from "../../public/Logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import Axios from "axios";

function Register() {
    async function handleRegistration(
        values,
        { setSubmitting }
    ) {
        const formData = new FormData();
        formData.append("ProfilePic", values.profilePic);
        formData.append("FirstName", values.firstName);
        formData.append("LastName", values.lastName);
        formData.append("Email", values.email);
        formData.append("Password", values.password);
        formData.append("Age", values.age);
        formData.append("Gender", values.gender);
        try {
            let response = await Axios.post(
                "http://localhost:3000/Register",
                formData,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    validateStatus: () => true,
                }
            );

            if (response.status === 401) {
                Swal.fire(
                    "Email already exists",
                    "Please try to use another Email",
                    "error"
                );
            } else if (response.status === 200) {
                Swal.fire(
                    "Done!",
                    "Your account has been created Successfully",
                    "success"
                );
            } else if (response.status === 400) {
                Swal.fire(
                    "Error!",
                    "Internal server error. Please try again",
                    "error"
                );
            } else if (response.status === 409) {
                Swal.fire("Error!", "Missing Data", "error");
            } else {
                Swal.fire(
                    "Error!",
                    "Something Went Wrong. Please try again",
                    "error"
                );
            }
        } catch (error) {
            console.error("Error during registration:", error);
            Swal.fire(
                "Error!",
                "Something Went Wrong. Please try again",
                "error"
            );
        }

        setSubmitting(false);
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
            <div className=" border border-gray_white text-black_text shadow-md w-[80%] md:w-[60%] m-auto mt-5 p-5 rounded-lg  ">
                <div className=" text-lg font-semibold mb-4 ">
                    Create Your Account
                </div>
                <Formik
                    initialValues={{
                        profilePic: "",
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        age: "",
                        gender: "",
                    }}
                    validate={(values) => {
                        const errors = {};
                        // Validate First Name
                        if (!values.firstName) {
                            errors.firstName = "Required";
                        }

                        // Validate Last Name
                        if (!values.lastName) {
                            errors.lastName = "Required";
                        }

                        // Validate Email
                        if (!values.email) {
                            errors.email = "Required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = "Invalid email address";
                        }

                        // Validate Password
                        if (!values.password) {
                            errors.password = "Required";
                        } else if (values.password.length < 8) {
                            errors.password =
                                "Password must be at least 8 characters long";
                        }

                        // Validate Age
                        if (!values.age) {
                            errors.age = "Required";
                        } else if (isNaN(values.age) || values.age <= 0) {
                            errors.age = "Invalid age";
                        }

                        // Validate Gender
                        if (!values.gender) {
                            errors.gender = "Required";
                        }
                        return errors;
                    }}
                    onSubmit={handleRegistration}
                >
                    {({ isSubmitting }) => (
                        <Form className=" flex flex-col ml-5 gap-4">
                            <div>
                                <div>Profile pic</div>
                                <Field
                                    type="file"
                                    name="ProfilePic"
                                    accept=".png, .jpg, .jpeg"
                                />
                            </div>

                            <div>
                                <div>First Name</div>
                                <Field
                                    type="text"
                                    name="firstName"
                                    className="border border-gray_white px-2 py-1 rounded  shadow-sm"
                                />
                                <ErrorMessage
                                    name="firstName"
                                    component="div"
                                />
                            </div>
                            <div>
                                <div>Last Name</div>
                                <Field
                                    type="text"
                                    name="lastName"
                                    className="border border-gray_white px-2 py-1 rounded  shadow-sm"
                                />
                                <ErrorMessage name="lastName" component="div" />
                            </div>
                            <div>
                                <div>Email</div>
                                <Field
                                    type="email"
                                    name="email"
                                    className="border border-gray_white px-2 py-1 rounded  shadow-sm"
                                />
                                <ErrorMessage name="email" component="div" />
                            </div>
                            <div>
                                <div>Password</div>
                                <Field
                                    type="password"
                                    name="password"
                                    className="border border-gray_white px-2 py-1 rounded  shadow-sm"
                                />
                                <ErrorMessage name="password" component="div" />
                            </div>

                            <button
                                type="submit"
                                className=" bg-green w-fit m-auto px-4 py-2 rounded font-semibold text-white"
                                disabled={isSubmitting}
                            >
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Register;
