import { Link } from "react-router-dom";
import { Pokemon } from "../Pokemon";

interface PokemonContainersInterface {
  pokemon: Pokemon;
  index: number;
  // handleclick: Function; // voidfunction
}
const PokemonContainer = (props: PokemonContainersInterface) => {
  const { pokemon, index } = props;

  return (
    <div className="col">
      <div
        className=" card text-center"
        style={{
          width: "16rem",
        }}
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            index + 1
          }.png`}
          height="140px"
          alt="..."
        />
        <div className="card-body">
          <Link to={`/details/${pokemon.name}`}>NameOrId</Link>
          <br />
          <button className="btn btn-info">
            <Link to={`/details/${index + 1}`}>{pokemon.name}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonContainer;
