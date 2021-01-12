import React, { useState } from "react";
import Axios from "axios";

import Alert from "../Alert/Alert";

const SearchBox = (props) => {
  const [query, setQuery] = useState("");

  const [alert, setAlert] = useState("");

  const APP_ID = "d111fa79";
  const APP_KEY = "dc888c080f07052421c2cb194860818d";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // async/await
  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      {
        props.setRecipes(result.data.hits);
      }
      setAlert("");
      setQuery("");
    } else {
      setAlert("Please fill the form");
    }
  };

  // setQuery to the value when the event(onChange) happens
  const onChange = (event) => {
    setQuery(event.target.value);
  };

  const onSubmit = (event) => {
    // this prevent the page refresh
    event.preventDefault();

    getData();
  };
  return (
    <div>
      {/* trigger {onSubmit} when the event onSubmit happen */}

      <form action="" className="search-form" onSubmit={onSubmit}>
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          placeholder="Search Food"
          autoComplete="off"
          // trigger {onChange} when the event onChange happen
          onChange={onChange}
          // {query} initially equal to "", and then updated by {setQuery}
          value={query}
        />

        <input type="submit" value="search" />
      </form>
    </div>
  );
};

export default SearchBox;
