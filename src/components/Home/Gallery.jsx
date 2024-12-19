import React from "react";
import '../../assets/css/Gallery.css'
import videoOne from '../../assets/images/video-1.mp4'
import videoTwo from '../../assets/images/video-2.mp4'
import videoThree from '../../assets/images/video-3.mp4'
import videoFour from '../../assets/images/video-4.mp4'

function Gallery() {
  return (
    <div className="p-4">
      <div className="gallery-div d-flex">
        <div className="item" >
          <video src={videoFour} className="w-100 h-100" autoPlay loop muted playsInline />
        </div>
        <div className="item" >
          <video src={videoTwo} className="w-100 h-100" autoPlay loop muted playsInline />
        </div>
        <div className="item" >
          <video src={videoThree} className="w-100 h-100" autoPlay loop muted playsInline />
        </div>
        <div className="item" >
          <video src={videoOne} className="w-100 h-100" autoPlay loop muted playsInline />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
