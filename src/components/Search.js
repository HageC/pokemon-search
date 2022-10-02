import React from "react";

const Search = () => {
  return (
    <>
      <div className="search-container">
        <h1>Pokemon Search</h1>
      </div>
      <input
        className="search-input"
        type="text"
        placeholder="enter pokemon name"
      />

      <button className="search-button">Submit</button>
    </>
  );
};

export default Search;
