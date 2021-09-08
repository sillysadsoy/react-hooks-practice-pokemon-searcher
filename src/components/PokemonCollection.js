import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonArray }) {

  const pokemonCards = pokemonArray.map(pokemon => 
  <PokemonCard id={pokemon.id} key={pokemon.id} name={pokemon.name} hp={pokemon.hp} sprites={pokemon.sprites} /> );

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
