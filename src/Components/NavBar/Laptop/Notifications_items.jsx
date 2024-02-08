import React from "react";
import { useAppContext } from "../../../Context/AppContext"; // Import your context hook

const Notifications_items = () => {
    const { Notifications } = useAppContext(); // Assuming Notifications is the array of Notifications from your context
    console.log(Notifications);
    if (Notifications.length === 0) {
        return (
            <div className=" w-full">
                <h3 className=" text-center m-auto">No Notifications</h3>
            </div>
        );
    }

    return (
        <div>
            <h2>Notifications</h2>
            {Notifications.map((notification, index) => (
                <div
                    key={index}
                    className={`notification ${
                        notification.Type === "verify" ? "bg-red-200" : ""
                    }`}
                >
                    <h3>{notification.Title}</h3>
                    <p>{notification.Text}</p>
                    <p>Date: {notification.Date}</p>
                    <p>{notification.Readed ? "Read" : "Unread"}</p>
                </div>
            ))}
        </div>
    );
};

export default Notifications_items;
