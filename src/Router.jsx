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
import Dashboard from "./Dashboard/Dashboard";
import Dashboard_Login from "./Dashboard/Dashboard_Login";
import VerifyEmail from "./Components/Verify_email/Verify_email";
import Notifications from "./Components/Notifications/Notifications";
import Notification_item from "./Components/Notifications/Notification_item";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/Services", element: <Not_Finished /> },
            { path: "/Courses", element: <Not_Finished /> },
            { path: "/Contact", element: <Contact /> },
            { path: "/Profile", element: <Not_Finished /> },
            { path: "/Mycourses", element: <Not_Finished /> },
            { path: "/Events", element: <Not_Finished /> },
            { path: "/Notifications", element: <Notifications /> },
            { path: "/Notifications/:id", element: <Notification_item /> },
            {
                path: "/Blogs",
                element: <Not_Finished />,
            },
            {
                path: "/verifyEmail",
                element: <VerifyEmail />,
            },
            {
                path: "*",
                element: <Not_Found />,
            },
        ],
    },
    {
        path: "/Dashboard",
        element: <Dashboard />,
        children: [{ path: "/Dashboard", element: <Dashboard_Login /> }],
    },
    {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/Register",
        element: <Register />,
        // children: [{ path: "/Register/", element: <VerifyEmail /> }],
    },
    // {
    //     path: "/verifyEmail",
    //     element: <VerifyEmail />,
    // },
    {
        path: "*",
        element: <Not_Found />,
    },
]);

export default routes;
