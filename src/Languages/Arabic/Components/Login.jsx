import Logo from "../../../../public/Logo.png";
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
                "https://backend.skate.dz/Login",
                values,
                {
                    withCredentials: true,

                    validateStatus: () => true,
                }
            );

            if (response.status == 200) {
                Swal.fire("تم!", "تم تسجيل الدخول بنجاح", "success");
                Navigate("/");
            } else if (response.status == 401) {
                Swal.fire("اسم المستخدم أو كلمة المرور غير صحيحة", ``, "error");
            } else if (response.status == 409) {
                Swal.fire("خطأ!", `${response.data.message} `, "error");
            } else if (response.status == 500) {
                Swal.fire("خطأ!", `خطأ في الخادم الداخلي   `, "error");
            } else if (response.status == 429) {
                Swal.fire(
                    "خطأ!",
                    `الكثير من الطلبات، جرب مرة أخرى لاحقًا\n  `,
                    "error"
                );
            } else {
                Swal.fire("خطأ!", `حدث خطأ ما ,`, "error");
            }

        } catch (error) {
            Swal.fire("خطأ!", `حدث خطأ ما `, "error");
        }

        setSubmitting(false);
    }

    return (
        <>
            <div className=" min-h-[60vh]">
                <div>
                    <Link to={"/ar"} className="select-none flex m-auto w-fit ">
                        <img
                            className=" w-20 m-auto pt-5 "
                            src={Logo}
                            alt=""
                            loading="lazy"
                        />
                    </Link>
                </div>

                <div className=" m-auto text-center pt-5 text-2xl font-semibold text-blue ">
                    تسجيل الدخول إلى حسابك الشخصي
                </div>
                {/* input fields */}
                <div className=" border border-gray_white text-black_text shadow-md w-[80%] md:w-[50%] m-auto mt-3 p-5 rounded-lg  ">
                    {/* <div className=" text-lg font-semibold mb-4 ">Login</div> */}

                    <Formik
                        initialValues={{
                            Email: "",
                            Password: "",
                        }}
                        validate={(values) => {
                            const errors = {};

                            // Validate Email
                            if (!values.Email) {
                                errors.Email = "البريد الإلكتروني مطلوب";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    values.Email
                                )
                            ) {
                                errors.Email =
                                    "عنوان البريد الإلكتروني غير صالح";
                            }

                            // Validate Password
                            if (!values.Password) {
                                errors.Password = "كلمة المرور مطلوبة";
                            } else if (values.Password.length < 8) {
                                errors.Password =
                                    "يجب أن تكون كلمة المرور على الأقل 8 أحرف";
                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            handleLogin(values, { setSubmitting });
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className=" text-end flex flex-col text-sm md:text-lg md:mx-5 gap-4">
                                <div>
                                    <div>
                                        <span className=" text-red-600 font-semibold">
                                            *
                                        </span>{" "}
                                        البريد الإلكتروني
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
                                        <span className=" text-red-600 font-semibold">
                                            *
                                        </span>{" "}
                                        كلمة المرور
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
                                            ? " text-gray"
                                            : " bg-green text-white"
                                    } w-fit m-auto px-4 py-2 rounded font-semibold `}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="small-loader  w-full m-auto"></span>
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
                        to={"/en/Register"}
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
