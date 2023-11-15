import React from "react";
import ContactInfo from "../components/ContactInfo";
import BookNow from "../components/BookNow";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>CONTACT</h1>
      <ContactInfo />
      <br></br>
      <div className="book-section">
        <BookNow />
      </div>
    </div>
  );
};

export default ContactPage;
