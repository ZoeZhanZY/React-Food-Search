import React from "react";
import "./AppHead.css";
import FoodSearchLogo from "../../assets/images/FoodSearchLogo.svg";

const AppHead = (props) => {
  return (
    <div className="appHead">
      <div>
        <img className="logo" src={FoodSearchLogo} alt={props.brand} />
      </div>
      <div className="brandTitle">
        Food Sea<span className="letterSpace brandTitle">r</span>ch
      </div>
    </div>
  );
};

export default AppHead;
