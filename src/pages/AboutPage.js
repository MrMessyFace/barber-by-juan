import React from "react";
import AboutBio from "../components/AboutBio";
import Juan from "../components/Juan";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>ABOUT ME</h1>
      <div className="about-section">
        <Juan />
        <AboutBio />
      </div>
    </div>
  );
};

export default AboutPage;
