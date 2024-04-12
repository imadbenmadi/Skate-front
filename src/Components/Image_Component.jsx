import React from 'react'
import Defalt_Image from "../../public/Default.jpg";
function Image_Component({Image}) {
  return <img src={Image} alt="" loading="lazy" />;
}

export default Image_Component