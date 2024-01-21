import React from "react";
import Logo from "../../public/Logo.png";
import Setting from "../../public/setting.png";
function NavBar() {
    return (
        <div className=" flex ">
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <div className=" flex gap-5">
                <div>Servecis</div>
                <div>Formations</div>
                <div>Events</div>
                <div>Blogs</div>
                <div>Contact</div>
            </div>
            <div>
          <div>
            <img src={Setting} alt="" />
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default NavBar;
