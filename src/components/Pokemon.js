import React from "react";

const Pokemon = ({
  name,
  hp,
  attack,
  defense,
  sAttack,
  sDefense,
  speed,
  image,
  isLoading,
  error,
}) => {
  if (error) {
    return <h1 className="error">Pokemon Doesn't Exist.</h1>;
  } else if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  } else {
    return (
      <div className="pokemon-container">
        <div className="pokemon-info">
          <div className="main-info">
            <h1 className="pokemon-name">{name}</h1>
            <div className="stats">
              <h2>HP: {hp}</h2>
              <h2>Attack: {attack}</h2>
              <h2>Defense: {defense}</h2>
              <h2>Sp. Atk: {sAttack}</h2>
              <h2>Sp. Def: {sDefense}</h2>
              <h2>Speed: {speed}</h2>
            </div>
          </div>

          <img src={image} alt="fail" />
        </div>
      </div>
    );
  }
};

export default Pokemon;
