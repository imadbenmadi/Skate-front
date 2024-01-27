import React from 'react'
import wallpaper from '../../../public/wallpaper.jpg'
import wallpaper_mobile from "../../../public/wallpaper_mobile.png";
function Home() {
  return (
      <>
          <div>
              {/* <div>
                  <img src={wallpaper} alt="" className="scale-[1.3] mt-11" />
              </div> */}
              <div className="flex justify-center items-center h-[30vh] overflow-hidden">
                  {/* Set the image as a background */}
                  <div
                      className="w-full h-full bg-cover bg-center transform scale-110"
                      style={{ backgroundImage: `url(${wallpaper})` }}
                  ></div>
              </div>
          </div>
      </>
  );
}

export default Home