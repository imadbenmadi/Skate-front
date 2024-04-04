import React from "react";
import { useOutletContext } from "react-router";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
function Notification_item() {
    const [notification, setnotification] = useState(null);
    const location = useLocation();
    const { user, fetchData } = useOutletContext();
    if (!user)
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    const Notifications = user.user.Notifications;
    const userId = user.user._id;
    const Notification_id = location.pathname.split("/")[4];
    console.log(Notifications);
    return <div></div>;
}

export default Notification_item;
