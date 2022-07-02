import React from "react";
import "./main.style.css";
import LogoRV from "../assets/logoRV.png";

// Default introduce page

const Main = () => {
  return (
    <main className="mainContext">
      <div className="nameAndLogoMain">
        <span className="logo">
          <img className="rvLogo normalLogo" src={LogoRV} alt="Velké logo vinařství Richard Vajčner " />
        </span>
        <span className="nameAndNote">
          <h1>
            <span className="vinarstvi"> Vinařství</span> <br />
            <span className="RVNAME"> Richard Vajčner</span>
          </h1>
          <h2>Vše začíná Vášní</h2>
        </span>
      </div>
    </main>
  );
};

export default Main;
