import Logo from "../../../public/Logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { handleRegistration } from "./handleRegistration";
import { useEffect } from "react";
import Footer from "../Footer";
import VerifyEmail from "./VerifyEmail";
function Register() {
    const [open_verify, setOpen_verify] = useState(false);
    const [Verify_id, setVerifyId] = useState(null);
    const [Verify_email, setVerifyEmail] = useState("");
    const [Verify_Password, setVerifyPassword] = useState("");
    const [rigester_Date, set_rigester_Date] = useState(null);
    const [Succed_Register, setSucced_Register] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    function handleShowPassword() {
        setShowPassword(!showPassword);
    }
    useEffect(() => {
        if (Succed_Register) {
            setOpen_verify(true);
        }
    }, [Succed_Register]);
    return (
        <>
            <div className=" min-h-[70vh]">
                {!open_verify && (
                    <div>
                        <Link
                            to={"/"}
                            className="select-none w-fit flex m-auto"
                        >
                            <img
                                className=" w-20 m-auto pt-5 "
                                src={Logo}
                                alt=""
                            />
                        </Link>
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
                                    Telephone: "",
                                    Email: "",
                                    Password: "",
                                    ReEnter_Password: "",
                                    Age: "",
                                    Gender: "male",
                                }}
                                validate={(values) => {
                                    const errors = {};
                                    // Validate First Name
                                    if (!values.FirstName) {
                                        errors.FirstName =
                                            "first name is Required ";
                                    } else if (values.FirstName.length > 14)
                                        errors.FirstName =
                                            "first name must be less than 14 chars";
                                    else if (values.FirstName.length < 3)
                                        errors.FirstName =
                                            "first name must be more than 3 chars ";
                                    if (!values.LastName) {
                                        // Validate Last Name
                                        errors.LastName =
                                            "last name is Required";
                                    } else if (values.LastName.length > 14) {
                                        ("Last Name must be less than 14 chars");
                                    } else if (values.LastName.length < 3)
                                        errors.LastName =
                                            "Last Name must be more than 3 chars ";
                                    if (!values.Telephone) {
                                        errors.Telephone =
                                            "Telephone number is required";
                                    } else if (
                                        !/^(0)(5|6|7)[0-9]{8}$/.test(
                                            values.Telephone
                                        )
                                    ) {
                                        errors.Telephone =
                                            "Invalid Telephone number";
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
                                        errors.Password =
                                            "Password is Required";
                                    } else if (values.Password.length < 8) {
                                        errors.Password =
                                            "Password must be at least 8 characters long";
                                    }
                                    if (!values.ReEnter_Password) {
                                        errors.ReEnter_Password =
                                            "Field is Required";
                                    } else if (
                                        values.ReEnter_Password !==
                                        values.Password
                                    ) {
                                        errors.ReEnter_Password =
                                            "Password does not match";
                                    } else if (
                                        (values.Age &&
                                            !/^\d+$/.test(values.Age)) ||
                                        values.Age <= 0
                                    ) {
                                        errors.Age = "Invalid Age";
                                    }

                                    // Validate Gender
                                    // if (!values.Gender) {
                                    //     errors.Gender = "Required";
                                    // }
                                    return errors;
                                }}
                                onSubmit={async (values, { setSubmitting }) => {
                                    // Call your registration logic here
                                    setVerifyEmail(values.Email);
                                    setVerifyPassword(values.Password);
                                    await handleRegistration(values, {
                                        setSubmitting,
                                        setSucced_Register,
                                        setVerifyId,
                                        set_rigester_Date,
                                    });
                                    if (Succed_Register) {
                                        setOpen_verify(true);
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
                                                        style={
                                                            errorInputMessage
                                                        }
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
                                                        style={
                                                            errorInputMessage
                                                        }
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
                                                            onClick={
                                                                handleShowPassword
                                                            }
                                                        />
                                                    ) : (
                                                        <IoMdEye
                                                            className=" text-gray text-xl md:text-2xl"
                                                            onClick={
                                                                handleShowPassword
                                                            }
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
                                        <div>
                                            <div>
                                                ReEnterr The Password{" "}
                                                <span className=" text-red-600 font-semibold">
                                                    *
                                                </span>
                                            </div>
                                            <Field
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                name="ReEnter_Password"
                                                disabled={isSubmitting}
                                                className="border border-gray_white px-2 py-1  rounded  shadow-sm w-full"
                                            />
                                            <ErrorMessage
                                                name="ReEnter_Password"
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
                                                    <option value="male">
                                                        Male
                                                    </option>
                                                    <option value="female">
                                                        Female
                                                    </option>
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
                        <div className=" text-center my-4 text-xl text-black_text">
                            Already Have an Account ?{" "}
                            <Link
                                to={"/Login"}
                                className="select-none text-green font-semibold cursor-pointer"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                )}

                {open_verify && (
                    <VerifyEmail
                        Verify_id={Verify_id}
                        Verify_email={Verify_email}
                        Verify_Password={Verify_Password}
                        rigester_Date={rigester_Date}
                    />
                )}
            </div>
            <div className=" min-h-[30vh] bg-slate-200">
                <Footer />
            </div>
        </>
    );
}
const errorInputMessage = {
    fontSize: "12px",
    color: "red",
};

export default Register;
