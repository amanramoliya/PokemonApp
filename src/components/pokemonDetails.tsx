import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Pokemon } from "../Pokemon";
import { fetchpokemon } from "./Http";

// import { Pokemon } from "../Pokemon";

// interface PokemonDetailsInterface {
//   pokemon: Pokemon;
// }

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const { nameOrid } = useParams();
  const fetchpok = async () => {
    const _pokemon = await fetchpokemon(nameOrid);
    setPokemon(_pokemon);
  };

  useEffect(() => {
    fetchpok();
  }, []);
  // const pokemon = props.pokemon;
  // const pokemonstate = useLocation();
  // const pokemon = pokemonstate.state;

  return (
    <>
      <div className="text-center">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`}
          alt="..."
        ></img>
        <h2>{pokemon?.name}</h2>
        <p>Weight: {pokemon?.weight}</p>
        <p>Height: {pokemon?.height}</p>
        <div>
          Types:
          {pokemon?.types.map((ptype: string) => {
            return <span className="badge bg-info text-dark">{ptype}</span>;
          })}
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
