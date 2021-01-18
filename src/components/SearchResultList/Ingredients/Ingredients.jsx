import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Ingredients.css";

export const RecipeDetails = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    const { text, weight } = ingredient;

    return (
      <ul key={uuidv4()} className="ingredient-list">
        <li className="ingredient-text">{text}</li>
      </ul>
    );
  });
};

export default RecipeDetails;
