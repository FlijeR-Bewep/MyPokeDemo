import './App.css';
import { useState } from 'react';
import Pokemon from './components/Pokemon/Pokemon';
import Pokemons from './components/Pokemons/Pokemons';

function App() {
  const [pokemon, updatePokemon] = useState({})

  return (
    <div className="App">
      <Pokemons updatePokemon={updatePokemon} />   
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
