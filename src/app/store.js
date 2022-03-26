import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import pokedexReducer from '../features/pokedex/pokedexSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    pokedex: pokedexReducer,
  },
});
