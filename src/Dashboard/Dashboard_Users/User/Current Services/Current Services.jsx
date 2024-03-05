import React from 'react'
import Services from "./Services";
function Current_Services() {
  return (
      <div className="w-[50%]  border-r-2 border-r-gray  pl-4">
          <div className=" text-2xl text-gray underline">User Services</div>
          <Services />
      </div>
  );
}

export default Current_Services;