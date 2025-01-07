import React from 'react';
import '../../assets/css/Clients.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import clientsOne from '../../assets/images/client-one.png';
import clientsTwo from '../../assets/images/client-two.png';
import clientsThree from '../../assets/images/client-three.png';
import clientsFour from '../../assets/images/client-four.png';
import clientsFive from '../../assets/images/client-five.png';
import clientsSix from '../../assets/images/client-six.png';

function Clients() {
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
      <h2>Our Clients</h2>
      <Slider {...settings}>
        <div>
          <img src={clientsOne} alt="Client 1" />
        </div>
        <div>
          <img src={clientsTwo} alt="Client 2" />
        </div>
        <div>
          <img src={clientsThree} alt="Client 3" />
        </div>
        <div>
          <img src={clientsFour} alt="Client 4" />
        </div>
        <div>
          <img src={clientsFive} alt="Client 5" />
        </div>
        <div>
          <img src={clientsSix} alt="Client 6" />
        </div>
      </Slider>
    </div>
  );
}

export default Clients;
