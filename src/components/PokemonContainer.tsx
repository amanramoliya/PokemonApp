import React from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "../Pokemon";

interface PokemonContainersInterface {
  pokemon: Pokemon;
  // handleclick: Function; // voidfunction
}
const PokemonContainer = (props: PokemonContainersInterface) => {
  const pokemon = props.pokemon;
  return (
    <div className="col">
      <div
        className=" card text-center"
        style={{
          // height: "18rem",
          width: "18rem",
          // margin: "10px",
        }}
        // onClick={() => props.handleclick()}
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          // className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <Link to="/details" state={pokemon}>
            {pokemon.name}
          </Link>
          <br />
          <Link to={`/details/${pokemon.name}`}>NameOrId</Link>
          {/* {pokemon.power && <p className="card-text">power: {pokemon.power}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default PokemonContainer;
