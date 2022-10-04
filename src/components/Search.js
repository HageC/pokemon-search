import React, { useState } from "react";

const Search = ({ setQuery, error }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="search-container">
        <h1>Pokemon Search</h1>
      </div>
      <input
        className="search-input"
        type="text"
        placeholder="enter pokemon name"
        onChange={(e) => setValue(e.target.value)}
      />

      <button className="search-button" onClick={() => setQuery(value)}>
        Submit
      </button>
    </>
  );
};

export default Search;
