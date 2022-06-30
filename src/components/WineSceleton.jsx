import React from "react";
import "./wine.style.css";

function WineSceleton(props) {
  return (
    <div className="whiteWine">
      {/* <h3>Bílé víno </h3> */}
      <div className="whiteWineList">
        <div className="topLine">
          <h4 className="nameOfWiteWine">{props.name}</h4>
          {/* <h4 className="price">{props.price} kč</h4> */}
        </div>
        <p className="wineDescription">{props.description}</p>
      </div>
      <hr />
    </div>
  );
}

export default WineSceleton;
