import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import App from "./App";
import Fetcher from "./Fetcher";
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

import Ar_Home from "./Languages/Arabic/Components/Home/Home";
import Ar_App from "./Languages/Arabic/App";
import Ar_Blogs from "./Languages/Arabic/Components/Blogs/Blogs";
import Ar_Blogs_item from "./Languages/Arabic/Components/Blogs/Blogs_item";
import Ar_Login from "./Languages/Arabic/Components/Login";
import Ar_Register from "./Languages/Arabic/Components/Register/Register";
import Ar_Services from "./Languages/Arabic/Components/Servicecs/Services";
import Ar_Courses from "./Languages/Arabic/Components/Courses/Courses";
import Ar_Course_item from "./Languages/Arabic/Components/Courses/Course_item";
import Ar_Service_item from "./Languages/Arabic/Components/Servicecs/Service_item";
import Ar_Events from "./Languages/Arabic/Components/Events/Events";
import Ar_Events_item from "./Languages/Arabic/Components/Events/Events_item";
import Ar_Contact from "./Languages/Arabic/Components/Contact/Contact";
import Ar_VerifyEmail from "./Languages/Arabic/Components/Verify_email/Verify_email";
import Ar_Profile from "./Languages/Arabic/Components/Profile/Profile";
import Ar_ProfileInfo from "./Languages/Arabic/Components/Profile/Profile_Info";
import Ar_Profile_Services from "./Languages/Arabic/Components/Profile/Services/Profile_Services";
import Ar_Profile_Notifications from "./Languages/Arabic/Components/Profile/Notification/Profile_Notifications";
import Ar_Profile_Courses from "./Languages/Arabic/Components/Profile/Courses/Profile_Courses";
import Ar_Profile_Edit from "./Languages/Arabic/Components/Profile/Profile_Edit";
import Ar_Profile_Requests from "./Languages/Arabic/Components/Profile/Requests/Profile_Requests";
import Ar_Notification_item from "./Languages/Arabic/Components/Profile/Notification/Notification_item";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // { index: true, element: <Fetcher /> },
            // { path: "/Home", element: <Home /> },

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
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/Register",
        element: <Register />,
    },
    {
        path: "/ar",
        element: <Ar_App />,
        children: [
            { index: true, element: <Ar_Home /> },
            { path: "/ar/Services", element: <Ar_Services /> },
            { path: "/ar/Services/:id", element: <Ar_Service_item /> },
            { path: "/ar/Courses", element: <Ar_Courses /> },
            { path: "/ar/Courses/:id", element: <Ar_Course_item /> },
            { path: "/ar/Events", element: <Ar_Events /> },
            { path: "/ar/Events/:id", element: <Ar_Events_item /> },
            { path: "/ar/Contact", element: <Ar_Contact /> },
            { path: "/ar/Blogs", element: <Ar_Blogs /> },
            { path: "/ar/Blogs/:id", element: <Ar_Blogs_item /> },
            {
                path: "/ar/verifyEmail",
                element: <Ar_VerifyEmail />,
            },
            {
                path: "*",
                element: <Not_Found />,
            },
        ],
    },
    {
        path: "/ar/Profile/:id",
        element: <Ar_Profile />,
        children: [
            { index: true, element: <Ar_ProfileInfo /> },
            {
                path: "/ar/Profile/:id/Edit",
                element: <Ar_Profile_Edit />,
            },
            {
                path: "/ar/Profile/:id/Notifications",
                element: <Ar_Profile_Notifications />,
            },
            {
                path: "/ar/Profile/:id/Notifications/:id",
                element: <Ar_Notification_item />,
            },
            {
                path: "/ar/Profile/:id/Courses",
                element: <Ar_Profile_Courses />,
            },
            {
                path: "/ar/Profile/:id/Services",
                element: <Ar_Profile_Services />,
            },
            {
                path: "/ar/Profile/:id/Requests",
                element: <Ar_Profile_Requests />,
            },
            {
                path: "*",
                element: <Not_Found />,
            },
        ],
    },

    {
        path: "/ar/Login",
        element: <Ar_Login />,
    },
    {
        path: "/ar/Register",
        element: <Ar_Register />,
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
        path: "/fr/Login",
        element: <Login />,
    },
    {
        path: "/fr/Register",
        element: <Register />,
    },
    {
        path: "*",
        element: <Not_Found />,
    },
]);

export default routes;
