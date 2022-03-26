import { createSlice } from '@reduxjs/toolkit';

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: {
    pokemons: [],
  },
  reducers: {
    pokemonsAdded(state, action) {
      state.pokemons = action.payload;
    },
  },
});

export const { pokemonsAdded } = pokedexSlice.actions;

export default pokedexSlice.reducer;
