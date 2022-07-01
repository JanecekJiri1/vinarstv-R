import React, { useState } from "react";
import "./navigation.style.css";
import logo from "../assets/logoRV.png";

import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

function Navigation(props) {
  const [myNav, setMyNav] = useState(false);
  const handleClick = () => setMyNav(!myNav);

  const handleClose = () => setMyNav(!myNav);
  return (
    <>
      <nav className="navigation">
        <div className="leftSize">
          <Link to="/">
            <img className="logoRV" src={logo} alt="" />
            <h3>Richard</h3>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/Wine"> Naše Vína </Link>
          </li>
          <li>
            <Link to="/About"> O Nás </Link>
          </li>
          <li>
            <Link to="/Contact"> Kontakt </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
