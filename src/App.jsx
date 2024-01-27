import React from "react";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router";

function App() {
  return (
      <div className=" relative overflow-x-hidden ">
          <NavBar />
      <div className=" mt-[70px]">
              {/* <Outlet /> */}
          </div>
      </div>
  );
}

export default App;
