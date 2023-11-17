import React from "react";
import Logo from "../components/Logo";
import Slideshow from "../components/Slideshow";
import LocationInfo from "../components/LocationInfo";
import Map from "../components/Map";
import BusinessHours from "../components/BusinessHours";
import HoursInfo from "../components/HoursInfo";

const HomePage = () => {
  return (
    <div className="home-page">
      <Logo />
      <Slideshow />
      <div className="information-section">
        <div className="location-section">
          <LocationInfo />
          <Map />
        </div>
        <div className="hours-section">
          <BusinessHours />
          <HoursInfo />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
