import React, { useState } from "react";
import "../../assets/css/About/Teams.css";
import aboutBannerImg from "../../assets/images/about-team-bg.png";
// Import team images
import teamOne from '../../assets/images/ceo.jpg';
import teamTwo from "../../assets/images/brand-strategist.jpg";
import teamThree from "../../assets/images/cto.jpg";
import teamFour from "../../assets/images/cd.jpg";
import teamFive from "../../assets/images/bdm.jpg";
// import teamSix from "../../assets/images/officer.jpg";

function Teams() {
  const teamMembers = [
    { name: "Vivek Pradhan", role: "Marketing Manager", image: teamOne },
    { name: "Amit Chettri", role: "Brand Strategist", image: teamTwo },
    { name: "Susanta Biswas", role: "Lead Web Developer", image: teamThree },
    { name: "Roushan Dubey", role: "Lead UI/UX Designer", image: teamFour },
    { name: "Supriya Rai", role: "Business Development Manager", image: teamFive },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3; // Number of cards to display at a time

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards < teamMembers.length
        ? prevIndex + 1
        : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : teamMembers.length - visibleCards
    );
  };

  return (
    <div
      className="teams-div d-flex align-items-center"
      style={{ backgroundImage: `url(${aboutBannerImg})` }}
    >
      <div className="team-cards-container">
        <button className="slider-button prev" onClick={handlePrev}>
          {"<"}
        </button>
        <div className="team-cards">
          {teamMembers.slice(currentIndex, currentIndex + visibleCards).map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={`${member.name}`} className="team-img" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
        <button className="slider-button next" onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Teams;
