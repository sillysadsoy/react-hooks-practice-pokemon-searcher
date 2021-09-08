import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [searchInput, setSearchInput] = useState('');


  function fetchLoadUP() {
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(pokeArray => setPokemonArray(pokeArray))
  };

  useEffect(() => { fetchLoadUP() }, []);

  function handleSearch(e) {
    setSearchInput(e.target.value);
    const searchArray = pokemonArray.filter(pokemon => pokemon.name.includes(searchInput))
    if(e.target.value.length > 0){setPokemonArray(searchArray)}
    else{fetchLoadUP()};
  };

  function handleAddition(e, obj) {
    e.preventDefault();
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    })
    fetchLoadUP()
    console.log(obj)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddition={handleAddition} />
      <br />
      <Search searchInput={searchInput} handleSearch={handleSearch} />
      <br />
      <PokemonCollection pokemonArray={pokemonArray} />
    </Container>
  );
}

export default PokemonPage;
