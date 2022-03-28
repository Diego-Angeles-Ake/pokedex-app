import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_POKEMONS } from './searchData';

let lastPokemons;

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: {
    pokemons: INITIAL_POKEMONS,
  },
  reducers: {
    pokemonsAdded(state, action) {
      state.pokemons = action.payload;
      lastPokemons = action.payload;
    },
    pokemonsSearch(state, action) {
      state.pokemons = lastPokemons || INITIAL_POKEMONS;
      state.pokemons = state.pokemons.filter((p) => {
        if (p.name) {
          return p.name.includes(action.payload);
        } else {
          return p.pokemon.name.includes(action.payload);
        }
      });
    },
  },
});

export const { pokemonsAdded, pokemonsSearch } = pokedexSlice.actions;

export default pokedexSlice.reducer;
