import React from "react";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe/Recipe";
import "./SearchResultList.css";

const SearchResultList = (props) => {
  const { recipes } = props;
  return (
    <div className="searchResultList">
      {/* .map is the array method to call every element one by one.  */}
      {recipes !== [] &&
        recipes.map((recipeRecord) => (
          <Recipe key={uuidv4()} recipeProp={recipeRecord} />
        ))}
    </div>
  );
};

export default SearchResultList;
