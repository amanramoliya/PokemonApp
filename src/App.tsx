import "./App.css";
import PokemonContainer from "./components/PokemonContainer";
// import { pokemons } from "./Pokemon";
import { useState, useEffect } from "react";
import { fetchpokemons } from "./components/Http";
import { Pokemon } from "./Pokemon";
import { Link } from "react-router-dom";

function App() {
  // const [index, setIndex] = useState(0);

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // const showDetails = (id: number) => {
  //   setIndex(id);
  // };

  const fetchpokemonsawai = async () => {
    try {
      const result = await fetchpokemons();
      setPokemons(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchpokemonsawai();

    // fetchpokemons()
    //   .then((data) => {
    //     setPokemons(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  return (
    <>
      <div className="row row-col-3 row-col-lg-5 row-col-md-2 ">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon, index_) => {
            return (
              // <PokemonContainer
              //   key={index_}
              //   pokemon={pokemon}
              //   handleclick={() => showDetails(pokemon.id - 1)}
              // ></PokemonContainer>

              // <div className="container">
              <PokemonContainer
                key={index_}
                pokemon={pokemon}
              ></PokemonContainer>
            );
          })
        ) : (
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <Link to="/about">About Us</Link>
      </div>
    </>
  );
}

export default App;
