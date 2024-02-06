import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { useAppContext } from "./Context/AppContext";
import axios from "axios";
function App() {
  const { set_Auth, store_login, isAuth } = useAppContext();
  const [Active_nav, setActive_nav] = useState("Home");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/check_Auth", {
          withCredentials: true,
          validateStatus: () => true,
        });

        if (response.status === 200) {
          const FirstName = response.data.userData.FirstName;
          const LastName = response.data.userData.LastName;
          const Email = response.data.userData.Email;
          const Gender = response.data.userData.Gender;
          const Age = response.data.userData.Age;
          const Courses = response.data.userData.Courses;
          const _id = response.data.userData._id;
          console.log(FirstName, LastName, Email);
          store_login(FirstName, LastName, Email, Gender, Age, Courses, _id);
          set_Auth(true);
          // return;
        } else if (response.status === 401) {
          // Access token expired, try refreshing it
          const refreshResponse = await axios.post(
            "http://localhost:3000/Refresh",
            {},
            {
              withCredentials: true,
              validateStatus: () => true,
            }
          );
          if (refreshResponse.status === 200) {
            if (refreshResponse.data && refreshResponse.data.accessToken) {
              // Update the access token in the cookies
              // Assuming you have a function to set access token in your context
              // set_AccessToken(refreshResponse.data.accessToken);

              const FirstName = refreshResponse.data.userData.FirstName;
              const LastName = refreshResponse.data.userData.LastName;
              const Email = refreshResponse.data.userData.Email;
              const Gender = refreshResponse.data.userData.Gender;
              const Age = refreshResponse.data.userData.Age;
              const Courses = refreshResponse.data.userData.Courses;
              const _id = refreshResponse.data.userData._id;

              store_login(
                FirstName,
                LastName,
                Email,
                Gender,
                Age,
                Courses,
                _id
              );
              set_Auth(true);
              // return;
            }
          } else {
            store_login({
              FirstName: "",
              LastName: "",
              Email: "",
              Gender: null,
              Age: null,
              Courses: [],
              _id: null,
            });
            set_Auth(false);
            console.log("we are here");

            // return;
          }
        } else {
          store_login({
            FirstName: "",
            LastName: "",
            Email: "",
            Gender: null,
            Age: null,
            Courses: [],
            _id: null,
          });
          set_Auth(false);

          // return;
        }
      } catch (error) {
        console.log("error in the front end : ", error);
        store_login({
          FirstName: "",
          LastName: "",
          Email: "",
          Gender: null,
          Age: null,
          Courses: [],
          _id: null,
        });
        set_Auth(false);

        // return;
      }
    };

    fetchData();
    console.log(isAuth);
  }, [isAuth]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/check_Auth", {
          withCredentials: true,
          validateStatus: () => true,
        });

        if (response.status === 200) {
          const FirstName = response.data.userData.FirstName;
          const LastName = response.data.userData.LastName;
          const Email = response.data.userData.Email;
          const Gender = response.data.userData.Gender;
          const Age = response.data.userData.Age;
          const Courses = response.data.userData.Courses;
          const _id = response.data.userData._id;
          console.log(FirstName, LastName, Email);
          store_login(FirstName, LastName, Email, Gender, Age, Courses, _id);
          set_Auth(true);
          // return;
        } else if (response.status === 401) {
          // Access token expired, try refreshing it
          const refreshResponse = await axios.post(
            "http://localhost:3000/Refresh",
            {},
            {
              withCredentials: true,
              validateStatus: () => true,
            }
          );
          if (refreshResponse.status === 200) {
            if (refreshResponse.data && refreshResponse.data.accessToken) {
              // Update the access token in the cookies
              // Assuming you have a function to set access token in your context
              // set_AccessToken(refreshResponse.data.accessToken);

              const FirstName = refreshResponse.data.userData.FirstName;
              const LastName = refreshResponse.data.userData.LastName;
              const Email = refreshResponse.data.userData.Email;
              const Gender = refreshResponse.data.userData.Gender;
              const Age = refreshResponse.data.userData.Age;
              const Courses = refreshResponse.data.userData.Courses;
              const _id = refreshResponse.data.userData._id;

              store_login(
                FirstName,
                LastName,
                Email,
                Gender,
                Age,
                Courses,
                _id
              );
              set_Auth(true);
              // return;
            }
          } else {
            store_login({
              FirstName: "",
              LastName: "",
              Email: "",
              Gender: null,
              Age: null,
              Courses: [],
              _id: null,
            });
            set_Auth(false);
            console.log("we are here");

            // return;
          }
        } else {
          store_login({
            FirstName: "",
            LastName: "",
            Email: "",
            Gender: null,
            Age: null,
            Courses: [],
            _id: null,
          });
          set_Auth(false);

          // return;
        }
      } catch (error) {
        console.log("error in the front end : ", error);
        store_login({
          FirstName: "",
          LastName: "",
          Email: "",
          Gender: null,
          Age: null,
          Courses: [],
          _id: null,
        });
        set_Auth(false);

        // return;
      }
    };

    fetchData();
    console.log(isAuth);
  }, []);
  useEffect(() => {
    console.log(isAuth);
  }, [isAuth]);
  return (
    <div className=" relative   ">
      <NavBar Active_nav={Active_nav} setActive_nav={setActive_nav} />

      <Outlet />
    </div>
  );
}
export default App;
