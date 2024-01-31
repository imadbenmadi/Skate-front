import React from "react";
import Logo from "../../public/Logo.png";
function Register() {
    return (
        <div>
            <div>
                <img className=" w-20 m-auto pt-5 " src={Logo} alt="" />
            </div>
            <div className=" m-auto text-center pt-5 text-2xl font-semibold text-blue ">
                Join to Skate Community
            </div>
            {/* input fields */}
            <div className=" border border-gray_white text-black_text shadow-md w-[80%] md:w-[60%] m-auto mt-5 p-5 rounded-lg flex flex-col gap-4  ">
                <div className=" text-lg font-semibold ">
                    Create Your Account
                </div>
                <div>
                    <div className=" mb-2">Profile image</div>
                    <input
                        className=" rounded md:p-2 md:border border-gray_white "
                        type="file"
                        name="Profile pic"
                        id=""
                    />
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Register;
