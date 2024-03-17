import Logo from "../../../public/Logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router";
import { handleContact } from "./handleContact";
import Links from "./Links";
import Footer from "../Footer";
function Contact() {
    const Navigate = useNavigate();
    const { isAuth, _id } = useAppContext();
    return (
        <>
            <div className=" pt-16 min-h-[83vh]  ">
                <div>
                    <img className=" w-20 m-auto pt-5 " src={Logo} alt="" />
                </div>
                <div className=" m-auto text-center pt-5 text-2xl font-semibold text-blue ">
                    Contact The Help Center
                </div>
                <Links />

                {/* input fields */}
                <div className="  border border-gray_white text-black_text shadow-md w-[80%] md:w-[50%] m-auto mt-3 p-5 rounded-lg   ">
                    <div className=" text-lg font-semibold mb-4 ">
                        Send a message
                    </div>

                    <Formik
                        initialValues={{
                            title: "",
                            message: "",
                            id: _id,
                            Email: "",
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (!isAuth && !values.Email) {
                                errors.Email = "Email is Required ";
                            } else if (
                                !isAuth &&
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    values.Email
                                )
                            ) {
                                errors.Email = "Invalid Email address";
                            }

                            if (!values.title) {
                                errors.title = "title is Required";
                            } else if (values.title.length < 5) {
                                errors.title =
                                    "title must be at least 5 characters";
                            }
                            if (!values.message) {
                                errors.message = "message is Required";
                            } else if (values.message.length < 10) {
                                errors.message =
                                    "message must be at least 10 characters";
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            let updatedValues = { ...values }; // Create a new object

                            if (isAuth) {
                                updatedValues.id = _id;
                                delete updatedValues.Email;
                            } else {
                                delete updatedValues.id;
                                updatedValues.Email = values.Email;
                            }

                            handleContact(updatedValues, {
                                setSubmitting,
                                onSuccess: () => {
                                    // Navigate("/");
                                    window.history.back();
                                },
                            });
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="flex flex-col space-y-4 ">
                                    {!isAuth && (
                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <Field
                                                type="email"
                                                name="Email"
                                                className="border border-gray p-2 w-full rounded-md"
                                            />
                                            <ErrorMessage
                                                name="Email"
                                                component="div"
                                                className="text-red-500"
                                            />
                                        </div>
                                    )}
                                    <div>
                                        <label htmlFor="title">Title</label>
                                        <Field
                                            type="text"
                                            name="title"
                                            className="border border-gray p-2 w-full rounded-md"
                                        />
                                        <ErrorMessage
                                            name="title"
                                            component="div"
                                            className="text-red-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message">Message</label>
                                        <Field
                                            as="textarea"
                                            name="message"
                                            className="border border-gray p-2 w-full rounded-md"
                                        />
                                        <ErrorMessage
                                            name="message"
                                            component="div"
                                            className="text-red-500"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className={`${
                                            isSubmitting
                                                ? "bg-gray_white text-gray"
                                                : " bg-green text-white"
                                        } w-fit m-auto px-4 py-2 rounded font-semibold`}
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
                <div className="pt-6"></div>
            </div>
            <div className=" min-h-[17vh] bg-slate-200">
                <Footer />
            </div>
        </>
    );
}

export default Contact;
