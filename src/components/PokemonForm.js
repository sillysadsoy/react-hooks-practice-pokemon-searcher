import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleAddition }) {
  const [addedPokemon, setAddedPokemon] = useState({name: '', hp: '', 
  sprites: { front: '', back: '' }});

  const { name, hp, sprites } = addedPokemon;
  const {front, back} = sprites

  function handleInput(e) {
    if(e.target.name === 'front' || e.target.name === 'back') {
      setAddedPokemon({...addedPokemon, sprites: {...sprites, [e.target.name]: e.target.value}})} else {
      setAddedPokemon({...addedPokemon, [e.target.name]: e.target.value})
    }
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => handleAddition(e, addedPokemon)}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={name} 
            onChange={e => handleInput(e)} 
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={hp} 
            onChange={e => handleInput(e)} 
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={front}
            onChange={e => handleInput(e)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={back}
            onChange={e => handleInput(e)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
