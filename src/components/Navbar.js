import React from "react";
import { Link } from "react-router-dom";
import BookNow from "../components/BookNow";

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
        <div>
          <BookNow />
        </div>
        <a
          href="https://www.instagram.com/gallegosjuanj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram fa-2xl"></i>
        </a>
      </nav>
    </nav>
  );
};

export default Navbar;
