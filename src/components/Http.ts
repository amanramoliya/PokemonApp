import axios from "axios";
import { Pokemon } from "../Pokemon";

// const pokemons: Pokemon[] = [
//   {
//     id: 1,
//     name: "Pikachu",
//     power: 1,
//     color: "Yellow",
//   },

//   {
//     id: 2,
//     name: "Pikachu2",
//     color: "Grey",
//   },
// ];

export const fetchpokemons = async (): Promise<Pokemon[]> => {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=20"
  );

  const pokemons = data.results.map((pokemon: any, index: number) => {
    return {
      id: index + 1,
      name: pokemon.name,
      height: 0,
      weight: 0,
      types: [],
    };
  });
  return pokemons;
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(pokemons);
  //     // reject({ msg: "there is no pokemons" });
  //   }, 500);
  // });
};
