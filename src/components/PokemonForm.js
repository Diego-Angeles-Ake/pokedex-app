import React, { useState } from 'react';
import styles from './PokemonForm.module.css';

import { useDispatch } from 'react-redux';
import { pokemonsAdded } from '../features/pokedex/pokedexSlice';

import axios from 'axios';

export default function PokemonForm() {
  const [pokemon, setPokemon] = useState('');
  const [pokemonType, setPokemonType] = useState('');

  const dispatch = useDispatch();

  const handlePokemon = (e) => {
    console.dir(e);
  };
  const handlePokemonType = (e) => {
    setPokemonType(e.target.value);
    if (
      e.target.value === 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126'
    ) {
      axios.get(e.target.value).then((res) => {
        console.dir(res.data.results);
        dispatch(pokemonsAdded(res.data.results));
      });
    } else {
      axios.get(e.target.value).then((res) => {
        console.dir(res.data.pokemon);
        dispatch(pokemonsAdded(res.data.pokemon));
      });
    }
  };

  return (
    <div className={styles['pokemon']}>
      <form>
        <input
          type='text'
          placeholder='Busca un pokemón'
          value={pokemon}
          onChange={handlePokemon}
        />
        <button>Comenzar</button>
      </form>

      <select id='pokemon-type' onChange={handlePokemonType}>
        <option value='https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126'>
          Todos los pokemones
        </option>
        <option value='https://pokeapi.co/api/v2/type/normal'>Normal</option>
        <option value='https://pokeapi.co/api/v2/type/fighting'>Lucha</option>
        <option value='https://pokeapi.co/api/v2/type/flying'>Volador</option>
        <option value='https://pokeapi.co/api/v2/type/poison'>Veneno</option>
        <option value='https://pokeapi.co/api/v2/type/ground'>Tierra</option>
        <option value='https://pokeapi.co/api/v2/type/rock'>Roca</option>
        <option value='https://pokeapi.co/api/v2/type/bug'>Bicho</option>
        <option value='https://pokeapi.co/api/v2/type/ghost'>Fantasma</option>
        <option value='https://pokeapi.co/api/v2/type/steel'>Acero</option>
        <option value='https://pokeapi.co/api/v2/type/fire'>Fuego</option>
        <option value='https://pokeapi.co/api/v2/type/water'>Agua</option>
        <option value='https://pokeapi.co/api/v2/type/grass'>Planta</option>
        <option value='https://pokeapi.co/api/v2/type/electric'>
          Eléctrico
        </option>
        <option value='https://pokeapi.co/api/v2/type/psychic'>Psíquico</option>
        <option value='https://pokeapi.co/api/v2/type/ice'>Hielo</option>
        <option value='https://pokeapi.co/api/v2/type/dragon'>Dragón</option>
        <option value='https://pokeapi.co/api/v2/type/dark'>Siniestro</option>
        <option value='https://pokeapi.co/api/v2/type/fairy'>Hada</option>
      </select>
    </div>
  );
}
