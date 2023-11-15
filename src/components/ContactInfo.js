import React from "react";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p>7602 N. Jupiter Rd Ste 111</p>
      <p>Garland, TX 75044</p>
      <br></br>
      <p>(469) 298-2271</p>
      <p>(310) 872-9872</p>
      <br></br>
      <p>Check us out on Instagram:</p>
      <br></br>
      <a
        href="https://www.instagram.com/gallegosjuanj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-instagram fa-2xl"></i>
      </a>
    </div>
  );
};

export default ContactInfo;
