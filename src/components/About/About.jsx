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
          <h1>What is Koadai?</h1>
          <p>
            Welcome to Koadai – Your future awaits you
          </p>
          <p>
            We are a young group of active thinkers who are passionate to revolutionize business through innovative digital solutions. From branding concepts to propelling them into high skies, fresh perspectives and the creative energy redefine how companies connect and thrive online.
          </p>
          <p>Wether it's developing dynamic websites, creating appealing branding, or optimizing digital marketing strategies, we inject passion, expertise and a human touch into everything we undertake.</p>
          <h4>Our Prommise</h4>
          <p>
            As your trusted digital partner, we are committed to bringing smart, personalized solutions customized to your unique challenges so that we can empower your business. Together let's lay a solid foundation for current needs and build pathways to a success and growth future.
          </p>
          <h4>Our Dream</h4>
          <p>
            We dream of a world where business thrive effortlessly in the digital age, creative and innovation converge to create long-term success, and with strategies designed to inspire and solutions crafted with heart, we are committed to helping brands thrive and leave a meaningful mark in this ever-evolving landscape. 
          </p>
          <button className="btn fill-btn-effect">Request a call from us</button>
        </div>
      </div>
      <Teams />
    </>
  );
}

export default About;
