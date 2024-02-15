import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import App from "./App";
import Not_Finished from "./Components/Not_Finished";
import Blogs from "./Components/Blogs/Blogs";
import Blogs_item from "./Components/Blogs/Blogs_item";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Services from "./Components/Servicecs/Services";
import Courses from "./Components/Courses/Courses";
import Course_item from "./Components/Courses/Course_item";
import Service_item from "./Components/Servicecs/Service_item";
import Events from "./Components/Events/Events";
import Events_item from "./Components/Events/Events_item";
import Contact from "./Components/Contact/Contact";
import VerifyEmail from "./Components/Verify_email/Verify_email";

import Profile from "./Components/Profile/Profile";
import Info from "./Components/Profile/Info";
import UserServices from "./Components/Profile/UserServices";
import UserNotifications from "./Components/Profile/UserNotifications";
import UserCourses from "./Components/Profile/UserCourses";

import Not_Found from "./Components/Not_Found";
import Dashboard from "./Dashboard/Dashboard";
import Dashboard_Login from "./Dashboard/Dashboard_Login";
import Dashboard_home from "./Dashboard/Dashboard_home/Dashboard_home";
import Dashboard_Users from "./Dashboard/Dashboard_Users/Dashboard_Users";
import Dashboard_Services from "./Dashboard/Dashboard_Services/Dashboard_Services";
import Dashboard_Courses from "./Dashboard/Dashboard_Courses/Dashboard_Courses";
import Dashboard_Events from "./Dashboard/Dashboard_Events/Dashboard_Events";
import Dashboard_Blogs from "./Dashboard/Dashboard_Blogs/Dashboard_Blogs";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/Services", element: <Services /> },
            { path: "/Services/:id", element: <Service_item /> },
            { path: "/Courses", element: <Courses /> },
            { path: "/Courses/:id", element: <Course_item /> },
            { path: "/Events", element: <Events /> },
            { path: "/Events/:id", element: <Events_item /> },
            { path: "/Contact", element: <Contact /> },
            { path: "/Blogs", element: <Blogs /> },
            { path: "/Blogs/:id", element: <Blogs_item /> },
            {
                path: "/Profile",
                element: <Profile />,
                children: [
                    { index: true, element: <Info /> },
                    {
                        path: "/Profile/Notifications",
                        element: <UserNotifications />,
                    },
                    {
                        path: "/Profile/Courses",
                        element: <UserCourses />,
                    },
                    {
                        path: "/Profile/Services",
                        element: <UserServices />,
                    },
                ],
            },
            { path: "/Notifications/:id", element: <Not_Finished /> },
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
        children: [
            { index: true, element: <Dashboard_home /> },
            { path: "/Dashboard/Users", element: <Dashboard_Users /> },
            { path: "/Dashboard/Services", element: <Dashboard_Services /> },
            { path: "/Dashboard/Courses", element: <Dashboard_Courses /> },
            { path: "/Dashboard/Events", element: <Dashboard_Events /> },
            { path: "/Dashboard/Blogs", element: <Dashboard_Blogs /> },
            {
                path: "*",
                element: <Not_Found />,
            },
        ],
    },
    {
        path: "/Dashboard_Login",
        element: <Dashboard_Login />,
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
