import React from "react";
import Logo from "../../public/Logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
function Register() {
  async function handleRegistration(values, { setSubmitting }) {
    console.log("test");
    try {
      let response = await Axios.post(
        "http://localhost:3000/Register",
        values,
        {
          withCredentials: true,
          // headers: {
          //     "Content-Type": "multipart/form-data",
          // },
          validateStatus: () => true,
        }
      );

        if (response.status === 401) {
          console.log(response);
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
            Swal.fire("Error!", "Internal server error. Please try again", "error");
            console.log(response.data.error);
            
      } else if (response.status === 409) {
        Swal.fire("Error!", "Missing Data", "error");
      } else {
        Swal.fire("Error!", "Something Went Wrong. Please try again", "error");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      Swal.fire("Error!", "Something Went Wrong. Please try again", "error");
    }
    console.log("erztrfsdf");
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
          <div className=" border border-gray_white text-black_text shadow-md w-[80%] md:w-[60%] m-auto mt-3 p-5 rounded-lg  ">
              <div className=" text-lg font-semibold mb-4 ">
                  Create Your Account
              </div>

              <Formik
                  initialValues={{
                      FirstName: "",
                      LastName: "",
                      Email: "",
                      Password: "",
                      Age: 0,
                      Gender: "",
                  }}
                  validate={(values) => {
                      const errors = {};
                      // Validate First Name
                      if (!values.FirstName) {
                          errors.FirstName = "Required";
                      }

                      // Validate Last Name
                      if (!values.LastName) {
                          errors.LastName = "Required";
                      }

                      // Validate Email
                      if (!values.Email) {
                          errors.Email = "Required";
                      } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                              values.Email
                          )
                      ) {
                          errors.Email = "Invalid Email address";
                      }

                      // Validate Password
                      if (!values.Password) {
                          errors.Password = "Required";
                      } else if (values.Password.length < 8) {
                          errors.Password =
                              "Password must be at least 8 characters long";
                      }

                      // Validate Age
                      if (!values.Age) {
                          errors.Age = "Required";
                      } else if (isNaN(values.Age) || values.Age <= 0) {
                          errors.Age = "Invalid Age";
                      }

                      // Validate Gender
                      if (!values.Gender) {
                          errors.Gender = "Required";
                      }
                      return errors;
                  }}
                  onSubmit={handleRegistration}
              >
                  {({ isSubmitting }) => (
                      <Form className=" flex flex-col ml-5 gap-4">
                          <div>
                              <div>First Name</div>
                              <Field
                                  type="text"
                                  name="FirstName"
                                  className="border border-gray_white px-2 py-1 rounded  shadow-sm"
                                  disabled={isSubmitting}
                              />
                              <ErrorMessage name="FirstName" component="div" />
                          </div>
                          <div>
                              <div>Last Name</div>
                              <Field
                                  type="text"
                                  name="LastName"
                                  disabled={isSubmitting}
                                  className="border border-gray_white px-2 py-1 rounded  shadow-sm"
                              />
                              <ErrorMessage name="LastName" component="div" />
                          </div>
                          <div>
                              <div>Email</div>
                              <Field
                                  type="Email"
                                  name="Email"
                                  disabled={isSubmitting}
                                  className="border border-gray_white px-2 py-1 rounded  shadow-sm"
                              />
                              <ErrorMessage name="Email" component="div" />
                          </div>
                          <div>
                              <div>Password</div>
                              <Field
                                  type="Password"
                                  name="Password"
                                  disabled={isSubmitting}
                                  className="border border-gray_white px-2 py-1 rounded  shadow-sm"
                              />
                              <ErrorMessage name="Password" component="div" />
                          </div>
                          <div>
                              <div>
                                  <div>Age</div>
                                  <Field
                                      type="number"
                                      name="Age"
                                      disabled={isSubmitting}
                                      className="border border-gray_white px-2 py-1 rounded  shadow-sm"
                                  />
                                  <ErrorMessage name="Age" component="div" />
                              </div>

                              <div>
                                  <div>Gender</div>
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
                                  <ErrorMessage name="Gender" component="div" />
                              </div>
                          </div>
                          <button
                              type="submit"
                              className=" bg-green w-fit m-auto px-4 py-2 rounded font-semibold text-white"
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

export default Register;
