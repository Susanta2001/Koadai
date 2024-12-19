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
          <h1>Who Are We?</h1>
          <p>
            Welcome to SRTGlobal Solutions – Your Partner in Digital
            Transformation!
          </p>
          <p>
            We’re passionate about revolutionizing businesses with innovative
            digital solutions that inspire growth and engagement. With our
            creative flair and fresh perspectives, we redefine how companies
            connect and thrive online— whether it’s developing dynamic websites,
            designing captivating branding, or optimizing digital marketing
            strategies, we bring enthusiasm and expertise to every project.
          </p>
          <h4>Our promise</h4>
          <p>
            We promise to be your trusted partner in navigating the digital
            landscape, empowering your business with smart, personalized
            solutions that not only meet today’s challenges but also lay a
            strong foundation for your future success.
          </p>
          <h4>Our Dream</h4>
          <p>
            We envision a future where businesses flourish in the digital age,
            driven by innovative strategies and solutions that create pathways
            to lasting success and prosperity.
          </p>
          <button className="btn fill-btn-effect">Request a call from us</button>
        </div>
      </div>
      <Teams />
    </>
  );
}

export default About;
