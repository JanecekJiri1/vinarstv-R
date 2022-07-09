import React from "react";
import { Link } from "react-router-dom";

import NavigationNormal from "./NavigationNormal";
import NavigationMobile from "./NavigationMobile";
import "./navigation.style.css";

// Main navigation page import to App.js
function Navigation(props) {
  return (
    <nav className="navigation">
      <Link className="logoAndNameNav" to="/">
        <h2 className="logoRV">RV</h2>
        <h3>Richard</h3>
      </Link>

      <NavigationNormal />
      <NavigationMobile />
    </nav>
  );
}

export default Navigation;
