import React from "react";
import "./wine.style.css";

import WineText from "./WineText";
import WineTextRed from "./WineTextRed";
import WineSceleton from "./WineSceleton";

const Wine = (props) => {
  const wineElement = WineText.map((wine) => {
    return <WineSceleton name={wine.name} price={wine.price} description={wine.description} />;
  });
  const redWine = WineTextRed.map((wine) => {
    return <WineSceleton name={wine.name} price={wine.price} description={wine.description} />;
  });

  return (
    <div className="container">
      <div className="wineContainer">
        <h2 className="wineNameHeader">Bílé víno</h2>
        {wineElement}
        {/* </div>
      <div className="wineContainer redContainer"> */}
        <h2 className="wineNameHeader">Červené víno</h2>
        {redWine}
        {redWine}
        {redWine}
        {redWine}
      </div>
    </div>
  );
};

export default Wine;
