import React from "react";
import "./AppHead.css";
import FoodSearchLogo from "../../assets/images/FoodSearchLogo.svg";

const AppHead = (props) => {
  return (
    <div className="appHead">
      <div className="logo">
        <img src={FoodSearchLogo} />
      </div>
      <div className="brandTitle">{props.brand}</div>
    </div>
  );
};

export default AppHead;
