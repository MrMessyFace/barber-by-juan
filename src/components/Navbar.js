import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <nav className="navbar-left">
        <div className="navbar-image">
          <Link to="/">
            <img
              src={require("../assets/images/barbershop-logo.png")}
              alt="Barber Shop"
              title="Home"
            />
          </Link>
        </div>
      </nav>
      <nav className="navbar-right">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </nav>
  );
};

export default Navbar;
