import React from "react";
import "../../assets/css/About/Teams.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Import team images
import teamOne from '../../assets/images/ceo.jpg';
import teamTwo from "../../assets/images/brand-strategist.jpg";
import teamThree from "../../assets/images/cto.jpg";
import teamFour from "../../assets/images/cd.jpg";
import teamFive from "../../assets/images/bdm.jpg";
import teamSix from "../../assets/images/officer.jpg";
import teamSeven from "../../assets/images/web-intern.jpeg";

function Teams() {
  const settings = {
    dots: true, // Shows navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed in ms
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    arrows: true, // Enables next/prev arrows
  };
  

  return (
    <div className="slider-container container">
      <h2>Our Team</h2>
      <Slider {...settings}>
        <div>
          <img src={teamOne} alt="Team 1" />
        </div>
        <div>
          <img src={teamTwo} alt="Team 2" />
        </div>
        <div>
          <img src={teamThree} alt="Team 3" />
        </div>
        <div>
          <img src={teamFour} alt="Team 4" />
        </div>
        <div>
          <img src={teamFive} alt="Team 5" />
        </div>
        <div>
          <img src={teamSix} alt="Team 6" />
        </div>
        <div>
          <img src={teamSeven} alt="Team 7" />
        </div>
      </Slider>
    </div>
  );
}

export default Teams;
