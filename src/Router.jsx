import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import App from "./App";
import Not_Finished from "./Components/Not_Finished";
import Blogs from "./Components/Blogs/Blogs";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Services from "./Components/Services/Services";
import Courses from "./Components/Courses/Courses";
import Events from "./Components/Events/Events";
import Contact from "./Components/Contact/Contact";
import UserProfile from "./Components/UserProfile/UserProfile";
import Not_Found from "./Components/Not_Found";
import userCourses from "./Components/userCourses/userCourses";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/Services", element: <Services /> },
            { path: "/Courses", element: <Courses /> },
            { path: "/Events", element: <Events /> },
            { path: "/Contact", element: <Contact /> },
            { path: "/Profile/:id", element: <UserProfile /> },
            { path: "/Mycourses", element: <userCourses /> },

            {
                path: "/Blogs",
                element: <Blogs />,
            },
            {
                path: "*",
                element: <Not_Found />,
            },
        ],
    },
    {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/Register",
        element: <Register />,
    },
    
   
    {
        path: "*",
        element: <Not_Found />,
    },
]);

export default routes;
