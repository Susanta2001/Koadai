import React, { useEffect } from "react";
import "../../assets/css/Home.css";
import homeBanner from "../../assets/images/home-banner.png";
import frontMountain from "../../assets/images/front-mountain.png";
import backMountain from "../../assets/images/back-mountain.png";
import koadaiLogo from "../../assets/images/koadai-logo.png";

function Banner() {
  useEffect(() => {
    // eslint-disable-next-line
    let lastScrollY = 0; // To keep track of the last scroll position
    const koadaiLogo = document.getElementById("koadai-logo");

    const handleScroll = () => {
      if (koadaiLogo) {
        const value = window.scrollY;
        const maxMargin = 130; // Adjust as needed
        const newMargin = value;

        // Ensure margin does not exceed maxMargin
        koadaiLogo.style.marginTop = `${Math.min(newMargin, maxMargin)}px`;

        lastScrollY = value; // Update the last scroll position
      }
    };

    // Use requestAnimationFrame for smooth scrolling
    const optimizedScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", optimizedScroll);
    return () => {
      window.removeEventListener("scroll", optimizedScroll);
    };
  }, []);

  return (
    <>
      <div>
        <img src={homeBanner} alt="Home Banner" />
      </div>
      <div className="front-mountain-div" id='front-mountain'>
        <img src={frontMountain} alt="Front Mountain" />
      </div>
      <div className="koadaiLogo d-flex justify-content-center" id="koadai-logo">
        <img src={koadaiLogo} alt="Koadai Logo" />
      </div>
      <div className="back-mountain-div" id="back-mountain">
        <img src={backMountain} alt="Back Mountain" />
      </div>
    </>
  );
}

export default Banner;
