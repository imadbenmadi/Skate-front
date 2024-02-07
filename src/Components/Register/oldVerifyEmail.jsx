import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../public/skate_circle.png";
import { Formik, Form, Field } from "formik";

function Verification() {
    const [inputValues, setInputValues] = useState(Array(6).fill(""));
    const inputRefs = useRef(Array(6).fill(null));

    useEffect(() => {
        // Function to focus on the next input element
        const focusNextInput = (index) => {
            if (index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        };

        // Listen for changes in inputValues array
        inputValues.forEach((value, index) => {
            if (value && index < inputRefs.current.length - 1) {
                focusNextInput(index);
            }
        });
    }, [inputValues]);

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    const handleKeyDown = (index, e) => {
        // Move to the previous input on backspace
        if (e.key === "Backspace" && index > 0 && !inputValues[index]) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-lg font-bold mb-4">Skate Verification</div>
            <img src={Logo} alt="Skate Logo" className="mb-4" />
            <div className="mb-4">Enter the code we sent to you in email</div>
            <Formik
                initialValues={{
                    code0: "",
                    code1: "",
                    code2: "",
                    code3: "",
                    code4: "",
                    code5: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                    // Destructure the values of all the fields
                    const { code0, code1, code2, code3, code4, code5 } = values;

                    // Concatenate the values of all the fields
                    const concatenatedValue = `${code0}${code1}${code2}${code3}${code4}${code5}`;

                    // Log the concatenated value
                    console.log("Concatenated value:", concatenatedValue);

                    // Now you can send concatenatedValue to the server
                    // Example: sendToServer(concatenatedValue);

                    // Set submitting to false
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-wrap gap-2">
                        {[...Array(6).keys()].map((index) => (
                            <Field
                                key={index}
                                name={`code${index}`}
                                type="text"
                                className="form-control border border-gray-300 rounded w-12 h-12 text-center"
                                maxLength={1}
                                autoFocus={index === 0}
                                onChange={(e) => {
                                    handleInputChange(index, e.target.value);
                                }}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                innerRef={(input) => {
                                    inputRefs.current[index] = input;
                                }}
                            />
                        ))}
                        <button
                            type="submit"
                            className="bg-blue-500 text-white bg-green px-4 py-2 rounded disabled:opacity-50"
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            <div>Didn’t receive verification code?</div>
        </div>
    );
}

export default Verification;
