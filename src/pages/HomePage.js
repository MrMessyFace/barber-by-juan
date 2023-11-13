import React from "react";
import Logo from "../components/Logo";
import Slideshow from "../components/Slideshow";
import LocationInfo from "../components/LocationInfo";
import HoursInfo from "../components/HoursInfo";

const HomePage = () => {
  return (
    <div className="home">
      <Logo />
      <br></br>
      <Slideshow />
      <br></br>
      <div className="information">
        <LocationInfo />
        <HoursInfo />
      </div>
    </div>
  );
};

export default HomePage;
