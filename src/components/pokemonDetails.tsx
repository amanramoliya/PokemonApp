import { useLocation } from "react-router-dom";

// import { Pokemon } from "../Pokemon";

// interface PokemonDetailsInterface {
//   pokemon: Pokemon;
// }

const PokemonDetails = () => {
  // const pokemon = props.pokemon;
  const pokemonstate = useLocation();
  const pokemon = pokemonstate.state;

  return (
    <>
      <div>
        <p>Name: {pokemon.name}</p>
        {/* <p>Power: {pokemon.power ?? 0}</p>
        <p>Color: {pokemon.color}</p> */}
      </div>
    </>
  );
};

export default PokemonDetails;
