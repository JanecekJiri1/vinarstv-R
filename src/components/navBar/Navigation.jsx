import React from "react";
import { Link } from "react-router-dom";

import NavigationNormal from "./NavigationNormal";
import NavigationMobile from "./NavigationMobile";
import "./navigation.style.css";
import logo from "../../assets/logoRV.png";

// Main navigation page import to App.js
function Navigation(props) {
  return (
    <nav className="navigation">
      <Link className="logoAndNameNav" to="/">
        <img className="logoRV" src={logo} alt="Logo vinařství Vajčnér" />
        <h3>Richard</h3>
      </Link>

      <NavigationNormal />
      <NavigationMobile />
    </nav>
  );
}

export default Navigation;
