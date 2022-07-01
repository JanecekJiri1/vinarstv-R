import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavigationNormal from "./NavigationNormal";
import NavigationMobile from "./NavigationMobile";
import "./navigation.style.css";
import logo from "../../assets/logoRV.png";

function Navigation(props) {
  return (
    <nav className="navigation">
      <div className="leftSize">
        <Link to="/">
          <img className="logoRV" src={logo} alt="" />
          <h3>Richard</h3>
        </Link>
      </div>
      <NavigationNormal />
      <NavigationMobile />
    </nav>
  );
}

export default Navigation;

// import React, { useState } from "react";
// import "./navigation.style.css";
// import logo from "../../assets/logoRV.png";

// import NavLinks from "./NavLinks";

// import { Link } from "react-router-dom";
// import { FiMenu } from "react-icons/fi";
// import { IoIosClose } from "react-icons/io";

// function Navigation(props) {
//   const [myNav, setMyNav] = useState(false);
//   const handleClick = () => setMyNav(!myNav);

//   const handleClose = () => setMyNav(!myNav);
//   return (
//     <>
//       <nav className="navigation">
//         <div className="leftSize">
//           <Link to="/">
//             <img className="logoRV" src={logo} alt="" />
//             <h3>Richard</h3>
//           </Link>
//         </div>
//         <NavLinks />
//       </nav>
//     </>
//   );
// }

// export default Navigation;
