import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "../Pokemon";

const usePokemonsAPI = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchPokemons = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then(({ data }) => {
        setPokemons(data.results);
        setError(null);
        setIsLoading(false);
      })
      .catch((erroe) => {
        setError(error);
        setIsLoading(false);
        setPokemons([]);
      });
  };
  useEffect(() => {
    fetchPokemons();
  }, []);
  return { pokemons, error, isLoading };
};

export default usePokemonsAPI;
