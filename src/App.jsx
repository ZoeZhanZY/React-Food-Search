import React, { useState } from "react";
import "./App.css";
import AppHead from "./components/AppHead/AppHead";
import SearchBox from "./components/SearchBox/SearchBox";
import SearchResultList from "./components/SearchResultList/SearchResultList";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <>
      <AppHead brand="Food Search" />
      <SearchBox setRecipes={setRecipes} />
      <SearchResultList recipes={recipes} />
    </>
  );
};

export default App;
