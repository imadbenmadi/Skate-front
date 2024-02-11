import React from 'react'
import Current_Courses from './Current/Current_Courses'
import Explore from './Explore/Explore'
import { useState, useEffect } from 'react'
function Courses() {

    const fetch_data = () => {
        
    }
    useEffect(() => {
    },[])
  return (
      <div className=' pt-[60px]'>
          {/* <Current_Courses /> */}
          <Explore />
      </div>
  );
}

export default Courses