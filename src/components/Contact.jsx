import React from "react";
import { FaPhone, FaEnvelope, FaFacebookF } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

import "./contact.style.css";

// Contact page

function Contact(props) {
  return (
    <div className="contact">
      <div className="contacts">
        <div className="boxs">
          <div className="contact--title">
            <h2>Můžete nás kontaktovat</h2>
          </div>
          <span className="box">
            <FaPhone className="phone icon" />

            <a href="tel:+420703503660">+420 123 456 789</a>
          </span>
          <span className="box">
            <FaEnvelope className="email icon" />
            <a href="mailto:janec.jiri@email.cz">vinarstvivajcner@richard.cz</a>
          </span>
          <span className="box">
            <FaFacebookF className="facebook icon" />
            <p>Vinarstvi Straznice</p>
          </span>
          <span className="box">
            <ImLocation2 className="address icon" />
            <p> Strážnice U zkušebny 123</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
