import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
function ProfileInfo() {
    const Navigate = useNavigate();
    const { user, fetchData } = useOutletContext();
    const [Logout_Loading, setLogout_Loading] = useState(false);

    if (!user || !fetchData)
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    const Logout = async () => {
        setLogout_Loading(true);
        try {
            const response = await axios.post(
                "http://localhost:3000/logout",
                {},
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status == 204) {
                Swal.fire("Logout", ``, "success");
                Navigate("/");
            } else if (response.status == 401) {
                Swal.fire("Logout", ``, "success");
                Navigate("/");
            } else {
                Swal.fire("Error!", `Something Went Wrong ,`, "error");
            }
        } catch (error) {
            Swal.fire("Error!", `Something Went Wrong `, "error");
        } finally {
            setLogout_Loading(false);
        }
    };
    return (
        <div className=" flex flex-col items-start justify-center">
            <div className="text-2xl pt-4 pl-4  lg:text-3xl mb-8 text-center w-full ">
                <span className="text-green2">Your </span>
                Profile
            </div>
            <div className="flex flex-col max-w-[300px] md:max-w-[600px] m-auto    md:text-2xl gap-2 md:gap-7">
                <span className=" flex  md:gap-3">
                    <p className=" font-semibold text-gray w-[100px] md:w-[150px] shrink-0">
                        User Name :
                    </p>
                    <p className="  break-all">
                        {user.user.FirstName ? user.user.FirstName : "null"}{" "}
                        {user.user.LastName ? user.user.LastName : "null"}
                    </p>
                </span>
                <span className=" flex md:gap-3">
                    <p className=" font-semibold text-gray w-[70px] md:w-[150px] shrink-0">
                        Email :
                    </p>
                    <p className="  break-all">
                        {user.user.Email ? user.user.Email : "null"}
                    </p>
                </span>
                <span className=" flex md:gap-3">
                    <p className=" font-semibold text-gray w-[120px] md:w-[150px] shrink-0">
                        Email status :{" "}
                    </p>
                    <p className="  break-all">
                        {user.user.IsEmailVerified
                            ? user.user.IsEmailVerified
                            : "null"}{" "}
                    </p>
                </span>
                <span className=" flex md:gap-3">
                    <p className=" font-semibold text-gray w-[70px] md:w-[150px] shrink-0">
                        Phone :
                    </p>
                    <p className="  break-all">
                        {user.user.Phone ? user.user.Phone : "null"}
                    </p>
                </span>
            </div>
            {/* <h2 className=" text-center pt-4 text-3xl w-[300px] m-auto break-all"></h2> */}
            <div className=" flex items-center justify-center flex-col text-xl md:text-3xl text-gray  gap-10 w-full mt-12 ">
                <div className=" flex gap-4 md:gap-12">
                    <Link
                        to={`/Profile/${user.user._id}/Notifications`}
                        className=" bg-[#7e549e] px-4 py-2 rounded text-white w-[140px] md:w-[200px]"
                    >
                        <div className="flex gap-1 items-center justify-center  ">
                            <IoIosNotifications />
                            {user.user.Notifications.length}
                        </div>
                        <div className=" text-center">Notifications</div>
                    </Link>
                    <Link
                        to={`/Profile/${user.user._id}/Requests`}
                        className=" bg-[#c2549d] px-4 py-2 rounded text-white w-[140px] md:w-[200px]"
                    >
                        <div className="flex gap-1 items-center justify-center ">
                            <IoNewspaper />
                            {user.Courses_requests.length +
                                user.Services_requests.length}
                        </div>
                        <div className=" text-center">Requests</div>
                    </Link>
                </div>
                <div className=" flex gap-4 md:gap-12">
                    <Link
                        to={`/Profile/${user.user._id}/Courses`}
                        className=" bg-[#213059] px-4 py-2 rounded text-white w-[140px] md:w-[200px]"
                    >
                        <div className="flex gap-1 items-center justify-center ">
                            <FaBook />
                            {user.user.Courses.length}
                        </div>
                        <div className=" text-center">Courses</div>
                    </Link>
                    <Link
                        to={`/Profile/${user.user._id}/Services`}
                        className=" bg-[#286a69] px-4 py-2 rounded text-white w-[140px] md:w-[200px]"
                    >
                        <div className="flex gap-1 items-center justify-center ">
                            <FaHandshake />
                            {user.user.Services.length}
                        </div>
                        <div className=" text-center">Services</div>
                    </Link>
                </div>
            </div>
            {!Logout_Loading ? (
                <div
                    className=" flex items-center justify-center gap-2 text-red-600 rounded-lg px-4 py-2
                     text-xl md:text-3xl font-semibold m-auto my-6 md:mt-12 md:mb-6 cursor-pointer"
                    onClick={Logout}
                >
                    <div>Logout</div>
                    <FiLogOut />
                </div>
            ) : (
                <span className="small-loader  w-full m-auto   my-6 md:mt-12 md:mb-6 "></span>
            )}
            
        </div>
    );
}

export default ProfileInfo;
