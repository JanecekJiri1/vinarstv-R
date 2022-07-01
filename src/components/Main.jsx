import React from "react";
import "./main.style.css";
import LogoRV from "../assets/logoRV.png";

const Main = () => {
  return (
    <main className="mainContext">
      <div className="nameAndLogo">
        <span className="logo">
          <img className="rvLogo" src={LogoRV} alt="" />
        </span>
        <span className="Name">
          <h1>
            Vinařství <br />
            Richard Vajčner
          </h1>
          <span className="logo smScrean">
            <img className="rvLogo" src={LogoRV} alt="" />
          </span>
          <h2>Vše začíná Vášní</h2>
        </span>
      </div>
    </main>
  );
};

export default Main;
