import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import App from "./App";
import Not_Finished from "./Components/Not_Finished";
import Blogs from "./Components/Blogs/Blogs";
import Blogs_item from "./Components/Blogs/Blogs_item";
import Login from "./Components/Login";
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
import ProfileInfo from "./Components/Profile/Profile_Info";
import Profile_Services from "./Components/Profile/Services/Profile_Services";
import Profile_Notifications from "./Components/Profile/Notification/Profile_Notifications";
import Profile_Courses from "./Components/Profile/Courses/Profile_Courses";
import Profile_Edit from "./Components/Profile/Profile_Edit";
import Profile_Requests from "./Components/Profile/Requests/Profile_Requests";
import Notification_item from "./Components/Profile/Notification/Notification_item";

import Not_Found from "./Components/Not_Found";

const routes = createBrowserRouter([
    {
        path: "/Profile/:id",
        element: <Profile />,
        children: [
            { index: true, element: <ProfileInfo /> },
            {
                path: "/Profile/:id/Edit",
                element: <Profile_Edit />,
            },
            {
                path: "/Profile/:id/Notifications",
                element: <Profile_Notifications />,
            },
            {
                path: "/Profile/:id/Notifications/:id",
                element: <Notification_item />,
            },
            {
                path: "/Profile/:id/Courses",
                element: <Profile_Courses />,
            },
            {
                path: "/Profile/:id/Services",
                element: <Profile_Services />,
            },
            {
                path: "/Profile/:id/Requests",
                element: <Profile_Requests />,
            },
            {
                path: "*",
                element: <Not_Found />,
            },
        ],
    },
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
        path: "/ar",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/ar/Services", element: <Services /> },
            { path: "/ar/Services/:id", element: <Service_item /> },
            { path: "/ar/Courses", element: <Courses /> },
            { path: "/ar/Courses/:id", element: <Course_item /> },
            { path: "/ar/Events", element: <Events /> },
            { path: "/ar/Events/:id", element: <Events_item /> },
            { path: "/ar/Contact", element: <Contact /> },
            { path: "/ar/Blogs", element: <Blogs /> },
            { path: "/ar/Blogs/:id", element: <Blogs_item /> },
            {
                path: "/ar/verifyEmail",
                element: <VerifyEmail />,
            },
            {
                path: "*",
                element: <Not_Found />,
            },
        ],
    },
    {
        path: "/fr",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/fr/Services", element: <Services /> },
            { path: "/fr/Services/:id", element: <Service_item /> },
            { path: "/fr/Courses", element: <Courses /> },
            { path: "/fr/Courses/:id", element: <Course_item /> },
            { path: "/fr/Events", element: <Events /> },
            { path: "/fr/Events/:id", element: <Events_item /> },
            { path: "/fr/Contact", element: <Contact /> },
            { path: "/fr/Blogs", element: <Blogs /> },
            { path: "/fr/Blogs/:id", element: <Blogs_item /> },
            {
                path: "/fr/verifyEmail",
                element: <VerifyEmail />,
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
