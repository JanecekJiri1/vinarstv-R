import React, { useState } from "react";
import NavLinks from "./NavLinks";

import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

function NavigationMobile(props) {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="mobileNavigation">
      {open ? <IoIosClose className="burgerIcon" onClick={handleClick} /> : <FiMenu className="burgerIcon" onClick={handleClick} />}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}

export default NavigationMobile;
