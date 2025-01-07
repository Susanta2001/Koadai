import React from "react";
import "../../assets/css/Services/mainservice.css";
import Imgone from "../../assets/images/card-one.png";
import Imgtwo from "../../assets/images/card-two.png";
import Imgthree from "../../assets/images/card-three.png";
import Bgthree from "../../assets/images/service-bg-two.png";
import Services from "./Services";
import Bgone from "../../assets/images/service-bg.png";
function Mainservice() {
  return (
    <>
      <div className="bg-main" style={{ backgroundColor: "black" }}>
        <div className="service-maindiv ">
          <img src={Bgone} alt="" />
          <div className="services-banner-text">
            <h1 style={{ colour: "#FFFFFF" }}>OUR <br/> SERVICES</h1>
            <p style={{ colour: "#FFFFFF" }}>
              Hire us and our experts to take your business marketing to a
              professional level. We are best in what we do.
            </p>
          </div>
        </div>
        <div className="service-maindiv-one">
          <p className="mb-5">
            Benefits you will get by doing business with us
          </p>
        </div>
        <div className="service-maindiv-two d-flex justify-content-center mb-5">
          <div className="flip-card" tabIndex={0}>
          <img src={Imgone} alt="/" style={{ width: "100%" }}></img>
            {/* <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>Hover me</h3>
              </div>
              <div className="flip-card-back">
              <img src={Imgone} alt="/" style={{ width: "100%" }}></img>
              </div>
            </div> */}
          </div>
          <div className="flip-card" tabIndex={0}>
            {/* <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>Hover me</h3>
              </div>
              <div className="flip-card-back">
              <img src={Imgtwo} alt="/" style={{ width: "100%" }}></img>
              </div>
            </div> */}
            <img src={Imgtwo} alt="/" style={{ width: "100%" }}></img>
          </div>
          <div className="flip-card" tabIndex={0}>
            {/* <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>Hover me</h3>
              </div>
              <div className="flip-card-back">
              <img src={Imgthree} alt="/" style={{ width: "100%" }}></img>
              </div>
            </div> */}
            <img src={Imgthree} alt="/" style={{ width: "100%" }}></img>
          </div>
        </div>
        <div className="service-maindiv-three d-flex justify-content-center" style={{ width: "100%" }}>
          <img src={Bgthree} alt="" className="mt-5" style={{ width: "100%" }}/>
        </div>
        <Services />
      </div>
    </>
  );
}

export default Mainservice;
