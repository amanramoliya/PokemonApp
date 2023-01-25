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
          width: "16rem",
          // margin: "10px",
        }}
        // onClick={() => props.handleclick()}
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          // className="card-img-top"
          height="140px"
          alt="..."
        />
        <div className="card-body">
          <Link to={`/details/${pokemon.name}`}>NameOrId</Link>
          <br />
          <button className="btn btn-info">
            <Link to={`/details/${pokemon.id}`}>{pokemon.name}</Link>
          </button>
          {/* {pokemon.power && <p className="card-text">power: {pokemon.power}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default PokemonContainer;
