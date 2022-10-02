import React from "react";

const Pokemon = () => {
  return (
    <div className="pokemon-container">
      <div className="pokemon-info">
        <div className="main-info">
          <h1 className="pokemon-name">Name</h1>
          <div className="stats">
            <h2>HP</h2>
            <h2>Attack</h2>
            <h2>Defense</h2>
            <h2>Sp. Atk</h2>
            <h2>Sp. Def</h2>
            <h2>Speed</h2>
          </div>
        </div>

        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Pokemon;
