import React from "react";
import "../../assets/css/About/about.css";
import aboutBannerImg from "../../assets/images/about-banner.png";
import aboutBannerVideo from "../../assets/images/aboutBannerVideo.mp4";
import Teams from "../About/Teams";
function About() {
  return (
    <>
      <div className="about-section d-flex justify-content-center align-items-center w-100">
        <div className="banner-img w-100">
          <img src={aboutBannerImg} alt="" />
        </div>
        <div className="video-div">
          <video
            src={aboutBannerVideo}
            className="w-100 h-100"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
      <div className="about-div p-4 d-flex justify-content-center align-items-center flex-column position-relative">
        <div className="light-div"></div>
        <div className="about-text text-center mt-5 w-75 d-flex flex-column">
          <h1>Who is Koadai?</h1>
          <p>
            Welcome to Koadai – Your Partner in Digital
            Transformation!
          </p>
          <p>
            At Koadai we ignite sigital revolutions with fresh ideas, dynamic code, and unstoppable passion - redifing online success with expertly crafted website solutions. From building brands from sractch to bringing stories to life, we blend imagination and innovation to help all size of businesses thrive in the digital age.
          </p>
          <h4>Our Purpose</h4>
          <p>
            To bridge the gap between business and their digital transformation needs. Koadai envisiosns a world where business of all sizes can build impactful digital brnads, thrive in the digital marketplace, and achieve ongoing revenue success.
          </p>
          <h4>Our Mission</h4>
          <p>
            At Koadai, we believe every business deserves to create its own unique brand and succeed in the digital landscape. Koadai combines the essence of code and artificial intelligence, reflecting the brand's core focus. 
          </p>
          <button className="btn fill-btn-effect">Request a call from us</button>
        </div>
      </div>
      <Teams />
    </>
  );
}

export default About;
