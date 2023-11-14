import React from "react";
import Logo from "../components/Logo";
import Slideshow from "../components/Slideshow";
import LocationInfo from "../components/LocationInfo";
import Map from "../components/Map";
import HoursImg from "../components/HoursImg";
import HoursInfo from "../components/HoursInfo";

const HomePage = () => {
  return (
    <div className="home">
      <Logo />
      <br></br>
      <Slideshow />
      <br></br>
      <div className="information">
        <div className="location-section">
          <LocationInfo />
          <Map />
        </div>
        <div className="hours-section">
          <HoursImg />
          <HoursInfo />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
