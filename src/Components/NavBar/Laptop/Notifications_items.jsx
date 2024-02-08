import React from "react";
import { useAppContext } from "../../../Context/AppContext"; // Import your context hook
import { PiWarningCircleBold } from "react-icons/pi";

const Notifications_items = () => {
    const { Notifications } = useAppContext(); // Assuming Notifications is the array of Notifications from your context
    console.log(Notifications);
    // if (Notifications.length === 0) {
    //     return (
    //         <div className=" w-full">
    //             <h3 className=" text-center m-auto">No Notifications</h3>
    //         </div>
    //     );
    // }

    return (
        <div className=" w-full bg-white  pl-3 overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">Notifications</h2>
            <div>
                {Notifications.length === 0 ? (
                    <div className=" text-sm text-center pb-6">
                        No notifications for the moment .
                    </div>
                ) : (
                    <>
                        {Notifications.map((notification, index) => (
                            <div
                                key={index}
                                className={`notification flex items-center justify-start gap-2 p-4 mb-4 border-b border-gray ${
                                    notification.Type === "verify"
                                        ? "bg-red-200"
                                        : ""
                                }`}
                            >
                                <div>
                                    {notification.Type === "verify" ? (
                                        <PiWarningCircleBold />
                                    ) : null}
                                </div>

                                <div>
                                    <h3 className="text-base font-bold">
                                        {notification.Title}
                                    </h3>
                                    <p className="text-sm mb-2">
                                        {notification.Text}
                                    </p>
                                    <p className="text-xs">
                                        Date: {notification.Date}
                                    </p>
                                    <p className="text-xs">
                                        {notification.Readed
                                            ? "Read"
                                            : "Unread"}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-end mr-6">
                            <div className="border px-2 py-1">See All</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Notifications_items;
