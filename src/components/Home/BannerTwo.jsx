import React, { useEffect } from "react";
import "../../assets/css/Home.css";
// import homeBanner from "../../assets/images/home-banner.png";
import frontMountain from "../../assets/images/front-mountain.png";
import backMountain from "../../assets/images/back-mountain.png";
import koadaiLogo from "../../assets/images/koadai-logo.png";
import './BannerTwo.css'

function Banner() {
    useEffect(() => {
        let scrollYValue = window.scrollY;
        console.log(scrollYValue);
    })


    return (
        <>
            <div className="banner-two-main-div">
                <div className="back-mount-div">
                    <img src={backMountain} alt="" />
                </div>
                <div className="front-mount-div">
                    <img src={frontMountain} alt="" />
                </div>
                <div className="koadaiLogo-div">
                    <img src={koadaiLogo} alt="" />
                </div>
            </div>
        </>
    );
}

export default Banner;
