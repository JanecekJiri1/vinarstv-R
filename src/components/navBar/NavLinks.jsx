import React from "react";

import { Link } from "react-router-dom";

// Links use for Normal and Mobile Navigation

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
