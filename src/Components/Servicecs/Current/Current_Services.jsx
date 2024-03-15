import React from "react";
import Card from "./Card";
import { useAppContext } from "../../../Context/AppContext";

function Current_Services({ userServices }) {
    const { isAuth } = useAppContext();
    return isAuth && userServices.length !== 0 ? (
        <div>
            <div>Your Current Services:</div>
            <div className="flex gap-4 w-screen">
                {userServices.map((item) => (
                    <Card key={item.id} />
                ))}
            </div>
        </div>
    ) : null;
}

export default Current_Services;
