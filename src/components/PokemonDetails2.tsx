import React from "react";
import { useParams } from "react-router-dom";

const PokemonDetails2 = () => {
  const params = useParams();
  return <div>{params.nameOrid}</div>;
};

export default PokemonDetails2;
