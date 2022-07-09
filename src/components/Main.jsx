import React from "react";
import "./main.style.css";

// Default introduce page

const Main = () => {
  return (
    <main className="mainContext">
      <div className="nameAndLogoMain">
        <span className="logo">
          <h2 className="rvLogo normalLogo">RV</h2>
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
