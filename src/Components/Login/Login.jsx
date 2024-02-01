import React from "react";
import Logo from "../../../public/Logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { UseDispatch } from "react-redux";
import { setTokens, setUserData } from "../../Redux/authSlice";
function Login() {
    const dispatch = UseDispatch();
    const Navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    function handleShowPassword() {
        setShowPassword(!showPassword);
    }
    const [Succeed_Login, setSucceed_Login] = useState(false);

    async function handleLogin(values, { setSubmitting }) {
        try {
            let response = await Axios.post(
                "http://localhost:3000/Login",
                values,
                {
                    withCredentials: true,

                    validateStatus: () => true,
                }
            );

            if (response.status === 200) {
              Swal.fire("Done!", "Logged in Successfully", "success");
              const accessToken = response.data.accessToken;
              const userData = response.data.userData;
                dispatch(setTokens({ accessToken }));
                dispatch(setUserData(userData));
            } else if (response.status === 401) {
                console.log(response.data.error);
                Swal.fire(
                    "Email already exists",
                    `Please try to use another Email , ${response.data.error}`,
                    "error"
                );
            } else if (response.status === 409) {
                console.log(response.data.error);
                Swal.fire(
                    "Error!",
                    `Missing Data ,  ${response.data.error}`,
                    "error"
                );
            } else if (response.status === 500) {
                console.log(response.data.error);
                Swal.fire(
                    "Error!",
                    `Internal Server Error ,  ${response.data.error}`,
                    "error"
                );
            } else {
                console.log(response.data.error);
                Swal.fire(
                    "Error!",
                    `Something Went Wrong ,${response.data.error}`,
                    "error"
                );
            }
        } catch (error) {
            console.error("Error during registration:", error.message);
            Swal.fire(
                "Error!",
                `Something Went Wrong ,${error.message}`,
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
                Login to your Skate Account
            </div>
            {/* input fields */}
            <div className=" border border-gray_white text-black_text shadow-md w-[80%] md:w-[50%] m-auto mt-3 p-5 rounded-lg  ">
                <div className=" text-lg font-semibold mb-4 ">Login</div>

                <Formik
                    initialValues={{
                        Email: "",
                        Password: "",
                    }}
                    validate={(values) => {
                        const errors = {};

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

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        // Call your registration logic here
                        handleLogin(values, setSucceed_Login, {
                            setSubmitting,
                        });
                        // Succeed_Login ? Navigate("/") : null;
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="  flex flex-col text-sm md:text-lg md:mx-5 gap-4">
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
            <div className=" text-center mt-4 text-black_text">
                Don't Have an Account ?{" "}
                <Link
                    to={"/Register"}
                    className=" text-green font-semibold cursor-pointer"
                >
                    Register
                </Link>
            </div>
        </div>
    );
}
const errorInputMessage = {
    fontSize: "12px",
    color: "red",
};
export default Login;
