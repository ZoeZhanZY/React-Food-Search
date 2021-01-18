import React, { useState } from "react";
import "./App.css";
import AppHead from "./components/AppHead/AppHead";
import SearchBox from "./components/SearchBox/SearchBox";
import SearchResultList from "./components/SearchResultList/SearchResultList";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="App">
      <div className="appContent">
        <AppHead brand="Food Search" />
        <SearchBox setRecipes={setRecipes} />
        <SearchResultList recipes={recipes} />
      </div>
    </div>
  );
};

export default App;
