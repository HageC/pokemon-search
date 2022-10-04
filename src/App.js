import Search from "./components/Search";
import Pokemon from "./components/Pokemon";
import { useEffect, useState } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("ditto");
  const [pokemonData, setPokemonData] = useState();
  const link = `https://pokeapi.co/api/v2/pokemon/${query}`;

  useEffect(() => {
    fetchData(link);
  }, [link]);

  const fetchData = async (query) => {
    setIsLoading(true);

    try {
      const response = await fetch(query);
      const data = await response.json();
      setPokemonData({
        name: data.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        sAttack: data.stats[3].base_stat,
        sDefense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
        image: data.sprites.front_default,
      });
      setError(false);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Search setQuery={setQuery} error={error} />
      <Pokemon {...pokemonData} isLoading={isLoading} error={error} />
    </>
  );
}

export default App;
