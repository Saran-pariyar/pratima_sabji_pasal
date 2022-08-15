import React from "react";
import "./heroSection.css";
import main_image from "../../assets/img/veg.jpg";

const HeroSection = () => {
  return (
    <main className="main-hero">
      <marquee
        behavior=""
        direction="left"
        className="marquee-text"
        scrollamount="12"
      >
        Welcome to the official website of PRATIMA FRUITS AND VEGETABLE SHOP!
      </marquee>
      <div className="main-section">
        <p className="main-title">Welcome to our shop</p>
        <p className="second-title">Get fresh vegetables and fruits here!</p>
        {/* <figure className="main-image-section"> */}
        {/* <img src={main_image} className="main-image" alt="image" /> */}

        {/* </figure> */}
      </div>
    </main>
  );
};

export default HeroSection;
