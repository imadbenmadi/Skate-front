import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Pages/Home";
import App from "./App";
import Not_Finished from "./Components/Not_Finished";
import Blogs from "./Components/Blogs/Blogs";
import Login from "./Components/Login";
import Regester from "./Components/Regester";
import Services from "./Components/Services/Services";
import Formations from "./Components/Formations/Formations";
import Events from "./Components/Events/Events";
import Contact from "./Components/Contact/Contact";
import UserProfile from "./Components/UserProfile/UserProfile";
import Settings from "./Components/Settings/Settings";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/Services", element: <Services /> },
            { path: "/Formations", element: <Formations /> },
            { path: "/Events", element: <Events /> },
            { path: "/Contact", element: <Contact /> },
            {
                path: "/Blogs",
                element: <Blogs />,
            },
            {
                path: "*",
                element: <Not_Finished />,
            },
        ],
    },
    {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/Regester",
        element: <Regester />,
    },
    {
        path: "/Profile",
        element: <UserProfile />,
    },
    {
        path: "/Settings",
        element: <Settings />,
    },
    {
        path: "*",
        element: <Not_Finished />,
    },
]);

export default routes;
