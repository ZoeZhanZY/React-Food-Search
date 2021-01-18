import React, { useState } from "react";
import RecipeDetails from "../Ingredients/Ingredients";
import "./Recipe.css";

const Recipe = ({ recipeProp }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipeProp.recipe;

  console.log("image", image);
  return (
    <div className="recipe">
      <div className="recipeCover">
        <img src={image} alt={label} />
        <div onClick={() => setShow(!show)} className="label">
          <p className="foodName">{label}</p>
          <p className="ingredientsButton">Check the Ingredients ></p>
        </div>
      </div>

      <div className="ingredientsContainer">
        {show && <RecipeDetails ingredients={ingredients} />}
      </div>
      <a
        className="primaryButton recipeButton"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Check the Recipe
      </a>
    </div>
  );
};

export default Recipe;
