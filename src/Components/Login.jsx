import Logo from "../../public/Logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Axios from "axios";
import Swal from "sweetalert2";
import Footer from "./Footer";
function Login() {
    const Navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    function handleShowPassword() {
        setShowPassword(!showPassword);
    }
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

            if (response.status == 200) {
                Swal.fire("Done!", "Logged in Successfully", "success");
                Navigate("/");
            } else if (response.status == 401) {
                Swal.fire("Username or Password isn't correct", ``, "error");
            } else if (response.status == 409) {
                Swal.fire("Error!", `${response.data.message} `, "error");
            } else if (response.status == 500) {
                Swal.fire("Error!", `Internal Server Error   `, "error");
            } else if (response.status == 429) {
                Swal.fire(
                    "Error!",
                    `Too many requests ,try again latter\n  `,
                    "error"
                );
            } else {
                Swal.fire("Error!", `Something Went Wrong ,`, "error");
            }
        } catch (error) {
            Swal.fire("Error!", `Something Went Wrong `, "error");
        }

        setSubmitting(false);
    }

    return (
        <>
            <div className=" min-h-[60vh]">
                <div>
                    <Link to={"/"} className="select-none flex m-auto w-fit ">
                        <img className=" w-20 m-auto pt-5 " src={Logo} alt="" />
                    </Link>
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
                            handleLogin(values, { setSubmitting });
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
                                                showPassword
                                                    ? "text"
                                                    : "password"
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
                <div className=" text-center  text-xl my-4 text-black_text">
                    Don't Have an Account ?{" "}
                    <Link
                        to={"/Register"}
                        className=" text-green font-semibold cursor-pointer select-none"
                    >
                        Register
                    </Link>
                </div>
            </div>
            <div className=" min-h-[40vh]  bg-slate-200">
                <Footer />
            </div>
        </>
    );
}
const errorInputMessage = {
    fontSize: "12px",
    color: "red",
};
export default Login;
