import React, { useEffect} from "react";
import "../Home/Home.css";
import homeBanner from "../../assets/images/home-banner.png";
import frontMountain from "../../assets/images/front-mountain.png";
import backMountain from "../../assets/images/back-mountain.png";
import koadaiLogo from "../../assets/images/koadai-logo.png";

function Banner() {

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      const koadaiLogo = document.getElementById("koadai-logo");
      if (koadaiLogo) {koadaiLogo.style.marginTop = `${value * 4.5}px`;
    }
    
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <img src={homeBanner} alt="Home Banner" />
      </div>
      <div className="front-mountain-div">
        <img src={frontMountain} alt="Front Mountain" />
      </div>
      <div className="koadaiLogo d-flex justify-content-center" id="koadai-logo">
        <img src={koadaiLogo} alt="Koadai Logo" />
      </div>
      <div className="back-mountain-div">
        <img src={backMountain} alt="Back Mountain" />
      </div>
    </>
  );
}

export default Banner;
