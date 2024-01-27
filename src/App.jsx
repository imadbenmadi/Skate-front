import React from "react";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
function App() {
  return (
      <Outlet />
      // <div className=" relative overflow-x-hidden ">
      //     {/* <NavBar /> */}

      // </div>
  );
}

export default App;
