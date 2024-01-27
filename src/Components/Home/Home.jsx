import React from 'react'
import wallpaper from '../../../public/wallpaper.jpg'
import wallpaper_mobile from "../../../public/wallpaper_mobile.png";
function Home() {
  return (
      <>
          <div>
              <div>
                  <img src={wallpaper} alt="" className="scale-[1.3] mt-11" />
              </div>
          </div>
      </>
  );
}

export default Home