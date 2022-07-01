import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/logoRV.png";

function NavLinks(props) {
  return (
    <>
      <ul onClick={() => props.isMobile && props.closeMobileMenu()}>
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
    </>
  );
}

export default NavLinks;
