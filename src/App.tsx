import { useContext } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import PokemonContainer from "./components/PokemonContainer";
import usePokemonsAPI from "./hooks/usePokemonsAPI";
import Routercontext, { Color } from "./Routercontext";

function App() {
  const { pokemons, isLoading, error } = usePokemonsAPI();

  const { mode, setMode } = useContext(Routercontext);

  return (
    <>
      <div
        className="row row-col-3 row-col-lg-5 row-col-md-2 "
        style={{ backgroundColor: `${Color[mode]}` }}
      >
        {pokemons.length > 0 ? (
          pokemons.map((pokemon, index_) => {
            return (
              <PokemonContainer
                key={index_}
                pokemon={pokemon}
                index={index_}
              ></PokemonContainer>
            );
          })
        ) : isLoading ? (
          <div className="spinner-border text-info text-center" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>{error}</div>
        )}
        <Link to="/about">About Us</Link>
      </div>
    </>
  );
}

export default App;
