import React from "react";

function Notification_item() {
    
    
    const [Active_nav, setActive_nav] = useState(null);
    const [openNav, SetOpenNav] = useState(false);
    const [windowWidth, SetwindowWidth] = useState(window.innerWidth);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetch_Notifications = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `http://localhost:3000/Profile/${
                    location.pathname.split("/")[2]
                }`,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            // console.log(response.data);
            if (response.status === 200) {
                setUser(response.data.userData);
            } else {
                Navigate("/Login");
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    return <div>Notification_item</div>;
}

export default Notification_item;
